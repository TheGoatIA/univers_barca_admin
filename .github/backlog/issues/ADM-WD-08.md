> **ADM-WD-08** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Admin §4.3 impose la journalisation de toute modification et résolution de conflit (valeur avant/après, auteur, horodatage) pour auditer une contestation d'utilisateur sur l'exactitude d'une donnée. L'onglet « Historique des modifications » de la fiche les expose en lecture seule, alimenté par la collection AuditLog filtrée sur entityType='match'.

## ✅ Objectif

Afficher la chronologie immuable des changements d'un match (qui, quand, quoi, avant → après, justification éventuelle).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-02` — Détail d’un match
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true' width='330' alt='WD-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true' width='330' alt='WD-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true' width='330' alt='WD-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true' width='330' alt='WD-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça – Real Madrid » · « Programmé » · « Liga · Journée 11 · Sam. 24 oct. 2026 · 21:00 CEST · Estadi Olímpic » · « Modifier » · « Saisir le résultat » · « Informations » · « Compositions » · « Événements » · « Historique des modifications »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-05%5D%22) · [ADM-WD-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-06%5D%22) · [ADM-WD-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-07%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

#### `WD-03` — Résolution de conflit de synchronisation
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_light.webp?raw=true' width='330' alt='WD-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_dark.webp?raw=true' width='330' alt='WD-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_light.webp?raw=true' width='330' alt='WD-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_dark.webp?raw=true' width='330' alt='WD-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bayern – Barça » · « Conflit » · « Résoudre le conflit de synchronisation » · « Bayern Munich – FC Barcelone · Ligue des champions · Phase de ligue J3 » · « Ignorer pour l’instant » · « L'API football a détecté une modification qui diffère d'une correction éditoriale. Choisis explicitement la valeur à conserver : la décision est journalisée (avant/après, auteur, horodatage). » · « Champ » · « Valeur API football » · « Valeur éditoriale actuelle » · « Action » · « Heure du coup d’envoi »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-10%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22)

## 📐 Règles de gestion

- Chaque entrée : horodatage (JJ/MM/AAAA HH:mm), auteur (adminName + rôle), action (MATCH_UPDATED, MATCH_CONFLICT_RESOLVED, MATCH_SYNC_APPLIED, HISTORICAL_MATCH_CREATED), champ, valeur avant, valeur après.
- Tri antéchronologique, pagination par curseur (20 entrées par requête) avec bouton « Charger plus ».
- Les synchronisations automatiques apparaissent avec l'auteur « Synchronisation API football » (adminId null).
- Aucun bouton de modification ou suppression : l'historique est immuable (CDC Admin §6.4).
- Les valeurs de date sont affichées en UTC et en fuseau local ; les valeurs JSON complexes sont affichées sous forme de différence lisible (diff champ à champ).

## 🔄 Comportement et états

- Chargement : 5 lignes squelette.
- Vide : « Aucune modification enregistrée » (match jamais édité).
- Filtre rapide par type d'action (Tous · Éditions · Conflits · Synchro).
- Accessible aux deux rôles content-manager et super-admin ; le super-admin voit un lien « Voir dans le journal d'audit ».

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/audit-logs` | Journal filtré par entité | ?entityType=match&entityId=:id&limit=20&cursor= | {items:[{id,createdAt,adminId,adminName,action,entityType,entityId,before,after,justification}],nextCursor} |

## 🗄️ Données

- AuditLog (adminId, adminName, action, entityType, entityId, before, after, justification, ip, createdAt)

## 🛠️ Tâches

- [ ] Ajouter auditApi.list({entityType, entityId, cursor}) dans src/api/audit.api.ts (réutilisable par WE, WF, WG).
- [ ] Créer src/hooks/useAuditTrail.ts (useInfiniteQuery).
- [ ] Créer src/components/matches/MatchHistoryTab.tsx.
- [ ] Créer src/components/shared/AuditEntry.tsx (affichage avant → après).
- [ ] Créer src/lib/diff.ts : diffObjects(before, after) pour lister les champs modifiés.
- [ ] Créer le filtre par type d'action (chips).
- [ ] Masquer le champ ip pour les non super-admin.
- [ ] Lien conditionnel vers /journal-audit?entityId=… pour super-admin.

## ✔️ Critères d'acceptation

- [ ] Étant donné un match modifié deux fois, quand j'ouvre l'onglet, alors deux entrées sont listées, la plus récente en premier.
- [ ] Étant donné une résolution de conflit « Accepter l'API », quand j'affiche l'entrée, alors la valeur avant (20:00) et après (21:00) sont visibles avec l'auteur et l'horodatage.
- [ ] Étant donné un content-manager, quand il consulte l'historique, alors l'adresse IP n'est pas affichée.
- [ ] Étant donné 45 entrées, quand je clique « Charger plus », alors les 20 suivantes s'ajoutent sans doublon.

## 🧪 Tests à écrire

- [ ] diff.test.ts : diff champ à champ de deux objets imbriqués.
- [ ] MatchHistoryTab.test.tsx : ordre antéchronologique et état vide.
- [ ] AuditEntry.test.tsx : formats avant/après pour date, nombre et texte.
- [ ] useAuditTrail.test.tsx : pagination par curseur.

## ♿ Accessibilité et i18n

- Liste sémantique <ol> avec <time datetime>.
- Avant/après annoncés « Avant : 20:00, après : 21:00 » pour lecteurs d'écran.

## 🔗 Dépendances

À réaliser après : `ADM-WD-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.3
- CDC Admin §6.4
- CDC Backend §3.11 (journal immuable)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
