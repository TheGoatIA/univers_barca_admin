> **ADM-WC-25** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La zone de dépôt de WC-09 impose JPG/PNG, 5 Mo max et 1200×1200 minimum, avec validation du format et du poids côté client avant envoi (CDC Admin §5.5). Le recadrage et la génération de plusieurs formats sont faits côté serveur ; l'admin conserve la clé de média (`photoKey`) sur la fiche.

## ✅ Objectif

Valider le fichier localement, le téléverser et enregistrer sa clé sur la fiche joueur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-09` — Fiche joueur — photo (upload)
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true' width='330' alt='WC-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true' width='330' alt='WC-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true' width='330' alt='WC-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true' width='330' alt='WC-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Photo / illustration » · « Glisse une image ici »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-24%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22) · [API-FOOT-56](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-56%5D%22)

## 📐 Règles de gestion

- Validation locale dans l'ordre : extension/MIME (image/jpeg, image/png) → signature binaire (magic bytes `FF D8 FF` pour JPEG, `89 50 4E 47` pour PNG) → poids ≤ 5 Mo → dimensions ≥ 1200×1200 via `createImageBitmap` ; premier échec = message dédié (« Format non pris en charge (JPG, PNG) », « Image trop lourde : 7,2 Mo (5 Mo maximum) », « Image trop petite : 800×800 (1200×1200 minimum) »).
- Envoi `POST /admin/media` (multipart, champ `file`, `kind=player-photo`) avec progression ; réponse `{id,key,variants}` ; puis `PATCH /admin/players/:id {photoKey}` (inclus dans l'enregistrement du brouillon, ou immédiat avec toast « Photo enregistrée »).
- Les EXIF sont retirés côté serveur (RGPD/minimisation : géolocalisation éventuelle) ; le client n'affiche aucune métadonnée.
- Les noms de fichiers sont normalisés (`lamine-yamal.jpg`) ; un doublon (empreinte SHA-256 identique) propose de réutiliser le média existant.
- Un seul envoi à la fois sur cet onglet ; annulation possible (`AbortController`) ; reprise manuelle « Réessayer » en cas de coupure réseau.

## 🛠️ Tâches

- [ ] Utiliser/compléter `src/lib/file-validation.ts` : `validateImage(file, rules)` retournant `{ok:true}` ou `{ok:false, code, message}` (réutilisation FND `fnd-upload-dropzone-socle`).
- [ ] Créer `useUploadPlayerPhoto(id)` : upload avec `onUploadProgress`, annulation, puis mise à jour de `photoKey` dans le formulaire.
- [ ] Calculer l'empreinte SHA-256 (`crypto.subtle.digest`) pour la détection de doublon.
- [ ] Ajouter `mediaApi.upload(file, kind)` dans `src/api/media.api.ts` (si WE ne l'a pas créé).
- [ ] Afficher la progression sur l'aperçu et gérer l'annulation.
- [ ] Mapper les erreurs serveur (413, 415, 422 `IMAGE_TOO_SMALL`) vers des messages français.
- [ ] Tests unitaires de validation avec fichiers synthétiques (Blob signatures).
- [ ] Documenter les limites dans `docs/`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un fichier « photo.gif », quand je le dépose, alors « Format non pris en charge (JPG, PNG) » s'affiche sans requête réseau.
- [ ] Étant donné un JPEG de 7,2 Mo, quand je le dépose, alors le message de poids exact est affiché.
- [ ] Étant donné un PNG de 800×800 px, quand la validation s'exécute, alors l'erreur de dimensions mentionne 1200×1200.
- [ ] Étant donné un fichier valide, quand l'envoi réussit, alors `photoKey` est mis à jour et l'aperçu s'affiche.
- [ ] Étant donné une coupure réseau pendant l'envoi, quand l'erreur survient, alors un bouton « Réessayer » est proposé.
- [ ] Étant donné un fichier renommé `.jpg` mais de signature PNG, quand je le dépose, alors il est accepté selon sa signature réelle.

## 🧪 Tests à écrire

- [ ] file-validation.test.ts : extension trompeuse, signature, poids, dimensions (mock createImageBitmap).
- [ ] useUploadPlayerPhoto.test.tsx : progression, annulation, erreur 415.
- [ ] mediaApi (MSW) : upload multipart.
- [ ] sha256.test.ts : empreinte connue.
- [ ] e2e : remplacer la photo d'un joueur.

## ♿ Accessibilité et i18n

- Messages d'erreur dans une région `role='alert'` associée à la zone de dépôt ; progression `role='progressbar'` avec valeur.

## 🔗 Dépendances

À réaliser après : `ADM-WC-24` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.5, §6.2
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
