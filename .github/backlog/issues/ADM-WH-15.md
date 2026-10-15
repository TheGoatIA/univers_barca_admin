> **ADM-WH-15** · Tests · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC §7.5 exige un scénario E2E par module (parcours modérateur de référence inclut la vérification de la piste d'audit).

## ✅ Objectif

Couvrir de bout en bout les parcours critiques super-admin de la supervision.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-03%5D%22) · [API-PLAT-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-12%5D%22) · [API-PLAT-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-13%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-23%5D%22) · [API-PLAT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-34%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-49%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

#### `WH-02` — Files d’attente BullMQ
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true' width='330' alt='WH-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true' width='330' alt='WH-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true' width='330' alt='WH-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true' width='330' alt='WH-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Files d’attente » · « Files d’attente BullMQ » · « Jobs persistés et idempotents · relance manuelle des échecs » · « Actualiser » · « calendar-sync » · « En attente » · « Échecs » · « Terminés » · « notifications »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-06%5D%22) · [ADM-WH-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-07%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [API-PLAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-14%5D%22) · [API-PLAT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-15%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-53%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

#### `WH-03` — Explorateur de logs
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true' width='330' alt='WH-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true' width='330' alt='WH-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true' width='330' alt='WH-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true' width='330' alt='WH-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Logs » · « Explorateur de logs » · « Données personnelles masquées · conservation 90 jours » · « Ouvrir dans Graylog » · « Rechercher… » · « Service : api » · « Niveau : ≥ warn » · « Dernières 24 h » · « traceId: 9f3a21c8… » · « Horodatage » · « Niveau »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-08%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [API-PLAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-16%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-25%5D%22) · [API-PLAT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-54%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

#### `WH-04` — Consommation IA
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true' width='330' alt='WH-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true' width='330' alt='WH-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true' width='330' alt='WH-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true' width='330' alt='WH-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Usage IA » · « Consommation IA » · « Texte (assistant, quiz) et image (wallpapers) · comparée aux quotas configurés » · « Modifier les quotas » · « Dépassement anticipé du budget image » · « : au rythme actuel, le quota mensuel sera atteint le 24 octobre. » · « Texte · assistant et quiz » · « Dans le budget » · « 4,2 M » · « / 10 M tokens » · « Image · wallpapers »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-10%5D%22) · [API-IA-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-04%5D%22) · [API-IA-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-07%5D%22) · [API-IA-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-24%5D%22) · [API-IA-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-30%5D%22) · [API-PLAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-17%5D%22) · [API-PLAT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-22%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-25%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

#### `WH-05` — Journal d’audit
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true' width='330' alt='WH-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true' width='330' alt='WH-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true' width='330' alt='WH-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true' width='330' alt='WH-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Piste immuable de toutes les actions d’administration » · « Exporter CSV » · « Rechercher… » · « Administrateur » · « Type d’action » · « Entité » · « Période : 7 jours » · « Horodatage » · « Avant → après » · « Justification » · « 15 oct. 09:41 »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-11%5D%22) · [ADM-WH-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-12%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [API-PLAT-18](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-18%5D%22) · [API-PLAT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-54%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Scénario 1 : connexion super-admin → /supervision → statut visible → clic « Voir la file ».
- Scénario 2 : relance d'un job wp-7f3a21 → toast → entrée JOB_RETRIED dans le journal d'audit.
- Scénario 3 : logs filtrés par traceId 9f3a21c8.
- Scénario 4 : un moderator reçoit la page 403 sur /supervision.
- Exécution contre staging éphémère (CDC §8.1) avec comptes de démonstration.

## 🔄 Comportement et états

- Données de test seedées (jobs en échec fictifs), jamais de données de production.

## 🛠️ Tâches

- [ ] Écrire `tests/e2e/supervision.spec.ts` (page objects `SupervisionPage`, `AuditPage`).
- [ ] Fixtures de connexion par rôle (storageState).
- [ ] Helper de seed via API de test.
- [ ] Capture trace/vidéo en échec.
- [ ] Ajouter au job E2E de CI sur merge develop.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, quand il relance un job, alors l'audit contient JOB_RETRIED.
- [ ] Étant donné un moderator, alors /supervision renvoie 403 visuel.
- [ ] Étant donné un traceId, alors seules les lignes correspondantes sont listées.

## 🧪 Tests à écrire

- [ ] E2E supervision-health
- [ ] E2E retry-job-audit
- [ ] E2E logs-trace-filter
- [ ] E2E rbac-403

## 🔗 Dépendances

À réaliser après : `ADM-WH-07` · `ADM-WH-08` · `ADM-WH-11` · `ADM-WH-10` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §7.1, §7.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
