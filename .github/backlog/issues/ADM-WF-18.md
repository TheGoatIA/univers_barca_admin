> **ADM-WF-18** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WF-04 (« PERFORMANCE DES QUESTIONS », « Repère les questions mal calibrées ou ambiguës ») présente un bouton « Exporter » et quatre cartes : « Réussite moyenne 63 % ↑ +1,2 pt », « Trop faciles (> 95 %) 34 à relever », « Trop difficiles (< 15 %) 21 à vérifier » et « Réponses (30 j) 184 k ↑ +12 % ». Le CDC Admin §4.5 prévoit des statistiques de performance par question pour identifier les questions mal calibrées ou ambiguës.

## ✅ Objectif

Implémenter la page `/quiz/performance` avec les quatre indicateurs et leur variation.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-04` — Performance des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Performance » · « Performance des questions » · « Repère les questions mal calibrées ou ambiguës » · « Exporter » · « Réussite moyenne » · « 63 % » · « +1,2 pt » · « Trop faciles (> 95 %) » · « à relever » · « Trop difficiles ( » · « 15 %) » · « à vérifier » · « Réponses (30 j) » · « 184 k » · « +12 % » · « Répartition du taux de réussite » · « À corriger en priorité » · « Score du Clásico du 2 mai 2009 ? » · « 19 % » · « Ballons d’or de Messi au Barça ? »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-19%5D%22) · [ADM-WF-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-20%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22)

## 📐 Règles de gestion

- Réussite moyenne = somme des bonnes réponses / somme des réponses des 30 derniers jours (pondérée), arrondie à l'entier ; variation en points vs les 30 jours précédents (« +1,2 pt », vert si positif, rouge si négatif — en revanche un pourcentage moyen qui baisse n'est pas nécessairement mauvais : couleur neutre configurable).
- « Trop faciles (> 95 %) » = nombre de questions publiées ayant un taux > 95 % avec au moins 30 réponses (seuil proposé) ; « Trop difficiles (< 15 %) » = taux < 15 % avec ≥ 30 réponses ; cliquer sur une carte ouvre `/quiz?minRate=96` ou `?maxRate=14` (filtres de WF-01).
- « Réponses (30 j) » : volume formaté compact « 184 k » (184 000), variation « +12 % » ; l'infobulle donne la valeur exacte « 184 312 réponses ».
- Sélecteur de période facultatif 7/30/90 jours (défaut 30 j, libellé de la carte mis à jour).
- Chaque carte a un squelette, un état d'erreur propre (« Indisponible · Réessayer ») et des valeurs en Barlow Condensed ; accessible aux rôles content-manager et super-admin.

## 🛠️ Tâches

- [ ] Créer `src/pages/quiz/QuizPerformancePage.tsx` (lazy, `/quiz/performance`) et le lien depuis la liste (« Voir les statistiques »).
- [ ] Créer `src/components/quiz/PerformanceKpiCard.tsx` (icône, libellé, valeur, sous-texte, delta) ; réutiliser `StatsCard` (existant) en étendant `delta`.
- [ ] Implémenter `useQuizStatsSummary(days)` branché sur `GET /admin/quiz-questions/stats/summary`.
- [ ] Créer `formatCompact(n)` (184 k) dans `src/lib/format.ts`.
- [ ] Brancher les clics de cartes sur les filtres de la liste (navigation avec query params).
- [ ] Ajouter le sélecteur de période (URL `?jours=30`).
- [ ] Gérer chargement, erreur par carte et état « aucune donnée sur la période ».
- [ ] Tests des cartes.

## ✔️ Critères d'acceptation

- [ ] Étant donné `avgRate=63` et `deltaPts=1.2`, quand la carte s'affiche, alors « 63 % » et « +1,2 pt » sont visibles.
- [ ] Étant donné 34 questions trop faciles, quand je clique sur la carte, alors la liste s'ouvre filtrée sur `minRate=96`.
- [ ] Étant donné 184 312 réponses, quand la carte s'affiche, alors « 184 k » apparaît et l'infobulle donne la valeur exacte.
- [ ] Étant donné une erreur de l'API, quand la page s'affiche, alors les cartes montrent « Indisponible · Réessayer ».
- [ ] Étant donné la période 7 jours, quand je la sélectionne, alors les libellés deviennent « Réponses (7 j) ».

## 🧪 Tests à écrire

- [ ] PerformanceKpiCard.test.tsx : delta positif/négatif.
- [ ] format.test.ts : `formatCompact`.
- [ ] QuizPerformancePage.test.tsx : états chargement/erreur.
- [ ] useQuizStatsSummary.test.tsx : paramètre `days`.
- [ ] axe : page de performance.

## ♿ Accessibilité et i18n

- Les variations ne reposent pas que sur la couleur : flèche et signe explicites ; chaque carte est un `<section aria-labelledby>`.

## 🔗 Dépendances

À réaliser après : `ADM-WF-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5
- CDC Admin §10.1 (comparaison de performance)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
