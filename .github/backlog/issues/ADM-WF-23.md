> **ADM-WF-23** · Tests · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Admin §7.5-§7.6 impose un scénario Playwright par module et un test de composant par écran ; la définition de terminé exige le fonctionnement dans les deux thèmes et la navigation clavier complète. Cette issue regroupe les scénarios transversaux du module quiz.

## ✅ Objectif

Livrer la suite de tests Vitest/Playwright du module : liste, éditeur, validation IA, performance.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-01` — Liste des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « 1 248 questions actives · 12 en attente de validation IA » · « File de validation IA (12) » · « Nouvelle question » · « Rechercher… » · « Niveau » · « Catégorie » · « Statut » · « Réussite : 0–100 % » · « Question » · « Langues » · « Réussite » · « Qui a marqué le but de la victoire en finale de la LDC 2015 ? » · « Niv. 2 » · « Publiée » · « 71 % » · « En quelle année le club a-t-il été fondé ? » · « Histoire » · « Niv. 1 » · « 92 % »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-04%5D%22) · [ADM-WF-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-05%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-26%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22)

#### `WF-02` — Éditeur de question trilingue
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true' width='330' alt='WF-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true' width='330' alt='WF-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true' width='330' alt='WF-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true' width='330' alt='WF-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Éditer » · « Éditer la question » · « ID q-00481 · Niveau 2 · Joueurs » · « Annuler » · « Enregistrer » · « Énoncé » · « FR · Français » · « EN · English » · « ES · Español » · « Qui a marqué le but de la victoire en finale de la Ligue des champions 2015 ? » · « Les 3 langues sont complètes — prêt à publier » · « Réponses (FR) » · « Coche la bonne réponse » · « Neymar Jr » · « EN · ES » · « Luis Suárez » · « Ivan Rakitić » · « Lionel Messi » · « Explication affichée après la réponse » · « Rakitić ouvre le score dès la 4e minute, avant Suárez et Neymar (3-1). » · « Paramètres » · « Niveau de difficulté »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-07%5D%22) · [ADM-WF-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-08%5D%22) · [ADM-WF-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-09%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [API-JEUX-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-11%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22)

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

#### `WF-04` — Performance des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Performance » · « Performance des questions » · « Repère les questions mal calibrées ou ambiguës » · « Exporter » · « Réussite moyenne » · « 63 % » · « +1,2 pt » · « Trop faciles (> 95 %) » · « à relever » · « Trop difficiles ( » · « 15 %) » · « à vérifier » · « Réponses (30 j) » · « 184 k » · « +12 % » · « Répartition du taux de réussite » · « À corriger en priorité » · « Score du Clásico du 2 mai 2009 ? » · « 19 % » · « Ballons d’or de Messi au Barça ? »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-18%5D%22) · [ADM-WF-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-19%5D%22) · [ADM-WF-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-20%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22)

#### `WF-05` — Rejet d’une question IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true' width='330' alt='WF-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true' width='330' alt='WF-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true' width='330' alt='WF-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true' width='330' alt='WF-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de 2011 ? » · « Wembley » · « Rome » · « Bernabéu » · « Camp Nou » · « Rejeter cette question ? »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-16%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22)

## 📐 Règles de gestion

- Scénario A : connexion content-manager → `/quiz` (1 248 questions) → filtre Niveau 4-5 → ouverture d'une question.
- Scénario B : édition d'une question → ES manquant → « Publiée » désactivé → complétion → publication → badge « Publiée ».
- Scénario C : file IA (12) → raccourcis `J`, `A` → badge de sidebar 11 ; « Corriger puis approuver » puis « Rejeter » avec motif « Ambiguë » (WF-05).
- Scénario D : page Performance → clic sur « Trop difficiles » → liste filtrée `maxRate=14` ; export CSV.
- Chaque scénario est exécuté en thème clair et sombre et en viewport tablette ; axe sur `/quiz`, `/quiz/:id`, `/quiz/validation`, `/quiz/performance` et la modale de rejet.

## 🛠️ Tâches

- [ ] Créer `tests/e2e/quiz.spec.ts` (scénarios A à D) avec fixtures d'authentification par rôle.
- [ ] Créer `src/test/handlers/quiz.ts` complet (liste 5 lignes + total 1248, détail q-00481, file IA 12, stats).
- [ ] Compléter les tests composant : AiQuestionCard, RejectQuestionDialog, CorrectQuestionDrawer, SuccessDistributionChart.
- [ ] Ajouter `@axe-core/playwright` sur toutes les routes du module.
- [ ] Vérifier la couverture des hooks du module ≥ 80 % (CDC §7.2).
- [ ] Ajouter les captures de référence des pages en clair/sombre (si tests visuels ADS livrés).
- [ ] Ajouter le scénario à l'étape E2E du pipeline.
- [ ] Documenter les données de test (questions de la maquette).

## ✔️ Critères d'acceptation

- [ ] Étant donné la fixture, quand le scénario B s'exécute, alors « Publiée » est désactivé tant que ES est vide puis activable.
- [ ] Étant donné le scénario C, quand j'approuve une question, alors le badge de sidebar passe de 12 à 11.
- [ ] Étant donné le scénario C, quand je rejette avec le motif « Ambiguë », alors la carte disparaît et le motif est dans la requête.
- [ ] Étant donné le scénario D, quand je clique sur « Trop difficiles », alors l'URL contient `maxRate=14`.
- [ ] Étant donné axe, quand toutes les routes sont analysées, alors aucune violation serious/critical n'est signalée.

## 🧪 Tests à écrire

- [ ] Suite Playwright `quiz.spec.ts` (4 scénarios).
- [ ] Tests composants et hooks du module (listés ci-dessus).
- [ ] Test de parcours clavier sur la file IA.
- [ ] Test de thème sombre (captures).
- [ ] Test de couverture hooks ≥ 80 %.

## ♿ Accessibilité et i18n

- Vérification manuelle documentée : navigation complète au clavier des 5 écrans (CDC §7.6).

## 🔗 Dépendances

À réaliser après : `ADM-WF-22` · `ADM-WF-17` · `ADM-WF-19` · `ADM-WF-20` · `ADM-WF-21` · `ADM-WF-15` · `ADM-WF-10` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §7.1, §7.2, §7.5, §7.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
