> **ADM-WC-01** · Données · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le code existant ne connaît qu'un type `Player` minimal (`src/types/index.ts` : id, fullName, shortName, position, shirtNumber, nationality, status, isActive) alimenté par la route publique `GET /players`. Les maquettes WC-01 à WC-12 affichent bien davantage : âge, complétion FR/EN/ES, date de mise à jour, pied fort, taille, club précédent, identifiant externe API football, statistiques par saison, photo. Cette issue pose la couche de types et de libellés sur laquelle reposent toutes les autres issues du module.

## ✅ Objectif

Disposer de types, schémas Zod et dictionnaires de libellés uniques pour la fiche joueur, alignés sur le modèle Mongoose `Player` (src/models/football.model.ts) et sur le contrat admin `/admin/players`.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-01` — Liste des joueurs
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true' width='330' alt='WC-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true' width='330' alt='WC-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true' width='330' alt='WC-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true' width='330' alt='WC-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-04%5D%22) · [ADM-WC-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-05%5D%22) · [ADM-WC-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-06%5D%22) · [ADM-WC-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-11%5D%22) · [ADM-WC-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-12%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22)

#### `WC-05` — Fiche joueur — identité
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true' width='330' alt='WC-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true' width='330' alt='WC-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true' width='330' alt='WC-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true' width='330' alt='WC-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Nom complet » · « Lamine Yamal Nasraoui Ebana »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-14%5D%22) · [ADM-WC-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-15%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22)

## 📐 Règles de gestion

- Statuts de publication (CDC Admin §4.2.1) : `draft` « Brouillon », `awaiting-translation` « Traduction » (badge long « En attente de traduction »), `ready` « Prêt » (badge long « Prête à publier »), `published` « Publié », `archived` « Archivé ». Aucun autre statut n'est accepté.
- Postes (enum API) : GB Gardien, DD Latéral droit, DC Défenseur, DG Latéral gauche, MD Milieu défensif, MC Milieu, MO Milieu offensif, AD Ailier droit, AG Ailier gauche, BU Avant-centre ; le fichier `src/lib/players.ts` expose `POSITION_LABELS` et `POSITION_SHORT` (« AD » affiché dans « Ailier droit (AD) »).
- Complétion des langues : `bioCompletion = { fr:boolean, en:boolean, es:boolean }` calculée par `completionByLocale(bioI18n)` (valeur non vide après trim) ; la fiche est « prête » si les 3 langues sont vraies.
- Âge calculé côté client depuis `birthDate` (« 19 ans » pour une naissance au 13/07/2007 à la date du 15 oct. 2026) ; jamais stocké.
- Identifiant lisible `publicId` = « ub-0010 » (préfixe `ub-` + 4 chiffres) affiché « ID joueur #ub-0010 » ; champ à ajouter côté API (non présent dans le modèle actuel) ; repli sur les 6 derniers caractères de l'`_id` Mongo si absent.
- Champs de la maquette absents du modèle API : `strongFoot` (Gauche/Droit/Les deux), `heightCm` (entier, 150-220) — à signaler dans l'issue API correspondante ; le client les déclare optionnels.

## 🛠️ Tâches

- [ ] Étendre `src/types/index.ts` en créant `src/types/player.ts` : `PlayerListItem`, `PlayerDetail`, `PlayerStatSeason {season, matchesPlayed, goals, assists, trophiesCount}`, `BioI18n {fr,en,es}`, `PlayerStatus`, `Position`.
- [ ] Garder `Player` existant en alias de `PlayerListItem` pour ne pas casser `PlayersPage.tsx` pendant la migration.
- [ ] Créer `src/lib/schemas/player.schema.ts` : `playerIdentitySchema`, `playerBioSchema`, `playerStatSeasonSchema`, `playerPublishSchema` (Zod 4, messages en français).
- [ ] Créer `src/lib/players.ts` : `POSITION_LABELS`, `STATUS_LABELS`, `STATUS_LONG_LABELS`, `ageFromBirthDate(birthDate, now)`, `formatPublicId(player)`, `completionByLocale(bioI18n)`, `isReadyToPublish(player)`.
- [ ] Créer `src/lib/countries.ts` (liste ISO 3166-1 alpha-2 avec libellés français via `Intl.DisplayNames('fr')`) pour les sélecteurs de nationalité (« Espagne », « Brésil », « Pologne », « Argentine », « Japon »).
- [ ] Créer `src/test/factories.ts` entrées `tPlayer()`, `tPlayerDetail()`, `tStatSeason()` (réutilisation avec la factory de WA si déjà créée).
- [ ] Documenter dans `docs/ARCHITECTURE.md` la correspondance modèle API ↔ types admin et la liste des champs à créer côté API (`publicId`, `strongFoot`, `heightCm`).

## ✔️ Critères d'acceptation

- [ ] Étant donné un joueur né le 13/07/2007, quand `ageFromBirthDate` est appelée le 15/10/2026, alors elle retourne 19.
- [ ] Étant donné `bioI18n = {fr:'…', en:'', es:''}`, quand `completionByLocale` est appelée, alors elle retourne `{fr:true,en:false,es:false}`.
- [ ] Étant donné un statut inconnu dans une réponse API, quand le schéma Zod parse la réponse, alors une erreur typée est levée et signalée dans les journaux front.
- [ ] Étant donné `position='AD'`, quand le libellé est demandé, alors « Ailier droit » est retourné.

## 🧪 Tests à écrire

- [ ] player.schema.test.ts : accepte une fiche valide, refuse numéro 0 et 100, refuse taille 99 cm.
- [ ] players.test.ts : `ageFromBirthDate` aux bornes (veille/jour d'anniversaire).
- [ ] players.test.ts : `completionByLocale` ignore les espaces et retours à la ligne.
- [ ] players.test.ts : `formatPublicId` avec et sans `publicId`.
- [ ] countries.test.ts : « ES » → « Espagne », « JP » → « Japon ».

## ♿ Accessibilité et i18n

- Les libellés de statut et de poste sont centralisés (pas de chaîne en dur dans les composants) pour permettre la future internationalisation (CDC Admin §9.6).

## 📚 Références

- CDC Admin §4.2, §4.2.1, §2.3.1
- CDC Backend §3.2 (entités Player, PlayerStatSeason)
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
