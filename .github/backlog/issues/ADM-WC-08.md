> **ADM-WC-08** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WC-02 montre la liste avec cases à cocher : une case d'en-tête à l'état indéterminé, trois lignes sélectionnées (Pedri, Pau Cubarsí, Gavi, fond rosé) et une barre « 3 sélectionnés » avec « Publier », « Archiver », « Exporter » et le lien « Tout désélectionner ». Le CDC Admin §9.4 prévoit des actions de masse toujours accompagnées d'une confirmation.

## ✅ Objectif

Ajouter la sélection multiple au `DataTable` des joueurs et la barre d'actions contextuelle.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-02` — Liste — sélection multiple (actions de masse)
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_light.webp?raw=true' width='330' alt='WC-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_dark.webp?raw=true' width='330' alt='WC-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_light.webp?raw=true' width='330' alt='WC-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_dark.webp?raw=true' width='330' alt='WC-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-09%5D%22) · [ADM-WC-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-11%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-37%5D%22)

## 📐 Règles de gestion

- Case d'en-tête : coche = sélectionne les lignes de la page courante ; état indéterminé si sélection partielle ; décochée = tout désélectionner.
- La barre « N sélectionnés » remplace visuellement la zone sous les filtres (fond `primary/8`, bordure `primary/30`) et affiche `N sélectionnés` (singulier « 1 sélectionné ») ; lien « Tout désélectionner » en bleu.
- La sélection est conservée lors du tri mais effacée lors d'un changement de filtre ou de page ; maximum 200 éléments sélectionnés (limite de l'endpoint de masse).
- Les lignes archivées restent sélectionnables mais l'action « Archiver » est désactivée si toutes les lignes sont déjà archivées ; « Publier » est désactivée si aucune ligne n'est `ready` (infobulle « Aucune fiche prête à publier »).
- Raccourci : `Échap` désélectionne tout ; `Maj + clic` sélectionne une plage de lignes.

## 🛠️ Tâches

- [ ] Étendre `PlayersTable.tsx` avec la colonne `select` (TanStack `rowSelection`, `getRowId = player.id`).
- [ ] Utiliser `BulkActionBar` du design system (ADS `datatable`) ou créer `src/components/shared/BulkActionBar.tsx` (slot d'actions, compteur, bouton de réinitialisation).
- [ ] Créer le hook `src/hooks/useRowSelection.ts` (Set d'ids, plage Maj-clic, reset sur changement de contexte).
- [ ] Calculer `bulkEligibility(selectedRows)` dans `src/lib/players.ts` : `{canPublish, canArchive, publishableIds, archivableIds}`.
- [ ] Surligner les lignes sélectionnées (`aria-selected`, fond rosé) en thème clair/sombre.
- [ ] Brancher les boutons de la barre sur les issues `fn-actions-masse-publier`, `ui-archivage-groupe-confirmation` et `fn-export-joueurs`.
- [ ] Tests de la sélection par plage et du reset.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 lignes cochées, quand la barre s'affiche, alors elle indique « 3 sélectionnés » et propose Publier, Archiver, Exporter.
- [ ] Étant donné une sélection partielle, quand je regarde la case d'en-tête, alors elle est indéterminée.
- [ ] Étant donné une sélection de 3 lignes, quand je change de filtre, alors la sélection est vidée et la barre disparaît.
- [ ] Étant donné aucune fiche `ready` dans la sélection, quand je survole « Publier », alors le bouton est désactivé avec une infobulle explicative.
- [ ] Étant donné `Échap`, quand la barre est visible, alors la sélection est vidée.

## 🧪 Tests à écrire

- [ ] useRowSelection.test.ts : ajout, retrait, plage, plafond 200.
- [ ] bulkEligibility.test.ts : combinaisons de statuts.
- [ ] PlayersTable.test.tsx : case d'en-tête indéterminée.
- [ ] BulkActionBar.test.tsx : pluriel et accessibilité.
- [ ] e2e : sélection de 3 joueurs puis désélection.

## ♿ Accessibilité et i18n

- Cases avec `aria-label` « Sélectionner Pedri » ; la barre est `role='region'` `aria-label='Actions sur la sélection'` ; annonce `aria-live` du nombre de lignes sélectionnées.

## 🔗 Dépendances

À réaliser après : `ADM-WC-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
