> **ADM-WG-18** · Écran · Priorité **P1** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-05 (« GROUPES LOCAUX », « 212 groupes · 4 en attente de validation », bouton « Règle de validation ») affiche des onglets « En attente 4 », « Actifs 202 », « Archivés 6 », une table (Groupe, Ville, Créateur, Membres, Statut, Actions) avec les lignes « Culés Bafoussam · Bafoussam, CM · Boris T. · 3 », « Barça Lyon 69 · Lyon, FR · Sofía R. · 11 », « Peña de Dakar · Dakar, SN · Mamadou D. · 27 » (boutons « Valider » / « Refuser ») et « Culés Douala · 486 · Actif · Gérer », puis la pagination et un bandeau « Règle RG-MAP-04 : validation manuelle sous un seuil de 20 membres, validation automatique au-delà. ».

## ✅ Objectif

Implémenter la page `/groupes` (GroupsManagementPage) avec onglets, table, pagination et bandeau de règle.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-05` — Gestion des groupes locaux
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true' width='330' alt='WG-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true' width='330' alt='WG-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true' width='330' alt='WG-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true' width='330' alt='WG-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 212 groupes · 4 en attente de validation » · « Règle de validation » · « En attente » · « Actifs » · « Archivés » · « Groupe » · « Ville » · « Créateur » · « Membres » · « Statut » · « Actions » · « Culés Bafoussam » · « Bafoussam, CM » · « Boris T. » · « Valider » · « Refuser » · « Barça Lyon 69 » · « Lyon, FR » · « Sofía R. » · « Peña de Dakar » · « Dakar, SN »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-19%5D%22) · [ADM-WG-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-20%5D%22) · [ADM-WG-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-21%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-16%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Onglets synchronisés avec l'URL (`?statut=pending|active|archived`, défaut `pending`) ; compteurs via `GET /community-groups/counters` (4 / 202 / 6, total 212).
- Colonnes : Groupe (nom en gras), Ville (« Bafoussam, CM » : ville + code pays), Créateur (prénom + initiale, pseudonyme réduit pour la minimisation des données), Membres (entier aligné à droite), Statut (badge « En attente » jaune, « Actif » vert, « Archivé » gris), Actions (« Valider » grenat + « Refuser » contour pour les groupes en attente ; « Gérer » pour les groupes actifs).
- Tri par défaut : en attente → ancienneté de création ; actifs → nombre de membres décroissant ; colonnes triables Groupe, Ville, Créateur, Membres, Statut ; pagination 50 (« 1–4 sur 212 » dans la maquette, qui mélange le total global ; la pagination suit le total de l'onglet).
- Recherche facultative par nom ou ville (`q`) ; filtre pays ; aucune position précise affichée (RG-MAP-01 : seulement ville/pays).
- Le bandeau d'information bleu reprend la règle RG-MAP-04 avec le seuil actuel de la configuration (20 membres) ; si la configuration change, le texte se met à jour.
- Accessible aux rôles moderator et super-admin ; l'entrée « Groupes locaux » (badge « 4 ») de la sidebar est ajoutée à `navigation.ts`.

## 🛠️ Tâches

- [ ] Créer `src/pages/groups/GroupsManagementPage.tsx` (lazy, route `/groupes`) et ajouter l'entrée « Groupes locaux » (icône carte, badge) dans `src/lib/navigation.ts` pour `moderator` et `super-admin`.
- [ ] Créer `src/components/groups/GroupsTable.tsx`, `GroupRowActions.tsx`, `GroupStatusBadge.tsx`, `GroupsTabs.tsx`.
- [ ] Créer `src/components/groups/ValidationRuleNotice.tsx` (bandeau d'information).
- [ ] Brancher `useGroups`, `useGroupCounters`, `useGroupsBadge`.
- [ ] Implémenter `formatLocation(city, countryCode)` dans `src/lib/format.ts`.
- [ ] Gérer chargement, erreur, vide (« Aucun groupe en attente · Tous les groupes ont été traités ») et rendu tablette.
- [ ] Brancher les boutons sur `fn-validation-refus-groupe` et « Gérer » sur `fn-archivage-groupe`.
- [ ] Tests de la page.

## ✔️ Critères d'acceptation

- [ ] Étant donné 212 groupes dont 4 en attente, quand la page s'affiche, alors le sous-titre « 212 groupes · 4 en attente de validation » est visible.
- [ ] Étant donné l'onglet « En attente », quand la table s'affiche, alors chaque ligne propose « Valider » et « Refuser ».
- [ ] Étant donné un groupe actif, quand sa ligne s'affiche, alors seul « Gérer » est proposé et « 486 » membres est aligné à droite.
- [ ] Étant donné un content-manager, quand il ouvre `/groupes`, alors la page 403 s'affiche.
- [ ] Étant donné le seuil de 20 membres, quand le bandeau s'affiche, alors il cite RG-MAP-04 et 20 membres.

## 🧪 Tests à écrire

- [ ] GroupsTable.test.tsx : colonnes et actions par statut.
- [ ] GroupsTabs.test.tsx : compteurs et URL.
- [ ] ValidationRuleNotice.test.tsx : seuil dynamique.
- [ ] formatLocation.test.ts.
- [ ] e2e : ouverture de `/groupes` et changement d'onglet.

## ♿ Accessibilité et i18n

- Table avec `<caption>` « Groupes locaux » ; boutons « Valider le groupe Culés Bafoussam » / « Refuser … » avec nom complet.

## 🔗 Dépendances

À réaliser après : `ADM-WG-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6.1 (GroupsManagementPage)
- CDC Global §2.16 (RG-MAP-04)
- CDC Backend §3.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
