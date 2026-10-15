> **ADM-ADS-25** · UX / Ergonomie · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-03 : « Glisse une image ici — JPG, PNG · 5 Mo max ». CDC §5.5 : upload par glisser-déposer + sélection classique, validation format/poids côté client, aperçu du résultat, bibliothèque de médias.

## ✅ Objectif

Composant d'upload d'image accessible.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-03` — Composants du back-office
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true' width='330' alt='ZD-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true' width='330' alt='ZD-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true' width='230' alt='ZD-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true' width='230' alt='ZD-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Admin · 01 » · « Composants admin » · « DataTable, StatusBadge, TrilingualTextEditor, MediaUploader, ModerationActionMenu, ConfirmDialog, Toast : primitives Radix + Tailwind, accessibles au clavier. » · « DataTable » · « Pagination serveur, tri, filtres persistés dans l’URL, actions de masse et mode dense. » · « Joueur » · « Poste » · « Langues » · « Statut » · « Mis à jour » · « Pedri » · « Milieu » · « Publié » · « hier » · « Gavi » · « Traduction » · « 2 sept. » · « Balde » · « Latéral » · « Brouillon » · « 30 août » · « 1–3 sur 71 » · « TrilingualTextEditor — états » · « Incomplet : publication bloquée » · « Biographie » · « FR · Français » · « EN · English » · « ES · Español » · « Saisir le texte… » · « Publication bloquée : ES manquant(e)(s) »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-14%5D%22) · [ADM-ADS-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-16%5D%22) · [ADM-ADS-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-21%5D%22) · [ADM-ADS-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-23%5D%22) · [ADM-ADS-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-24%5D%22) · [ADM-ADS-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-26%5D%22) · [ADM-ADS-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-27%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [ADM-ADS-37](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-37%5D%22)

## 📐 Règles de gestion

- Formats JPG, PNG (WebP accepté si l'API l'autorise), 5 Mo max ; erreurs précises « Fichier trop lourd (7,2 Mo > 5 Mo) ».
- Zone de dépôt pointillée, état survol, aperçu miniature, barre de progression, bouton Remplacer/Supprimer.
- Un seul fichier par défaut, prop `multiple`.
- Aperçu informatif : le recadrage est fait côté serveur.

## 🔄 Comportement et états

- Erreur d'upload : message + Réessayer ; annulation possible.

## 🛠️ Tâches

- [ ] Créer `MediaUploader.tsx` (hooks `useDropzone` natif), `UploadProgress`, `MediaPreview`.
- [ ] Validation `validateImage(file)` (type MIME + signature magique + poids).
- [ ] Upload via `api` avec onUploadProgress.
- [ ] Bibliothèque de médias (`MediaPicker`) : à traiter dans le groupe contenu.
- [ ] Stories.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un PDF, alors l'erreur de format est affichée.
- [ ] Étant donné 7 Mo, alors l'erreur de poids est affichée.
- [ ] Étant donné un JPG valide, alors l'aperçu et la progression s'affichent.

## 🧪 Tests à écrire

- [ ] Test unitaire : validateImage
- [ ] Test composant : drop de fichier
- [ ] Test composant : erreur de poids
- [ ] Test a11y : zone clavier

## ♿ Accessibilité et i18n

- Zone activable au clavier (Entrée/Espace)

## 🔗 Dépendances

À réaliser après : `ADM-ADS-06` · `ADM-ADS-19` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
