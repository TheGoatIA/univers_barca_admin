> **ADM-WB-10** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WB-05 : un bandeau rouge « Certains indicateurs n'ont pas pu être chargés — L'API de supervision ne répond pas (timeout). Les autres widgets restent disponibles. » avec bouton « Réessayer ». Les cartes en échec (File BullMQ, Erreurs critiques) affichent un tiret et « Indisponible » en rouge ; les autres restent valides (2 184, +8,2 % ; 18, +5).

## ✅ Objectif

Gérer l'échec par widget, avec une bannière récapitulative et une relance ciblée.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-05` — Dashboard — erreur de chargement
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__desktop_light.webp?raw=true' width='330' alt='WB-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__desktop_dark.webp?raw=true' width='330' alt='WB-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__tablet_light.webp?raw=true' width='330' alt='WB-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-05_dashboard-erreur-de-chargement__tablet_dark.webp?raw=true' width='330' alt='WB-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Certains indicateurs n’ont pas pu être chargés » · « L'API de supervision ne répond pas (timeout). Les autres widgets restent disponibles. » · « Réessayer » · « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « Indisponible » · « Erreurs critiques »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22)

## 📐 Règles de gestion

- Bannière affichée dès qu'au moins un widget est en erreur : titre gras, détail du motif (« L'API de supervision ne répond pas (timeout) » pour timeout/réseau ; « Le service a renvoyé une erreur (500) » pour 5xx), bouton secondaire « Réessayer » avec icône rotation.
- Carte en erreur : icône + libellé conservés, valeur remplacée par « — » (tiret épais gris), pied « Indisponible » rouge.
- « Réessayer » : `refetch` des seuls widgets en erreur ; pendant le rechargement le bouton affiche un spinner et est désactivé.
- Si tous les widgets échouent : même bannière, titre « Le tableau de bord n'a pas pu être chargé », plus de grille de cartes mais l'EmptyState d'erreur avec traceId.

## 🔄 Comportement et états

- Pas de retry automatique sur 4xx ; 2 retries exponentiels (1 s, 2 s) sur timeout/5xx avant d'afficher l'erreur.
- La bannière disparaît automatiquement quand tous les widgets sont rétablis.
- Erreur 403 sur un widget (rôle) : le widget est simplement masqué, pas d'erreur.

## 🛠️ Tâches

- [ ] Créer `src/components/dashboard/PartialErrorBanner.tsx` (props : `failedWidgets`, `onRetry`, `retrying`).
- [ ] Utiliser `useQueries` ou `queryClient.isFetching/ getQueryState` pour agréger les erreurs par `queryKey` `['dashboard', ...]`.
- [ ] Ajouter `unavailable` à `StatsCard`.
- [ ] Fonction `describeError(error)` (timeout/5xx/réseau) dans `src/lib/apiError.ts`.
- [ ] Tests MSW simulant un timeout sur `queue-health`.
- [ ] Capture clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné `queue-health` en timeout, quand le dashboard charge, alors la bannière et deux cartes « Indisponible » s'affichent, les autres restent valides.
- [ ] Étant donné le clic sur « Réessayer », quand `queue-health` répond OK, alors la bannière disparaît.
- [ ] Étant donné un 403 sur un widget, quand il se produit, alors le widget n'est pas rendu et aucune bannière n'apparaît.
- [ ] Étant donné tous les widgets en échec, quand la page charge, alors l'état d'erreur global est affiché avec le traceId.

## 🧪 Tests à écrire

- [ ] PartialErrorBanner.test.tsx : messages timeout/5xx
- [ ] StatsCard.test.tsx : état unavailable
- [ ] DashboardPage.test.tsx : relance ciblée (MSW)
- [ ] Playwright dashboard-error.spec.ts : route.abort sur un widget

## ♿ Accessibilité et i18n

- Bannière `role="alert"`
- Bouton Réessayer avec `aria-busy` pendant la relance

## 🔗 Dépendances

À réaliser après : `ADM-WB-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §2.5
- CDC Admin §7.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
