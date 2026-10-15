> **ADM-WI-13** · Fonctionnel · Priorité **P2** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

L'encart « Relever un quota augmente le coût » justifie un garde-fou quand une valeur augmente fortement.

## ✅ Objectif

Éviter une hausse accidentelle du coût IA.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-06` — Quotas IA
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true' width='330' alt='WI-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true' width='330' alt='WI-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true' width='330' alt='WI-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true' width='330' alt='WI-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quotas IA » · « Plafonds pour maîtriser le coût du produit gratuit » · « Annuler » · « Enregistrer » · « Feature flags » · « Rapports » · « Par utilisateur » · « Messages assistant / jour » · « Générations wallpaper / jour » · « Questions de quiz IA / jour »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-12%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-03%5D%22) · [API-IA-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-23%5D%22) · [API-PLAT-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-11%5D%22) · [API-PLAT-17](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-17%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22) · [API-WALL-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-WALL-26%5D%22)

## 📐 Règles de gestion

- Hausse > 50 % d'un quota par utilisateur ou d'un budget : dialogue récapitulatif « Wallpapers/jour : 3 → 10 (+233 %) ».
- Estimation de coût non calculée par l'admin (non fournie par le CDC) : le dialogue rappelle seulement l'impact.
- Justification obligatoire ≥ 5 caractères pour toute hausse > 50 %.

## 🔄 Comportement et états

- Baisse de quota : enregistrement direct sans dialogue.

## 🛠️ Tâches

- [ ] Util `diffQuotas(before, after)` (pourcentage).
- [ ] Composant `QuotaChangeConfirm.tsx`.
- [ ] Branchement dans onSubmit.
- [ ] Envoi de la justification au PATCH.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 → 10, alors le dialogue affiche +233 % et exige une justification.
- [ ] Étant donné 40 → 30, alors aucune confirmation.
- [ ] Étant donné une hausse annulée dans le dialogue, alors aucun PATCH n'est envoyé.

## 🧪 Tests à écrire

- [ ] Test unitaire : diffQuotas
- [ ] Test composant : justification obligatoire
- [ ] Test : baisse sans dialogue

## 🔗 Dépendances

À réaliser après : `ADM-WI-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
