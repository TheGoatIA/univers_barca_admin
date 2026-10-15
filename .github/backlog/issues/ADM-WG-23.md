> **ADM-WG-23** · Écran · Priorité **P1** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-07 affiche « FILE DE SIGNALEMENTS · 0 en attente » et, au centre, un grand pictogramme de validation verte, le titre « FILE VIDE, BRAVO ! », le texte « Tous les signalements ont été traités. Prochaine vérification automatique dans quelques minutes. » et le bouton « Voir l'historique des décisions ». Le CDC Admin §9.4 exige un état vide explicite.

## ✅ Objectif

Implémenter l'état vide de l'onglet « En attente » et son rafraîchissement automatique.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-07` — File de modération vide
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_light.webp?raw=true' width='330' alt='WG-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_dark.webp?raw=true' width='330' alt='WG-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_light.webp?raw=true' width='330' alt='WG-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_dark.webp?raw=true' width='330' alt='WG-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 0 en attente » · « File vide, bravo ! » · « Tous les signalements ont été traités. Prochaine vérification automatique dans quelques minutes. » · « Voir l’historique des décisions »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-06%5D%22) · [ADM-WG-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-25%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Condition : `counters.pending = 0` sur l'onglet « En attente » sans filtre actif ; avec filtres actifs, c'est l'état « aucun résultat pour ces filtres » (voir `fn-filtres-recherche-file`).
- Contenu : pictogramme coche (cercle vert halo, 160 px), titre en Barlow Condensed majuscules, texte d'explication, bouton « Voir l'historique des décisions » (icône horloge) menant à l'onglet « Traités » ; sous-titre de page « 0 en attente » ; les onglets, filtres et la table sont masqués.
- Le message « Prochaine vérification automatique dans quelques minutes » correspond au polling de 60 s : un nouveau signalement fait réapparaître la table sans rechargement ; le badge de sidebar disparaît à 0.
- Animation d'entrée subtile (échelle 0,9 → 1, 300 ms) désactivée avec `prefers-reduced-motion` ; pas de confettis.
- Variante « En cours » et « Traités » vides : messages courts (« Aucun signalement en cours », « Aucun signalement traité »).

## 🛠️ Tâches

- [ ] Créer `src/components/moderation/QueueEmptyState.tsx` (variantes `pending`, `in-progress`, `resolved`, `ignored`).
- [ ] Brancher la condition dans `ModerationQueuePage.tsx` à partir des compteurs et de la réponse de liste.
- [ ] Utiliser `EmptyState` (ADS) avec illustration `CheckBadge` et animations tokens de mouvement.
- [ ] Implémenter le bouton vers `?statut=resolved`.
- [ ] Faire disparaître le badge de sidebar à 0 (`useModerationBadge`).
- [ ] Stories clair/sombre.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 0 signalement en attente, quand la page s'affiche, alors « FILE VIDE, BRAVO ! » et le texte d'explication sont visibles.
- [ ] Étant donné un clic sur « Voir l'historique des décisions », quand la navigation s'effectue, alors l'onglet « Traités » est affiché.
- [ ] Étant donné un nouveau signalement reçu pendant l'affichage, quand le polling s'exécute, alors la table réapparaît.
- [ ] Étant donné des filtres actifs sans résultat, quand la liste s'affiche, alors l'état « aucun résultat » est montré et non « File vide ».

## 🧪 Tests à écrire

- [ ] QueueEmptyState.test.tsx : 4 variantes.
- [ ] ModerationQueuePage.test.tsx : bascule vide ↔ table.
- [ ] useModerationBadge.test.tsx : masquage à 0.
- [ ] axe : état vide.
- [ ] Test `prefers-reduced-motion`.

## ♿ Accessibilité et i18n

- Zone `role='status'` pour annoncer « File vide » ; pictogramme décoratif `aria-hidden`.

## 🔗 Dépendances

À réaliser après : `ADM-WG-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
