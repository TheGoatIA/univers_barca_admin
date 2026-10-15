> **ADM-WF-21** · Fonctionnel · Priorité **P2** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

WF-04 expose un bouton « Exporter » en en-tête. Le CDC Admin §6.5 prévoit des exports CSV/Excel des listes pour analyse externe, restreints aux rôles autorisés. Pour les questions, l'export sert au calibrage hors outil (tableur).

## ✅ Objectif

Exporter la performance des questions (vue filtrée) via le hook partagé `useExport`.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-04` — Performance des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Performance » · « Performance des questions » · « Repère les questions mal calibrées ou ambiguës » · « Exporter » · « Réussite moyenne » · « 63 % » · « +1,2 pt » · « Trop faciles (> 95 %) » · « à relever » · « Trop difficiles ( » · « 15 %) » · « à vérifier » · « Réponses (30 j) » · « 184 k » · « +12 % » · « Répartition du taux de réussite » · « À corriger en priorité » · « Score du Clásico du 2 mai 2009 ? » · « 19 % » · « Ballons d’or de Messi au Barça ? »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-18%5D%22) · [ADM-WF-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-19%5D%22) · [ADM-WF-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-20%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22)

#### `WF-01` — Liste des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « 1 248 questions actives · 12 en attente de validation IA » · « File de validation IA (12) » · « Nouvelle question » · « Rechercher… » · « Niveau » · « Catégorie » · « Statut » · « Réussite : 0–100 % » · « Question » · « Langues » · « Réussite » · « Qui a marqué le but de la victoire en finale de la LDC 2015 ? » · « Niv. 2 » · « Publiée » · « 71 % » · « En quelle année le club a-t-il été fondé ? » · « Histoire » · « Niv. 1 » · « 92 % »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-04%5D%22) · [ADM-WF-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-05%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-26%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22)

## 📐 Règles de gestion

- Menu « Exporter » : CSV (UTF-8, séparateur point-virgule pour Excel FR) ou Excel ; période = celle de la page (30 j par défaut).
- Colonnes : id, énoncé FR, catégorie, niveau, statut, nombre de réponses, réponses correctes, taux de réussite (%), calibrage (correct/trop facile/trop difficile), dernière modification.
- Plafond 10 000 lignes ; nom de fichier `performance-questions-2026-10-15.csv` ; cellules neutralisées contre l'injection de formules (`=`, `+`, `-`, `@`).
- Aucune donnée personnelle (les statistiques sont agrégées) : pas de justification requise ; audit `EXPORT_QUIZ_STATS`.
- Le même mécanisme est proposé dans la liste WF-01 (« Exporter » dans le menu ⋮ de l'en-tête) avec les filtres courants.

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/QuizExportMenu.tsx` utilisant `useExport('quiz-stats', format, params)` (FND).
- [ ] Définir `src/lib/exports/quiz.columns.ts` (en-têtes FR, formats).
- [ ] Ajouter l'appel `GET /admin/exports/quiz-questions?format=&days=` (à créer) ou export client de secours via `useCsvExport`.
- [ ] Gérer l'état de chargement/annulation et les erreurs (413 plafond).
- [ ] Toast « performance-questions-2026-10-15.csv téléchargé ».
- [ ] Tests du nom de fichier et de la neutralisation.

## ✔️ Critères d'acceptation

- [ ] Étant donné la période 30 jours, quand j'exporte en CSV, alors le fichier contient une ligne par question avec les 10 colonnes.
- [ ] Étant donné un énoncé commençant par « = », quand le fichier est généré, alors la cellule est neutralisée.
- [ ] Étant donné plus de 10 000 lignes, quand j'exporte, alors un message de plafond est affiché.
- [ ] Étant donné un export réussi, quand je consulte l'audit, alors `EXPORT_QUIZ_STATS` apparaît.

## 🧪 Tests à écrire

- [ ] QuizExportMenu.test.tsx : formats et libellés.
- [ ] quiz.columns.test.ts : ordre des colonnes.
- [ ] useExport (MSW) : blob + nom de fichier.
- [ ] Test de neutralisation.
- [ ] e2e : export CSV depuis la page performance.

## ♿ Accessibilité et i18n

- Bouton avec libellé accessible « Exporter les statistiques » ; confirmation du téléchargement annoncée.

## 🔗 Dépendances

À réaliser après : `ADM-WF-18` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
