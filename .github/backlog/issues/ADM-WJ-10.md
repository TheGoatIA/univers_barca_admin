> **ADM-WJ-10** · Fonctionnel · Priorité **P2** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Chaque règle (Entraînement technique : Technique +2 · Fatigue +10 ; Entraînement physique : Physique +2 · Fatigue +18 ; Repos : Fatigue −24 · Forme +3) a un bouton « Ajuster ».

## ✅ Objectif

Modifier les coefficients de progression sans redéploiement, avec audit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-05` — Supervision La Masia
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_light.webp?raw=true' width='330' alt='WJ-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_dark.webp?raw=true' width='330' alt='WJ-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_light.webp?raw=true' width='330' alt='WJ-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_dark.webp?raw=true' width='330' alt='WJ-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia » · « Supervision La Masia Academy » · « Phase 3 · suivi des décisions hebdomadaires et ajustement des règles » · « Joueurs actifs » · « 1 842 » · « +9 % » · « Décisions cette semaine » · « 1 214 » · « 66 % des joueurs » · « Fatigue moyenne » · « 41 % »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-09%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Édition de coefficients entiers bornés (−50 à +50) dans un dialogue ; valeurs par défaut restaurables.
- Effet à partir de la prochaine semaine de jeu ; aucun recalcul rétroactif.
- Audit MASIA_RULE_UPDATED avant/après.
- Réservé super-admin.

## 🔄 Comportement et états

- Aperçu du delta avant enregistrement.

## 🛠️ Tâches

- [ ] Composant `AdjustRuleDialog`.
- [ ] API PATCH /admin/masia/rules/:id (à créer).
- [ ] Schéma Zod.
- [ ] Invalidation stats/règles.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné Technique +2 → +3, alors l'audit enregistre +2 → +3.
- [ ] Étant donné 80, alors l'erreur de plage s'affiche.
- [ ] Étant donné Annuler, alors aucun changement.

## 🧪 Tests à écrire

- [ ] Test composant : AdjustRuleDialog
- [ ] Test unitaire : schéma
- [ ] Test hook : invalidation
- [ ] Test : bornes

## 🔗 Dépendances

À réaliser après : `ADM-WJ-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Backend §3.12.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
