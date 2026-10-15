> **ADM-WI-09** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Modale « Désactiver le compte de Paul Henry ? » : « L'accès est coupé immédiatement. Le compte et la traçabilité de ses actions passées sont conservés. » avec encart « Pour une suppression définitive (cas exceptionnel), une confirmation renforcée est demandée. » et boutons Annuler / Désactiver (CDC §3.2).

## ✅ Objectif

Couper l'accès sans perdre la traçabilité, et encadrer la suppression définitive.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-04` — Désactiver un compte administrateur
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__desktop_light.webp?raw=true' width='330' alt='WI-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__desktop_dark.webp?raw=true' width='330' alt='WI-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__tablet_light.webp?raw=true' width='330' alt='WI-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-04_desactiver-un-compte-administrateur__tablet_dark.webp?raw=true' width='330' alt='WI-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comptes administrateurs » · « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins » · « Inviter un administrateur » · « Administrateur » · « Rôle » · « Statut » · « 2FA » · « Dernière activité » · « Actions » · « camille.durand@univers-barca.app » · « Actif »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- Désactivation : PATCH /admin/accounts/:id {status:'disabled'} ; sessions révoquées immédiatement ; compte conservé (audit).
- Réactivation possible depuis le menu ⋮.
- Suppression définitive (DELETE) : confirmation renforcée — saisir l'e-mail du compte + justification obligatoire ≥ 10 caractères ; réservée aux cas exceptionnels.
- Interdit : désactiver/supprimer son propre compte ou le dernier super-admin.
- Audit : ADMIN_DISABLED, ADMIN_REACTIVATED, ADMIN_DELETED.

## 🔄 Comportement et états

- Désactivation : bouton danger, spinner, toast « Compte de Paul Henry désactivé », statut Désactivé (gris).
- Suppression : second dialogue, bouton actif seulement quand l'e-mail saisi correspond.

## 🛠️ Tâches

- [ ] Créer `DisableAdminDialog.tsx` et `DeleteAdminDialog.tsx`.
- [ ] Composant `TypeToConfirmInput` partagé (réutilisé par WI-08).
- [ ] Mutations `useDisableAdmin`, `useReactivateAdmin`, `useDeleteAdmin`.
- [ ] Garde-fous UI + gestion des 409.
- [ ] Ajout au menu ⋮ conditionné au statut.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un compte actif, quand je confirme, alors il passe Désactivé et ses sessions disparaissent.
- [ ] Étant donné la suppression, alors le bouton reste inactif tant que l'e-mail ne correspond pas.
- [ ] Étant donné le dernier super-admin, alors l'action est refusée.
- [ ] Étant donné un compte désactivé, alors « Réactiver » est proposé.

## 🧪 Tests à écrire

- [ ] Test composant : TypeToConfirmInput
- [ ] Test composant : DisableAdminDialog
- [ ] Test : garde dernier super-admin
- [ ] Test hook : réactivation
- [ ] E2E : désactivation d'un compte

## ♿ Accessibilité et i18n

- Dialogue role=alertdialog, focus initial sur Annuler

## 🔗 Dépendances

À réaliser après : `ADM-WI-03` · `ADM-WI-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
