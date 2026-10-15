> **ADM-WC-05** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La barre de filtres de WC-01 comporte la recherche « Rechercher… » et cinq filtres déroulants : « Poste », « Nationalité », « Statut : tous », « Langues », « Club ». Le CDC Admin §4.10 exige des filtres combinables persistés dans l'URL et §9.7 la mémorisation des derniers filtres par module et par administrateur.

## ✅ Objectif

Implémenter la recherche à debounce 300 ms et les cinq filtres, synchronisés avec les query params, avec réinitialisation et mémoire locale.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-01` — Liste des joueurs
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true' width='330' alt='WC-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true' width='330' alt='WC-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true' width='330' alt='WC-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true' width='330' alt='WC-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-04%5D%22) · [ADM-WC-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-06%5D%22) · [ADM-WC-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-11%5D%22) · [ADM-WC-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-12%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22)

#### `WC-03` — Liste — aucun résultat pour ces filtres
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_light.webp?raw=true' width='330' alt='WC-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_dark.webp?raw=true' width='330' alt='WC-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_light.webp?raw=true' width='330' alt='WC-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_dark.webp?raw=true' width='330' alt='WC-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 0 résultat » · « Nouveau joueur » · « Rechercher… » · « Poste : Gardien » · « Nationalité : Japon » · « Statut : tous » · « Aucun résultat pour ces filtres » · « Aucun joueur ne correspond à « Gardien · Japon ». Modifie ou réinitialise les filtres. » · « Réinitialiser les filtres »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-07%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22)

## 📐 Règles de gestion

- Recherche : champ avec icône loupe, debounce 300 ms (`useDebounced`), recherche partielle insensible à la casse et aux accents sur `fullName` et `shortName` ; minimum 2 caractères pour déclencher.
- Filtre Poste : liste des 10 postes (multi-sélection) ; Nationalité : liste des pays présents dans le référentiel (multi) ; Statut : Brouillon, Traduction, Prêt, Publié, Archivé (multi, libellé du chip « Statut : tous » quand rien n'est coché, « Statut : 2 » sinon).
- Filtre Langues : « Complet (FR · EN · ES) », « FR manquant », « EN manquant », « ES manquant » (mono-sélection) → `missingLang=en`.
- Filtre Club : « Joueurs actuels » (`isActive=true`) / « Anciens joueurs » (`isActive=false`) — correspond à « club actuel/historique » du CDC.
- URL : `?q=lamine&position=AD,AG&nationality=ES&status=published&missingLang=es&active=true&page=2` ; un changement de filtre remet `page=1` ; l'état de l'URL est la source de vérité (rechargement et lien partagé reproduisent la vue).
- Les derniers filtres (hors `page`) sont mémorisés dans `localStorage` sous `ub:filters:players:<adminId>` et restaurés à l'ouverture sans query params ; bouton « Réinitialiser » les efface.

## 🛠️ Tâches

- [ ] Créer `src/hooks/usePlayerFilters.ts` : lit/écrit `useSearchParams`, retourne `{filters, setFilter, reset, activeCount}` typés par Zod (`playersFiltersSchema`).
- [ ] Créer `src/components/players/PlayersFilters.tsx` (chips Radix DropdownMenu avec cases à cocher, état actif surligné).
- [ ] Créer `src/components/shared/FilterChip.tsx` si absent (libellé + compteur + chevron).
- [ ] Créer `src/lib/filterMemory.ts` (lecture/écriture try/catch sur localStorage, clé par admin, version de schéma).
- [ ] Brancher `usePlayers(params)` sur les filtres ; ignorer les valeurs invalides de l'URL (retombée sur défaut).
- [ ] Afficher une ligne « N filtres actifs » + lien « Réinitialiser » quand `activeCount > 0`.
- [ ] Exposer `describeFilters(filters)` (« Gardien · Japon ») utilisé par l'état « aucun résultat » (WC-03).
- [ ] Tests de non-régression de la synchro URL ↔ état avec `MemoryRouter`.

## ✔️ Critères d'acceptation

- [ ] Étant donné la saisie « lami » puis une pause de 300 ms, quand la requête part, alors `q=lami` est envoyé une seule fois.
- [ ] Étant donné les filtres Poste=Gardien et Nationalité=Japon, quand l'URL est copiée dans un nouvel onglet, alors la même vue est restituée.
- [ ] Étant donné que j'étais en page 3, quand je change un filtre, alors `page` revient à 1.
- [ ] Étant donné une valeur de filtre invalide dans l'URL (`status=foo`), quand la page se charge, alors elle est ignorée sans erreur.
- [ ] Étant donné des filtres mémorisés d'une session précédente, quand j'ouvre `/joueurs` sans paramètres, alors ils sont réappliqués.

## 🧪 Tests à écrire

- [ ] usePlayerFilters.test.tsx : synchronisation URL, reset de page, parsing invalide.
- [ ] PlayersFilters.test.tsx : sélection multiple, libellé « Statut : 2 ».
- [ ] filterMemory.test.ts : localStorage indisponible (accès levant une exception).
- [ ] PlayersPage.test.tsx : debounce 300 ms avec fake timers.
- [ ] e2e : `tests/e2e/players-filters.spec.ts` (recherche + filtre + rechargement).

## ♿ Accessibilité et i18n

- Chaque chip est un bouton `aria-haspopup='menu'` avec `aria-expanded` ; annonce `aria-live=polite` « 12 résultats » après filtrage.
- Raccourci `/` pour focaliser la recherche (si le registre WB `useHotkeys` existe).

## 🔗 Dépendances

À réaliser après : `ADM-WC-03` · `ADM-WC-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.10, §9.4, §9.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
