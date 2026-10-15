> **ADM-WG-21** · Fonctionnel · Priorité **P2** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le bouton « Gérer » des groupes actifs de WG-05 (« Culés Douala · 486 membres ») donne accès aux actions disponibles ; le CDC Admin §4.6 prévoit la validation de création et l'archivage. L'onglet « Archivés (6) » doit permettre la restauration.

## ✅ Objectif

Permettre d'archiver un groupe actif et de restaurer un groupe archivé avec motif et traçabilité.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-05` — Gestion des groupes locaux
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true' width='330' alt='WG-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true' width='330' alt='WG-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true' width='330' alt='WG-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true' width='330' alt='WG-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 212 groupes · 4 en attente de validation » · « Règle de validation » · « En attente » · « Actifs » · « Archivés » · « Groupe » · « Ville » · « Créateur » · « Membres » · « Statut » · « Actions » · « Culés Bafoussam » · « Bafoussam, CM » · « Boris T. » · « Valider » · « Refuser » · « Barça Lyon 69 » · « Lyon, FR » · « Sofía R. » · « Peña de Dakar » · « Dakar, SN »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-18%5D%22) · [ADM-WG-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-19%5D%22) · [ADM-WG-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-20%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-16%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Menu « Gérer » : « Archiver le groupe », « Voir les signalements du groupe » (lien vers la file filtrée sur l'origine), « Ouvrir le détail » ; pour les groupes archivés : « Restaurer ».
- Archivage : modale avec motif obligatoire (Inactif, Contenu inapproprié, Demande du créateur, Autre) ; `decision='archive'` → `status='archived'` ; le groupe disparaît de la carte et de la recherche, les messages restent conservés pour l'audit ; les membres sont notifiés par le backend.
- Groupe à fort effectif (≥ 100 membres) : confirmation renforcée (saisie du nom du groupe, `TypeToConfirm` ADS) ; à 486 membres, « Culés Douala » demande donc la saisie du nom.
- Restauration : `decision='restore'` → `status='active'` ; audit `GROUP_RESTORED`.
- Aucune suppression définitive depuis l'interface ; audit `GROUP_ARCHIVED` avec motif.

## 🛠️ Tâches

- [ ] Créer `src/components/groups/GroupManageMenu.tsx` (menu Radix).
- [ ] Créer `ArchiveGroupDialog.tsx` avec `TypeToConfirmInput` (ADS) pour les groupes ≥ 100 membres.
- [ ] Étendre `useGroupDecision` avec `archive` et `restore`.
- [ ] Implémenter le lien « Voir les signalements du groupe » vers `/moderation?origine=<groupId>`.
- [ ] Gérer 409/403 et toasts.
- [ ] Tests du menu et des dialogues.

## ✔️ Critères d'acceptation

- [ ] Étant donné « Culés Douala » (486 membres), quand je choisis « Archiver », alors je dois saisir le nom du groupe pour confirmer.
- [ ] Étant donné un groupe de 11 membres, quand j'archive, alors une confirmation simple suffit.
- [ ] Étant donné un archivage réussi, quand la table se recharge, alors le groupe apparaît dans « Archivés ».
- [ ] Étant donné un groupe archivé, quand j'ouvre « Gérer », alors « Restaurer » est proposé.

## 🧪 Tests à écrire

- [ ] GroupManageMenu.test.tsx : actions par statut.
- [ ] ArchiveGroupDialog.test.tsx : saisie du nom.
- [ ] useGroupDecision.test.tsx : archive/restore.
- [ ] e2e : archiver puis restaurer.
- [ ] axe : menu et dialogue.

## ♿ Accessibilité et i18n

- Menu avec `aria-label` « Gérer le groupe Culés Douala » ; champ de confirmation lié à l'instruction par `aria-describedby`.

## 🔗 Dépendances

À réaliser après : `ADM-WG-19` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
