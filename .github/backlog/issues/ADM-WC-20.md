> **ADM-WC-20** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WC-08 montre, dans une carte « Statistiques par saison », les boutons « Importer CSV » et « Ajouter une saison » (grenat clair) et un tableau triable Saison / Matchs / Buts / Passes D. / Trophées avec quatre saisons (2026-27 : 11 matchs, 5 buts, 4 passes, 0 trophée ; 2025-26 : 52/24/12/2 ; 2024-25 : 55/18/25/3 ; 2023-24 : 50/9/14/0), des cellules numériques alignées à droite, la cellule « 11 » en cours d'édition (bordure bleue) et une icône corbeille par ligne. Le CDC Admin §4.2.2 prévoit une page d'historique saison par saison avec import/édition en masse.

## ✅ Objectif

Afficher et éditer le tableau des statistiques de la fiche avec les actions de la maquette.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-08` — Fiche joueur — statistiques par saison
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true' width='330' alt='WC-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true' width='330' alt='WC-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true' width='330' alt='WC-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true' width='330' alt='WC-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Importer CSV » · « Ajouter une saison »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-21%5D%22) · [ADM-WC-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-23%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-38%5D%22)

## 📐 Règles de gestion

- Colonnes : Saison (format « AAAA-AA », ex. 2026-27), Matchs, Buts, Passes D., Trophées ; correspondance modèle : `season`, `matchesPlayed`, `goals`, `assists`, `trophiesCount`.
- Tri par colonne côté client (tableau court) ; tri par défaut saison décroissante ; chevrons sur chaque en-tête.
- Valeurs numériques : entiers ≥ 0 ; matchs ≤ 80 par saison (seuil d'alerte jaune, non bloquant, à confirmer) ; buts et passes ne peuvent pas être négatifs ; police à chiffres tabulaires.
- « Ajouter une saison » insère une ligne vide en tête avec la saison suivante proposée (2027-28) et place le focus sur la première cellule ; une saison déjà présente est refusée (« Cette saison existe déjà »).
- Corbeille : supprime la ligne du tableau (retrait local, enregistré avec le PUT global) après confirmation légère (annulation possible 8 s par toast « Saison supprimée · Annuler »).
- État vide : « Aucune statistique saisie » avec boutons « Ajouter une saison » et « Importer CSV ».

## 🛠️ Tâches

- [ ] Créer `src/components/players/SeasonStatsTab.tsx` et `SeasonStatsTable.tsx` (TanStack Table, cellules éditables).
- [ ] Créer `src/components/players/EditableNumberCell.tsx` (input numérique `inputMode='numeric'`, validation au blur, `Entrée` valide, `Échap` annule).
- [ ] Créer `src/components/players/AddSeasonButton.tsx` + utilitaire `nextSeason(seasons)` dans `src/lib/seasons.ts`.
- [ ] Gérer l'état des lignes via `useFieldArray` du formulaire RHF (`stats`) afin que la checklist et le bouton « Enregistrer le brouillon » voient les modifications.
- [ ] Implémenter la suppression avec annulation (toast Sonner action).
- [ ] Rendu de l'état vide, du chargement (squelettes) et de l'erreur de chargement des stats.
- [ ] Appliquer le rendu tablette (défilement horizontal du tableau, colonne Saison figée).
- [ ] Tests de rendu et d'édition.

## ✔️ Critères d'acceptation

- [ ] Étant donné la fiche de Lamine Yamal, quand l'onglet s'ouvre, alors 4 saisons sont listées de 2026-27 à 2023-24 avec les valeurs de la maquette.
- [ ] Étant donné un clic sur « Ajouter une saison », quand la ligne apparaît, alors la saison proposée est 2027-28 et le focus est dans la cellule Matchs.
- [ ] Étant donné une saison existante, quand j'ajoute la même, alors l'erreur « Cette saison existe déjà » est affichée.
- [ ] Étant donné un clic sur la corbeille, quand je valide, alors la ligne disparaît et un toast « Annuler » est proposé.
- [ ] Étant donné aucune statistique, quand l'onglet s'affiche, alors l'état vide propose d'ajouter ou d'importer.

## 🧪 Tests à écrire

- [ ] SeasonStatsTable.test.tsx : rendu, tri, suppression.
- [ ] EditableNumberCell.test.tsx : Entrée/Échap/blur.
- [ ] seasons.test.ts : `nextSeason` (2026-27 → 2027-28), format invalide.
- [ ] SeasonStatsTab.test.tsx : état vide.
- [ ] axe : tableau éditable.

## ♿ Accessibilité et i18n

- Table avec `<caption>` « Statistiques de Lamine Yamal par saison » ; cellules éditables `aria-label` « Buts, saison 2025-26 » ; corbeille avec `aria-label` « Supprimer la saison 2025-26 ».

## 🔗 Dépendances

À réaliser après : `ADM-WC-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.2 (PlayerStatsHistoryPage)
- CDC Backend §3.2 (PlayerStatSeason)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
