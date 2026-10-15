> **ADM-WF-15** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le bouton « Approuver la sélection » en haut de WF-03 suppose une sélection de cartes, mais la maquette n'en montre pas le mécanisme (aucune case visible). L'approbation en lot accélère la relecture de dizaines de questions mais ne doit jamais contourner la relecture humaine (« aucune n'est publiée sans relecture humaine »).

## ✅ Objectif

Ajouter une sélection de cartes et une approbation en lot avec confirmation et garde-fous.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

## 📐 Règles de gestion

- Mécanisme proposé (à valider) : case à cocher en haut à gauche de chaque carte, visible au survol/focus et dès qu'une carte est cochée ; compteur « 3 sélectionnées » dans le bouton (« Approuver la sélection (3) ») ; bouton désactivé à 0.
- Confirmation obligatoire : « Approuver 3 questions ? Elles seront publiées immédiatement dans le pool actif. » avec la liste des énoncés ; le lot est limité à 20 questions.
- Une question dont les traductions manquent est approuvée en brouillon (même règle que l'approbation unitaire) et le rapport de fin indique « 2 publiées, 1 en brouillon (traductions) ».
- Garde-fou : la sélection ne contient que des questions affichées à l'écran (pas de « tout sélectionner » sur l'ensemble de la file) pour garantir qu'une relecture visuelle a eu lieu ; case « Tout sélectionner (page) » limitée aux cartes chargées.
- Appel `POST /admin/quiz-questions/approve-batch {ids}` ; réponse `{published, drafted, skipped:[{id,reason}]}` ; audit par question (`QUIZ_AI_APPROVED`).

## 🛠️ Tâches

- [ ] Ajouter la case de sélection et l'état `selectedIds` (Zustand local ou `useState`) dans `AiQuestionGrid`.
- [ ] Créer `ApproveBatchDialog.tsx` (liste, compte, bouton « Approuver N questions »).
- [ ] Implémenter `useApproveBatch` avec rapport détaillé (toast + dialogue de résultat).
- [ ] Plafonner la sélection à 20 et afficher le message « 20 maximum par lot ».
- [ ] Mettre à jour compteurs et file à l'issue (invalidations).
- [ ] Gérer les `skipped` (déjà traitée) et laisser ces cartes sélectionnées avec un badge.
- [ ] Documenter la décision UX dans la PR (la maquette ne montre pas la sélection).
- [ ] Tests du lot.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 cartes cochées, quand je clique « Approuver la sélection (3) », alors la confirmation liste les 3 énoncés.
- [ ] Étant donné aucune carte cochée, quand je regarde le bouton, alors il est désactivé.
- [ ] Étant donné 21 cartes cochées, quand j'essaie d'en cocher une de plus, alors le message « 20 maximum par lot » s'affiche.
- [ ] Étant donné un lot dont une question est en FR seul, quand il est approuvé, alors le rapport indique « 1 en brouillon (traductions) ».
- [ ] Étant donné une réponse partielle (`skipped`), quand elle arrive, alors les cartes ignorées restent visibles avec la raison.

## 🧪 Tests à écrire

- [ ] ApproveBatchDialog.test.tsx : liste et confirmation.
- [ ] AiQuestionGrid.test.tsx : sélection, plafond.
- [ ] useApproveBatch.test.tsx : rapport et invalidation.
- [ ] MSW : réponse avec `skipped`.
- [ ] e2e : approuver 3 questions en lot.

## ♿ Accessibilité et i18n

- Cases avec `aria-label` « Sélectionner la question … » ; annonce du nombre de cartes sélectionnées ; le bouton indique son compteur dans son nom accessible.

## 🔗 Dépendances

À réaliser après : `ADM-WF-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
