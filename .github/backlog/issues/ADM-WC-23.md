> **ADM-WC-23** · Fonctionnel · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Le rapport de WC-11 cite des erreurs précises par ligne : « ligne 14 : « buts » doit être un entier », « ligne 33 : joueur introuvable », « ligne 52 : saison invalide ». Les colonnes attendues sont `player_id, season, matches, goals, assists, trophies`. Il faut un analyseur CSV robuste (pas de dépendance lourde), une validation en deux temps (client puis serveur à blanc) et un import transactionnel.

## ✅ Objectif

Parser et valider le fichier, produire un rapport par ligne et importer uniquement les lignes valides via un dry-run puis un commit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-11` — Import CSV des statistiques
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_light.webp?raw=true' width='330' alt='WC-11 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_dark.webp?raw=true' width='330' alt='WC-11 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_light.webp?raw=true' width='330' alt='WC-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_dark.webp?raw=true' width='330' alt='WC-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Importer CSV » · « Ajouter une saison »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-22%5D%22) · [API-FOOT-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-38%5D%22)

#### `WC-08` — Fiche joueur — statistiques par saison
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true' width='330' alt='WC-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true' width='330' alt='WC-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true' width='330' alt='WC-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true' width='330' alt='WC-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Importer CSV » · « Ajouter une saison »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-20%5D%22) · [ADM-WC-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-21%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-38%5D%22)

## 📐 Règles de gestion

- Format : UTF-8 (BOM toléré), séparateur `,` ou `;` détecté sur la première ligne, guillemets RFC 4180, fins de ligne CRLF/LF, 2 Mo et 5 000 lignes maximum ; en-têtes sensibles à l'ordre non obligatoire mais tous requis (message « Colonne manquante : assists »).
- Règles par ligne : `player_id` = id public (`ub-0010`) ou id Mongo, doit exister (« joueur introuvable ») ; `season` `AAAA-AA` cohérente (« saison invalide ») ; `matches|goals|assists|trophies` entiers ≥ 0 (« « buts » doit être un entier » — libellés de colonne traduits : matches→matchs, goals→buts, assists→passes décisives, trophies→trophées).
- Doublons : deux lignes (player_id, season) dans le fichier → la seconde est en erreur « doublon de la ligne 12 » ; une ligne dont (joueur, saison) existe déjà en base met à jour la valeur (comportement « upsert », mentionné dans le rapport « 12 mises à jour, 56 nouvelles »).
- Validation à blanc `POST /admin/players/stats/import?dryRun=true` (multipart `file`) : retourne `{total:71, valid:68, errors:[{line,field,code,message}], created:56, updated:12}` ; commit `dryRun=false` applique en une transaction seulement les lignes valides.
- Note : la maquette ouvre le tiroir depuis la fiche de Lamine Yamal mais le fichier contient des lignes de plusieurs joueurs (68 lignes) : l'import est donc global au référentiel ; le tiroir doit l'indiquer (« Cet import met à jour plusieurs joueurs »).
- Audit `PLAYER_STATS_IMPORTED` (nom du fichier, nombre créées/mises à jour/rejetées).

## 🛠️ Tâches

- [ ] Créer `src/lib/csv/parseCsv.ts` : parseur streaming minimal (détection du séparateur, guillemets, BOM) avec tests de robustesse.
- [ ] Créer `src/lib/csv/statsImport.ts` : en-têtes attendus, `validateStatsRow(row, lineNumber)` Zod, traduction des noms de colonnes.
- [ ] Ajouter `playersApi.importStatsDryRun(file)` et `importStats(file)` (multipart).
- [ ] Créer `useStatsImport()` : machine d'états `idle → parsing → dryRun → ready → committing → done|error`.
- [ ] Générer le rapport d'erreurs CSV téléchargeable (`erreurs-import-statistiques.csv`).
- [ ] Gérer l'annulation (`AbortController`) et les fichiers trop gros (refus avant envoi).
- [ ] Bloquer l'envoi si les en-têtes sont invalides (message de colonnes manquantes).
- [ ] Neutraliser les valeurs commençant par `=`, `+`, `-`, `@` dans le rapport d'erreurs exporté.
- [ ] Tests avec un jeu de données de 71 lignes dont 3 invalides (fixture).

## ✔️ Critères d'acceptation

- [ ] Étant donné un fichier de 71 lignes dont 3 invalides, quand l'analyse se termine, alors le résultat est 68 valides et 3 erreurs avec les numéros de ligne 14, 33 et 52.
- [ ] Étant donné un fichier sans colonne `assists`, quand je le dépose, alors « Colonne manquante : assists » s'affiche et aucun envoi n'a lieu.
- [ ] Étant donné un séparateur `;`, quand le fichier est analysé, alors les colonnes sont correctement lues.
- [ ] Étant donné deux lignes identiques (joueur, saison), quand je valide, alors la seconde est rejetée comme doublon.
- [ ] Étant donné un fichier de 3 Mo, quand je le dépose, alors il est refusé avec « 2 Mo maximum ».
- [ ] Étant donné le commit réussi, quand la réponse arrive, alors `['players','stats']` et la liste sont invalidées.

## 🧪 Tests à écrire

- [ ] parseCsv.test.ts : guillemets, séparateurs, BOM, fins de ligne.
- [ ] statsImport.test.ts : chaque règle de validation.
- [ ] useStatsImport.test.tsx : transitions d'états.
- [ ] MSW : dry-run puis commit.
- [ ] Test de performance : 5 000 lignes analysées en moins de 500 ms.
- [ ] Test de neutralisation du rapport exporté.

## ♿ Accessibilité et i18n

- Le résumé « 68 lignes valides » est annoncé quand il apparaît ; messages d'erreur sans jargon technique.

## 🔗 Dépendances

À réaliser après : `ADM-WC-22` · `ADM-WC-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.2, §6.5
- Mockup WC-11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
