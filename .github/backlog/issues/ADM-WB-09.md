> **ADM-WB-09** · Écran · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

WB-04 « Chargement des indicateurs… » montre la structure complète de la page en squelettes : 4 cartes KPI, un grand panneau gauche et un panneau droit à 4 lignes.

## ✅ Objectif

Afficher des squelettes qui préservent la mise en page afin d'éviter tout saut de contenu (CLS).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-04` — Dashboard — chargement
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_light.webp?raw=true' width='330' alt='WB-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_dark.webp?raw=true' width='330' alt='WB-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_light.webp?raw=true' width='330' alt='WB-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_dark.webp?raw=true' width='330' alt='WB-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Chargement des indicateurs… »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22)

## 📐 Règles de gestion

- Sous-titre remplacé par « Chargement des indicateurs… » ; actions Export/Période masquées.
- 4 cartes de hauteur ≈ 108 px avec 3 barres grises (libellé court, valeur large, tendance) ; panneau large (≈ 2/3) avec barre de titre + bloc 200 px ; panneau droit avec 4 lignes de 44 px.
- Animation de balayage (shimmer) 1,4 s ; remplacée par un fond statique sous `prefers-reduced-motion`.
- Squelettes par rôle : mêmes proportions que la mise en page du rôle (content-manager : 2 panneaux ; modérateur : tableau + accès rapide).

## 🔄 Comportement et états

- Squelette affiché tant qu'aucune donnée n'est en cache ; si des données périmées existent, elles restent visibles (stale-while-revalidate) sans squelette.
- Squelette maximal 10 s puis bascule vers l'état d'erreur (timeout axios 20 s → erreur widget à 20 s).
- `aria-busy="true"` sur la région, annonce « Chargement des indicateurs » (live polite).

## 🛠️ Tâches

- [ ] Étendre `src/components/ui/skeleton.tsx` : variante `shimmer`.
- [ ] Créer `src/components/dashboard/DashboardSkeleton.tsx` (`role` en prop).
- [ ] Créer `StatsCardSkeleton`, `PanelSkeleton`.
- [ ] Brancher sur `isPending` des hooks (pas `isFetching`).
- [ ] Ajouter la keyframe `shimmer` dans `tailwind.config.ts`.
- [ ] Tests RTL + capture clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné un premier chargement, quand les requêtes sont en cours, alors 4 squelettes de cartes et 2 panneaux sont rendus.
- [ ] Étant donné des données en cache, quand je reviens sur la page, alors aucun squelette n'apparaît.
- [ ] Étant donné reduced-motion, quand le squelette s'affiche, alors aucune animation ne tourne.
- [ ] Étant donné la fin du chargement, quand les données arrivent, alors la hauteur de page ne varie pas de plus de 8 px.

## 🧪 Tests à écrire

- [ ] DashboardSkeleton.test.tsx : structure par rôle
- [ ] DashboardSkeleton.test.tsx : aria-busy
- [ ] DashboardPage.test.tsx : pas de squelette avec cache
- [ ] Playwright : mesure CLS < 0,1

## ♿ Accessibilité et i18n

- Texte « Chargement des indicateurs… » dans une région `aria-live="polite"`

## 🔗 Dépendances

À réaliser après : `ADM-WB-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §7.6
- CDC Admin §9.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
