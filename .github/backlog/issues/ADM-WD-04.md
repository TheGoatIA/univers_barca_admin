> **ADM-WD-04** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'en-tête de la liste affiche « Synchronisation API football : dernière mise à jour il y a 6 min » et un bouton « Synchroniser ». Le CDC Backend §11.1 prévoit un indicateur de fraîcheur exposé au client et un repli sur les dernières données connues si l'API est indisponible. Le panneau « Synchronisation » de la fiche (WD-02) montre aussi « Dernière synchro », « Valeurs modifiées à la main » et « Flux calendrier .ics ».

## ✅ Objectif

Afficher la fraîcheur de la synchro en temps relatif, permettre de déclencher manuellement une synchro (job BullMQ football-sync) et exposer les indicateurs de synchro par match.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-01` — Liste des matchs
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true' width='330' alt='WD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true' width='330' alt='WD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true' width='330' alt='WD-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true' width='330' alt='WD-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs et compétitions » · « Synchronisation API football : dernière mise à jour il y a 6 min » · « Synchroniser » · « Match historique » · « À venir » · « En direct » · « Historiques » · « Conflits » · « Rechercher… »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-02%5D%22) · [ADM-WD-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-03%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-22%5D%22) · [API-FOOT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-23%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-25%5D%22) · [API-FOOT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-26%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-31%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22)

#### `WD-02` — Détail d’un match
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true' width='330' alt='WD-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true' width='330' alt='WD-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true' width='330' alt='WD-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true' width='330' alt='WD-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça – Real Madrid » · « Programmé » · « Liga · Journée 11 · Sam. 24 oct. 2026 · 21:00 CEST · Estadi Olímpic » · « Modifier » · « Saisir le résultat » · « Informations » · « Compositions » · « Événements » · « Historique des modifications »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-05%5D%22) · [ADM-WD-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-06%5D%22) · [ADM-WD-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-07%5D%22) · [ADM-WD-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-08%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

## 📐 Règles de gestion

- La fraîcheur est calculée à partir de lastSyncAt renvoyé par GET /admin/matches/sync-status ; format relatif français (« il y a 6 min », « il y a 2 h ») rafraîchi chaque minute côté client sans nouvelle requête.
- Au-delà de 30 minutes sans synchro (hors période sans match), l'indicateur passe en avertissement jaune « Données potentiellement périmées » (seuil proposé, à confirmer) ; si l'API football est indisponible, message « API football indisponible – dernières données connues du … ».
- Le clic sur « Synchroniser » déclenche POST /admin/matches/sync : l'API enfile un job football-sync (idempotent) et répond 202 avec jobId ; le bouton est désactivé pendant le job (spinner, libellé « Synchronisation… ») avec polling du statut toutes les 3 s jusqu'à completed/failed.
- Un seul déclenchement manuel par minute (HTTP 429 côté API, message « Une synchronisation vient d'être lancée »).
- Action réservée content-manager et super-admin ; chaque déclenchement manuel est journalisé dans l'audit (type MATCH_SYNC_TRIGGERED).

## 🔄 Comportement et états

- Succès : toast « Synchronisation terminée : 3 matchs mis à jour, 1 conflit détecté ».
- Échec : toast d'erreur avec traceId, l'ancienne date de fraîcheur est conservée.
- Si des conflits sont détectés, la pastille de l'onglet Conflits et la bannière sont rafraîchies (invalidation).
- Fiche match : « Valeurs modifiées à la main » = nombre de champs dont l'édition éditoriale diffère de l'API ; « Flux calendrier .ics » = « À jour » si la dernière synchro est < 24 h (règle CDC Global §2.15 : modifications répercutées sous 24 h), sinon « En retard ».

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/matches/sync-status` | État de la dernière synchro | — | {lastSyncAt, lastStatus:'ok'\|'failed'\|'running', providerAvailable:boolean, manualOverrides:number} |
| `POST` | `/api/v1/admin/matches/sync` | Déclenche une synchronisation manuelle (job football-sync) | — | 202 {jobId} |

## 🗄️ Données

- File BullMQ football-sync
- Champ lastSyncAt (collection de configuration ou cache Redis)

## 🛠️ Tâches

- [ ] Ajouter syncStatus() et triggerSync() dans src/api/matches.api.ts.
- [ ] Créer src/hooks/useSyncStatus.ts (refetchInterval 60 s) et useTriggerSync.ts (mutation + polling du jobId).
- [ ] Créer src/components/matches/SyncFreshness.tsx (texte relatif via date-fns formatDistanceToNow locale fr + variant d'alerte).
- [ ] Créer src/components/matches/SyncButton.tsx (état repos / en cours / désactivé 60 s).
- [ ] Créer src/components/matches/SyncPanel.tsx pour la carte « Synchronisation » de WD-02.
- [ ] Gérer l'erreur 429 et l'indisponibilité fournisseur.
- [ ] Documenter dans l'issue API correspondante la nécessité du worker football-sync (aucun worker métier n'existe encore côté API) : lien dans le README du module.
- [ ] Journaliser côté client l'événement analytique « sync_manual » uniquement si un outil d'analytics admin existe (sinon ignorer).

## ✔️ Critères d'acceptation

- [ ] Étant donné lastSyncAt il y a 6 minutes, quand la page s'affiche, alors le texte « il y a 6 min » est visible et se met à jour à la minute suivante.
- [ ] Étant donné un clic sur « Synchroniser », quand le job est en cours, alors le bouton est désactivé et affiche « Synchronisation… ».
- [ ] Étant donné un second clic dans la minute, quand l'API répond 429, alors un toast explicite s'affiche sans erreur technique.
- [ ] Étant donné providerAvailable=false, quand la page s'affiche, alors un bandeau d'avertissement indique la date des dernières données connues.

## 🧪 Tests à écrire

- [ ] SyncFreshness.test.tsx : formats « il y a 6 min » / « il y a 2 h » / avertissement > 30 min.
- [ ] useTriggerSync.test.tsx : polling jusqu'à completed puis invalidation de ['matches'].
- [ ] SyncButton.test.tsx : désactivation pendant le job.
- [ ] SyncPanel.test.tsx : « Valeurs modifiées à la main » = manualOverrides.

## ♿ Accessibilité et i18n

- Zone de statut avec role=status et aria-live=polite pour l'annonce de fin de synchro.
- Bouton avec aria-busy pendant le job.

## 🔗 Dépendances

À réaliser après : `ADM-WD-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §11.1
- CDC Backend §3.2 (SyncLiveMatches)
- CDC Global §2.15 (flux .ics 24 h)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
