> **ADM-WI-05** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

CDC §3.3 : l'invité reçoit un lien à usage unique, définit son mot de passe puis configure le TOTP s'il est super-admin ; une visite guidée légère peut s'afficher aux premières connexions. L'API a déjà /admin/auth/2fa/setup et /2fa/confirm.

## ✅ Objectif

Livrer les pages publiques d'activation côté admin.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-02` — Inviter un administrateur
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_light.webp?raw=true' width='330' alt='WI-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_dark.webp?raw=true' width='330' alt='WI-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_light.webp?raw=true' width='330' alt='WI-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_dark.webp?raw=true' width='330' alt='WI-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comptes administrateurs » · « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins » · « Inviter un administrateur » · « Administrateur » · « Rôle » · « Statut » · « 2FA » · « Dernière activité » · « Actions » · « camille.durand@univers-barca.app » · « Actif »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-04%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- Route publique /activation?token=… ; jeton invalide/expiré/déjà utilisé : page d'erreur « Lien expiré, demandez une nouvelle invitation ».
- Mot de passe : ≥ 12 caractères, majuscule, minuscule, chiffre, symbole ; jauge de robustesse ; confirmation identique.
- Super-admin : enchaînement obligatoire QR code TOTP → saisie du code à 6 chiffres (pavé numérique) → codes de secours.
- Après activation : redirection vers le tableau de bord adapté au rôle ; tooltips de prise en main au premier login (désactivables).
- Session admin : expiration après 8 h d'inactivité (§6.1).

## 🔄 Comportement et états

- Étape non terminée (2FA) : le super-admin ne peut pas accéder à l'app.
- Erreurs réseau : réessai sans perdre la saisie.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/auth/activate` | (à créer) définit le mot de passe depuis le jeton d'invitation | {token,password} | {data:{requires2fa:boolean}} |

## 🛠️ Tâches

- [ ] Créer `features/auth/pages/ActivationPage.tsx` et `SetPasswordForm.tsx`.
- [ ] Composant `PasswordStrengthMeter`.
- [ ] Étape `TotpEnrollmentStep` réutilisant `/admin/auth/2fa/setup` et `/confirm`.
- [ ] API `POST /admin/auth/activate` (à créer côté API) dans auth.api.ts.
- [ ] Composant `WelcomeTour` (Radix Popover, flag localStorage `ub-tour-done`).
- [ ] Tests pour jeton invalide/expiré.

## ✔️ Critères d'acceptation

- [ ] Étant donné un jeton valide, quand je définis un mot de passe conforme, alors le compte passe Actif.
- [ ] Étant donné un jeton déjà utilisé, alors la page d'erreur est affichée.
- [ ] Étant donné un super-admin, alors l'écran 2FA est obligatoire avant l'accès.
- [ ] Étant donné un mot de passe faible, alors le bouton reste désactivé et la raison est indiquée.

## 🧪 Tests à écrire

- [ ] Test unitaire : règles mot de passe
- [ ] Test composant : jauge de robustesse
- [ ] Test page : jeton expiré
- [ ] E2E : invitation → activation → connexion
- [ ] Test : visite guidée ne s'affiche qu'une fois

## ♿ Accessibilité et i18n

- Champ code 6 chiffres inputMode=numeric, autocomplete=one-time-code

## 🔗 Dépendances

À réaliser après : `ADM-WI-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.3, §6.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
