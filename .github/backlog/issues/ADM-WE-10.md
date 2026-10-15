> **ADM-WE-10** · Écran · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Écran /contenu/mediatheque « MÉDIATHÈQUE » : sous-titre « 318 médias · 1,2 Go utilisés », bouton « Téléverser », recherche, filtres Type / Utilisé / Date et grille de cartes (5 colonnes en desktop) : vignette dégradée ou photo, nom de fichier (« yamal-portrait.jpg ») et « 212 Ko · utilisée 3× ». Un badge « Nouveau » est visible sur « trophee-ldc.jpg ».

## ✅ Objectif

Afficher la bibliothèque centralisée de médias réutilisables (CDC Admin §5.5) avec filtres et pagination infinie.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-04` — Médiathèque
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true' width='330' alt='WE-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true' width='330' alt='WE-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true' width='330' alt='WE-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true' width='330' alt='WE-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Médiathèque » · « 318 médias · 1,2 Go utilisés » · « Téléverser » · « Rechercher… » · « Type » · « Utilisé » · « Date » · « yamal-portrait.jpg » · « 212 Ko · utilisée 3× » · « wembley-1992.jpg » · « 480 Ko · utilisée 1× » · « Nouveau » · « trophee-ldc.jpg » · « 96 Ko · utilisée 0× » · « camp-nou.jpg » · « 340 Ko · utilisée 2× » · « koeman.jpg » · « 128 Ko · utilisée 1× »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-11%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

## 📐 Règles de gestion

- Carte : vignette 4:3, nom de fichier, taille formatée (Ko/Mo), compteur d'utilisations « utilisée N× » (0× en gris), badge « Nouveau » pendant 7 jours après upload.
- Filtres : Type (Image, Autre), Utilisé (Utilisé, Non utilisé), Date (7 jours, 30 jours, plage) ; recherche sur nom de fichier, debounce 300 ms.
- Compteurs d'en-tête : nombre de médias et volume total (1,2 Go) fournis par l'API (usage de stockage).
- Chargement par pages de 30 (scroll infini) ; la grille passe de 5 colonnes (≥ 1280 px) à 3 puis 2 colonnes (tablette).
- Un clic ouvre un panneau latéral de détail : aperçu, dimensions, formats générés, liste des contenus qui l'utilisent.

## 🔄 Comportement et états

- Chargement : cartes squelette (15).
- Vide : « Aucun média » + bouton « Téléverser ».
- Erreur d'image : repli sur icône image.
- Sélection multiple (Maj/Ctrl) pour actions groupées éventuelles (suppression, voir issue d'usage).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/media` | Liste de médias | ?q=&type=image&used=false&from=&to=&cursor=&limit=30 | {items:[{id,key,filename,sizeBytes,mimeType,width,height,usageCount,createdAt,thumbUrl}],nextCursor,totals:{count:318,bytes}} |

## 🗄️ Données

- Collection MediaAsset (à créer côté API : key, filename, sizeBytes, mimeType, width, height, usageCount, uploadedBy, createdAt)

## 🛠️ Tâches

- [ ] Créer src/pages/content/MediaLibraryPage.tsx et la route /contenu/mediatheque.
- [ ] Créer src/api/media.api.ts et src/types/media.ts.
- [ ] Créer src/components/content/MediaGrid.tsx (grille responsive + useInfiniteQuery).
- [ ] Créer src/components/content/MediaCard.tsx (vignette, nom, taille, usage, badge Nouveau).
- [ ] Créer src/components/content/MediaFilters.tsx (Type, Utilisé, Date, recherche).
- [ ] Créer src/components/content/MediaDetailPanel.tsx (Radix Dialog latéral).
- [ ] Créer src/lib/format.ts : formatBytes (Ko, Mo, Go en français : « 1,2 Go »).
- [ ] Ajouter les squelettes et le repli d'image.

## ✔️ Critères d'acceptation

- [ ] Étant donné 318 médias, quand la page charge, alors « 318 médias · 1,2 Go utilisés » est affiché.
- [ ] Étant donné un média utilisé 0 fois, quand sa carte s'affiche, alors « utilisée 0× » est en gris.
- [ ] Étant donné le filtre « Non utilisé », quand je l'active, alors seuls les médias non utilisés sont listés.
- [ ] Étant donné un média ajouté il y a 2 jours, quand sa carte s'affiche, alors le badge « Nouveau » est visible.

## 🧪 Tests à écrire

- [ ] format.test.ts : formatBytes(212*1024) = « 212 Ko ».
- [ ] MediaCard.test.tsx : badge et compteur.
- [ ] MediaGrid.test.tsx : scroll infini (IntersectionObserver mocké).
- [ ] MediaFilters.test.tsx

## ♿ Accessibilité et i18n

- Cartes focalisables, nom accessible « yamal-portrait.jpg, 212 Ko, utilisée 3 fois ».
- Images avec alt = nom de fichier.

## 🔗 Dépendances

À réaliser après : `ADM-WE-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.5
- CDC Admin §4.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
