> **ADM-WI-11** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Chaque flag affiche « Déploiement 100 % ». Le CDC §4.8 parle d'activation progressive des modules de phase 2/3 : le pourcentage permet d'ouvrir un module à une fraction des utilisateurs.

## ✅ Objectif

Permettre de régler le pourcentage (0–100 %) d'un flag actif.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-05` — Feature flags
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_light.webp?raw=true' width='330' alt='WI-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__desktop_dark.webp?raw=true' width='330' alt='WI-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_light.webp?raw=true' width='330' alt='WI-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-05_feature-flags__tablet_dark.webp?raw=true' width='330' alt='WI-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Feature flags » · « Activation progressive des modules sans nouvelle publication en store » · « Quotas IA » · « Rapports » · « Fantasy Barça » · « fantasy_module_enabled » · « Phase 2 · déploiement progressif » · « Déploiement » · « 100 % » · « La Masia Academy » · « academy_module_enabled »

**Composants repérés** : `avatar`, `card`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-10%5D%22) · [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-IA-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-IA-22%5D%22) · [API-PLAT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-08%5D%22) · [API-PLAT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-09%5D%22) · [API-PLAT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-10%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Valeurs 0, 10, 25, 50, 100 via sélecteur ou saisie entière 0–100.
- Cohérence : 0 % = flag OFF ; > 0 % force ON ; l'inverse est refusé.
- Attribution stable par utilisateur (hash de l'identifiant, côté API) : l'écran l'indique en aide.
- Modification confirmée si passage > 50 points d'un coup.

## 🔄 Comportement et états

- Édition en ligne : clic sur le pourcentage ouvre un popover avec slider + champ.
- Enregistrement par bouton Appliquer ; audit FEATURE_FLAG_ROLLOUT_CHANGED.

## 🛠️ Tâches

- [ ] Composant `RolloutPopover.tsx` (Radix Popover + Slider).
- [ ] Schéma Zod entier 0–100.
- [ ] Synchronisation avec l'interrupteur.
- [ ] Mise à jour de useUpdateFlag.
- [ ] Tests de cohérence ON/OFF.

## ✔️ Critères d'acceptation

- [ ] Étant donné 25 %, alors le flag est ON et affiche 25 %.
- [ ] Étant donné 0 %, alors le flag passe OFF.
- [ ] Étant donné une valeur 120, alors l'erreur « Entre 0 et 100 » est affichée.

## 🧪 Tests à écrire

- [ ] Test unitaire : schéma pourcentage
- [ ] Test composant : slider/clavier
- [ ] Test : cohérence interrupteur
- [ ] Test hook : payload

## ♿ Accessibilité et i18n

- Slider avec aria-valuetext « 25 pour cent »

## 🔗 Dépendances

À réaliser après : `ADM-WI-10` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.8

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
