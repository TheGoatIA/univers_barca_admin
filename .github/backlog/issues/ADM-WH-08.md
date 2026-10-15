> **ADM-WH-08** · Écran · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

LogsExplorerPage permet de rechercher dans les logs (Winston → Graylog, conservation 90 jours). Maquette : barre « Rechercher… », filtres Service : api, Niveau : ≥ warn, Dernières 24 h, champ traceId, bouton « Ouvrir dans Graylog », table Horodatage / Niveau / Service / Message / traceId.

## ✅ Objectif

Offrir une recherche filtrée paginée côté serveur, lisible, des logs applicatifs.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-03` — Explorateur de logs
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_light.webp?raw=true' width='330' alt='WH-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__desktop_dark.webp?raw=true' width='330' alt='WH-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_light.webp?raw=true' width='330' alt='WH-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-03_explorateur-de-logs__tablet_dark.webp?raw=true' width='330' alt='WH-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Logs » · « Explorateur de logs » · « Données personnelles masquées · conservation 90 jours » · « Ouvrir dans Graylog » · « Rechercher… » · « Service : api » · « Niveau : ≥ warn » · « Dernières 24 h » · « traceId: 9f3a21c8… » · « Horodatage » · « Niveau »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-16%5D%22) · [API-PLAT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-24%5D%22) · [API-PLAT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-25%5D%22) · [API-PLAT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-54%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Filtres CDC §4.7.1 : service (api, jobs, auth…), niveau (debug/info/warn/error, « ≥ warn »), plage de dates (1 h, 24 h, 7 j, personnalisée ≤ 90 jours), traceId (8 à 32 hex), texte libre.
- Filtres persistés dans l'URL (CDC §4.10) ; recherche texte debounce 300 ms.
- Pagination serveur (50 lignes par page), tri horodatage décroissant ; jamais de chargement complet.
- Niveaux : ERROR rouge, WARN jaune, INFO bleu (badge + texte).
- Horodatage monospace précis à la milliseconde « 15 oct. 09:41:12.381 ».

## 🔄 Comportement et états

- Clic sur un traceId : filtre la liste sur ce traceId (corrélation) ; copier au clic droit/bouton.
- Ligne dépliable : détail JSON du log (champs masqués visibles).
- Vide : « Aucun log pour ces filtres » + Réinitialiser les filtres ; erreur : ErrorState.
- Bouton « Ouvrir dans Graylog » : lien contextualisé (query, plage) vers VITE_GRAYLOG_URL, ou masqué si absent (arbitrage CDC §4.7.1).

## 🛠️ Tâches

- [ ] Créer `pages/LogsExplorerPage.tsx`, `components/LogFilters.tsx`, `LogsTable.tsx`, `LogLevelBadge.tsx`.
- [ ] Hook `useLogFilters` (URL <-> état, validation Zod du traceId).
- [ ] Construire l'URL Graylog contextualisée (`buildGraylogUrl`).
- [ ] Ligne dépliable avec `<pre>` échappé (aucun dangerouslySetInnerHTML).
- [ ] Pagination partagée du DataTable.
- [ ] Fonction de copie du traceId dans le presse-papiers avec toast.
- [ ] Tests MSW sur 3 pages de résultats.

## ✔️ Critères d'acceptation

- [ ] Étant donné Service=api et Niveau ≥ warn, alors seules les lignes WARN/ERROR du service api sont demandées.
- [ ] Étant donné un clic sur 9f3a21c8, alors le filtre traceId est appliqué et l'URL mise à jour.
- [ ] Étant donné 0 résultat, alors l'état vide propose Réinitialiser.
- [ ] Étant donné un message contenant du HTML, alors il est affiché échappé.

## 🧪 Tests à écrire

- [ ] Test composant : LogFilters synchronise l'URL
- [ ] Test unitaire : validation traceId
- [ ] Test composant : LogLevelBadge
- [ ] Test page : état vide avec reset
- [ ] Test sécurité : message HTML échappé

## ♿ Accessibilité et i18n

- Table avec caption masquée « Résultats des logs »
- Niveaux annoncés en texte

## 🔗 Dépendances

À réaliser après : `ADM-WH-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7.1
- CDC Backend §6.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
