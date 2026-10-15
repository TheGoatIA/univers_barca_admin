> **ADM-WB-07** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WB-03 (Karim Benali, modérateur) met en avant la charge de modération : signalements en attente (dont urgents), traités aujourd'hui, délai moyen de traitement, groupes à valider, et un tableau des signalements prioritaires.

## ✅ Objectif

Composer la variante modérateur avec un mini-tableau triable alimenté par le filtrage automatique de premier niveau.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-03` — Dashboard — modérateur
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true' width='330' alt='WB-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true' width='330' alt='WB-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true' width='330' alt='WB-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true' width='330' alt='WB-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Bonjour Karim, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Signalements en attente » · « 6 urgents » · « Traités aujourd’hui » · « +12 vs hier » · « Délai moyen de traitement » · « 1 h 12 » · « −9 min » · « Groupes à valider » · « 2 depuis hier » · « À traiter en priorité » · « File complète » · « Gravité » · « Il y a » · « Message · Culés Paris » · « Urgent » · « 12 min » · « Pseudo · xX_haine_Xx » · « À vérifier »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22)

## 📐 Règles de gestion

- KPI : « Signalements en attente » 18 · ↓ 6 urgents (rouge) ; « Traités aujourd'hui » 27 · ↑ +12 vs hier (vert) ; « Délai moyen de traitement » 1 h 12 · ↑ −9 min (vert) ; « Groupes à valider » 4 · 2 depuis hier.
- Tableau « À traiter en priorité » (lien « File complète » → `/moderation`) : colonnes « Contenu » (ex. « Message · Culés Paris », « Pseudo · xX_haine_Xx »), « Gravité » (pastille Urgent rouge / À vérifier jaune / Faible gris), « Il y a » (12 min, 41 min, 2 h) ; en-têtes triables avec icône ⇅.
- Tri par défaut : gravité décroissante (Urgent > À vérifier > Faible) puis ancienneté ; 5 lignes maximum ; clic sur une ligne → `/moderation/:reportId`.
- Gravités = étiquettes automatiques du filtrage de premier niveau (CDC §4.8.2) : Faible = priorité basse, À vérifier = moyenne, Urgent = haute avec mise en évidence.

## 🔄 Comportement et états

- Le contenu signalé est affiché en texte échappé (jamais en HTML) et tronqué à 60 caractères.
- Le tri se fait côté client sur les 5 lignes ; la file complète fait le tri serveur.
- Rafraîchissement automatique toutes les 30 s (fraîcheur critique, CDC §2.4).
- Accès rapide : uniquement les entrées autorisées au modérateur (Signalements, Groupes à valider) ; les maquettes montrent aussi « Questions IA à valider » et « Contenus incomplets », contraires à la matrice CDC §3.1 — ne pas les afficher.

## 🛠️ Tâches

- [ ] Créer `src/pages/dashboard/ModeratorDashboard.tsx`.
- [ ] Créer `src/components/dashboard/PriorityReportsTable.tsx` (TanStack Table, tri client, `SeverityBadge`).
- [ ] Créer `src/components/shared/SeverityBadge.tsx` (urgent/à vérifier/faible) réutilisable par le module Modération.
- [ ] Hooks `useReportsPending`, `useReportsProcessedToday`, `useAvgHandlingTime`, `useGroupsToValidate`, `usePriorityReports` (staleTime 30 s).
- [ ] Formatage durée « 1 h 12 » (`formatDurationFr`).
- [ ] Variante `QuickAccessPanel` filtrée par rôle.
- [ ] Tests RTL + capture.

## ✔️ Critères d'acceptation

- [ ] Étant donné trois signalements, quand le tableau s'affiche, alors l'ordre est Urgent, À vérifier, Faible.
- [ ] Étant donné le clic sur l'en-tête « Il y a », quand il est cliqué, alors les lignes sont triées par ancienneté croissante puis décroissante.
- [ ] Étant donné un moderator, quand le dashboard charge, alors « Questions IA à valider » n'apparaît pas dans l'accès rapide.
- [ ] Étant donné 4 320 s de délai moyen, quand la carte s'affiche, alors « 1 h 12 » est affiché.

## 🧪 Tests à écrire

- [ ] PriorityReportsTable.test.tsx : tri par défaut et par colonne
- [ ] SeverityBadge.test.tsx : 3 gravités
- [ ] format.test.ts : formatDurationFr
- [ ] ModeratorDashboard.test.tsx : widgets autorisés uniquement

## ♿ Accessibilité et i18n

- En-têtes triables `aria-sort`
- Gravité exprimée en texte + point coloré

## 🔗 Dépendances

À réaliser après : `ADM-WB-01` · `ADM-WB-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.1
- CDC Admin §4.6
- CDC Admin §4.8.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
