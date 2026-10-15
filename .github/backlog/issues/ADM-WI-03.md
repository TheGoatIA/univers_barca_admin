> **ADM-WI-03** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

AdminAccountsPage (CDC §3.2) : titre « Comptes administrateurs », « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins », bouton « Inviter un administrateur », table (Administrateur, Rôle, Statut, 2FA, Dernière activité, Actions) et trois cartes descriptives des rôles.

## ✅ Objectif

Lister et piloter les comptes administrateurs avec leur rôle, statut et sécurité.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-01` — Comptes administrateurs
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_light.webp?raw=true' width='330' alt='WI-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_dark.webp?raw=true' width='330' alt='WI-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_light.webp?raw=true' width='330' alt='WI-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_dark.webp?raw=true' width='330' alt='WI-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comptes administrateurs » · « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins » · « Inviter un administrateur » · « Administrateur » · « Rôle » · « Statut » · « 2FA » · « Dernière activité » · « Actions » · « camille.durand@univers-barca.app » · « Actif »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-06%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- Rôles : Super-admin (badge noir), Modérateur (bleu), Content-manager (rose) avec description : « Accès complet, configuration système, supervision, comptes admin » / « Signalements, groupes, comptes suspendus. Pas de contenu éditorial » / « Joueurs, matchs, historique, quiz. Pas de modération ».
- Statuts : Actif (vert), Invitation envoyée (jaune), Désactivé (gris).
- 2FA : bouclier vert si activée, « — » sinon ; obligatoire pour les super-admins (§6.1).
- Dernière activité relative (« il y a 2 min », « il y a 3 mois ») ; « — » si jamais connecté.
- Actions par ligne : sessions (icône appareil), éditer (crayon), menu ⋮ (Renvoyer l'invitation, Désactiver, Réactiver, Supprimer).

## 🔄 Comportement et états

- Chargement : skeleton 5 lignes ; erreur : ErrorState ; vide impossible (au moins le super-admin courant).
- Tri par colonne serveur ; filtres rôle/statut dans l'URL.
- Le compte courant est repéré (« Vous ») et ses actions destructives sont désactivées.

## 🛠️ Tâches

- [ ] Créer `pages/AdminAccountsPage.tsx`, `components/AdminAccountsTable.tsx`, `RoleBadge.tsx`, `TwoFactorIndicator.tsx`, `RoleLegendCards.tsx`.
- [ ] Étendre `StatusBadge` (active, invited, disabled).
- [ ] Menu d'actions avec Radix DropdownMenu et libellés aria.
- [ ] Avatars à initiales colorées déterministes.
- [ ] Filtres rôle/statut + persistance URL.
- [ ] Intégration `useAdminAccounts`.
- [ ] Rendu tablette (colonne 2FA masquée < 900 px).

## ✔️ Critères d'acceptation

- [ ] Étant donné 5 comptes, alors le résumé « 5 comptes · 3 rôles » est affiché.
- [ ] Étant donné un compte sans 2FA, alors « — » est affiché.
- [ ] Étant donné mon propre compte, alors Désactiver est désactivé.
- [ ] Étant donné un filtre rôle=Modérateur, alors l'URL contient role=moderator.

## 🧪 Tests à écrire

- [ ] Test composant : RoleBadge 3 variantes
- [ ] Test composant : table colonnes et actions
- [ ] Test page : filtres URL
- [ ] Test axe : menu actions
- [ ] Test : compte courant protégé

## ♿ Accessibilité et i18n

- Boutons icône avec aria-label « Sessions de Karim Benali »

## 🔗 Dépendances

À réaliser après : `ADM-WI-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.1, §3.2, §4.8
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
