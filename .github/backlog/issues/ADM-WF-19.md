> **ADM-WF-19** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La carte « Répartition du taux de réussite » de WF-04 est un histogramme à 10 barres (0-10, 10-20, … 90-100) : les deux premières barres basses sont rouges, les barres 20-90 grenat avec un pic en 70-80, la dernière (90-100) bleue. Le graphique sert à repérer la queue de questions trop difficiles ou trop faciles.

## ✅ Objectif

Implémenter l'histogramme avec Recharts, ses couleurs sémantiques, ses infobulles et son alternative accessible.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-04` — Performance des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Performance » · « Performance des questions » · « Repère les questions mal calibrées ou ambiguës » · « Exporter » · « Réussite moyenne » · « 63 % » · « +1,2 pt » · « Trop faciles (> 95 %) » · « à relever » · « Trop difficiles ( » · « 15 %) » · « à vérifier » · « Réponses (30 j) » · « 184 k » · « +12 % » · « Répartition du taux de réussite » · « À corriger en priorité » · « Score du Clásico du 2 mai 2009 ? » · « 19 % » · « Ballons d’or de Messi au Barça ? »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-18%5D%22) · [ADM-WF-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-20%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22)

## 📐 Règles de gestion

- 10 tranches de 10 points ; valeur = nombre de questions publiées dont le taux de réussite observé tombe dans la tranche (borne basse incluse, haute exclue, sauf 90-100 incluant 100) ; seules les questions avec ≥ 30 réponses sont comptées.
- Couleurs : tranches 0-10 et 10-20 en `danger`, 20-90 en `primary` (grenat), 90-100 en `secondary` (bleu) ; légende non nécessaire mais l'infobulle précise le sens (« 34 questions · trop faciles »).
- Infobulle au survol/focus : « 70-80 % · 212 questions (17 %) » ; clic sur une barre ouvre la liste filtrée sur la plage (`minRate=70&maxRate=79`).
- Barres à coins supérieurs arrondis (8 px), axe X avec libellés « 0-10 »…« 90-100 », pas d'axe Y chiffré (valeurs en infobulle) ; hauteur 260 px ; animation d'entrée 400 ms désactivée si `prefers-reduced-motion`.
- Alternative accessible : tableau masqué visuellement (`sr-only`) contenant les 10 tranches et leurs valeurs ; chargement : squelette de barres.

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/SuccessDistributionChart.tsx` (BarChart, Cell colorée par tranche, Tooltip personnalisé).
- [ ] Créer `src/hooks/useQuizDistribution.ts` branché sur `GET /admin/quiz-questions/stats/distribution`.
- [ ] Créer `src/components/shared/ChartCard.tsx` (titre, zone, état de chargement/erreur) réutilisable (ADS `graphiques-recharts`).
- [ ] Définir les tokens de couleur de graphique (`--chart-danger`, `--chart-primary`, `--chart-secondary`) compatibles clair/sombre.
- [ ] Charger Recharts en import dynamique (chunk `charts` existant) pour ne pas alourdir le bundle initial.
- [ ] Implémenter le tableau `sr-only` et la navigation clavier entre barres (flèches).
- [ ] Tests de rendu avec ResponsiveContainer mocké.
- [ ] Vérifier les contrastes en thème sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné 10 tranches, quand le graphique s'affiche, alors 10 barres sont rendues avec les deux premières en rouge et la dernière en bleu.
- [ ] Étant donné un survol de la barre 70-80, quand l'infobulle apparaît, alors elle indique le nombre de questions et le pourcentage.
- [ ] Étant donné un clic sur 0-10, quand la navigation s'effectue, alors la liste est filtrée sur `maxRate=9`.
- [ ] Étant donné `prefers-reduced-motion`, quand le graphique se monte, alors aucune animation n'est jouée.
- [ ] Étant donné un lecteur d'écran, quand la carte est lue, alors le tableau alternatif est annoncé.

## 🧪 Tests à écrire

- [ ] SuccessDistributionChart.test.tsx : couleurs par tranche.
- [ ] Tooltip.test.tsx : contenu.
- [ ] useQuizDistribution.test.tsx : normalisation à 10 tranches.
- [ ] axe : carte graphique avec tableau alternatif.
- [ ] Test de chargement dynamique du chunk (mock `import()`).

## ♿ Accessibilité et i18n

- Graphique `role='img'` avec `aria-label` résumant la distribution ; tableau alternatif ; couleurs complétées par les libellés de l'infobulle.

## 🔗 Dépendances

À réaliser après : `ADM-WF-18` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5, §5.1, §9.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
