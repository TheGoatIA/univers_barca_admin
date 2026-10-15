> **ADM-WJ-09** · Écran · Priorité **P2** · Taille **L** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

« Supervision La Masia Academy — Phase 3 » : KPI Joueurs actifs 1 842 (+9 %), Décisions cette semaine 1 214 (66 % des joueurs), Fatigue moyenne 41 %, Promotions 58 ; anneau « Décisions choisies » (Technique 34 %, Physique 22 %, Tactique 18 %, Repos 16 %, Nutrition 10 %) ; « Règles de progression » avec boutons Ajuster.

## ✅ Objectif

Suivre les décisions hebdomadaires et équilibrer la progression.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-05` — Supervision La Masia
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_light.webp?raw=true' width='330' alt='WJ-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__desktop_dark.webp?raw=true' width='330' alt='WJ-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_light.webp?raw=true' width='330' alt='WJ-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-05_supervision-la-masia__tablet_dark.webp?raw=true' width='330' alt='WJ-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « La Masia » · « Supervision La Masia Academy » · « Phase 3 · suivi des décisions hebdomadaires et ajustement des règles » · « Joueurs actifs » · « 1 842 » · « +9 % » · « Décisions cette semaine » · « 1 214 » · « 66 % des joueurs » · « Fatigue moyenne » · « 41 % »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-10%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Cinq décisions du CDC §3.12.3 : entraînement technique, physique, repos/récupération, travail tactique, suivi nutritionnel.
- Anneau Recharts avec légende et pourcentages ; centre = total décisions.
- Réservé super-admin ; flag academy_module_enabled indiqué.
- Données agrégées uniquement (aucune donnée individuelle).

## 🔄 Comportement et états

- Chargement skeleton ; vide si module désactivé : « Module non activé ».

## 🛠️ Tâches

- [ ] Créer `src/features/masia-admin/pages/MasiaSupervisionPage.tsx`, `DecisionsDonut.tsx`, `MasiaKpis.tsx`.
- [ ] API GET /admin/masia/stats (à créer).
- [ ] Route /masia.
- [ ] Palette de graphique accessible.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 1 214 décisions, alors l'anneau affiche 5 segments cohérents (somme 100 %).
- [ ] Étant donné le flag OFF, alors le message « Module non activé » s'affiche.
- [ ] Étant donné un content-manager, alors la route /masia est refusée.

## 🧪 Tests à écrire

- [ ] Test composant : DecisionsDonut somme 100 %
- [ ] Test page : module désactivé
- [ ] Test composant : KPIs
- [ ] Test axe

## ♿ Accessibilité et i18n

- Légende textuelle de l'anneau

## 🔗 Dépendances

À réaliser après : `ADM-WJ-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §10
- CDC Backend §3.12.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
