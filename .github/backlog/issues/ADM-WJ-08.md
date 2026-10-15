> **ADM-WJ-08** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le panneau Anomalies affiche « Pic de votes samedi — Messi vs Xavi : 1 140 votes depuis 3 adresses IP. Vote en attente de vérification. » avec boutons Invalider / Valider.

## ✅ Objectif

Arbitrer les votes suspects de manière traçable.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-04` — Tableau de bord GOAT
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_light.webp?raw=true' width='330' alt='WJ-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__desktop_dark.webp?raw=true' width='330' alt='WJ-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_light.webp?raw=true' width='330' alt='WJ-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-04_tableau-de-bord-goat__tablet_dark.webp?raw=true' width='330' alt='WJ-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « GOAT » · « Votes » · « Tableau de bord GOAT » · « Phase 2 · suivi des votes communautaires et détection d’anomalies » · « Votes (7 j) » · « 18 240 » · « +14 % » · « Duels actifs » · « Votes suspects »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-07%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Invalider : les votes concernés sont exclus du total ; Valider : marqués légitimes ; justification facultative.
- Détection de l'anomalie faite côté API (seuils) : l'admin ne fait que trancher.
- Confirmation pour Invalider (impact sur le classement).
- Audit GOAT_VOTES_INVALIDATED / GOAT_VOTES_VALIDATED, IP affichées masquées.

## 🔄 Comportement et états

- Anomalie traitée disparaît de la liste ; compteur « Votes suspects » mis à jour.

## 🛠️ Tâches

- [ ] Composant `AnomalyCard`.
- [ ] Mutations POST /admin/goat/anomalies/:id/{invalidate|validate} (à créer).
- [ ] ConfirmDialog.
- [ ] Invalidation des stats.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné une anomalie, quand j'invalide et confirme, alors elle disparaît et le KPI diminue.
- [ ] Étant donné Valider, alors aucun vote n'est exclu.
- [ ] Étant donné une IP, alors elle est masquée.

## 🧪 Tests à écrire

- [ ] Test composant : AnomalyCard
- [ ] Test hook : invalidation stats
- [ ] Test : confirmation invalider
- [ ] Test : IP masquée

## 🔗 Dépendances

À réaliser après : `ADM-WJ-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §10

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
