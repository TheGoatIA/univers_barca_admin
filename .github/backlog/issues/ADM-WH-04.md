> **ADM-WH-04** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La carte « Latence par endpoint » de WH-01 trace trois courbes (p50 vert, p95 bleu, p99 rouge) avec une légende ; le CDC §4.7.1 demande aussi le taux d'erreur 5xx dans le temps.

## ✅ Objectif

Fournir un composant Recharts réutilisable, lisible en clair et en sombre, alimenté par la série de la période choisie.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-01` — Santé technique
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_light.webp?raw=true' width='330' alt='WH-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__desktop_dark.webp?raw=true' width='330' alt='WH-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_light.webp?raw=true' width='330' alt='WH-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-01_sante-technique__tablet_dark.webp?raw=true' width='330' alt='WH-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Santé technique » · « Données Prometheus / OpenTelemetry · actualisation toutes les 30 s » · « 1 h » · « 24 h » · « 7 j » · « Ouvrir Grafana » · « 1 alerte active » · « · File « wallpapers » : 14 jobs en attente depuis 12 min (seuil : 10). » · « Voir la file » · « Statut global » · « Dégradé »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-03%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-13%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- Courbes p50/p95/p99 en ms, axe X = temps (heures pour 1 h/24 h, jours pour 7 j), axe Y auto-borné.
- Aire légère sous p95 (maquette) ; points terminaux marqués.
- Un second onglet/segment « Erreurs 5xx » trace le taux en % avec seuil 0,5 % en pointillé.
- Couleurs issues des tokens (success, secondary, error) ; palette distincte aussi par style de trait pour l'accessibilité.

## 🔄 Comportement et états

- Survol/focus : tooltip avec horodatage et 3 valeurs ; clic sur la légende masque/affiche une série.
- Données vides : message « Aucune mesure sur la période ». Chargement : skeleton 280 px.
- prefers-reduced-motion : animation d'entrée désactivée.

## 🛠️ Tâches

- [ ] Créer `components/LatencyChart.tsx` (Recharts LineChart/Area, ResponsiveContainer) et `ErrorRateChart.tsx`.
- [ ] Créer helper `downsample(points, maxPoints=120)` pour limiter les points rendus.
- [ ] Créer `ChartTooltip` partagé (design system).
- [ ] Ajouter une description textuelle `aria-label` + tableau de données alternatif repliable (« Voir les données »).
- [ ] Charger Recharts via le chunk `charts` déjà configuré dans vite.config.ts.
- [ ] Stories/exemples dans la page DS (ZC-04).

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 séries, alors 3 courbes et une légende à 3 entrées sont rendues.
- [ ] Étant donné un clic sur « p99 » dans la légende, alors la courbe disparaît.
- [ ] Étant donné 0 point, alors l'état vide s'affiche.
- [ ] Étant donné le thème sombre, alors les couleurs de courbes restent contrastées (AA).

## 🧪 Tests à écrire

- [ ] Test composant : LatencyChart rend 3 séries
- [ ] Test unitaire : downsample conserve premier et dernier point
- [ ] Test composant : tableau alternatif listé
- [ ] Test : tooltip formate les ms

## ♿ Accessibilité et i18n

- Alternative tabulaire pour lecteurs d'écran

## 🔗 Dépendances

À réaliser après : `ADM-WH-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7
- CDC Admin §9.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
