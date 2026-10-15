> **ADM-WA-17** · Sécurité · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC §6.2 liste CSRF (jetons + SameSite=Strict/Secure), XSS (jamais de `dangerouslySetInnerHTML` sur contenu non sanitisé) et accès réseau restreint. Rien n'est encore en place côté SPA/nginx pour ces mesures.

## ✅ Objectif

Appliquer les protections côté admin (jeton CSRF sur les mutations, en-têtes de sécurité nginx, règle ESLint anti-XSS) en cohérence avec l'API.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-01` — Connexion administrateur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true' width='330' alt='WA-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true' width='330' alt='WA-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true' width='330' alt='WA-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true' width='330' alt='WA-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••••••• » · « Rester connecté 8 h » · « Mot de passe oublié ? » · « Se connecter » · « Authentification à deux facteurs requise pour les super-admins. »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-03%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22)

#### `WA-07` — Session expirée — inactivité
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true' width='330' alt='WA-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true' width='330' alt='WA-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true' width='330' alt='WA-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true' width='330' alt='WA-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Session expirée » · « Tu as été déconnecté(e) après 8 h d’inactivité. Ton travail non enregistré n’a pas été perdu : il sera restauré. » · « E-mail » · « camille.durand@univers-barca.app » · « Mot de passe » · « Se reconnecter »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-11%5D%22) · [ADM-WA-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-12%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22)

## 📐 Règles de gestion

- Jeton CSRF : récupéré par `GET /admin/auth/csrf` après connexion, renvoyé dans l'en-tête `X-CSRF-Token` sur POST/PUT/PATCH/DELETE ; rotation à chaque refresh.
- Cookie de refresh : `HttpOnly; Secure; SameSite=Strict; Path=/api/v1/admin/auth`.
- En-têtes nginx (`docker/nginx.conf`) : `Content-Security-Policy: default-src 'self'; img-src 'self' data: https://<cdn médias>; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, `Permissions-Policy` restrictive, HSTS.
- Lint : règle `react/no-danger` en erreur ; tout contenu utilisateur est rendu en texte.

## 🔄 Comportement et états

- Un 403 `CSRF_INVALID` déclenche un unique rechargement du jeton puis rejoue la requête.
- Le jeton CSRF n'est jamais persisté (mémoire).
- La CSP est testée en staging avant production (mode `Report-Only` une semaine).

## 🛠️ Tâches

- [ ] Ajouter `csrfToken` à `authStore` et l'envoyer via l'intercepteur de requête `src/lib/axios.ts`.
- [ ] Ajouter `authApi.csrf()` et l'appeler après login/refresh.
- [ ] Mettre à jour `docker/nginx.conf` (en-têtes, cache des assets fingerprintés).
- [ ] Activer `react/no-danger` dans `eslint.config.js`.
- [ ] Test Playwright vérifiant les en-têtes de réponse (`request.get('/')`).
- [ ] Documenter dans `docs/DEPLOYMENT.md` la liste blanche IP/VPN (`ADMIN_IP_WHITELIST`, Traefik).

## ✔️ Critères d'acceptation

- [ ] Étant donné une mutation POST, quand elle est émise, alors l'en-tête `X-CSRF-Token` est présent.
- [ ] Étant donné une réponse 403 CSRF_INVALID, quand elle survient, alors le jeton est rechargé et la requête rejouée une seule fois.
- [ ] Étant donné la page servie par nginx, quand on lit les en-têtes, alors CSP, nosniff et Referrer-Policy sont présents.
- [ ] Étant donné du code utilisant `dangerouslySetInnerHTML`, quand ESLint s'exécute, alors il échoue.

## 🧪 Tests à écrire

- [ ] axios.test.ts : en-tête CSRF sur mutations uniquement
- [ ] axios.test.ts : rejeu unique sur CSRF_INVALID
- [ ] Playwright headers.spec.ts : CSP et nosniff
- [ ] eslint : fixture no-danger

## 🔗 Dépendances

À réaliser après : `ADM-WA-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.2
- CDC Admin §8.2
- CDC Backend §5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
