> **ADM-WB-04** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WB-01 est l'écran d'accueil du super-admin : titre « TABLEAU DE BORD », salutation « Bonjour Camille, voici l'état de l'écosystème aujourd'hui. », actions « Export CSV » et « 7 derniers jours », quatre cartes KPI et un graphique « Utilisateurs actifs » (J1 · J7 · J30). Le dashboard existant ne montre que l'état de santé de l'API.

## ✅ Objectif

Remplacer le contenu de `DashboardPage` par la version super-admin : en-tête, KPI et graphique Recharts.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-01` — Dashboard — super-admin
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true' width='330' alt='WB-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true' width='330' alt='WB-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true' width='330' alt='WB-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true' width='330' alt='WB-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bonjour Camille, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % vs hier » · « Signalements en attente » · « +5 depuis hier » · « File BullMQ » · « 3 jobs » · « 0 en échec »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-05%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

## 📐 Règles de gestion

- Cartes KPI (`StatsCard` refondu : icône colorée, libellé, valeur en Barlow Condensed 36 px, ligne de tendance) : « Utilisateurs actifs (J1) » 2 184 · ↑ +8,2 % vs hier (vert) ; « Signalements en attente » 18 · ↓ +5 depuis hier (rouge) ; « File BullMQ » 3 jobs · 0 en échec ; « Erreurs critiques (24 h) » 2 · ↑ −3 vs hier.
- Graphique « Utilisateurs actifs » : sous-titre « J1 · J7 · J30 », sélecteur segmenté « 7 j / 30 j » (30 j actif par défaut dans la maquette), trois courbes aires (J1 grenat, J7 bleu, J30 or) avec points de fin et valeurs actuelles en légende : J1 2 184 · J7 5 920 · J30 9 410.
- Tooltip au survol : date + 3 valeurs ; axe X masqué, lignes de grille horizontales discrètes (tokens `--color-line`).
- Grille : 4 cartes sur 1 ligne (≥ 1280 px), 2×2 en tablette ; graphique sur 2/3 de la largeur à côté du panneau « Accès rapide » (issue suivante).

## 🔄 Comportement et états

- Le sélecteur 7 j/30 j pilote le paramètre `range` des widgets `active-users` et des tendances ; valeur persistée dans l'URL (`?range=30d`).
- Valeurs formatées en français (`Intl.NumberFormat('fr-FR')`, espace insécable : « 2 184 »), pourcentages « +8,2 % ».
- La palette de la série utilise les tokens (primary, secondary, accent) ; les trois séries sont distinguables sans la couleur seule (marqueurs de fin différents).
- Recharts est chargé via `React.lazy` pour ne pas alourdir le bundle initial.

## 🛠️ Tâches

- [ ] Refondre `src/pages/dashboard/DashboardPage.tsx` : composition par rôle (voir issue registre) ; extraire `SuperAdminDashboard.tsx`.
- [ ] Refondre `src/components/shared/StatsCard.tsx` : props `icon`, `label`, `value`, `trend`, `hint`, `tone`, `loading`.
- [ ] Créer `src/components/dashboard/ActiveUsersChart.tsx` (Recharts `AreaChart`, `ResponsiveContainer`).
- [ ] Créer `src/components/dashboard/RangeToggle.tsx` (Radix ToggleGroup ou Tabs).
- [ ] Créer `src/components/dashboard/PageGreeting.tsx` (« Bonjour {prénom}, voici l'état de l'écosystème aujourd'hui. »).
- [ ] Brancher les hooks `useActiveUsers(range)`, `useReportsPending`, `useQueueHealth`, `useCriticalErrors`.
- [ ] Ajouter les formats dans `src/lib/format.ts` (`formatInt`, `formatPercent`, `formatDelta`).
- [ ] Tests RTL + capture clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné 2 184 utilisateurs actifs J1, quand la carte s'affiche, alors « 2 184 » et « +8,2 % vs hier » en vert sont visibles.
- [ ] Étant donné 18 signalements (+5), quand la carte s'affiche, alors la tendance est rouge malgré la hausse.
- [ ] Étant donné le sélecteur sur « 7 j », quand je clique « 30 j », alors l'URL contient `range=30d` et la série est rechargée.
- [ ] Étant donné le survol d'un point, quand le curseur s'arrête, alors un tooltip liste J1, J7 et J30 de la date.
- [ ] Étant donné le thème sombre, quand la page s'affiche, alors les courbes restent contrastées.

## 🧪 Tests à écrire

- [ ] StatsCard.test.tsx : tons de tendance
- [ ] ActiveUsersChart.test.tsx : légende J1/J7/J30
- [ ] format.test.ts : « 2 184 », « +8,2 % », « −3 »
- [ ] SuperAdminDashboard.test.tsx : 4 KPI (MSW)
- [ ] DashboardPage.test.tsx : range synchronisé avec l'URL

## ♿ Accessibilité et i18n

- Graphique accompagné d'un tableau masqué `sr-only` des valeurs
- Tendance exprimée aussi en texte (« en hausse de 8,2 % »)

## 🔗 Dépendances

À réaliser après : `ADM-WB-01` · `ADM-WB-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.1
- CDC Admin §5.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
