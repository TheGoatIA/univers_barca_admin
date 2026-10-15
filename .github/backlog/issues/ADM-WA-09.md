> **ADM-WA-09** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Un super-admin crée un compte et l'API envoie un e-mail avec un lien à usage unique valable 48 h. WA-05 « Bienvenue dans l'équipe » permet au nouvel administrateur de définir son mot de passe (jamais transmis en clair).

## ✅ Objectif

Implémenter l'écran d'activation de compte accessible par `/invitation/:token` avec gestion des liens expirés ou déjà utilisés.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-05` — Première connexion — définir le mot de passe
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true' width='330' alt='WA-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true' width='330' alt='WA-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true' width='330' alt='WA-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true' width='330' alt='WA-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Bienvenue dans l’équipe » · « Léa, définis ton mot de passe pour activer ton compte Content-manager. » · « Lien d’invitation à usage unique · valable 48 h » · « Nouveau mot de passe » · « •••••••••••••• » · « Confirmation » · « 12 caractères minimum » · « Majuscule, chiffre et symbole » · « Activer mon compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-08%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-01%5D%22) · [API-AUTH-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-03%5D%22) · [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [API-AUTH-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-35%5D%22) · [API-AUTH-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-36%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22)

## 📐 Règles de gestion

- Titre « Bienvenue dans l'équipe », texte personnalisé « Léa, définis ton mot de passe pour activer ton compte Content-manager. » (prénom et libellé du rôle fournis par la validation du jeton).
- Encart info bleu « Lien d'invitation à usage unique · valable 48 h ».
- Champs Nouveau mot de passe + Confirmation (cf. fn-password-strength), bouton « Activer mon compte ».
- Après activation : si rôle super-admin → `/2fa/configuration` (WA-06) ; sinon connexion automatique et tableau de bord avec visite guidée légère (CDC §3.3 étape 4).

## 🔄 Comportement et états

- Au chargement, `GET /admin/auth/invitations/:token` valide le jeton (statut `invited`, `inviteExpiresAt` non dépassé) et renvoie `{ firstName, role, email }`.
- Jeton expiré (> 48 h) : écran « Lien expiré » + « Demande une nouvelle invitation à un super-admin ». Jeton déjà consommé : « Ce lien a déjà été utilisé » + lien vers `/login`.
- Le jeton est supprimé de l'URL (`history.replaceState`) après lecture pour éviter la fuite via Referer.
- Le mot de passe n'est jamais journalisé et la requête ne passe pas par l'audit en clair.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/auth/invitations/:token` | Valide un jeton d'invitation (48 h, usage unique) | — | { success:true, data:{ firstName, email, role, expiresAt } } |
| `POST` | `/api/v1/admin/auth/accept-invite` | Définit le mot de passe et active le compte | { token, password } | { success:true, data:{ admin, accessToken, requires2fa } } |

## 🗄️ Données

- AdminUser.status : invited → active
- AdminUser.inviteTokenHash / inviteExpiresAt consommés

## 🛠️ Tâches

- [ ] Créer `src/pages/auth/AcceptInvitePage.tsx` et la route `/invitation/:token`.
- [ ] Créer `useInvitation(token)` (useQuery, `retry: false`, `staleTime: Infinity`) et `useAcceptInvite`.
- [ ] Ajouter `invitationsApi.validate(token)` dans `auth.api.ts`.
- [ ] Composer avec `PasswordField` + `PasswordRules` + `PasswordStrengthMeter`.
- [ ] Créer les états `InviteExpiredView` et `InviteUsedView` via `AuthNotice`.
- [ ] Ajouter `<meta name="referrer" content="no-referrer">` pour cette route.
- [ ] Redirections selon le rôle et drapeau `firstLogin` dans `authStore`.
- [ ] Tests unitaires et E2E.

## ✔️ Critères d'acceptation

- [ ] Étant donné un jeton valide pour Léa (content-manager), quand j'ouvre le lien, alors « Léa, définis ton mot de passe pour activer ton compte Content-manager. » s'affiche.
- [ ] Étant donné un mot de passe conforme et une confirmation identique, quand je clique sur « Activer mon compte », alors la session est ouverte et je suis redirigé vers `/`.
- [ ] Étant donné un jeton expiré, quand j'ouvre le lien, alors l'écran « Lien expiré » s'affiche sans formulaire.
- [ ] Étant donné un super-admin invité, quand j'active le compte, alors j'arrive sur la configuration 2FA.
- [ ] Étant donné l'activation réussie, quand je rouvre le même lien, alors « Ce lien a déjà été utilisé » s'affiche.

## 🧪 Tests à écrire

- [ ] AcceptInvitePage.test.tsx : jeton valide / expiré / utilisé
- [ ] AcceptInvitePage.test.tsx : soumission bloquée si mot de passe faible
- [ ] AcceptInvitePage.test.tsx : redirection selon rôle
- [ ] Playwright invite.spec.ts : parcours d'invitation complet

## ♿ Accessibilité et i18n

- Libellés « Nouveau mot de passe », « Confirmation », « Activer mon compte »

## 🔗 Dépendances

À réaliser après : `ADM-WA-08` · `ADM-WA-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.2
- CDC Admin §3.3
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
