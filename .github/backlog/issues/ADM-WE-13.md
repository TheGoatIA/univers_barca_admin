> **ADM-WE-13** · Sécurité · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le contenu historique est réservé à content-manager et super-admin (CDC Admin §3.1, §4.4). Toute mutation (publication, planification, upload, suppression) alimente la piste d'audit (CDC Admin §6.4).

## ✅ Objectif

Verrouiller les routes /contenu/* et vérifier que chaque mutation produit une entrée d'audit exploitable.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-01` — Bibliothèque d’anecdotes
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true' width='330' alt='WE-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true' width='330' alt='WE-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true' width='330' alt='WE-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true' width='330' alt='WE-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Anecdotes « Aujourd’hui dans l’histoire » · 212 contenus » · « Calendrier éditorial » · « Nouvelle anecdote » · « Rechercher… » · « Catégorie » · « Statut » · « Langues » · « Mois : octobre » · « Date de diffusion » · « Titre » · « 19 oct. » · « Le but de Koeman à Wembley » · « Histoire du club » · « Planifié » · « 21 oct. » · « Naissance de Gavi » · « 23 oct. » · « Le 5-0 de la Manita » · « En attente de traduction »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-02%5D%22) · [ADM-WE-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-03%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-09%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WE-02` — Éditeur trilingue et aperçu mobile
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true' width='330' alt='WE-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true' width='330' alt='WE-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true' width='330' alt='WE-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true' width='330' alt='WE-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Le but de Koeman à Wembley » · « Prêt à publier » · « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 » · « Planifier » · « Publier » · « Titre » · « Texte » · « FR · Français » · « EN · English » · « ES · Español » · « Le 20 mai 1992, Ronald Koeman inscrit sur coup franc le but qui offre au Barça sa première Coupe d’Europe des clubs champions, face à la Sampdoria. » · « Les 3 langues sont complètes — prêt à publier » · « 171 / 600 » · « Image d’illustration » · « Choisir dans la médiathèque » · « Date de diffusion » · « 19/10/2026 » · « Catégorie » · « Histoire du club » · « Aperçu mobile » · « Clair » · « Sombre »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WE-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-05%5D%22) · [ADM-WE-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-06%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

#### `WE-03` — Calendrier éditorial
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true' width='330' alt='WE-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true' width='330' alt='WE-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true' width='330' alt='WE-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true' width='330' alt='WE-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Calendrier éditorial » · « Planifie les anecdotes à l’avance · 9 jours non couverts ce mois-ci » · « Mois » · « Semaine » · « Nouvelle anecdote » · « Octobre 2026 » · « Histoire » · « Non couvert » · « Lun » · « Mar » · « Mer » · « Jeu » · « Ven » · « Sam » · « Dim » · « Fondation du club » · « Clásico 2009 » · « Eto’o signe » · « Gavi débute »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-08%5D%22) · [ADM-WE-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-09%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22)

#### `WE-04` — Médiathèque
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true' width='330' alt='WE-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true' width='330' alt='WE-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true' width='330' alt='WE-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true' width='330' alt='WE-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Médiathèque » · « 318 médias · 1,2 Go utilisés » · « Téléverser » · « Rechercher… » · « Type » · « Utilisé » · « Date » · « yamal-portrait.jpg » · « 212 Ko · utilisée 3× » · « wembley-1992.jpg » · « 480 Ko · utilisée 1× » · « Nouveau » · « trophee-ldc.jpg » · « 96 Ko · utilisée 0× » · « camp-nou.jpg » · « 340 Ko · utilisée 2× » · « koeman.jpg » · « 128 Ko · utilisée 1× »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-10%5D%22) · [ADM-WE-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-11%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

## 📐 Règles de gestion

- Routes /contenu, /contenu/nouveau, /contenu/:id, /contenu/calendrier, /contenu/mediatheque : roles content-manager, super-admin ; moderator → /403.
- Actions d'audit : HISTORY_CONTENT_CREATED, _UPDATED, _SCHEDULED, _PUBLISHED, _UNPUBLISHED, _RESCHEDULED, MEDIA_UPLOADED, MEDIA_DELETED.
- Les contenus sont rendus en texte brut (jamais dangerouslySetInnerHTML) ; les noms de fichier sont échappés.
- Les uploads sont protégés CSRF/jeton (intercepteur axios) et refusent tout type non image côté API.

## 🛠️ Tâches

- [ ] Envelopper les routes /contenu/* dans ProtectedRoute avec allowedRoles.
- [ ] Ajouter can(role,'publish-content') dans usePermissions.
- [ ] Écrire des tests de garde de route par rôle.
- [ ] Ajouter un scénario e2e RBAC.
- [ ] Vérifier l'absence de dangerouslySetInnerHTML via une règle ESLint (no-danger).
- [ ] Ajouter un test e2e vérifiant la présence de l'action HISTORY_CONTENT_PUBLISHED dans le journal d'audit.
- [ ] Documenter la matrice des permissions du module.

## ✔️ Critères d'acceptation

- [ ] Étant donné un moderator, quand il ouvre /contenu, alors la page 403 s'affiche.
- [ ] Étant donné une publication, quand le super-admin consulte l'audit, alors HISTORY_CONTENT_PUBLISHED est présent avec auteur et horodatage.
- [ ] Étant donné un texte contenant <script>, quand il s'affiche dans la liste ou l'aperçu, alors il est échappé.

## 🧪 Tests à écrire

- [ ] ProtectedRoute.test.tsx : /contenu pour moderator.
- [ ] XSS.test.tsx : échappement du titre et du texte.
- [ ] e2e rbac-content.spec.ts
- [ ] e2e audit-content.spec.ts

## 🔗 Dépendances

À réaliser après : `ADM-WE-02` · `ADM-WE-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.1
- CDC Admin §6.2
- CDC Admin §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
