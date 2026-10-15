> **ADM-WC-10** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Depuis WC-02, le bouton « Archiver » ouvre la modale de WC-12 : « Archiver 3 joueurs ? », « Ils seront retirés de la circulation active (Quiz, Guess the Player, Fantasy) sans perte des données historiques. », la liste cochée (Pedri, Pau Cubarsí, Gavi) et deux boutons « Annuler » / « Archiver 3 fiches » (rouge). Le statut `archived` retire la fiche de la circulation sans supprimer les données (CDC Admin §4.2.1).

## ✅ Objectif

Implémenter la confirmation et l'archivage groupé, ainsi que l'archivage unitaire depuis le menu ⋮.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-12` — Archivage groupé — confirmation
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__desktop_light.webp?raw=true' width='330' alt='WC-12 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__desktop_dark.webp?raw=true' width='330' alt='WC-12 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__tablet_light.webp?raw=true' width='330' alt='WC-12 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-12_archivage-groupe-confirmation__tablet_dark.webp?raw=true' width='330' alt='WC-12 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-36%5D%22) · [API-FOOT-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-37%5D%22)

## 📐 Règles de gestion

- Titre pluralisé (« Archiver 1 joueur ? », « Archiver 3 joueurs ? ») ; bouton « Archiver 3 fiches » en variante danger avec icône couches.
- Liste des noms (jusqu'à 8 affichés, puis « … et 4 autres ») avec icônes de coche ; icône de la modale : couches sur fond jaune.
- Appel `POST /admin/players/bulk {action:'archive', ids}` ; le serveur ignore les fiches déjà archivées (`skipped`) ; aucune suppression physique.
- Une fiche archivée n'apparaît plus dans les modules Quiz, Guess the Player, Fantasy ni dans l'application mobile ; elle reste visible dans l'admin avec le badge « Archivé » et peut être désarchivée (retour à `ready` ou `awaiting-translation` selon complétion).
- Audit `PLAYER_ARCHIVED` par fiche (valeur avant/après du statut) ; rôles : content-manager et super-admin.
- Pas de mise à jour optimiste : le bouton passe en `loading` jusqu'à la réponse ; `Échap` ferme la modale sans effet.

## 🛠️ Tâches

- [ ] Créer `src/components/players/BulkArchiveDialog.tsx` basé sur `ConfirmDialog` (ADS `dialog-confirmdialog`), props `players`, `onConfirm`, `loading`.
- [ ] Implémenter `useBulkPlayers('archive')` et `useArchivePlayer(id)` (unitaire : PATCH `status:'archived'`).
- [ ] Ajouter l'entrée « Désarchiver » (PATCH vers `awaiting-translation`/`ready`) au menu ⋮ des lignes archivées.
- [ ] Gérer la liste tronquée « … et N autres » et l'ordre alphabétique.
- [ ] Toast « 3 fiches archivées » avec action « Annuler » valable 8 s (restaure le statut précédent via PATCH inverse) — désactivable si le serveur ne fournit pas `previousStatus`.
- [ ] Vider la sélection et invalider `['players']` après succès.
- [ ] Vérifier le rendu de la modale en thème sombre et tablette.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 fiches sélectionnées, quand j'ouvre la modale, alors le titre est « Archiver 3 joueurs ? » et les 3 noms sont listés.
- [ ] Étant donné un clic sur « Archiver 3 fiches », quand l'API répond 200, alors les badges passent à « Archivé » et la sélection est vidée.
- [ ] Étant donné une fiche déjà archivée dans la sélection, quand j'archive, alors elle est comptée comme ignorée dans le toast.
- [ ] Étant donné une erreur serveur, quand je confirme, alors la modale reste ouverte avec un message et le bouton redevient actif.
- [ ] Étant donné une fiche archivée, quand j'ouvre son menu ⋮, alors « Désarchiver » est proposé.

## 🧪 Tests à écrire

- [ ] BulkArchiveDialog.test.tsx : pluriel, liste tronquée.
- [ ] usePlayerMutations.test.tsx : archivage unitaire et groupé.
- [ ] BulkArchiveDialog.a11y.test.tsx : alertdialog et focus.
- [ ] MSW : réponse `skipped` non vide.
- [ ] e2e : archiver 3 joueurs puis filtrer Statut = Archivé.

## ♿ Accessibilité et i18n

- Modale `role='alertdialog'` avec `aria-describedby` sur le texte d'explication ; piège de focus ; restauration du focus sur le bouton « Archiver » de la barre.

## 🔗 Dépendances

À réaliser après : `ADM-WC-08` · `ADM-WC-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.1, §6.4, §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
