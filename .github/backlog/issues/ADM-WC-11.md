> **ADM-WC-11** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le bouton « Exporter » de l'en-tête de WC-01 et l'action « Exporter » de la barre de sélection de WC-02 exportent des fiches joueurs. Le CDC Admin §6.5 prévoit l'export CSV/Excel des principales listes, restreint aux rôles autorisés. Les joueurs sont des données footballistiques publiques (pas de données personnelles de comptes), donc sans justification obligatoire.

## ✅ Objectif

Brancher l'export de la liste sur le hook partagé `useExport` (FND) pour la vue filtrée ou la sélection.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-01` — Liste des joueurs
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true' width='330' alt='WC-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true' width='330' alt='WC-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true' width='330' alt='WC-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true' width='330' alt='WC-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-04%5D%22) · [ADM-WC-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-05%5D%22) · [ADM-WC-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-06%5D%22) · [ADM-WC-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-12%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22)

#### `WC-02` — Liste — sélection multiple (actions de masse)
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_light.webp?raw=true' width='330' alt='WC-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_dark.webp?raw=true' width='330' alt='WC-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_light.webp?raw=true' width='330' alt='WC-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_dark.webp?raw=true' width='330' alt='WC-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-08%5D%22) · [ADM-WC-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-09%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-37%5D%22)

## 📐 Règles de gestion

- Menu du bouton « Exporter » : « CSV (UTF-8) » et « Excel (.xlsx) » ; portée : « Tous les résultats (N) » (filtres courants) ou « Sélection (3) » si une sélection existe.
- Colonnes : id public, nom complet, nom affiché, poste, nationalité, date de naissance, numéro, statut, langues complètes (FR;EN;ES), nombre de saisons de statistiques, mis à jour le (ISO 8601).
- Export côté serveur (`GET /admin/exports/players?format=csv|xlsx` + mêmes filtres, ou `ids=` pour la sélection) pour ne pas charger la collection en mémoire ; plafond 5 000 lignes ; nom de fichier `joueurs-2026-10-15.csv`.
- Neutralisation des formules : toute cellule commençant par `=`, `+`, `-`, `@` est préfixée d'une apostrophe (WI `fn-exports-csv-excel-listes`).
- Audit `EXPORT_PLAYERS` (format, nombre de lignes, filtres) ; rôles : content-manager, super-admin.

## 🛠️ Tâches

- [ ] Créer `src/components/players/ExportMenu.tsx` utilisant `useExport('players', format, params)` (FND `fnd-export-csv` / `fnd-export-xlsx`).
- [ ] Mapper `usePlayerFilters` + sélection vers les paramètres d'export.
- [ ] Afficher un état « Export en cours… » (bouton `loading`, annulable) et un toast « joueurs-2026-10-15.csv téléchargé ».
- [ ] Gérer 413/422 (trop de lignes) avec message « Affinez les filtres (5 000 lignes maximum) ».
- [ ] Désactiver le bouton lorsque `total = 0`.
- [ ] Ajouter les libellés d'en-tête de colonnes FR dans `src/lib/exports/players.columns.ts` (partagé avec l'export client de secours).
- [ ] Tests avec MSW (blob + en-tête Content-Disposition).

## ✔️ Critères d'acceptation

- [ ] Étant donné 12 résultats filtrés, quand je choisis « CSV », alors la requête contient les filtres et le fichier `joueurs-AAAA-MM-JJ.csv` est téléchargé.
- [ ] Étant donné 3 lignes sélectionnées, quand j'exporte, alors seuls ces 3 ids sont demandés.
- [ ] Étant donné 0 résultat, quand je regarde le bouton, alors il est désactivé.
- [ ] Étant donné une cellule « =SUM(A1) », quand le fichier est généré, alors elle est neutralisée.
- [ ] Étant donné une erreur 422 plafond, quand elle survient, alors le message de plafond est affiché.

## 🧪 Tests à écrire

- [ ] ExportMenu.test.tsx : options et portée selon sélection.
- [ ] players.columns.test.ts : ordre et libellés.
- [ ] useExport (MSW) : nom de fichier depuis Content-Disposition.
- [ ] Test de neutralisation des formules.
- [ ] e2e : export CSV avec filtre.

## ♿ Accessibilité et i18n

- Menu Radix avec `aria-label='Exporter'`, résultat annoncé via `aria-live`.

## 🔗 Dépendances

À réaliser après : `ADM-WC-04` · `ADM-WC-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
