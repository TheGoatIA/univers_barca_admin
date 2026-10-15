> **ADM-WI-10** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Page « Feature flags — Activation progressive des modules sans nouvelle publication en store » : Fantasy Barça (fantasy_module_enabled, Phase 2, 100 %), La Masia Academy (academy_module_enabled, Phase 3, 0 %), Wallpapers IA (wallpapers_module_enabled, 100 %), Streaming de l'assistant (assistant_streaming_enabled, 100 %). Encart : « Toute modification est journalisée (qui, quoi, quand) dans le journal d'audit. »

## ✅ Objectif

Activer/désactiver les modules à distance avec traçabilité.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-05` — Feature flags
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true' width='330' alt='WI-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true' width='330' alt='WI-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true' width='330' alt='WI-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true' width='330' alt='WI-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Feature flags » · « Activation progressive des modules sans nouvelle publication en store » · « Quotas IA » · « Rapports » · « Fantasy Barça » · « fantasy_module_enabled » · « Phase 2 · déploiement progressif » · « Déploiement » · « 100 % » · « La Masia Academy » · « academy_module_enabled »

**Composants repérés** : `avatar`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-11%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-22%5D%22) · [API-PLAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-08%5D%22) · [API-PLAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-09%5D%22) · [API-PLAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-10%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Quatre flags du CDC §4.8.1 ; chaque ligne : libellé, clé monospace, description de phase, pourcentage de déploiement, Switch Radix (vert actif).
- Bascule via PATCH /admin/config/feature-flags {key,enabled,rolloutPercent}.
- Flag actif = 100 %, inactif = 0 % par défaut ; pourcentage intermédiaire géré par WI déploiement.
- Bascule vers OFF d'un module en production : confirmation « Désactiver Wallpapers IA pour tous les utilisateurs ? ».
- Audit : FEATURE_FLAG_TOGGLED (avant/après).

## 🔄 Comportement et états

- Pas d'optimistic update (action sensible) : le Switch reste en attente (spinner) jusqu'à la réponse.
- Erreur : retour à l'état précédent + toast.
- Chargement : 4 lignes skeleton.

## 🛠️ Tâches

- [ ] Créer `pages/FeatureFlagsTab.tsx`, `components/FeatureFlagRow.tsx`, `FlagSwitch.tsx`.
- [ ] Mapper clé → libellé/phase dans `flagCatalog.ts` (clés inconnues affichées brutes).
- [ ] Hook `useUpdateFlag` avec invalidation.
- [ ] Dialogue de confirmation d'extinction.
- [ ] Encart info journalisation.
- [ ] Tests de bascule.

## ✔️ Critères d'acceptation

- [ ] Étant donné un flag actif, quand je le désactive et confirme, alors PATCH est envoyé et l'audit contient FEATURE_FLAG_TOGGLED.
- [ ] Étant donné une erreur serveur, alors le Switch revient à l'état précédent.
- [ ] Étant donné academy_module_enabled=false, alors l'affichage est 0 %.

## 🧪 Tests à écrire

- [ ] Test composant : FlagSwitch états
- [ ] Test composant : confirmation d'extinction
- [ ] Test hook : useUpdateFlag
- [ ] Test page : 4 flags listés

## ♿ Accessibilité et i18n

- Switch avec aria-label « Activer La Masia Academy »

## 🔗 Dépendances

À réaliser après : `ADM-WI-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8, §4.8.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
