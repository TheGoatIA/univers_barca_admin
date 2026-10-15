> **ADM-ADS-23** · UX / Ergonomie · Priorité **P0** · Taille **L** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-03 : DataTable (case maître indéterminée, ligne sélectionnée rose, tri ↑, colonnes Poste/Langues FR EN ES/Statut/Mis à jour, « 1–3 sur 71 », pagination 1 2 3 … 25). `DataTable.tsx` existe en version minimale (TanStack Table sans tri/pagination).

## ✅ Objectif

Composant central du CDC §9.4 complet.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-03` — Composants du back-office
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true' width='330' alt='ZD-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true' width='330' alt='ZD-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true' width='230' alt='ZD-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true' width='230' alt='ZD-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Admin · 01 » · « Composants admin » · « DataTable, StatusBadge, TrilingualTextEditor, MediaUploader, ModerationActionMenu, ConfirmDialog, Toast : primitives Radix + Tailwind, accessibles au clavier. » · « DataTable » · « Pagination serveur, tri, filtres persistés dans l’URL, actions de masse et mode dense. » · « Joueur » · « Poste » · « Langues » · « Statut » · « Mis à jour » · « Pedri » · « Milieu » · « Publié » · « hier » · « Gavi » · « Traduction » · « 2 sept. » · « Balde » · « Latéral » · « Brouillon » · « 30 août » · « 1–3 sur 71 » · « TrilingualTextEditor — états » · « Incomplet : publication bloquée » · « Biographie » · « FR · Français » · « EN · English » · « ES · Español » · « Saisir le texte… » · « Publication bloquée : ES manquant(e)(s) »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-14%5D%22) · [ADM-ADS-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-16%5D%22) · [ADM-ADS-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-21%5D%22) · [ADM-ADS-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-24%5D%22) · [ADM-ADS-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-25%5D%22) · [ADM-ADS-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-26%5D%22) · [ADM-ADS-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-27%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [ADM-ADS-37](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-37%5D%22) · [MOB-ZD-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-08%5D%22)

## 📐 Règles de gestion

- Pagination serveur systématique (taille 25/50/100, pages « 1 2 3 … 25 »), jamais de défilement infini.
- Tri serveur sur colonnes indexées, indicateur ↑/↓/⇅ ; colonnes non triables visuellement désactivées.
- Filtres persistés dans l'URL (query params), partageables.
- Sélection multiple + actions de masse avec confirmation du nombre d'éléments ; case maître indéterminée.
- États vide différenciés ; mode dense (hauteur de ligne réduite) mémorisé ; défilement horizontal contrôlé sur tablette.

## 🔄 Comportement et états

- Chargement : skeleton de lignes ; erreur : ErrorState ; ligne cliquable/focalisable.

## 🛠️ Tâches

- [ ] Étendre `DataTable.tsx` : props `sorting`, `pagination`, `rowSelection`, `density`, `onSortChange`.
- [ ] Créer `DataTablePagination.tsx`, `DataTableToolbar.tsx`, `BulkActionBar.tsx`.
- [ ] Hook `useTableUrlState` (query params).
- [ ] Colonnes de complétion de langues (`LangDots` FR/EN/ES).
- [ ] Stories.
- [ ] Tests de table.

## ✔️ Critères d'acceptation

- [ ] Étant donné 71 lignes page 25, alors « 1–25 sur 71 » et pagination avec ellipses.
- [ ] Étant donné un tri colonne, alors le serveur reçoit sort=field:asc.
- [ ] Étant donné 3 lignes sélectionnées, alors la barre d'actions indique « 3 éléments ».
- [ ] Étant donné aucun résultat avec filtre, alors le bouton Réinitialiser est affiché.

## 🧪 Tests à écrire

- [ ] Test composant : pagination ellipses
- [ ] Test hook : useTableUrlState
- [ ] Test composant : sélection indéterminée
- [ ] Test composant : états vides
- [ ] Test a11y : tableau

## ♿ Accessibilité et i18n

- En-têtes scope=col, aria-sort, sélection annoncée

## 🔗 Dépendances

À réaliser après : `ADM-ADS-12` · `ADM-ADS-20` · `ADM-ADS-19` · `ADM-ADS-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
