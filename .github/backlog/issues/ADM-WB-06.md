> **ADM-WB-06** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WB-02 adapte le tableau de bord au rôle content-manager (Léa Martin) : aucun indicateur de modération ni technique. On y voit les fiches publiées, les questions IA à valider, les anecdotes planifiées, le taux de réussite moyen du quiz, le calendrier éditorial à venir et les contenus incomplets.

## ✅ Objectif

Composer la variante content-manager à partir des widgets du registre.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-02` — Dashboard — content-manager
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true' width='330' alt='WB-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true' width='330' alt='WB-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true' width='330' alt='WB-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true' width='330' alt='WB-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Bonjour Léa, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Fiches joueurs publiées » · « 64 / 71 » · « 7 incomplètes » · « Questions IA à valider » · « +4 depuis hier » · « Anecdotes planifiées » · « 9 jours non couverts » · « Taux de réussite moyen quiz » · « 63 % » · « +1,2 pt » · « Calendrier éditorial · à venir » · « Lun. 19 oct. » · « Le but de Koeman à Wembley » · « Planifié » · « Mar. 20 oct. » · « Aucun contenu » · « À programmer » · « Mer. 21 oct. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

## 📐 Règles de gestion

- KPI : « Fiches joueurs publiées » 64 / 71 · « 7 incomplètes » ; « Questions IA à valider » 12 · ↓ +4 depuis hier (rouge) ; « Anecdotes planifiées » 21 · ↓ 9 jours non couverts (rouge) ; « Taux de réussite moyen quiz » 63 % · ↑ +1,2 pt (vert).
- Panneau « Calendrier éditorial · à venir » : 4 jours consécutifs avec date (« Lun. 19 oct. »), titre de l'anecdote (« Le but de Koeman à Wembley », « Naissance de Gavi ») ou « Aucun contenu » grisé, et statut pastille « Planifié » (vert) / « À programmer » (jaune) ; clic sur un jour vide → création d'une anecdote pré-datée (lien `/contenu/nouveau?date=2026-10-20`).
- Panneau « Contenus incomplets » (même composant que super-admin, 3 lignes + « Tout voir »).
- Aucun panneau Accès rapide dans cette maquette ; les liens se font par KPI cliquable (KPI → liste filtrée).

## 🔄 Comportement et états

- Le dashboard ne doit jamais interroger les widgets de modération ni de supervision (403 sinon).
- Calendrier : 4 prochains jours à partir d'aujourd'hui, fuseau Europe/Paris (CDC : France, équipe francophone), dates `EEE d MMM` en français abrégé.
- « Jours non couverts » = jours sans anecdote sur les 30 prochains jours.
- Les KPI cliquables mènent : fiches → `/joueurs`, questions IA → `/quiz/validation`, anecdotes → `/contenu/calendrier`.

## 🛠️ Tâches

- [ ] Créer `src/pages/dashboard/ContentManagerDashboard.tsx`.
- [ ] Créer `src/components/dashboard/EditorialCalendarPanel.tsx` + `EditorialDayRow.tsx` + `StatusPill.tsx`.
- [ ] Ajouter les hooks `usePlayersPublished`, `useAiQuestionsPending`, `useEditorialPlanned`, `useQuizSuccessRate`, `useEditorialCalendar`.
- [ ] Gérer les liens vers des modules non encore livrés via `ModulePage` (pas de 404).
- [ ] Formatage de date `formatEditorialDay` dans `src/lib/format.ts`.
- [ ] Tests RTL + capture.

## ✔️ Critères d'acceptation

- [ ] Étant donné un content-manager, quand le tableau de bord s'affiche, alors aucun indicateur de modération n'apparaît.
- [ ] Étant donné 64 fiches publiées sur 71, quand la carte s'affiche, alors « 64 / 71 » et « 7 incomplètes » sont visibles.
- [ ] Étant donné le 20 oct. sans contenu, quand la ligne s'affiche, alors « Aucun contenu » et « À programmer » apparaissent.
- [ ] Étant donné un clic sur « Mar. 20 oct. », quand il est cliqué, alors je suis dirigé vers la création d'une anecdote datée du 2026-10-20.

## 🧪 Tests à écrire

- [ ] ContentManagerDashboard.test.tsx : widgets présents/absents
- [ ] EditorialCalendarPanel.test.tsx : statuts Planifié / À programmer
- [ ] format.test.ts : « Lun. 19 oct. »
- [ ] dashboard-roles.spec.ts (Playwright) : absence de modération

## 🔗 Dépendances

À réaliser après : `ADM-WB-01` · `ADM-WB-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.1
- CDC Admin §4.4.1
- CDC Admin §4.5.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
