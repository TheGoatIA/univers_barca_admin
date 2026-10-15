> **ADM-WJ-12** · Fonctionnel · Priorité **P2** · Taille **M** · Phase 3 — Fonctionnalités avancées

## 🎯 Contexte

Le bouton « Retirer » doit rester traçable (audit) et informer l'utilisateur.

## ✅ Objectif

Retirer une image inappropriée de façon réversible côté audit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-06` — Modération des wallpapers IA
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_light.webp?raw=true' width='330' alt='WJ-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__desktop_dark.webp?raw=true' width='330' alt='WJ-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_light.webp?raw=true' width='330' alt='WJ-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-06_moderation-des-wallpapers-ia__tablet_dark.webp?raw=true' width='330' alt='WJ-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Wallpapers IA » · « Bibliothèque de modération des wallpapers » · « Phase 3 · contrôle a posteriori des images générées » · « Filtrer : à contrôler » · « « Yamal néon » » · « Retirer » · « « Camp Nou nuit » » · « « Trophée doré » » · « Signalé » · « « logo club… » » · « « Pedri aquarelle » »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-11%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Motif obligatoire (liste : contenu protégé/logo officiel, inapproprié, autre) + commentaire ; le prompt « logo club… » illustre le cas des marques protégées.
- Statut REJECTED ; notification à l'auteur sans révéler d'identité de modérateur.
- Audit WALLPAPER_REMOVED.
- Annulation possible 24 h par un super-admin (restauration en READY) — à confirmer côté API.

## 🔄 Comportement et états

- Dialogue de confirmation avec aperçu de l'image.

## 🛠️ Tâches

- [ ] Composant `RemoveWallpaperDialog`.
- [ ] Mutation POST /admin/wallpapers/:id/remove (à créer).
- [ ] Invalidation liste.
- [ ] Notification à l'auteur déclenchée par le backend (vérifier le contrat).
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un motif choisi, quand je confirme, alors le wallpaper est retiré et l'audit alimenté.
- [ ] Étant donné aucun motif, alors la confirmation est bloquée.
- [ ] Étant donné un retrait, alors la vignette disparaît de la file à contrôler.

## 🧪 Tests à écrire

- [ ] Test composant : motif obligatoire
- [ ] Test hook : invalidation
- [ ] Test : audit
- [ ] Test : annulation

## 🔗 Dépendances

À réaliser après : `ADM-WJ-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §10

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
