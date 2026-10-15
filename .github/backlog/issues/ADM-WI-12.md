> **ADM-WI-12** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Page « Quotas IA — Plafonds pour maîtriser le coût du produit gratuit » : carte « Par utilisateur » (Messages assistant / jour 40, Générations wallpaper / jour 3, Questions de quiz IA / jour 30), carte « Budgets mensuels » (Tokens texte 10 000 000 — 42 % consommé ; Générations image 1 500 — 83 % consommé ; Alerte à 80 %), boutons Annuler / Enregistrer et avertissement « Relever un quota augmente le coût. Seul le rôle super-admin peut modifier ces valeurs. »

## ✅ Objectif

Configurer les quotas IA du CDC (ASSISTANT_DAILY_QUOTA, WALLPAPER_DAILY_QUOTA…) sans redéploiement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-06` — Quotas IA
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_light.webp?raw=true' width='330' alt='WI-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__desktop_dark.webp?raw=true' width='330' alt='WI-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_light.webp?raw=true' width='330' alt='WI-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-06_quotas-ia__tablet_dark.webp?raw=true' width='330' alt='WI-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Quotas IA » · « Plafonds pour maîtriser le coût du produit gratuit » · « Annuler » · « Enregistrer » · « Feature flags » · « Rapports » · « Par utilisateur » · « Messages assistant / jour » · « Générations wallpaper / jour » · « Questions de quiz IA / jour »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-13%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22)

## 📐 Règles de gestion

- Champs entiers ≥ 1 : messages/jour 1–500, wallpapers/jour 0–50, quiz IA/jour 0–200 ; budgets : tokens 100 000–1 000 000 000, images 0–100 000 ; seuil d'alerte 50–100 %.
- Barres de consommation en lecture seule sous chaque budget.
- Enregistrer actif seulement si formulaire modifié et valide ; Annuler restaure les valeurs serveur.
- Journalisation AI_QUOTA_UPDATED avec avant → après (ex. 1 000 → 1 500) et justification facultative.

## 🔄 Comportement et états

- Chargement skeleton ; erreur 422 → message sous le champ ; succès → toast « Quotas enregistrés ».
- Quitter avec modifications → confirmation.

## 🛠️ Tâches

- [ ] Créer `pages/AiQuotasTab.tsx`, `components/QuotaNumberField.tsx`, `BudgetUsageBar.tsx`.
- [ ] Formulaire RHF + Zod (`aiQuotas.schema.ts`).
- [ ] Intégrer `useAiQuotas`/`useUpdateAiQuotas` et `useUnsavedChangesGuard`.
- [ ] Affichage lecture seule du pourcentage consommé via `useAiUsage`.
- [ ] Champs numériques alignés à droite, font tabular-nums.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné messages=0 pour assistant, alors une erreur « Minimum 1 » est affichée.
- [ ] Étant donné une modification valide, quand j'enregistre, alors PATCH part et l'audit est créé.
- [ ] Étant donné Annuler, alors les valeurs initiales reviennent.
- [ ] Étant donné un moderator, alors l'écran est inaccessible.

## 🧪 Tests à écrire

- [ ] Test unitaire : schéma quotas
- [ ] Test composant : Enregistrer désactivé si inchangé
- [ ] Test page : Annuler
- [ ] Test hook : réhydratation
- [ ] Test axe : champs étiquetés

## ♿ Accessibilité et i18n

- Chaque champ avec label visible et aria-describedby pour l'aide/erreur

## 🔗 Dépendances

À réaliser après : `ADM-WI-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8
- CDC Backend §10.2, §11.2, §11.3
- CDC Global §3 (maîtrise des coûts IA)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
