> **ADM-WC-12** · Fonctionnel · Priorité **P2** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WC-01 et WC-04 exposent « Importer CSV » dans l'en-tête de la liste et « Importer un CSV » dans l'état vide (« pour démarrer le référentiel »). Le CDC ne décrit explicitement que l'import CSV des statistiques ; cette issue étend le tiroir de WC-11 (même ergonomie : dépôt du fichier, rapport de validation, bouton « Importer N lignes ») à la création de fiches en brouillon.

## ✅ Objectif

Permettre d'importer un CSV de fiches (une ligne = un joueur) avec validation à blanc puis création en statut `draft` uniquement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-01` — Liste des joueurs
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true' width='330' alt='WC-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true' width='330' alt='WC-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true' width='330' alt='WC-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true' width='330' alt='WC-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-04%5D%22) · [ADM-WC-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-05%5D%22) · [ADM-WC-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-06%5D%22) · [ADM-WC-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-11%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22)

#### `WC-04` — Liste — aucune donnée
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_light.webp?raw=true' width='330' alt='WC-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_dark.webp?raw=true' width='330' alt='WC-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_light.webp?raw=true' width='330' alt='WC-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_dark.webp?raw=true' width='330' alt='WC-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau joueur » · « Aucune fiche joueur » · « Crée la première fiche ou importe un fichier CSV pour démarrer le référentiel. » · « Importer un CSV »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WC-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-07%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22)

## 📐 Règles de gestion

- Colonnes attendues : `external_ref`, `full_name`, `short_name`, `birth_date` (AAAA-MM-JJ), `nationality` (ISO alpha-2), `position` (GB|DD|DC|DG|MD|MC|MO|AD|AG|BU), `shirt_number`, `previous_club` ; séparateur virgule ou point-virgule détecté, encodage UTF-8 (BOM toléré).
- Validation à blanc (`dryRun=true`) : rapport « N lignes valides · prêtes à importer » et « M lignes en erreur » avec numéro de ligne et motif (ex. « ligne 14 : position inconnue ») ; ligne dont `external_ref` existe déjà = mise à jour proposée ou ignorée (choix par case à cocher « Mettre à jour les fiches existantes »).
- Toutes les fiches créées sont en `draft` : jamais de publication par import (la biographie trilingue reste obligatoire pour publier).
- Limites : 2 Mo, 500 lignes maximum par import ; au-delà, refus avec message « Découpez le fichier en lots de 500 lignes ».
- Audit `PLAYERS_IMPORTED` (nombre créés/mis à jour/ignorés, nom du fichier) ; rôles content-manager et super-admin.

## 🛠️ Tâches

- [ ] Réutiliser `CsvImportDrawer` (voir `ui-import-csv-statistiques`) : le paramétrer via `schema`, `columns`, `templateUrl`, `onDryRun`, `onCommit`.
- [ ] Créer `src/lib/csv/playersImport.ts` : en-têtes attendus, parsing et pré-validation Zod ligne par ligne (aperçu immédiat).
- [ ] Ajouter `playersApi.importPlayersDryRun(file)` et `importPlayers(file, {updateExisting})` (multipart, champ `file`).
- [ ] Générer le fichier modèle `modele-fiches-joueurs.csv` (en-têtes + 2 lignes d'exemple) téléchargeable depuis le tiroir.
- [ ] Brancher les deux points d'entrée (bouton d'en-tête et bouton de l'état vide) sur le même tiroir.
- [ ] Invalider `['players']` et afficher le toast « 68 fiches créées en brouillon ».
- [ ] Documenter le format dans `docs/` et signaler le besoin des endpoints d'import côté API.

## ✔️ Critères d'acceptation

- [ ] Étant donné un CSV de 71 lignes dont 3 invalides, quand je le dépose, alors « 68 lignes valides » et « 3 lignes en erreur » sont affichés avec leurs motifs.
- [ ] Étant donné une ligne avec position « XX », quand la validation s'exécute, alors l'erreur « position inconnue » cite la ligne.
- [ ] Étant donné un import confirmé, quand il réussit, alors les fiches apparaissent avec le badge « Brouillon ».
- [ ] Étant donné un fichier de 600 lignes, quand je le dépose, alors il est refusé avant envoi.
- [ ] Étant donné « Mettre à jour les fiches existantes » décoché, quand une `external_ref` existe, alors la ligne est ignorée et signalée.

## 🧪 Tests à écrire

- [ ] playersImport.test.ts : parsing, séparateurs, BOM, erreurs par ligne.
- [ ] CsvImportDrawer.test.tsx : états dépôt / rapport / import.
- [ ] playersApi (MSW) : dry-run puis commit.
- [ ] Test limites 2 Mo / 500 lignes.
- [ ] e2e : import depuis l'état vide.

## ♿ Accessibilité et i18n

- Zone de dépôt focusable (Entrée/Espace ouvrent le sélecteur) ; rapport d'erreurs en liste annoncée via `role='status'`.

## 🔗 Dépendances

À réaliser après : `ADM-WC-02` · `ADM-WC-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.2, §9.4
- Mockups WC-01, WC-04, WC-11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
