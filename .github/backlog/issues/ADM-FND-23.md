> **ADM-FND-23** · Sécurité · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

La CSP actuelle de `docker/nginx.conf` (`default-src 'self'` + `style-src 'self' 'unsafe-inline'` + `connect-src 'self'` + `img-src 'self' data: blob: https:`) est un bon départ ; WA `sec-csrf-csp-headers` couvre le socle (CSRF, ESLint `react/no-danger`, en-têtes). Le CDC Admin §6.2 exige l'échappement du contenu communautaire affiché en modération (XSS) et la protection des routes ; le contenu signalé (messages, images, pseudonymes) est non fiable. Il faut une CSP resserrée, observable avant d'être imposée.

## ✅ Objectif

Resserrer la CSP, la déployer d'abord en Report-Only avec collecte des violations, puis la faire respecter.

## 📐 Règles de gestion

- Politique cible : `default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' data: blob: <domaine médias>; font-src 'self'; style-src 'self'; style-src-attr 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'; object-src 'none'; manifest-src 'self'; upgrade-insecure-requests` ; le jeton `https:` générique pour `img-src` est remplacé par le domaine précis des médias (variable `MEDIA_ORIGIN`).
- Styles : vérifier les bibliothèques qui injectent des balises `<style>` (Sonner, Radix, Recharts) ; si elles l'exigent, utiliser un **nonce** généré par nginx (`$request_id`) injecté dans `index.html` (`sub_filter`) plutôt que `'unsafe-inline'` global ; `style-src-attr` autorisé seulement pour les styles en ligne de `framer-motion`.
- Déploiement en deux temps : 2 semaines en `Content-Security-Policy-Report-Only` avec `report-to csp` / `Reporting-Endpoints: csp="/api/v1/csp-report"`, puis bascule en mode bloquant quand le taux de violations « légitimes » est nul ; l'endpoint de rapport (à créer côté API) est limité (10 Ko, 60 requêtes/min/IP) et ne stocke ni URL complète avec paramètres sensibles ni données personnelles.
- En-têtes complémentaires : `Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Resource-Policy: same-origin`, `X-Permitted-Cross-Domain-Policies: none`, `Strict-Transport-Security: max-age=31536000; includeSubDomains` (production, posé au reverse proxy TLS), `Permissions-Policy` existant conservé.
- Contenu non fiable : les images de contenus signalés (wallpapers, avatars) sont servies depuis `MEDIA_ORIGIN` uniquement, floutées côté client ; aucun `iframe`, aucun `<object>` ; les liens externes présents dans le contenu utilisateur ne sont jamais rendus cliquables en modération.
- Aucune violation CSP ne doit apparaître en console lors des parcours E2E principaux (test bloquant).

## 🛠️ Tâches

- [ ] Définir la CSP cible dans `docker/security-headers.conf` avec variables d'environnement (`API_ORIGIN`, `MEDIA_ORIGIN`).
- [ ] Ajouter l'en-tête `Reporting-Endpoints` et le mode Report-Only paramétrable (`CSP_MODE=report-only|enforce`).
- [ ] Implémenter l'injection de nonce (`sub_filter` + `$request_id`) si nécessaire et vérifier Sonner/Recharts.
- [ ] Écrire le test Playwright `tests/e2e/csp.spec.ts` (écoute `page.on('console')` et `securitypolicyviolation`, parcours des routes de référence).
- [ ] Documenter dans `docs/SECURITY.md` la politique, la procédure de bascule et la lecture des rapports.
- [ ] Lister dans l'issue API la route `/api/v1/csp-report` (à créer) avec ses limites.
- [ ] Ajouter les en-têtes COOP/CORP et vérifier l'absence de régression (téléversement d'images, polices).
- [ ] Vérifier la CSP avec l'outil d'évaluation (csp-evaluator) dans la CI.

## ✔️ Critères d'acceptation

- [ ] Étant donné la politique en mode enforce, quand un script inline est injecté, alors le navigateur le bloque et un événement `securitypolicyviolation` est émis.
- [ ] Étant donné les parcours E2E principaux, quand ils s'exécutent, alors aucune violation CSP n'apparaît en console.
- [ ] Étant donné le mode Report-Only, quand une violation survient, alors un rapport arrive sur `/api/v1/csp-report` sans donnée personnelle.
- [ ] Étant donné une image hébergée sur un domaine non listé, quand elle est chargée, alors elle est bloquée.
- [ ] Étant donné la production, quand une réponse est reçue, alors `Strict-Transport-Security` est présent.

## 🧪 Tests à écrire

- [ ] csp.spec.ts : zéro violation sur les routes de référence.
- [ ] Test d'en-têtes (curl) sur 4 chemins.
- [ ] Test de l'injection de nonce (HTML contient le nonce de l'en-tête).
- [ ] Évaluation csp-evaluator (CI).
- [ ] Test de charge du endpoint de rapport (limites).

## 📚 Références

- CDC Admin §6.2
- WA sec-csrf-csp-headers
- docker/nginx.conf

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
