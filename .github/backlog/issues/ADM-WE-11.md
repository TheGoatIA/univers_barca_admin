> **ADM-WE-11** · Fonctionnel · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Le bouton « Téléverser » de la médiathèque doit accepter un glisser-déposer ou une sélection classique, valider format et poids côté client avant envoi, puis afficher l'aperçu du résultat : le recadrage/redimensionnement est fait côté serveur en plusieurs formats pour les contextes mobiles (CDC Admin §5.5).

## ✅ Objectif

Implémenter le composant d'upload multiple avec progression, validations et gestion des erreurs.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-04` — Médiathèque
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true' width='330' alt='WE-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true' width='330' alt='WE-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true' width='330' alt='WE-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true' width='330' alt='WE-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Médiathèque » · « 318 médias · 1,2 Go utilisés » · « Téléverser » · « Rechercher… » · « Type » · « Utilisé » · « Date » · « yamal-portrait.jpg » · « 212 Ko · utilisée 3× » · « wembley-1992.jpg » · « 480 Ko · utilisée 1× » · « Nouveau » · « trophee-ldc.jpg » · « 96 Ko · utilisée 0× » · « camp-nou.jpg » · « 340 Ko · utilisée 2× » · « koeman.jpg » · « 128 Ko · utilisée 1× »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-10%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

## 📐 Règles de gestion

- Formats acceptés : JPEG, PNG, WebP ; poids max proposé 5 Mo par fichier (à confirmer avec l'API) ; jusqu'à 10 fichiers par lot.
- Validation par signature binaire (magic bytes) en plus de l'extension et du type MIME ; refus clair « Format non pris en charge (JPEG, PNG, WebP) ».
- Envoi multipart POST /admin/media (un fichier par requête, parallélisme 3) avec barre de progression par fichier et annulation.
- Le serveur génère les variantes (vignette, carte, plein écran) ; l'admin affiche seulement l'aperçu du résultat final.
- Les noms de fichier sont normalisés en minuscules avec tirets (wembley-1992.jpg) et dédoublonnés par empreinte SHA-256 (« Ce média existe déjà : voir »).

## 🔄 Comportement et états

- Zone de dépôt plein écran avec surbrillance au survol.
- Fichier refusé : listé en rouge avec la raison ; les autres continuent.
- Succès : la carte apparaît en tête avec badge « Nouveau » et toast « 3 médias téléversés ».
- Réseau coupé : reprise manuelle « Réessayer » par fichier.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/media` | Téléverse un média (multipart/form-data, champ file) | file | 201 {id,key,filename,sizeBytes,mimeType,width,height,variants:{thumb,card,full}} |

## 🗄️ Données

- MediaAsset.sha256, variants

## 🛠️ Tâches

- [ ] Créer src/components/content/MediaUploader.tsx (drag & drop + input file multiple).
- [ ] Créer src/lib/file-validation.ts : validateImage(file) (type, signature, poids).
- [ ] Créer useUploadMedia (axios onUploadProgress, AbortController, parallélisme 3).
- [ ] Créer src/components/content/UploadQueue.tsx (progression, erreurs, annuler).
- [ ] Calculer l'empreinte SHA-256 côté client (crypto.subtle) pour détecter les doublons avant envoi.
- [ ] Normaliser le nom de fichier.
- [ ] Brancher le succès sur l'invalidation de ['media'].
- [ ] Documenter le contrat d'upload côté API (taille max, variantes).

## ✔️ Critères d'acceptation

- [ ] Étant donné un fichier .gif, quand je le dépose, alors il est refusé avec le message de format.
- [ ] Étant donné 3 JPEG valides, quand je les dépose, alors trois barres de progression s'affichent et trois cartes apparaissent à la fin.
- [ ] Étant donné un fichier de 8 Mo, quand je le dépose, alors il est refusé pour poids excessif.
- [ ] Étant donné un fichier renommé .jpg mais de type exécutable, quand je le dépose, alors la signature binaire le rejette.

## 🧪 Tests à écrire

- [ ] file-validation.test.ts : extension trompeuse et poids.
- [ ] MediaUploader.test.tsx : dépôt multiple.
- [ ] useUploadMedia.test.tsx : annulation.
- [ ] e2e : téléversement d'une image et apparition en tête de grille.

## ♿ Accessibilité et i18n

- Zone de dépôt accessible au clavier (bouton « Choisir des fichiers »), progression via role=progressbar.

## 🔗 Dépendances

À réaliser après : `ADM-WE-10` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.5
- CDC Admin §6.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
