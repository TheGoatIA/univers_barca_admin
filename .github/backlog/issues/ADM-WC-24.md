> **ADM-WC-24** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WC-09 présente la carte « Photo / illustration » : à gauche une zone pointillée « Glisse une image ici · ou parcours tes fichiers · JPG, PNG · 5 Mo max · 1200×1200 min. », à droite l'aperçu du résultat (fond bleu dégradé avec illustration) légendé « Aperçu · recadrage automatique côté serveur », et dessous un encadré bleu « Rappel : aucune photographie de presse protégée. Utilise une illustration originale ou une image sous licence compatible. ».

## ✅ Objectif

Implémenter l'onglet Photo avec dépôt par glisser-déposer ou sélection, aperçu et rappel de droits d'usage.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-09` — Fiche joueur — photo (upload)
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true' width='330' alt='WC-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true' width='330' alt='WC-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true' width='330' alt='WC-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true' width='330' alt='WC-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Photo / illustration » · « Glisse une image ici »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-25%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22) · [API-FOOT-56](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-56%5D%22)

## 📐 Règles de gestion

- Zone de dépôt : survol → bordure grenat et fond `primary/5` ; état d'erreur → bordure rouge avec message sous la zone ; le lien « parcours tes fichiers » ouvre le sélecteur natif.
- Contraintes affichées : JPG, PNG, 5 Mo maximum, 1200×1200 minimum (la maquette ne cite pas WebP, contrairement à la médiathèque WE : le format WebP n'est donc pas accepté pour la photo joueur).
- Aperçu : ratio 4/3 (cadre 360×270 px), image en `object-fit: cover` ; sans photo, silhouette par défaut ; le recadrage final est réalisé par le serveur (plusieurs formats mobiles) : l'admin n'affiche que l'aperçu du résultat (CDC Admin §5.5).
- Actions sur la photo existante : « Remplacer » (nouveau dépôt) et « Retirer » (confirmation) ; la bibliothèque de médias « Choisir depuis la médiathèque » est proposée si disponible (WE `fn-selecteur-media-et-usage`).
- Encadré informatif permanent (variante `info`, icône ⓘ) rappelant l'interdiction des photographies de presse protégées.
- Photo manquante : l'item « Photo » de la checklist passe en croix grise et l'avatar utilise les initiales.

## 🛠️ Tâches

- [ ] Créer `src/components/players/PhotoTab.tsx`, `PhotoDropzone.tsx`, `PhotoPreview.tsx`, `CopyrightNotice.tsx`.
- [ ] Utiliser `MediaUploader` (ADS) paramétré `accept=['image/jpeg','image/png']`, `maxBytes=5*1024*1024`, `minWidth=1200`, `minHeight=1200` (ou les briques FND `fnd-upload-dropzone-socle`).
- [ ] Afficher l'aperçu via `photoUrl` (variante `card`) ; état « envoi en cours » avec barre de progression sur l'aperçu.
- [ ] Implémenter « Remplacer » / « Retirer » avec ConfirmDialog et mise à jour de `photoKey`.
- [ ] Gérer chargement, erreur d'upload (message + « Réessayer ») et état sans photo.
- [ ] Adapter la mise en page tablette (zone et aperçu empilés sous 900 px).
- [ ] Documenter dans `docs/` la politique de droits d'image.
- [ ] Tests de rendu et de remplacement.

## ✔️ Critères d'acceptation

- [ ] Étant donné l'onglet Photo sans image, quand il s'affiche, alors la zone « Glisse une image ici » et les contraintes « JPG, PNG · 5 Mo max · 1200×1200 min. » sont visibles.
- [ ] Étant donné une image valide déposée, quand l'envoi se termine, alors l'aperçu l'affiche et l'item « Photo » de la checklist devient vert.
- [ ] Étant donné un clic sur « Retirer », quand je confirme, alors la photo est supprimée et l'avatar revient aux initiales.
- [ ] Étant donné le thème sombre, quand l'encadré de rappel s'affiche, alors le contraste du texte est conforme AA.
- [ ] Étant donné une largeur de 800 px, quand l'onglet s'affiche, alors la zone de dépôt et l'aperçu sont empilés.

## 🧪 Tests à écrire

- [ ] PhotoTab.test.tsx : états sans photo / avec photo / envoi.
- [ ] CopyrightNotice.test.tsx : texte exact du rappel.
- [ ] PhotoPreview.test.tsx : ratio et repli.
- [ ] axe : zone de dépôt.
- [ ] Story Storybook clair/sombre.

## ♿ Accessibilité et i18n

- Zone de dépôt `role='button'` `tabIndex=0`, Entrée/Espace ouvrent le sélecteur ; alternative texte de l'aperçu « Photo de Lamine Yamal ».

## 🔗 Dépendances

À réaliser après : `ADM-WC-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.5
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
