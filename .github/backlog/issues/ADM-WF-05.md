> **ADM-WF-05** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La barre de filtres de WF-01 comporte la recherche « Rechercher… » et quatre filtres : « Niveau », « Catégorie », « Statut » et « Réussite : 0–100 % » (plage). Le CDC Admin §4.10 liste pour les questions : niveau de difficulté, catégorie, statut de validation, taux de réussite (plage), persistés dans l'URL ; §9.7 prévoit la mémorisation des derniers filtres.

## ✅ Objectif

Implémenter les filtres combinables synchronisés avec l'URL et mémorisés par administrateur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-01` — Liste des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « 1 248 questions actives · 12 en attente de validation IA » · « File de validation IA (12) » · « Nouvelle question » · « Rechercher… » · « Niveau » · « Catégorie » · « Statut » · « Réussite : 0–100 % » · « Question » · « Langues » · « Réussite » · « Qui a marqué le but de la victoire en finale de la LDC 2015 ? » · « Niv. 2 » · « Publiée » · « 71 % » · « En quelle année le club a-t-il été fondé ? » · « Histoire » · « Niv. 1 » · « 92 % »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-04%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-26%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22)

## 📐 Règles de gestion

- Niveau : multi-sélection 1 à 5 avec libellés « 1 · Supporter occasionnel »…« 5 · La Masia » ; Catégorie : Joueurs, Histoire, Trophées, Matchs (multi) ; Statut : Publiée, Traduction, Brouillon, En attente IA, Rejetée, Archivée (multi).
- Réussite : double curseur 0-100 par pas de 5 avec champs numériques ; le chip affiche « Réussite : 0–100 % » par défaut puis « Réussite : 0–30 % » ; les questions sans réponse sont exclues dès qu'une borne est modifiée (case « Inclure sans réponse », décochée par défaut).
- Recherche plein texte sur l'énoncé FR (debounce 300 ms, 2 caractères minimum, insensible aux accents).
- URL : `?q=clasico&level=4,5&category=matches&status=published&minRate=0&maxRate=30&page=1&sort=successRate` ; page remise à 1 à chaque changement.
- Mémoire locale `ub:filters:quiz:<adminId>` (hors page) restaurée si l'URL ne comporte aucun paramètre ; bouton « Réinitialiser ».

## 🛠️ Tâches

- [ ] Créer `src/hooks/useQuizFilters.ts` (URL ↔ filtres, validation Zod, reset).
- [ ] Créer `src/components/quiz/QuizFilters.tsx` avec `FilterChip` (partagé avec WC).
- [ ] Créer `src/components/shared/RangeSlider.tsx` (Radix Slider, double poignée, clavier ←/→ pas de 5).
- [ ] Réutiliser `src/lib/filterMemory.ts` (créé pour les joueurs) ou le créer.
- [ ] Brancher `useQuizQuestions(params)` et le sous-titre « N résultats » lorsque des filtres sont actifs.
- [ ] Implémenter `describeQuizFilters` pour les états vides (« Niv. 4 · Matchs · 0–30 % »).
- [ ] Tests de synchronisation URL.

## ✔️ Critères d'acceptation

- [ ] Étant donné les niveaux 4 et 5 cochés, quand la requête part, alors `level=4,5` est envoyé et l'URL est mise à jour.
- [ ] Étant donné la plage 0–30 %, quand elle est appliquée, alors le chip affiche « Réussite : 0–30 % » et les questions sans réponse sont exclues.
- [ ] Étant donné une URL partagée, quand elle est ouverte, alors les filtres identiques sont restaurés.
- [ ] Étant donné un filtre appliqué en page 3, quand je modifie la catégorie, alors la page repasse à 1.
- [ ] Étant donné `minRate>maxRate` dans l'URL, quand la page se charge, alors la plage est ignorée.

## 🧪 Tests à écrire

- [ ] useQuizFilters.test.tsx : URL, reset de page, valeurs invalides.
- [ ] RangeSlider.test.tsx : clavier et bornes.
- [ ] QuizFilters.test.tsx : libellés des chips.
- [ ] describeQuizFilters.test.ts.
- [ ] e2e : filtre par niveau puis rechargement.

## ♿ Accessibilité et i18n

- Curseur avec `aria-valuemin/max/now` pour chaque poignée, libellés « Réussite minimale » et « Réussite maximale » ; annonce du nombre de résultats.

## 🔗 Dépendances

À réaliser après : `ADM-WF-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.10, §9.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
