> **ADM-WH-11** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Le CDC §6.4 définit une piste d'audit homogène (horodatage, administrateur, type d'action, entité, avant/après, justification). Maquette : « Piste immuable de toutes les actions d'administration », bouton « Exporter CSV », filtres Administrateur / Type d'action / Entité / Période : 7 jours, pagination « 1–6 sur 1920 » (25 pages).

## ✅ Objectif

Fournir une vue consultable et filtrable, base de référence en cas de contestation d'une décision.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-05` — Journal d’audit
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true' width='330' alt='WH-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true' width='330' alt='WH-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true' width='330' alt='WH-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true' width='330' alt='WH-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Piste immuable de toutes les actions d’administration » · « Exporter CSV » · « Rechercher… » · « Administrateur » · « Type d’action » · « Entité » · « Période : 7 jours » · « Horodatage » · « Avant → après » · « Justification » · « 15 oct. 09:41 »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-12%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- Colonnes : Horodatage (« 15 oct. 09:41 », tri desc par défaut), Administrateur, Type d'action (monospace : PLAYER_PUBLISHED, USER_SUSPENDED, FEATURE_FLAG_TOGGLED, REPORT_RESOLVED, CONFLICT_RESOLVED, AI_QUOTA_UPDATED), Entité (player#0008, user#u_41, report#R-20391, match#1208, quota.wallpapers), Avant → après (« Prêt → Publié », « 20:00 → 21:00 »), Justification (« — » si vide).
- Pagination serveur systématique > 50 lignes (CDC §9.4) ; filtres persistés dans l'URL.
- Aucune action d'édition ou de suppression : lecture seule (immuable).
- Justification obligatoire côté saisie pour bannissement/suspension : visible ici.

## 🔄 Comportement et états

- Période : 24 h, 7 jours (défaut), 30 jours, personnalisée.
- Recherche texte sur entité/justification (debounce 300 ms).
- Vide sans filtre vs vide avec filtres (bouton Réinitialiser) – états différenciés (CDC §9.4).
- Clic sur une ligne : panneau latéral avec le JSON avant/après complet.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/audit-log` | Piste d'audit (à confirmer côté API) | ?page=1&limit=50&adminId&action&entityType&from&to&q | {items:[{ts,adminName,action,entity,before,after,justification}],total:1920,…} |

## 🛠️ Tâches

- [ ] Créer `pages/AuditLogPage.tsx`, `components/AuditFilters.tsx`, `AuditTable.tsx`, `AuditDetailDrawer.tsx`.
- [ ] Mapping type d'action → libellé FR lisible (tooltip) dans `auditActions.ts`.
- [ ] Hook `useAuditFilters` (URL).
- [ ] Diff avant/après : composant `BeforeAfter` formatant booléens, statuts, nombres.
- [ ] Pagination « 1–6 sur 1920 » via composant Pagination.
- [ ] Vérifier l'absence totale de boutons mutatifs.
- [ ] Réutiliser `DataTable` avec tri serveur.

## ✔️ Critères d'acceptation

- [ ] Étant donné 1920 entrées, alors 25 pages de 50 lignes et « 1–50 sur 1920 » (ou page size choisie).
- [ ] Étant donné un filtre Administrateur=Karim Benali, alors les requêtes envoient adminId et l'URL est partageable.
- [ ] Étant donné un clic sur une ligne, alors le détail avant/après s'ouvre.
- [ ] Étant donné aucune donnée, alors « Aucune action enregistrée » est affiché.

## 🧪 Tests à écrire

- [ ] Test composant : BeforeAfter formate les valeurs
- [ ] Test hook : useAuditFilters round-trip URL
- [ ] Test page : pagination serveur
- [ ] Test page : état vide différencié
- [ ] Test axe : drawer focus trap

## ♿ Accessibilité et i18n

- Panneau latéral Radix Dialog avec fermeture Échap

## 🔗 Dépendances

À réaliser après : `ADM-WH-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.3, §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
