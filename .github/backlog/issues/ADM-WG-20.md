> **ADM-WG-20** · Fonctionnel · Priorité **P2** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le bouton « Règle de validation » de WG-05 ouvre le paramétrage de la règle RG-MAP-04 : « validation manuelle sous un seuil de 20 membres, validation automatique au-delà ». Le CDC Global précise que la règle exacte reste à affiner en conception détaillée (« ex. validation manuelle par un modérateur en dessous d'un certain volume d'utilisateurs »). Aucune maquette de la modale : proposition à valider.

## ✅ Objectif

Afficher la règle active et permettre au super-admin d'ajuster le seuil, avec audit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-05` — Gestion des groupes locaux
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true' width='330' alt='WG-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true' width='330' alt='WG-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true' width='330' alt='WG-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true' width='330' alt='WG-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 212 groupes · 4 en attente de validation » · « Règle de validation » · « En attente » · « Actifs » · « Archivés » · « Groupe » · « Ville » · « Créateur » · « Membres » · « Statut » · « Actions » · « Culés Bafoussam » · « Bafoussam, CM » · « Boris T. » · « Valider » · « Refuser » · « Barça Lyon 69 » · « Lyon, FR » · « Sofía R. » · « Peña de Dakar » · « Dakar, SN »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-18%5D%22) · [ADM-WG-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-19%5D%22) · [ADM-WG-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-21%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-16%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Panneau latéral « Règle de validation » : texte de la règle, seuil actuel (20 membres), nombre de groupes concernés au cours des 30 derniers jours (créés, validés auto, validés manuellement).
- Édition réservée au super-admin (`config:groups`) ; le modérateur voit la règle en lecture seule avec mention « Modifiable par un super-admin ».
- Seuil : entier de 1 à 200 (champ numérique) ; aperçu d'impact « Avec 10 membres, 3 des 4 groupes en attente seraient validés automatiquement » (simulation côté client sur les groupes en attente) ; confirmation avant enregistrement.
- Enregistrement `PATCH /admin/config/community-groups {autoValidationThreshold}` (à créer) ; audit `CONFIG_CHANGED` avec avant/après ; la modification ne rétro-valide pas les groupes existants.
- Le texte du bandeau de WG-05 se met à jour après modification (invalidation de la configuration).

## 🛠️ Tâches

- [ ] Créer `src/components/groups/ValidationRuleDrawer.tsx` (lecture/édition selon `can('config:groups')`).
- [ ] Implémenter `useGroupsConfig()` et `useUpdateGroupsConfig()`.
- [ ] Créer `simulateThreshold(groupsPending, threshold)` dans `src/lib/groups.ts`.
- [ ] Ajouter le schéma Zod `groupsConfigSchema` (1-200).
- [ ] Brancher `ValidationRuleNotice` sur la configuration.
- [ ] Gérer 403 et états de chargement.
- [ ] Tests du panneau et de la simulation.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, quand j'ouvre « Règle de validation », alors le champ du seuil est modifiable.
- [ ] Étant donné un modérateur, quand j'ouvre le panneau, alors la règle est en lecture seule.
- [ ] Étant donné un seuil de 10, quand l'aperçu s'affiche, alors le nombre de groupes en attente validés automatiquement est indiqué.
- [ ] Étant donné un seuil de 0, quand je valide, alors l'erreur « Le seuil doit être compris entre 1 et 200 » apparaît.
- [ ] Étant donné une modification réussie, quand le panneau se ferme, alors le bandeau de WG-05 cite le nouveau seuil.

## 🧪 Tests à écrire

- [ ] ValidationRuleDrawer.test.tsx : lecture seule vs édition.
- [ ] simulateThreshold.test.ts.
- [ ] groupsConfigSchema.test.ts.
- [ ] useUpdateGroupsConfig.test.tsx : invalidation.
- [ ] e2e : super-admin change le seuil.

## ♿ Accessibilité et i18n

- Panneau `role='dialog'` ; champ numérique avec libellé et aide `aria-describedby`.

## 🔗 Dépendances

À réaliser après : `ADM-WG-18` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Global §2.16 (RG-MAP-04)
- CDC Admin §4.6.1, §4.8

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
