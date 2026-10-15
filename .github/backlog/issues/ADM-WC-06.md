> **ADM-WC-06** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Les en-têtes de colonnes de WC-01 portent des chevrons de tri (Joueur, Poste, Nationalité, Statut, Mis à jour) mais pas « Langues », et le bouton « Mode dense » est à droite des filtres. Le CDC Admin §9.4 impose pagination serveur au-delà de 50 lignes, tri serveur sur colonnes indexées, désactivé visuellement sur les autres ; §9.7 prévoit le mode dense optionnel mémorisé.

## ✅ Objectif

Implémenter le tri, la pagination et le mode dense du tableau des joueurs.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-01` — Liste des joueurs
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true' width='330' alt='WC-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true' width='330' alt='WC-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true' width='330' alt='WC-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true' width='330' alt='WC-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-04%5D%22) · [ADM-WC-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-05%5D%22) · [ADM-WC-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-11%5D%22) · [ADM-WC-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-12%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22)

## 📐 Règles de gestion

- Tri par clic : asc → desc → retour au tri par défaut (`-updatedAt`) ; un seul critère à la fois ; indicateur chevron + `aria-sort`.
- Colonnes triables : `fullName`, `position`, `nationality`, `status`, `updatedAt` (index MongoDB existants sur status/position/nationality/fullName) ; « Langues » n'est pas triable et son en-tête n'a pas de chevron (pas de clic silencieusement inopérant).
- Pagination : 50 lignes par page, contrôle « 1–50 sur 71 » + boutons précédent/suivant + numéros (1, 2, 3, …, dernière) comme sur les écrans WF-01/WG-01 ; pas de défilement infini.
- Mode dense : réduit la hauteur de ligne de 56 px à 40 px, avatar 28 px, sous-ligne masquée ; état stocké dans `uiStore.tableDensity.players` (persisté), mémorisé par administrateur.
- Le tri et la page sont dans l'URL (`sort=-updatedAt&page=2`) ; changement de tri remet `page=1`.

## 🛠️ Tâches

- [ ] Étendre `uiStore` : `tableDensity: Record<string,'comfortable'|'dense'>` et `setTableDensity(moduleKey, density)` (persist versionné).
- [ ] Créer `src/components/shared/DensityToggle.tsx` (bouton « Mode dense » avec icône couches, `aria-pressed`).
- [ ] Utiliser `DataTablePagination` et `useTableUrlState` du design system (ADS `datatable`) ; sinon les créer dans `src/components/shared/`.
- [ ] Ajouter la prop `sortable` par colonne et le rendu désactivé pour « Langues » dans `PlayersTable.tsx`.
- [ ] Mapper l'état de tri vers le paramètre API `sort` dans `usePlayerFilters`.
- [ ] Vérifier la ligne dense en thème clair/sombre et au zoom 200 %.
- [ ] Documenter la règle « pagination serveur ≥ 50 » dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné la page 1 de 2, quand je clique « Suivant », alors la ligne « 51–71 sur 71 » s'affiche et l'URL contient `page=2`.
- [ ] Étant donné un clic sur l'en-tête « Poste », quand la requête part, alors `sort=position` est envoyé ; au deuxième clic `sort=-position`.
- [ ] Étant donné l'en-tête « Langues », quand je le survole, alors aucun chevron ni curseur main n'apparaît.
- [ ] Étant donné « Mode dense » activé, quand je recharge la page, alors la densité est restaurée.
- [ ] Étant donné 0 résultat, quand le contrôle de pagination est évalué, alors il n'est pas rendu.

## 🧪 Tests à écrire

- [ ] PlayersTable.test.tsx : en-tête non triable sans bouton.
- [ ] usePlayerFilters.test.tsx : cycle asc/desc/défaut.
- [ ] DensityToggle.test.tsx : `aria-pressed` et persistance.
- [ ] uiStore.test.ts : migration de version (état sans `tableDensity`).
- [ ] e2e : pagination page 2 puis retour page 1 avec le bouton précédent.

## ♿ Accessibilité et i18n

- `aria-sort='ascending|descending|none'` ; les boutons de pagination ont `aria-label` « Page 2 » et `aria-current='page'`.
- Le mode dense conserve une cible tactile ≥ 24 px (WCAG 2.5.8).

## 🔗 Dépendances

À réaliser après : `ADM-WC-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.4, §9.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
