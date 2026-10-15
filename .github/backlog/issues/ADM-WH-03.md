> **ADM-WH-03** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

SystemHealthPage ouvre le module. La maquette présente : titre « Santé technique », sous-titre « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s », sélecteur de période 1 h / 24 h / 7 j, bouton « Ouvrir Grafana », bandeau d'alerte, quatre cartes KPI, graphique de latence et carte « Services ».

## ✅ Objectif

Afficher la santé globale du système avec ses indicateurs clés et l'état de chaque dépendance.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-04%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- Statut global : opérationnel / dégradé / incident (CDC §4.7.1) ; la maquette montre « Dégradé » avec « 1 alerte » ; couleur success/warning/error + libellé (jamais la couleur seule).
- KPI : Disponibilité (24 h) 99,94 % (objectif 99,5 %), Taux d'erreur 5xx 0,21 % (objectif < 0,5 %), Latence p95 212 ms (objectif < 300 ms) ; flèche verte quand l'objectif est tenu, rouge sinon.
- Carte Services : API Node.js, PostgreSQL, Redis, API football, Génération d'images, Graylog, chacun avec StatusBadge Opérationnel / Dégradé / Incident (valeurs fournies par /admin/observability/health). NB : le CDC Backend évoque PostgreSQL alors que le dépôt API utilise MongoDB ; le libellé affiché doit venir de l'API et non être codé en dur.
- Bouton « Ouvrir Grafana » : lien externe (nouvel onglet, rel=noopener noreferrer) vers VITE_GRAFANA_URL, masqué si la variable est absente.
- Rafraîchissement automatique toutes les 30 s, indicateur « Mis à jour il y a X s ».

## 🔄 Comportement et états

- Chargement : 4 skeletons de carte + skeleton de graphique ; vide : non applicable ; erreur : ErrorState avec « Réessayer » et traceId affiché en petit.
- Période par défaut 24 h, mémorisée dans l'URL (?range=24h).
- Si l'API de supervision est injoignable, afficher le dernier état connu grisé avec bandeau « Données obsolètes ».

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/observability/health` | Santé agrégée | ?range=24h | {status,availability,errorRate5xx,p95,services[]} |

## 🛠️ Tâches

- [ ] Créer `src/features/observability/pages/SystemHealthPage.tsx` (composition) et `components/HealthKpiCard.tsx`, `ServiceStatusList.tsx`, `RangeSegmented.tsx`.
- [ ] Utiliser le composant `Card`, `StatusBadge` et `Skeleton` existants ; étendre StatusBadge avec variantes operational/degraded/incident.
- [ ] Câbler `useHealth(range)` et la synchronisation du paramètre `range` avec `useSearchParams`.
- [ ] Formater nombres et durées via `Intl.NumberFormat('fr-FR')` (99,94 %, 212 ms).
- [ ] Gérer le bouton Grafana et l'indicateur de fraîcheur (date-fns `formatDistanceToNowStrict` locale fr).
- [ ] Titre de page en Barlow Condensed majuscules (classe h1 existante).
- [ ] Vérifier rendu clair/sombre et tablette 834 px (cartes 2×2).

## ✔️ Critères d'acceptation

- [ ] Étant donné un statut degraded avec 1 alerte, alors la carte « Statut global » affiche « Dégradé » et « 1 alerte ».
- [ ] Étant donné p95 = 340 ms, alors la flèche passe au rouge avec « objectif < 300 ms ».
- [ ] Étant donné un clic sur 7 j, alors l'URL contient range=7d et les données sont rechargées.
- [ ] Étant donné une erreur réseau, alors ErrorState et bouton Réessayer apparaissent.
- [ ] Étant donné VITE_GRAFANA_URL absent, alors le bouton Grafana n'est pas rendu.

## 🧪 Tests à écrire

- [ ] Test composant : HealthKpiCard colore selon l'objectif
- [ ] Test composant : ServiceStatusList affiche 6 services
- [ ] Test page : changement de période met à jour l'URL
- [ ] Test page : état erreur + retry
- [ ] Test accessibilité (axe) : aucune violation sur la page

## ♿ Accessibilité et i18n

- Libellés dans `src/i18n/fr.ts` (clé supervision.sante.*)
- Le statut est annoncé par texte (« Dégradé ») et pas seulement par la pastille
- Segmenté 1 h/24 h/7 j : role=radiogroup, flèches clavier

## 🔗 Dépendances

À réaliser après : `ADM-WH-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7
- CDC Backend §6.3, §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
