> **ADM-WH-12** · Fonctionnel · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le bouton « Exporter CSV » de WH-05 doit exporter la vue filtrée ; le CDC §6.5 prévoit des exports restreints aux rôles autorisés.

## ✅ Objectif

Télécharger un CSV UTF-8 fidèle aux filtres actifs sans charger toutes les lignes en mémoire côté client.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-05` — Journal d’audit
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_light.webp?raw=true' width='330' alt='WH-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__desktop_dark.webp?raw=true' width='330' alt='WH-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_light.webp?raw=true' width='330' alt='WH-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-05_journal-d-audit__tablet_dark.webp?raw=true' width='330' alt='WH-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Piste immuable de toutes les actions d’administration » · « Exporter CSV » · « Rechercher… » · « Administrateur » · « Type d’action » · « Entité » · « Période : 7 jours » · « Horodatage » · « Avant → après » · « Justification » · « 15 oct. 09:41 »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-09%5D%22) · [ADM-WH-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-11%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- Export généré côté serveur (stream) avec les mêmes paramètres que la liste ; plafond 100 000 lignes, au-delà message « Affinez la période ».
- CSV : séparateur « ; », UTF-8 avec BOM (Excel FR), en-têtes français, dates ISO 8601 locales.
- L'export lui-même est journalisé (AUDIT_EXPORTED).
- Protection contre l'injection de formules : préfixer par « ' » toute cellule débutant par = + - @.

## 🔄 Comportement et états

- Clic : bouton en état chargement « Export… », puis téléchargement « audit-2026-10-15.csv ».
- Erreur : toast d'erreur avec traceId.

## 🛠️ Tâches

- [ ] Utiliser le hook partagé `useCsvExport` (FND export).
- [ ] Ajouter `exportAuditCsv` (blob) dans audit.api.ts.
- [ ] Nommer le fichier avec la date courante.
- [ ] Garde de rôle super-admin.
- [ ] Tests d'intégration MSW du téléchargement.

## ✔️ Critères d'acceptation

- [ ] Étant donné des filtres actifs, quand j'exporte, alors la requête reprend ces filtres.
- [ ] Étant donné > 100 000 lignes, alors le message d'affinage s'affiche.
- [ ] Étant donné une cellule « =1+1 », alors elle est exportée neutralisée.

## 🧪 Tests à écrire

- [ ] Test unitaire : neutralisation formules
- [ ] Test hook : nom de fichier daté
- [ ] Test page : bouton désactivé pendant l'export
- [ ] Test : BOM présent

## ♿ Accessibilité et i18n

- Annonce « Export terminé » via live region

## 🔗 Dépendances

À réaliser après : `ADM-WH-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
