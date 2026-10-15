> **ADM-WC-13** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Toutes les maquettes de fiche (WC-05 à WC-09) partagent la même structure : fil d'Ariane « Contenu > Joueurs > Lamine Yamal », avatar rond 64 px, nom en Barlow Condensed majuscules « LAMINE YAMAL », badge de statut (« En attente de traduction » / « Prête à publier »), sous-titre « N°10 · Ailier droit · ID joueur #ub-0010 », quatre onglets (Identité, Biographie avec point rouge, Statistiques par saison, Photo), boutons « Enregistrer le brouillon » et « Publier » (désactivé tant que la fiche n'est pas prête), et une colonne latérale (workflow + checklist). La route `/joueurs/:id` n'existe pas encore.

## ✅ Objectif

Créer la page `PlayerEditPage` et son squelette (en-tête, onglets, colonne latérale) dans lesquels s'insèrent les contenus d'onglet.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-05` — Fiche joueur — identité
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true' width='330' alt='WC-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true' width='330' alt='WC-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true' width='330' alt='WC-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true' width='330' alt='WC-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Nom complet » · « Lamine Yamal Nasraoui Ebana »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-14%5D%22) · [ADM-WC-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-15%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22)

#### `WC-06` — Fiche joueur — biographie incomplète
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_light.webp?raw=true' width='330' alt='WC-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_dark.webp?raw=true' width='330' alt='WC-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_light.webp?raw=true' width='330' alt='WC-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_dark.webp?raw=true' width='330' alt='WC-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Publication bloquée » · « · la biographie doit être renseignée en FR, EN et ES. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-18%5D%22) · [ADM-WC-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-19%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-36%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WC-07` — Fiche joueur — biographie trilingue complète
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_light.webp?raw=true' width='330' alt='WC-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_dark.webp?raw=true' width='330' alt='WC-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_light.webp?raw=true' width='330' alt='WC-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_dark.webp?raw=true' width='330' alt='WC-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « Prête à publier » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « FR · Français » · « EN · English »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-18%5D%22) · [ADM-WC-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-19%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-08%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-36%5D%22)

#### `WC-08` — Fiche joueur — statistiques par saison
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true' width='330' alt='WC-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true' width='330' alt='WC-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true' width='330' alt='WC-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true' width='330' alt='WC-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Importer CSV » · « Ajouter une saison »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-20%5D%22) · [ADM-WC-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-21%5D%22) · [ADM-WC-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-23%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-38%5D%22)

#### `WC-09` — Fiche joueur — photo (upload)
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true' width='330' alt='WC-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true' width='330' alt='WC-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true' width='330' alt='WC-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true' width='330' alt='WC-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Photo / illustration » · « Glisse une image ici »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-24%5D%22) · [ADM-WC-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-25%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22) · [API-FOOT-56](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-56%5D%22)

## 📐 Règles de gestion

- Routes : `/joueurs/nouveau` (création) et `/joueurs/:id` (édition) ; onglet courant dans l'URL (`?onglet=identite|biographie|statistiques|photo`, défaut `identite`) pour permettre les liens profonds depuis la checklist.
- Point rouge à droite du libellé « Biographie » tant qu'au moins une langue de la biographie est vide ; il disparaît quand FR, EN et ES sont renseignées ; mécanisme générique `tab.hasIssue`.
- Bouton « Publier » : désactivé (opacité 50 %) tant que `isReadyToPublish` est faux, avec infobulle « Publication bloquée : biographie EN, ES manquantes » ; actif quand le statut calculé est `ready`.
- Bouton « Enregistrer le brouillon » : toujours actif si le formulaire est modifié (`isDirty`) ; l'enregistrement ne publie jamais.
- Le badge de statut dans l'en-tête reflète le statut serveur après enregistrement ; avatar = photo (vignette) sinon initiales.
- Chargement : squelette de l'en-tête, des onglets et des cartes ; 404 API → page « Joueur introuvable » avec lien « Retour à la liste » ; 403 → page d'accès non autorisé (WA).

## 🛠️ Tâches

- [ ] Créer `src/pages/players/PlayerEditPage.tsx` (lazy dans `App.tsx`) et `PlayerNewPage.tsx`.
- [ ] Créer `src/components/players/PlayerHeader.tsx` (avatar, titre, badge, sous-ligne), `PlayerTabs.tsx` (Radix Tabs liés à l'URL, `RouteTabs` partagé si présent).
- [ ] Créer `src/components/players/PlayerActionsBar.tsx` (boutons Enregistrer le brouillon / Publier alignés à droite de la ligne d'onglets).
- [ ] Mettre en place le formulaire RHF unique (`FormProvider`) partagé entre onglets avec `zodResolver(playerFormSchema)` et valeurs par défaut issues de `usePlayer(id)`.
- [ ] Ajouter les routes dans `src/App.tsx` et enregistrer `handle.crumb` pour le fil d'Ariane de WB (« Contenu > Joueurs > <nom affiché> »).
- [ ] Créer la mise en page deux colonnes (`grid-cols-[1fr_320px]`, gap 24 px) qui passe en une colonne sous 1100 px avec la colonne latérale repliée sous le contenu.
- [ ] Gérer chargement, 404, 403 et erreur réseau.
- [ ] Brancher `useBlocker` pour la garde de modifications (voir `fn-brouillon-conflit-modification`).
- [ ] Tests de la synchronisation onglet ↔ URL.

## ✔️ Critères d'acceptation

- [ ] Étant donné l'URL `/joueurs/abc?onglet=statistiques`, quand la page se charge, alors l'onglet « Statistiques par saison » est actif.
- [ ] Étant donné une biographie ES vide, quand la fiche s'affiche, alors un point rouge apparaît à côté de « Biographie » et « Publier » est désactivé.
- [ ] Étant donné un identifiant inconnu, quand l'API répond 404, alors la page « Joueur introuvable » s'affiche.
- [ ] Étant donné un formulaire modifié, quand je clique « Enregistrer le brouillon », alors la requête PATCH part et le statut n'est pas publié.
- [ ] Étant donné une largeur de 1024 px, quand la page s'affiche, alors la colonne latérale passe sous le formulaire.

## 🧪 Tests à écrire

- [ ] PlayerHeader.test.tsx : badge selon statut, avatar de repli.
- [ ] PlayerTabs.test.tsx : synchro URL et point rouge.
- [ ] PlayerActionsBar.test.tsx : activation du bouton Publier.
- [ ] PlayerEditPage.test.tsx : chargement/404/403.
- [ ] e2e : ouverture depuis la liste puis changement d'onglet.

## ♿ Accessibilité et i18n

- Onglets Radix (`role='tablist'`), point rouge accompagné d'un texte masqué « biographie incomplète » ; titre de page en `<h1>` ; ordre de tabulation : onglets, formulaire, actions, colonne latérale.

## 🔗 Dépendances

À réaliser après : `ADM-WC-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.2 (PlayerEditPage)
- CDC Admin §5.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
