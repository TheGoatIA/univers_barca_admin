> **ADM-WF-07** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WF-02 (« ÉDITER LA QUESTION », sous-titre « ID q-00481 · Niveau 2 · Joueurs ») affiche à gauche trois cartes (Énoncé, Réponses (FR), Explication affichée après la réponse) et à droite deux cartes (Paramètres, Performance), avec « Annuler » et « Enregistrer » en haut à droite. L'énoncé et l'explication utilisent l'éditeur trilingue FR/EN/ES avec pastilles vertes et le message « Les 3 langues sont complètes — prêt à publier ».

## ✅ Objectif

Créer la page d'édition et de création `/quiz/:id` et `/quiz/nouvelle` avec les cartes Énoncé et Explication.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-02` — Éditeur de question trilingue
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true' width='330' alt='WF-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true' width='330' alt='WF-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true' width='330' alt='WF-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true' width='330' alt='WF-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Éditer » · « Éditer la question » · « ID q-00481 · Niveau 2 · Joueurs » · « Annuler » · « Enregistrer » · « Énoncé » · « FR · Français » · « EN · English » · « ES · Español » · « Qui a marqué le but de la victoire en finale de la Ligue des champions 2015 ? » · « Les 3 langues sont complètes — prêt à publier » · « Réponses (FR) » · « Coche la bonne réponse » · « Neymar Jr » · « EN · ES » · « Luis Suárez » · « Ivan Rakitić » · « Lionel Messi » · « Explication affichée après la réponse » · « Rakitić ouvre le score dès la 4e minute, avant Suárez et Neymar (3-1). » · « Paramètres » · « Niveau de difficulté »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-08%5D%22) · [ADM-WF-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-09%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-11%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22)

## 📐 Règles de gestion

- Énoncé : `TrilingualTextEditor` (WE) obligatoire, max 300 caractères, multi-ligne 3 lignes ; Explication : obligatoire, max 500 caractères ; textes bruts (aucun HTML).
- Le message vert « Les 3 langues sont complètes — prêt à publier » s'affiche sous chaque éditeur dont les trois langues sont remplies ; sinon message rouge « Publication bloquée : EN manquant(e)(s) ».
- Le sous-titre « ID q-00481 · Niveau 2 · Joueurs » est dérivé : `publicId` (`q-` + 5 chiffres, champ à ajouter à l'API), niveau et catégorie en cours d'édition (mise à jour en direct).
- « Annuler » ramène à la liste (confirmation si modifications) ; « Enregistrer » enregistre sans changer le statut sauf règle de statut (voir `fn-statut-question-publication`) ; succès → toast « Question enregistrée ».
- La page est composée en deux colonnes (`grid-cols-[1fr_340px]`) et en une colonne sous 1100 px ; chargement en squelette, 404 « Question introuvable ».
- Garde de modifications non enregistrées identique au module joueurs (`useUnsavedChangesGuard`).

## 🛠️ Tâches

- [ ] Créer `src/pages/quiz/QuizEditPage.tsx` (lazy) gérant `mode='edit'|'create'` et les routes `/quiz/:id`, `/quiz/nouvelle`.
- [ ] Créer `src/components/quiz/QuestionStatementCard.tsx` et `ExplanationCard.tsx` basées sur `TrilingualTextEditor`.
- [ ] Créer `src/components/quiz/QuizEditHeader.tsx` (titre, sous-titre, boutons Annuler / Enregistrer).
- [ ] Configurer le formulaire RHF + `zodResolver(quizQuestionSchema)` avec `FormProvider` partagé entre cartes.
- [ ] Ajouter `handle.crumb` (« Contenu > Questions de quiz > Éditer »).
- [ ] Gérer chargement, 404, 403, erreur réseau.
- [ ] Brancher `useUnsavedChangesGuard` (module joueurs) et `useDraftAutosave` (WA).
- [ ] Tests de la page.

## ✔️ Critères d'acceptation

- [ ] Étant donné la question q-00481 complète, quand la page s'ouvre, alors les trois messages verts « Les 3 langues sont complètes — prêt à publier » sont visibles.
- [ ] Étant donné une explication EN vide, quand je regarde la carte Explication, alors le message rouge « Publication bloquée : EN manquant(e)(s) » s'affiche.
- [ ] Étant donné un clic sur « Annuler » avec modifications, quand je confirme, alors je reviens à la liste sans enregistrer.
- [ ] Étant donné un clic sur « Enregistrer », quand l'API répond 200, alors le toast « Question enregistrée » apparaît.
- [ ] Étant donné un identifiant inconnu, quand l'API répond 404, alors « Question introuvable » est affiché.

## 🧪 Tests à écrire

- [ ] QuizEditPage.test.tsx : chargement, 404, annulation.
- [ ] QuestionStatementCard.test.tsx : messages de complétion.
- [ ] QuizEditHeader.test.tsx : sous-titre dynamique.
- [ ] useUnsavedChangesGuard (réutilisation) : navigation bloquée.
- [ ] axe : page complète.

## ♿ Accessibilité et i18n

- Un seul `<h1>` « Éditer la question » ; ordre de tabulation : énoncé, réponses, explication, paramètres, actions ; les astérisques « * » sont accompagnés de « (obligatoire) » masqué.

## 🔗 Dépendances

À réaliser après : `ADM-WF-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5, §5.3
- CDC Global §2.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
