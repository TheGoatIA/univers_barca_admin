> **ADM-FND-22** · Infrastructure · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`docker/nginx.conf` sert la SPA (build Vite) sur 8080 derrière un reverse proxy, proxifie `/api/` vers `API_UPSTREAM`, expose `/healthz` et pose des en-têtes de sécurité au niveau du `server`. En nginx, un `add_header` défini dans un bloc `location` **remplace** tous ceux hérités du niveau supérieur : `location /assets/` et surtout `location = /index.html` (page servie par `try_files … /index.html`) n'héritent donc plus de la CSP, de `X-Frame-Options` ni de `Referrer-Policy`. Le CDC Admin §8.2 décrit un conteneur Nginx léger avec terminaison TLS au reverse proxy.

## ✅ Objectif

Corriger l'héritage des en-têtes et finaliser la configuration d'exploitation (cache, limites, sondes, journaux).

## 📐 Règles de gestion

- En-têtes de sécurité factorisés dans `docker/security-headers.conf` et inclus (`include`) dans **chaque** `location` qui définit un `add_header` (assets, `index.html`, `theme-init.js`, `version.json`, fallback SPA) ; un test d'intégration vérifie la présence de la CSP sur `/`, `/joueurs/abc` (fallback), `/assets/*.js` et `/healthz`.
- Cache : `/assets/*` fingerprintés `public, max-age=31536000, immutable` ; `index.html`, `theme-init.js` et `version.json` : `no-store` ; polices `immutable` ; `gzip on` (niveau 5, `gzip_vary`, `gzip_min_length 1024`, types JS/CSS/JSON/SVG/WOFF2 exclus car déjà compressés) ; `server_tokens off`.
- Proxy API : `proxy_read_timeout 120s` et `proxy_send_timeout 120s` pour les exports/imports, `client_max_body_size 6m` pour `/api/v1/admin/media` (photos 5 Mo) et 3 m pour les imports CSV (2 Mo) via locations dédiées ; passage de `X-Request-Id` (généré par nginx si absent), `X-Forwarded-*` conservés ; `/api/` jamais mis en cache.
- Erreurs : un chemin `/api/*` ou `/assets/*` inexistant renvoie 404 (pas le `index.html` de repli) ; page d'erreur 502/504 statique en français « Service momentanément indisponible » sans fuite d'information.
- Image : build multi-stage existant (Node 22 → `nginx-unprivileged`), utilisateur non-root, système de fichiers en lecture seule dans le compose (déjà présent), `HEALTHCHECK` existant ; ajout d'étiquettes OCI (`org.opencontainers.image.version`, `revision`, `source`), `.dockerignore` revu (exclut `docs/maquettes`, `coverage`, `playwright-report`).
- Journaux : format JSON (`log_format json`) avec `request_id`, `status`, `request_time`, `upstream_response_time`, sans IP complète en clair (dernier octet masqué) ni en-têtes `Cookie`/`Authorization`.

## 🛠️ Tâches

- [ ] Créer `docker/security-headers.conf` (CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP) et refactorer `docker/nginx.conf` pour l'inclure dans chaque `location`.
- [ ] Ajouter les locations dédiées (upload, import, exports) avec limites de corps et timeouts.
- [ ] Ajouter `location ~ ^/(api|assets)/` 404 sans fallback SPA et la page `502.html`.
- [ ] Ajouter `log_format json` et `map $http_x_request_id $req_id` (génération si absent).
- [ ] Mettre à jour le `Dockerfile` : `ARG VERSION`/`REVISION`, étiquettes OCI, copie de `security-headers.conf`.
- [ ] Revoir `.dockerignore` et mesurer la taille de l'image (cible < 40 Mo).
- [ ] Ajouter à la CI un test `nginx -t` et un test d'intégration (`docker run` + `curl -I` sur 4 chemins) dans le job `docker-build`.
- [ ] Documenter la configuration dans `docs/DEPLOYMENT.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné `GET /joueurs/abc` (fallback SPA), quand la réponse arrive, alors elle contient la CSP et `X-Frame-Options: DENY`.
- [ ] Étant donné `GET /assets/index-abc.js`, quand la réponse arrive, alors `Cache-Control` vaut `public, max-age=31536000, immutable` et la CSP est présente.
- [ ] Étant donné `GET /api/inconnu` sans API, quand nginx répond, alors le statut est 404/502 JSON et jamais le `index.html`.
- [ ] Étant donné un envoi de 7 Mo vers l'upload, quand il atteint nginx, alors la réponse est 413 avant l'API.
- [ ] Étant donné `nginx -t`, quand la CI s'exécute, alors la configuration est valide.

## 🧪 Tests à écrire

- [ ] Test d'intégration CI : en-têtes sur 4 chemins.
- [ ] `nginx -t` dans le job docker-build.
- [ ] Test de 413 (corps trop gros).
- [ ] Test du format de journal JSON (champ `request_id`).
- [ ] Scan Trivy de l'image (existant) conservé.

## 📚 Références

- CDC Admin §8.2, §6.2
- docker/nginx.conf

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
