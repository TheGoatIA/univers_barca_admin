> **ADM-WJ-07** · Écran · Priorité **P1** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

« Tableau de bord GOAT — Phase 2 · suivi des votes communautaires et détection d'anomalies » : KPI Votes (7 j) 18 240 (+14 %), Duels actifs 34, Votes suspects 126 (Pic anormal détecté), Participation 38 % (+2 pt) ; histogramme « Votes par jour » (L→D, pic samedi en rouge) ; panneau Anomalies.

## ✅ Objectif

Suivre la santé des votes GOAT et repérer les manipulations.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-04` — Tableau de bord GOAT
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_light.webp?raw=true' width='330' alt='WJ-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_dark.webp?raw=true' width='330' alt='WJ-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_light.webp?raw=true' width='330' alt='WJ-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_dark.webp?raw=true' width='330' alt='WJ-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « GOAT » · « Votes » · « Tableau de bord GOAT » · « Phase 2 · suivi des votes communautaires et détection d’anomalies » · « Votes (7 j) » · « 18 240 » · « +14 % » · « Duels actifs » · « Votes suspects »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-08%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- KPI avec tendance vs période précédente (flèche + couleur).
- Histogramme Recharts 7 jours ; barre d'anomalie en rouge.
- Rôles : super-admin (et moderator en lecture selon arbitrage) ; données issues de l'API GOAT (votes comparateur, CDC Global §2.6).
- Participation = votants / utilisateurs actifs.

## 🔄 Comportement et états

- Chargement : skeletons ; vide : « Aucun vote sur la période ».

## 🛠️ Tâches

- [ ] Créer `src/features/goat-admin/pages/GoatDashboardPage.tsx`, `GoatKpiCards.tsx`, `VotesPerDayChart.tsx`.
- [ ] API GET /admin/goat/stats?range=7d (à créer).
- [ ] Route /goat/votes.
- [ ] Reuse KPI card du design system.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 18 240 votes, alors la carte affiche « 18 240 » et « +14 % ».
- [ ] Étant donné une anomalie samedi, alors la barre est rouge.
- [ ] Étant donné 0 vote, alors l'état vide.

## 🧪 Tests à écrire

- [ ] Test composant : KPI trend
- [ ] Test composant : barre anomalie
- [ ] Test page : état vide
- [ ] Test axe : graphique + tableau alternatif

## ♿ Accessibilité et i18n

- Alternative textuelle du graphique

## 🔗 Dépendances

À réaliser après : `ADM-WJ-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §10
- CDC Global §2.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
