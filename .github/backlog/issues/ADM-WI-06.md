> **ADM-WI-06** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'icône crayon de la table permet de changer le rôle d'un compte. Un changement de rôle modifie immédiatement les permissions (CDC §3.1) et doit être protégé.

## ✅ Objectif

Modifier un rôle en évitant de se retrouver sans super-admin ou de s'auto-promouvoir par erreur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-01` — Comptes administrateurs
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_light.webp?raw=true' width='330' alt='WI-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__desktop_dark.webp?raw=true' width='330' alt='WI-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_light.webp?raw=true' width='330' alt='WI-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-01_comptes-administrateurs__tablet_dark.webp?raw=true' width='330' alt='WI-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comptes administrateurs » · « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins » · « Inviter un administrateur » · « Administrateur » · « Rôle » · « Statut » · « 2FA » · « Dernière activité » · « Actions » · « camille.durand@univers-barca.app » · « Actif »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-03%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22)

## 📐 Règles de gestion

- Impossible de retirer le rôle super-admin au dernier super-admin actif (erreur 409 « Au moins un super-admin actif est requis »).
- Un super-admin ne peut pas modifier son propre rôle.
- Passage vers super-admin : avertissement « 2FA obligatoire » et révocation des sessions existantes.
- Action journalisée ADMIN_ROLE_CHANGED avec avant/après.

## 🔄 Comportement et états

- Dialogue avec résumé « Léa Martin : Content-manager → Modérateur », justification facultative.
- Succès : toast, badge mis à jour après réponse serveur (pas d'optimistic).

## 🛠️ Tâches

- [ ] Créer `EditRoleDialog.tsx` réutilisant `RoleRadioCard`.
- [ ] Garde-fous côté UI (désactivation + message) en plus des contrôles API.
- [ ] useUpdateAdmin avec invalidation.
- [ ] Texte d'aide des permissions via la matrice §3.1 (`permissionsMatrix.ts`).
- [ ] Tests de cas limites.

## ✔️ Critères d'acceptation

- [ ] Étant donné le dernier super-admin, alors le changement de rôle est refusé avec explication.
- [ ] Étant donné mon compte, alors l'édition du rôle est désactivée.
- [ ] Étant donné un changement valide, alors l'audit enregistre ADMIN_ROLE_CHANGED.

## 🧪 Tests à écrire

- [ ] Test composant : garde dernier super-admin
- [ ] Test composant : auto-modification bloquée
- [ ] Test hook : invalidation liste
- [ ] Test : résumé avant → après

## 🔗 Dépendances

À réaliser après : `ADM-WI-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3, §3.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
