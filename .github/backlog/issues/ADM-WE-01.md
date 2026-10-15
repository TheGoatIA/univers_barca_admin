> **ADM-WE-01** · Données · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le module « Contenu éditorial » (route /contenu, sidebar « Contenu historique ») gère les anecdotes « Aujourd'hui dans l'histoire » diffusées sur le dashboard mobile. Le modèle Mongoose Anecdote existe déjà (titleI18n, bodyI18n, category, publishOn, status draft|awaiting-translation|ready|scheduled|published, imageKey) mais aucune couche d'accès n'existe côté admin.

## ✅ Objectif

Fournir src/api/history-content.api.ts, les types et les hooks TanStack Query consommés par la bibliothèque, l'éditeur et le calendrier.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-01` — Bibliothèque d’anecdotes
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true' width='330' alt='WE-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true' width='330' alt='WE-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true' width='330' alt='WE-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true' width='330' alt='WE-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Anecdotes « Aujourd’hui dans l’histoire » · 212 contenus » · « Calendrier éditorial » · « Nouvelle anecdote » · « Rechercher… » · « Catégorie » · « Statut » · « Langues » · « Mois : octobre » · « Date de diffusion » · « Titre » · « 19 oct. » · « Le but de Koeman à Wembley » · « Histoire du club » · « Planifié » · « 21 oct. » · « Naissance de Gavi » · « 23 oct. » · « Le 5-0 de la Manita » · « En attente de traduction »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-02%5D%22) · [ADM-WE-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-03%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-09%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WE-02` — Éditeur trilingue et aperçu mobile
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true' width='330' alt='WE-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true' width='330' alt='WE-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true' width='330' alt='WE-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true' width='330' alt='WE-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Le but de Koeman à Wembley » · « Prêt à publier » · « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 » · « Planifier » · « Publier » · « Titre » · « Texte » · « FR · Français » · « EN · English » · « ES · Español » · « Le 20 mai 1992, Ronald Koeman inscrit sur coup franc le but qui offre au Barça sa première Coupe d’Europe des clubs champions, face à la Sampdoria. » · « Les 3 langues sont complètes — prêt à publier » · « 171 / 600 » · « Image d’illustration » · « Choisir dans la médiathèque » · « Date de diffusion » · « 19/10/2026 » · « Catégorie » · « Histoire du club » · « Aperçu mobile » · « Clair » · « Sombre »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WE-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-05%5D%22) · [ADM-WE-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-06%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

#### `WE-03` — Calendrier éditorial
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true' width='330' alt='WE-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true' width='330' alt='WE-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true' width='330' alt='WE-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true' width='330' alt='WE-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Calendrier éditorial » · « Planifie les anecdotes à l’avance · 9 jours non couverts ce mois-ci » · « Mois » · « Semaine » · « Nouvelle anecdote » · « Octobre 2026 » · « Histoire » · « Non couvert » · « Lun » · « Mar » · « Mer » · « Jeu » · « Ven » · « Sam » · « Dim » · « Fondation du club » · « Clásico 2009 » · « Eto’o signe » · « Gavi débute »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WE-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-08%5D%22) · [ADM-WE-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-09%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22)

#### `WE-04` — Médiathèque
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_light.webp?raw=true' width='330' alt='WE-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__desktop_dark.webp?raw=true' width='330' alt='WE-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_light.webp?raw=true' width='330' alt='WE-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-04_mediatheque__tablet_dark.webp?raw=true' width='330' alt='WE-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Médiathèque » · « 318 médias · 1,2 Go utilisés » · « Téléverser » · « Rechercher… » · « Type » · « Utilisé » · « Date » · « yamal-portrait.jpg » · « 212 Ko · utilisée 3× » · « wembley-1992.jpg » · « 480 Ko · utilisée 1× » · « Nouveau » · « trophee-ldc.jpg » · « 96 Ko · utilisée 0× » · « camp-nou.jpg » · « 340 Ko · utilisée 2× » · « koeman.jpg » · « 128 Ko · utilisée 1× »

**Composants repérés** : `avatar`, `btn`, `card`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-10%5D%22) · [ADM-WE-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-11%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

## 📐 Règles de gestion

- Endpoints du CDC Admin §4.12 : GET/POST /admin/history-content et GET/PATCH/DELETE /admin/history-content/:id.
- Le contenu éditorial peu volatile utilise un staleTime de 5 min (CDC Admin §2.5) ; le calendrier est invalidé après chaque création, replanification ou publication.
- Statut éditorial : draft (Brouillon), awaiting-translation (En attente de traduction), ready (Prêt à publier), scheduled (Planifié), published (Publié) ; le statut est recalculé côté serveur à partir de la complétion FR/EN/ES et de la date de diffusion.
- Les listes sont paginées {items,total,page,totalPages,hasMore} avec limit par défaut 5 dans la maquette (« 1–5 sur 212 »), configurable 5/10/25.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/history-content` | Liste paginée filtrable | ?q=&category=&status=&langs=missing-en,missing-es&month=2026-10&page=&limit=&sort=publishOn:asc | {items:[Anecdote],total,page,totalPages,hasMore} |
| `POST` | `/api/v1/admin/history-content` | Crée une anecdote | {titleI18n,bodyI18n,category,publishOn,imageKey?} | Anecdote |
| `PATCH` | `/api/v1/admin/history-content/:id` | Met à jour (y compris statut/planification) | {titleI18n?,bodyI18n?,category?,publishOn?,imageKey?,action?:'schedule'\|'publish'\|'unschedule'} | Anecdote |
| `DELETE` | `/api/v1/admin/history-content/:id` | Supprime un brouillon (ou archive) | — | 204 |

## 🗄️ Données

- Anecdote (titleI18n, bodyI18n, category, publishOn, status, imageKey)

## 🛠️ Tâches

- [ ] Créer src/types/history-content.ts (Anecdote, AnecdoteStatus, AnecdoteCategory, I18nText = {fr,en,es}).
- [ ] Créer src/lib/schemas/anecdote.schema.ts (Zod : titre ≤ 120 car., texte ≤ 600 car. par langue, category dans l'énumération, publishOn ISO).
- [ ] Créer src/api/history-content.api.ts (list, get, create, update, remove, schedule, publish).
- [ ] Créer les hooks useAnecdotes, useAnecdote, useAnecdoteMutations (invalidation ['history-content'] et ['history-calendar']).
- [ ] Créer src/lib/translation.ts : getMissingLocales, completionByLocale (partagé avec WD et WF).
- [ ] Ajouter la constante CATEGORIES (Histoire du club, Joueurs, Matchs, Légendes, Stade) dans src/lib/constants/history.ts.
- [ ] Aligner navigation.ts : planned[] du module WE avec les sous-routes /contenu/nouveau, /contenu/:id, /contenu/calendrier, /contenu/mediatheque.

## ✔️ Critères d'acceptation

- [ ] Étant donné une anecdote avec bodyI18n.es vide, quand completionByLocale s'exécute, alors es vaut false et fr/en true.
- [ ] Étant donné une création réussie, quand la mutation se termine, alors la liste et le calendrier sont invalidés.
- [ ] Étant donné un texte de 601 caractères, quand le schéma valide, alors une erreur « 600 caractères maximum » est retournée.

## 🧪 Tests à écrire

- [ ] history-content.api.test.ts : sérialisation des filtres.
- [ ] anecdote.schema.test.ts : limites 120/600.
- [ ] translation.test.ts : complétion par langue.
- [ ] useAnecdoteMutations.test.tsx : invalidations.

## 📚 Références

- CDC Admin §4.4
- CDC Admin §4.12
- CDC Backend §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
