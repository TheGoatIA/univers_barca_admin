> **ADM-ADS-22** · UX / Ergonomie · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZC-04 : courbes avec aire, courbes comparées, barres, anneaux segmentés, radars, cartes de chaleur, mini-courbes, légendes explicites. CDC §1.1 : Recharts.

## ✅ Objectif

Wrappers de graphiques thémés et accessibles.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZC-04` — Visualisation de données
_Module : Retours et états_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__desktop_light.webp?raw=true' width='330' alt='ZC-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__desktop_dark.webp?raw=true' width='330' alt='ZC-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__mobile_light.webp?raw=true' width='230' alt='ZC-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-04_visualisation-de-donnees__mobile_dark.webp?raw=true' width='230' alt='ZC-04 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 10 » · « Graphiques » · « Courbes, barres, anneaux, radars et cartes de chaleur — mêmes couleurs de marque, lisibles en clair et en sombre, avec légendes explicites. » · « Courbes et barres » · « Courbe avec aire » · « Courbes comparées » · « Barres » · « Barres comparatives » · « Possession » · « Tirs » · « Corners » · « Anneaux, radars et chaleur » · « Anneau segmenté » · « 2 340 » · « Radar (GOAT / Academy) » · « Activité (série) » · « Mini-courbes » · « Utilisateurs » · « Erreurs »

</details>

**Issues liées sur ce même écran :** [MOB-ZC-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-14%5D%22) · [MOB-ZC-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-15%5D%22) · [MOB-ZC-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-16%5D%22) · [MOB-ZC-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-17%5D%22)

## 📐 Règles de gestion

- Palette catégorielle : garnet, navy, or, vert, gris (clair/sombre) ; comparaison toujours doublée d'un style de trait ou motif.
- Wrappers : `AreaTrend`, `LineCompare`, `BarSeries`, `DonutChart`, `Sparkline` ; tooltip commun ; axes en text-2 12 px.
- Tableau de données alternatif repliable.
- Animations 480 ms désactivées en reduced-motion.

## 🔄 Comportement et états

- Vide : message « Pas de données » ; erreur : ErrorState compact.

## 🛠️ Tâches

- [ ] Créer `src/components/charts/*` (6 wrappers) et `chartTheme.ts` lu depuis les variables CSS.
- [ ] Composant `ChartLegend` interactif.
- [ ] Composant `DataTableFallback`.
- [ ] Stories avec jeux d'exemple.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné le thème sombre, alors les couleurs de séries sont celles du thème sombre.
- [ ] Étant donné une légende cliquée, alors la série est masquée.
- [ ] Étant donné 0 donnée, alors l'état vide.

## 🧪 Tests à écrire

- [ ] Test composant : DonutChart somme
- [ ] Test composant : légende interactive
- [ ] Test unitaire : chartTheme
- [ ] Test a11y : alternative tabulaire

## ♿ Accessibilité et i18n

- Alternative tabulaire

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` · `ADM-ADS-14` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
