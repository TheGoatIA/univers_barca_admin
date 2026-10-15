> **ADM-WH-13** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC §4.1 prévoit sur le tableau de bord super-admin deux widgets : « Santé technique résumée » (taux d'erreur, disponibilité, état des files) et « Dernières actions d'administration » (journal d'audit résumé).

## ✅ Objectif

Réutiliser les hooks de supervision pour alimenter ces widgets visibles uniquement du super-admin.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

#### `WH-05` — Journal d’audit
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true' width='330' alt='WH-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true' width='330' alt='WH-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true' width='330' alt='WH-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true' width='330' alt='WH-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Piste immuable de toutes les actions d’administration » · « Exporter CSV » · « Rechercher… » · « Administrateur » · « Type d’action » · « Entité » · « Période : 7 jours » · « Horodatage » · « Avant → après » · « Justification » · « 15 oct. 09:41 »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-11%5D%22) · [ADM-WH-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-12%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- Widget santé : statut global (StatusBadge), disponibilité, erreur 5xx, nombre d'alertes ; clic → /supervision.
- Widget actions : 5 dernières entrées d'audit (admin, action, il y a X min) ; lien « Tout voir » → /journal-audit.
- Invisibles pour content-manager et moderator.
- staleTime 30 s, pas de refetchInterval sur le tableau de bord.

## 🔄 Comportement et états

- Chargement : skeleton ; erreur : mini ErrorState sans casser le reste du dashboard.

## 🛠️ Tâches

- [ ] Créer `HealthSummaryWidget.tsx` et `RecentAdminActionsWidget.tsx` dans features/observability/components.
- [ ] Intégrer dans `DashboardPage.tsx` derrière `usePermissions('supervision')`.
- [ ] Réutiliser `useHealth('1h')` et `useAuditLog({limit:5})`.
- [ ] Ajouter le test de rôle (moderator/content-manager sans widgets).
- [ ] Formater « il y a X min » avec date-fns locale fr.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, alors les deux widgets apparaissent.
- [ ] Étant donné un moderator, alors ils n'apparaissent pas.
- [ ] Étant donné une erreur API, alors seul le widget affiche l'erreur.

## 🧪 Tests à écrire

- [ ] Test composant : widgets masqués par rôle
- [ ] Test composant : 5 dernières actions
- [ ] Test : lien vers /supervision

## 🔗 Dépendances

À réaliser après : `ADM-WH-03` · `ADM-WH-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
