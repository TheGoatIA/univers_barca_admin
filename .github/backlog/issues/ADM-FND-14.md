> **ADM-FND-14** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

WI (`fn-exports-csv-excel-listes`), WC (`fn-export-joueurs`) et WF (`fn-export-performance-questions`) proposent un export « Excel (.xlsx) » en plus du CSV (CDC Admin §6.5 : export CSV/Excel). La génération côté navigateur d'un classeur ne doit pas alourdir le bundle initial.

## ✅ Objectif

Ajouter le format .xlsx au socle d'export avec chargement à la demande et mise en forme minimale.

## 📐 Règles de gestion

- Bibliothèque légère proposée : `write-excel-file` (≈ 30 Ko gzip) ou à défaut `exceljs` ; chargement par `import()` dynamique au premier export (chunk séparé `export-xlsx`) ; budget de bundle initial inchangé.
- Mise en forme : une feuille nommée d'après la ressource (« Joueurs »), ligne d'en-tête en gras avec fond gris, largeur de colonnes calculée (min 10, max 60 caractères), volets figés sur l'en-tête, filtre automatique, formats de cellule : date `jj/mm/aaaa`, nombre entier, pourcentage `0 %`.
- Sécurité : les valeurs texte commençant par `=`, `+`, `-`, `@` sont écrites comme **chaînes** (type `string` explicite, jamais de formule) ; aucune macro ; métadonnées du document : créateur « Univers Barça Admin », pas de nom d'administrateur.
- Limites : 5 000 lignes côté client (au-delà, export serveur `format=xlsx`) ; classeur de 5 000 × 12 généré en < 3 s sur un poste standard ; mémoire surveillée.
- Une seconde feuille « Filtres » décrit la vue exportée (date, administrateur, filtres actifs, nombre de lignes) — utile pour tracer l'origine des chiffres.
- Nom de fichier : `<ressource>-AAAA-MM-JJ.xlsx` ; type MIME `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`.

## 🛠️ Tâches

- [ ] Ajouter la dépendance et créer `src/lib/export/xlsx.ts` (`toXlsx(rows, columns, meta)`, import dynamique).
- [ ] Étendre `useCsvExport` en `useClientExport(format)` ou ajouter `useXlsxExport` partageant les colonnes.
- [ ] Mapper `ExportColumn.type` (`text|int|percent|date`) vers les formats de cellule.
- [ ] Créer la feuille « Filtres » (`buildMetaSheet(meta)`).
- [ ] Ajouter l'option `xlsx` à `ExportButton` et au contrat serveur `format=xlsx`.
- [ ] Mesurer le poids du chunk et l'ajouter au budget (`fnd-performance-bundle`).
- [ ] Écrire les tests de lecture du classeur généré (relecture avec la même bibliothèque).
- [ ] Documenter les limites dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un export de 71 joueurs, quand le fichier est ouvert, alors la feuille « Joueurs » a un en-tête figé et 71 lignes.
- [ ] Étant donné une valeur « =1+1 », quand le classeur est généré, alors la cellule est une chaîne et non une formule.
- [ ] Étant donné la première utilisation, quand j'exporte, alors le chunk `export-xlsx` est chargé à ce moment et pas au démarrage.
- [ ] Étant donné 6 000 lignes, quand j'exporte côté client, alors un message propose l'export serveur.
- [ ] Étant donné les filtres Poste=Gardien, quand j'exporte, alors la feuille « Filtres » le mentionne.

## 🧪 Tests à écrire

- [ ] xlsx.test.ts : relecture du classeur (en-têtes, types, formats).
- [ ] xlsx.test.ts : neutralisation des formules.
- [ ] Test du chargement dynamique (le module n'est pas dans l'entrée).
- [ ] Test de performance 5 000 × 12 < 3 s.
- [ ] ExportButton.test.tsx : option Excel.

## ♿ Accessibilité et i18n

- Libellé du menu « Excel (.xlsx) » ; progression annoncée.

## 🔗 Dépendances

À réaliser après : `ADM-FND-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5, §9.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
