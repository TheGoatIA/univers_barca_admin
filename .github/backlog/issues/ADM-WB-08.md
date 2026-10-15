> **ADM-WB-08** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Les trois variantes de maquette partagent un en-tête avec « Export CSV » et « 7 derniers jours ». Il faut un registre unique de widgets par rôle, un sélecteur de période et un export CSV restreint aux rôles autorisés (CDC §6.5).

## ✅ Objectif

Centraliser la composition par rôle et fournir l'export CSV des indicateurs affichés.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-01` — Dashboard — super-admin
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true' width='330' alt='WB-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true' width='330' alt='WB-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true' width='330' alt='WB-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true' width='330' alt='WB-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bonjour Camille, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % vs hier » · « Signalements en attente » · « +5 depuis hier » · « File BullMQ » · « 3 jobs » · « 0 en échec »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-04%5D%22) · [ADM-WB-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-05%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

#### `WB-02` — Dashboard — content-manager
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true' width='330' alt='WB-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true' width='330' alt='WB-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true' width='330' alt='WB-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true' width='330' alt='WB-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Bonjour Léa, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Fiches joueurs publiées » · « 64 / 71 » · « 7 incomplètes » · « Questions IA à valider » · « +4 depuis hier » · « Anecdotes planifiées » · « 9 jours non couverts » · « Taux de réussite moyen quiz » · « 63 % » · « +1,2 pt » · « Calendrier éditorial · à venir » · « Lun. 19 oct. » · « Le but de Koeman à Wembley » · « Planifié » · « Mar. 20 oct. » · « Aucun contenu » · « À programmer » · « Mer. 21 oct. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-06%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WB-03` — Dashboard — modérateur
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true' width='330' alt='WB-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true' width='330' alt='WB-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true' width='330' alt='WB-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true' width='330' alt='WB-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Bonjour Karim, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Signalements en attente » · « 6 urgents » · « Traités aujourd’hui » · « +12 vs hier » · « Délai moyen de traitement » · « 1 h 12 » · « −9 min » · « Groupes à valider » · « 2 depuis hier » · « À traiter en priorité » · « File complète » · « Gravité » · « Il y a » · « Message · Culés Paris » · « Urgent » · « 12 min » · « Pseudo · xX_haine_Xx » · « À vérifier »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-07%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22)

## 📐 Règles de gestion

- Registre `DASHBOARD_LAYOUTS: Record<AdminRole, WidgetSlot[][]>` : super-admin (4 KPI, graphique + accès rapide, santé + contenus incomplets + dernières actions), content-manager (4 KPI, calendrier + contenus incomplets), moderator (4 KPI, priorités + accès rapide).
- Menu « 7 derniers jours » : choix 7 jours / 30 jours (défaut 7 j dans le bouton, graphique 30 j) ; mémorisé par administrateur (`localStorage`, CDC §9.7).
- « Export CSV » : fichier `tableau-de-bord_<role>_<AAAA-MM-JJ>.csv` (séparateur `;`, UTF-8 avec BOM pour Excel, décimales à virgule) contenant libellé, valeur, tendance de chaque KPI visible ; généré côté client à partir des données déjà chargées, ou `GET /admin/dashboard/export` pour les séries volumineuses.
- L'export est journalisé dans l'audit (`DASHBOARD_EXPORTED`).

## 🔄 Comportement et états

- Le bouton Export est désactivé pendant le chargement et en cas d'erreur totale.
- Les widgets en erreur sont exportés avec la valeur « Indisponible ».
- Un rôle ne peut exporter que les widgets qu'il voit.

## 🛠️ Tâches

- [ ] Créer `src/lib/dashboardLayouts.ts` et `src/components/dashboard/DashboardGrid.tsx`.
- [ ] Créer `src/components/dashboard/PeriodMenu.tsx` (Radix DropdownMenu).
- [ ] Créer `src/lib/csv.ts` (`toCsv(rows, { sep: ';', bom: true })`) réutilisé pour les exports de listes.
- [ ] Créer `src/hooks/useDashboardExport.ts`.
- [ ] Ajouter `dashboardPrefs` à `uiStore` (persisté).
- [ ] Documenter l'ajout d'un widget (3 étapes) dans `docs/ARCHITECTURE.md`.
- [ ] Tests unitaires.

## ✔️ Critères d'acceptation

- [ ] Étant donné un moderator, quand le registre est lu, alors il ne contient aucun widget technique.
- [ ] Étant donné l'export, quand je clique, alors un fichier `.csv` UTF-8 BOM avec `;` est téléchargé.
- [ ] Étant donné la période « 30 jours », quand je recharge la page, alors elle est conservée.
- [ ] Étant donné un widget en erreur, quand j'exporte, alors la ligne contient « Indisponible ».

## 🧪 Tests à écrire

- [ ] csv.test.ts : échappement des guillemets, `;`, retours ligne et BOM
- [ ] dashboardLayouts.test.ts : 3 rôles
- [ ] PeriodMenu.test.tsx : persistance
- [ ] useDashboardExport.test.tsx : nom de fichier daté

## 🔗 Dépendances

À réaliser après : `ADM-WB-01` · `ADM-WB-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.1
- CDC Admin §6.5
- CDC Admin §9.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
