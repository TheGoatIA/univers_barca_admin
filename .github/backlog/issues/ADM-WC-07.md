> **ADM-WC-07** · Écran · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Admin §9.4 exige un état vide explicite et différencié : « aucune donnée » (référentiel vide) et « aucun résultat pour ces filtres » (avec réinitialisation). WC-03 montre « 0 résultat », les filtres « Poste : Gardien », « Nationalité : Japon » et le message « Aucun joueur ne correspond à « Gardien · Japon ». Modifie ou réinitialise les filtres. » avec le bouton « Réinitialiser les filtres ». WC-04 montre « Aucune fiche joueur » et « Crée la première fiche ou importe un fichier CSV pour démarrer le référentiel. » avec « Importer un CSV ».

## ✅ Objectif

Afficher les deux états vides distincts dans la zone de table avec les bonnes actions.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-03` — Liste — aucun résultat pour ces filtres
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_light.webp?raw=true' width='330' alt='WC-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__desktop_dark.webp?raw=true' width='330' alt='WC-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_light.webp?raw=true' width='330' alt='WC-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-03_liste-aucun-resultat-pour-ces-filtres__tablet_dark.webp?raw=true' width='330' alt='WC-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 0 résultat » · « Nouveau joueur » · « Rechercher… » · « Poste : Gardien » · « Nationalité : Japon » · « Statut : tous » · « Aucun résultat pour ces filtres » · « Aucun joueur ne correspond à « Gardien · Japon ». Modifie ou réinitialise les filtres. » · « Réinitialiser les filtres »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-05%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22)

#### `WC-04` — Liste — aucune donnée
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_light.webp?raw=true' width='330' alt='WC-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__desktop_dark.webp?raw=true' width='330' alt='WC-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_light.webp?raw=true' width='330' alt='WC-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-04_liste-aucune-donnee__tablet_dark.webp?raw=true' width='330' alt='WC-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau joueur » · « Aucune fiche joueur » · « Crée la première fiche ou importe un fichier CSV pour démarrer le référentiel. » · « Importer un CSV »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WC-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-12%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22)

## 📐 Règles de gestion

- Distinction : si `activeCount > 0` (ou `q` non vide) et `total = 0` → « aucun résultat » ; si aucun filtre et `counters.total = 0` → « aucune donnée ».
- « Aucun résultat » : icône loupe, titre « Aucun résultat pour ces filtres », texte avec `describeFilters()` (« Gardien · Japon »), bouton secondaire « Réinitialiser les filtres » qui efface l'URL et la mémoire locale ; le sous-titre de page affiche « 0 résultat ».
- « Aucune donnée » : avatars empilés décoratifs, titre « Aucune fiche joueur », texte d'aide, bouton « Importer un CSV » (ouvre le tiroir d'import fiches) en plus du bouton d'en-tête « Nouveau joueur » ; les boutons « Exporter » et la barre de filtres sont masqués ; le sous-titre est absent.
- Les deux états respectent le composant `EmptyState` du design system (icône, titre, description, action) ; hauteur minimale 320 px.
- Un rôle sans droit de création (aucun cas ici : content-manager et super-admin l'ont) masquerait le bouton d'action.

## 🛠️ Tâches

- [ ] Créer `src/components/players/PlayersEmptyState.tsx` (deux variantes `noResults` / `noData`).
- [ ] Étendre `src/components/shared/EmptyState.tsx` avec la prop `secondaryAction` et `illustration` (si ADS `etats-vide-erreur` n'est pas livré).
- [ ] Brancher la sélection de variante dans `PlayersPage.tsx` à partir de `data.total`, `activeCount` et `counters`.
- [ ] Implémenter `describeFilters` (join « · » des libellés lisibles : « Gardien · Japon · Publié »).
- [ ] Ajouter les chaînes dans le catalogue FR (`fr.players.empty.*`).
- [ ] Vérifier l'affichage tablette/sombre et ajouter les stories `NoResults`, `NoData`.

## ✔️ Critères d'acceptation

- [ ] Étant donné les filtres Poste=Gardien et Nationalité=Japon sans résultat, quand la liste s'affiche, alors le message cite « Gardien · Japon » et propose « Réinitialiser les filtres ».
- [ ] Étant donné un clic sur « Réinitialiser les filtres », quand la requête repart, alors l'URL ne contient plus de filtres et la liste complète s'affiche.
- [ ] Étant donné un référentiel vide, quand la liste s'affiche, alors « Aucune fiche joueur » et « Importer un CSV » sont visibles et la barre de filtres est absente.
- [ ] Étant donné une recherche « zzz » sans résultat, quand elle s'affiche, alors c'est l'état « aucun résultat » et non « aucune donnée ».

## 🧪 Tests à écrire

- [ ] PlayersEmptyState.test.tsx : variantes et libellés.
- [ ] PlayersPage.test.tsx : choix de variante selon filtres/compteurs.
- [ ] describeFilters.test.ts : combinaisons (poste, pays, statut, recherche).
- [ ] e2e : filtres sans résultat → réinitialiser.
- [ ] Story Storybook des deux états (clair/sombre).

## ♿ Accessibilité et i18n

- Zone en `role='status'` pour annoncer « 0 résultat » ; focus déplacé vers « Réinitialiser les filtres » uniquement sur action utilisateur.

## 🔗 Dépendances

À réaliser après : `ADM-WC-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
