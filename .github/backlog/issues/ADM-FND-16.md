> **ADM-FND-16** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 0 — Socle technique

## 🎯 Contexte

Trois zones d'envoi apparaissent dans les maquettes : photo de joueur (WC-09), import CSV (WC-11, WC-01) et médiathèque (WE). Le CDC Admin §5.5 impose glisser-déposer + sélection classique, validation du format et du poids côté client avant envoi, recadrage côté serveur. ADS `media-uploader`, WE `fn-upload-media` et WC `fn-photo-joueur-validation-upload` décrivent chacun une partie de ce mécanisme ; pour éviter trois implémentations, ce socle bas niveau doit être livré en premier et consommé par ces issues.

## ✅ Objectif

Livrer les briques réutilisables (hook de dépôt, validateurs, file d'envoi, empreinte) sans composant visuel spécifique.

## 📐 Règles de gestion

- `useDropzone({accept, maxBytes, multiple, onFiles})` : gestion `dragenter/leave/over/drop` avec compteur (pas de scintillement), `isDragActive`, `isDragReject`, `open()` du sélecteur natif (input masqué), prévention du comportement par défaut du navigateur sur le reste de la page (un fichier lâché hors zone n'ouvre pas le fichier).
- Validateurs `src/lib/files/` : `detectFileType(bytes)` par signature (JPEG `FF D8 FF`, PNG `89 50 4E 47`, WebP `RIFF…WEBP`, PDF `%PDF`, texte CSV par heuristique UTF-8), `validateFile(file, rules)` → `{ok}` ou `{ok:false, code, message}` avec codes `TYPE`, `SIZE`, `DIMENSIONS`, `EMPTY`, `COUNT` ; l'extension et le MIME du navigateur sont indicatifs, la signature fait foi.
- SVG refusé pour les images (risque de script embarqué) ; seules les images matricielles sont acceptées ; dimensions lues via `createImageBitmap` (sans insérer l'image dans le DOM).
- File d'envoi `useUploadQueue({concurrency: 3})` : progression par fichier (`onUploadProgress`), annulation (`AbortController`), reprise manuelle, 2 re-tentatives automatiques uniquement sur erreur réseau pour les requêtes idempotentes (l'upload multipart ne l'est pas : reprise manuelle seulement), états `queued|uploading|done|error|cancelled`.
- Empreinte `sha256(file)` via `crypto.subtle.digest` (lecture par blocs de 4 Mo pour limiter la mémoire) pour détecter les doublons avant envoi ; normalisation du nom de fichier (minuscules, tirets, sans accents).
- Limites par défaut centralisées : images 5 Mo, CSV 2 Mo, 10 fichiers par lot ; configurables par usage ; messages français via le catalogue i18n.

## 🛠️ Tâches

- [ ] Créer `src/lib/files/signatures.ts`, `validate.ts`, `dimensions.ts`, `sha256.ts`, `fileName.ts` avec leurs tests.
- [ ] Créer `src/hooks/useDropzone.ts` (compteur de drag, input masqué, accessibilité clavier).
- [ ] Créer `src/hooks/useUploadQueue.ts` (concurrence, progression, annulation, états).
- [ ] Créer `src/lib/files/limits.ts` (`LIMITS.image`, `LIMITS.csv`).
- [ ] Créer `src/components/shared/FileDropArea.tsx` (zone pointillée générique avec slots) utilisée par `CsvImportDrawer` (WC), `MediaUploader` (ADS) et `PhotoDropzone` (WC).
- [ ] Ajouter les messages d'erreur dans le catalogue FR (`fr.files.*`).
- [ ] Documenter dans `docs/ARCHITECTURE.md` le contrat `POST /admin/media` (multipart) et la politique de sécurité (signature, SVG refusé).
- [ ] Tests avec fichiers synthétiques (Blob) et MSW.

## ✔️ Critères d'acceptation

- [ ] Étant donné un fichier « photo.jpg » dont la signature est PNG, quand il est validé, alors il est accepté comme PNG.
- [ ] Étant donné un fichier SVG, quand il est déposé, alors il est refusé avec « Format non pris en charge ».
- [ ] Étant donné 12 fichiers pour une limite de 10, quand ils sont déposés, alors les 10 premiers sont acceptés et un message signale les autres.
- [ ] Étant donné un fichier lâché hors de la zone, quand le drop se produit, alors le navigateur n'ouvre pas le fichier.
- [ ] Étant donné 5 envois, quand la file s'exécute, alors 3 s'exécutent en parallèle et l'annulation d'un envoi n'affecte pas les autres.

## 🧪 Tests à écrire

- [ ] signatures.test.ts : JPEG/PNG/WebP/PDF/CSV, extensions trompeuses.
- [ ] validate.test.ts : poids, dimensions, comptage.
- [ ] useDropzone.test.tsx : compteur de drag, clavier.
- [ ] useUploadQueue.test.tsx : concurrence, annulation, erreurs.
- [ ] sha256.test.ts : empreinte connue, gros fichier par blocs.

## ♿ Accessibilité et i18n

- La zone de dépôt est un bouton focusable (Entrée/Espace) ; les erreurs sont annoncées en `role='alert'` ; la progression expose `role='progressbar'`.

## 📚 Références

- CDC Admin §5.5, §6.2
- ADS media-uploader
- WE fn-upload-media

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
