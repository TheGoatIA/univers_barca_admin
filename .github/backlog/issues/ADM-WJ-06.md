> **ADM-WJ-06** · Fonctionnel · Priorité **P2** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Panneau Simulation (barres Actuel vs Nouveau sur la dernière journée J10) et bouton « Historique ».

## ✅ Objectif

Mesurer l'effet d'un changement avant publication et pouvoir revenir en arrière.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-03` — Barème Fantasy configurable
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_light.webp?raw=true' width='330' alt='WJ-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_dark.webp?raw=true' width='330' alt='WJ-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_light.webp?raw=true' width='330' alt='WJ-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_dark.webp?raw=true' width='330' alt='WJ-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fantasy » · « Barème » · « Barème Fantasy » · « Phase 2 · barème configurable en base (table scoring_rules), sans redéploiement » · « Historique » · « Enregistrer » · « Événement » · « Attaquant / Milieu » · « Défenseur / Gardien » · « But marqué » · « +5 / +6 »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-05%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Simulation : POST /admin/fantasy/scoring-rules/simulate {rules, matchday} renvoie total de points actuel vs nouveau (à créer).
- Historique : liste des versions (numéro, date, auteur, diff) ; restaurer une version = nouvelle version.
- Avertissement permanent : pas de recalcul rétroactif.
- La simulation ne modifie aucune donnée.

## 🔄 Comportement et états

- Simulation en cours : spinner sur le panneau ; erreur : message sans bloquer l'édition.

## 🛠️ Tâches

- [ ] Composants `SimulationPanel` (Recharts barres) et `RulesHistoryDrawer`.
- [ ] Hooks `useSimulateRules`, `useRulesHistory`, `useRestoreRules`.
- [ ] Debounce 600 ms de la simulation à chaque modification.
- [ ] Diff lisible entre versions.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné une modification, alors la simulation affiche Actuel et Nouveau.
- [ ] Étant donné la restauration de v5, alors v8 est créée avec les valeurs de v5.
- [ ] Étant donné une simulation, alors aucune règle n'est enregistrée.

## 🧪 Tests à écrire

- [ ] Test hook : simulation debounce
- [ ] Test composant : diff versions
- [ ] Test : restauration
- [ ] Test : aucune mutation durant simulation

## 🔗 Dépendances

À réaliser après : `ADM-WJ-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.12.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
