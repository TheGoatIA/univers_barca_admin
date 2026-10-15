> **ADM-WH-14** · Performance · Priorité **P2** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Santé et files se rafraîchissent toutes les 30 s ; il faut éviter requêtes inutiles et annonces bruyantes.

## ✅ Objectif

Mettre en pause le polling hors focus et annoncer discrètement les changements critiques.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

#### `WH-02` — Files d’attente BullMQ
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true' width='330' alt='WH-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true' width='330' alt='WH-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true' width='330' alt='WH-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true' width='330' alt='WH-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Files d’attente » · « Files d’attente BullMQ » · « Jobs persistés et idempotents · relance manuelle des échecs » · « Actualiser » · « calendar-sync » · « En attente » · « Échecs » · « Terminés » · « notifications »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-06%5D%22) · [ADM-WH-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-07%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- refetchIntervalInBackground=false : pas de requête quand l'onglet est caché.
- Bouton « Suspendre l'actualisation » (préférence en mémoire).
- Seul un changement de statut global (ex. Opérationnel → Dégradé) est annoncé via live region polite.
- Sur erreur réseau, backoff 30 s → 60 s → 120 s.

## 🔄 Comportement et états

- Retour au premier plan : refetch immédiat si dernière donnée > 30 s.

## 🛠️ Tâches

- [ ] Créer hook `useVisibilityPolling`.
- [ ] Ajouter live region `StatusAnnouncer`.
- [ ] Interrupteur « Actualisation auto » dans l'en-tête de page.
- [ ] Tests avec document.visibilityState simulé.
- [ ] Documenter le comportement dans docs/ARCHITECTURE.md.

## ✔️ Critères d'acceptation

- [ ] Étant donné un onglet caché, alors aucune requête n'est émise.
- [ ] Étant donné un changement de statut, alors la live region est mise à jour une fois.
- [ ] Étant donné un retour au premier plan après 2 min, alors un refetch immédiat est lancé.

## 🧪 Tests à écrire

- [ ] Test hook : pause en arrière-plan
- [ ] Test : backoff exponentiel
- [ ] Test composant : live region

## ♿ Accessibilité et i18n

- aria-live=polite uniquement sur le statut global

## 🔗 Dépendances

À réaliser après : `ADM-WH-03` · `ADM-WH-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.1, §9.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
