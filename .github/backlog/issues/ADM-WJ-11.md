> **ADM-WJ-11** · Écran · Priorité **P2** · Taille **L** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Vu en rôle Modérateur : « Bibliothèque de modération des wallpapers — Phase 3 · contrôle a posteriori des images générées », bouton « Filtrer : à contrôler », grille 5 colonnes de vignettes 9:16 avec prompt (« Yamal néon », « Camp Nou nuit », « Trophée doré », « logo club… », « Pedri aquarelle »), badge « Signalé » et boutons OK / Retirer.

## ✅ Objectif

Contrôler a posteriori les images produites par l'IA (CDC §10).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-06` — Modération des wallpapers IA
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_light.webp?raw=true' width='330' alt='WJ-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_dark.webp?raw=true' width='330' alt='WJ-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_light.webp?raw=true' width='330' alt='WJ-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_dark.webp?raw=true' width='330' alt='WJ-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Wallpapers IA » · « Bibliothèque de modération des wallpapers » · « Phase 3 · contrôle a posteriori des images générées » · « Filtrer : à contrôler » · « « Yamal néon » » · « Retirer » · « « Camp Nou nuit » » · « « Trophée doré » » · « Signalé » · « « logo club… » » · « « Pedri aquarelle » »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-12%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Statuts GeneratedWallpaper : PENDING, GENERATING, READY, REJECTED (CDC Backend §3.9) ; la file « à contrôler » liste les READY non revus.
- OK = marqué contrôlé ; Retirer = passage REJECTED, image retirée de la galerie de l'utilisateur et notification.
- Badge Signalé prioritaire (tri signalés d'abord) ; prompt tronqué avec infobulle complète.
- Pagination serveur 20 vignettes, chargement paresseux des images.

## 🔄 Comportement et états

- Vide : « Rien à contrôler » ; chargement : vignettes skeleton ; erreur d'image : placeholder.
- Rôles : moderator, super-admin.

## 🛠️ Tâches

- [ ] Créer `src/features/wallpapers-admin/pages/WallpaperModerationPage.tsx`, `WallpaperCard.tsx`, `WallpaperGrid.tsx`.
- [ ] API GET /admin/wallpapers?status=to-review (à créer) ; hooks.
- [ ] Filtres (à contrôler, signalés, retirés) via URL.
- [ ] Grille responsive 5/3/2 colonnes.
- [ ] Raccourcis O / R optionnels.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné 10 wallpapers, alors la grille affiche 5 colonnes sur desktop.
- [ ] Étant donné un wallpaper signalé, alors le badge « Signalé » est visible et il est listé en premier.
- [ ] Étant donné OK, alors la vignette quitte la file « à contrôler ».

## 🧪 Tests à écrire

- [ ] Test composant : WallpaperCard badge signalé
- [ ] Test page : filtre URL
- [ ] Test composant : grille responsive
- [ ] Test : image en erreur

## ♿ Accessibilité et i18n

- Alt = prompt de génération ; boutons « Retirer le wallpaper Yamal néon »

## 🔗 Dépendances

À réaliser après : `ADM-WJ-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §10
- CDC Backend §3.9, §11.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
