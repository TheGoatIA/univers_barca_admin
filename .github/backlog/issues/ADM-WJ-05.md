> **ADM-WJ-05** · Écran · Priorité **P1** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

« Barème Fantasy — Phase 2 · barème configurable en base (table scoring_rules), sans redéploiement » : table Événement × (Attaquant / Milieu, Défenseur / Gardien) avec champs éditables, boutons Historique / Enregistrer et panneau Simulation « Impact sur la dernière journée (J10) avant publication » avec avertissement « Les points déjà calculés ne sont pas recalculés. ».

## ✅ Objectif

Ajuster les points Fantasy sans redéploiement, de façon contrôlée.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-03` — Barème Fantasy configurable
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_light.webp?raw=true' width='330' alt='WJ-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__desktop_dark.webp?raw=true' width='330' alt='WJ-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_light.webp?raw=true' width='330' alt='WJ-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-03_bareme-fantasy-configurable__tablet_dark.webp?raw=true' width='330' alt='WJ-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fantasy » · « Barème » · « Barème Fantasy » · « Phase 2 · barème configurable en base (table scoring_rules), sans redéploiement » · « Historique » · « Enregistrer » · « Événement » · « Attaquant / Milieu » · « Défenseur / Gardien » · « But marqué » · « +5 / +6 »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-06%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Barème de référence CDC §3.12.2 : but attaquant/milieu +5/+6, défenseur/gardien +8, passe décisive +3, clean sheet +4 (déf/gardien), titularisation ≥ 60 min +2, entrée en jeu < 60 min +1, carton jaune −1, carton rouge −3, 2 buts encaissés −1.
- Valeurs entières −20 à +20 ; cellule « — » si non applicable.
- Réservé super-admin ; enregistrement versionné (nouvelle version active à partir de la prochaine journée).
- Les points déjà calculés ne sont jamais recalculés (avertissement obligatoire).

## 🔄 Comportement et états

- Édition en ligne avec marquage des cellules modifiées ; Enregistrer actif si changements.
- Erreur de validation sur la cellule ; succès : toast « Barème v7 enregistré ».

## 🛠️ Tâches

- [ ] Créer `src/features/fantasy-admin/{api,hooks,pages}` : `ScoringRulesPage.tsx`, `ScoringTable.tsx`, `ScoreCell.tsx`.
- [ ] API GET/PUT /admin/fantasy/scoring-rules (à créer) ; schéma Zod.
- [ ] Détection des modifications (diff vs serveur).
- [ ] Route /fantasy/bareme, guard super-admin, flag fantasy_module_enabled mentionné.
- [ ] Audit SCORING_RULES_UPDATED.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné +8 changé en +9, alors la cellule est marquée modifiée et Enregistrer actif.
- [ ] Étant donné −25, alors l'erreur de plage est affichée.
- [ ] Étant donné un enregistrement, alors une nouvelle version est créée et l'audit alimenté.
- [ ] Étant donné un moderator, alors accès refusé.

## 🧪 Tests à écrire

- [ ] Test composant : ScoreCell validation
- [ ] Test composant : diff modifications
- [ ] Test page : enregistrement
- [ ] Test unitaire : schéma barème

## ♿ Accessibilité et i18n

- Table avec en-têtes de colonnes ; champs numériques labellisés par événement

## 🔗 Dépendances

À réaliser après : `ADM-WJ-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §10
- CDC Backend §3.12.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
