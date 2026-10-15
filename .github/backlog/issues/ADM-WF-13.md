> **ADM-WF-13** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Les boutons « Approuver » et « Rejeter » de WF-03 changent le statut de la question et alimentent le pool actif consommé par le quiz mobile. L'approbation est une décision éditoriale tracée (CDC Admin §3.1 : validation = content-manager ou super-admin ; §6.4 : journalisation).

## ✅ Objectif

Implémenter l'approbation directe et le rejet avec confirmation serveur, compteurs et audit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

#### `WF-05` — Rejet d’une question IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true' width='330' alt='WF-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true' width='330' alt='WF-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true' width='330' alt='WF-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true' width='330' alt='WF-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de 2011 ? » · « Wembley » · « Rome » · « Bernabéu » · « Camp Nou » · « Rejeter cette question ? »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-16%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22)

## 📐 Règles de gestion

- « Approuver » : `POST /admin/quiz-questions/:id/approve` ; le serveur vérifie la bonne réponse, les 4 options distinctes et — pour publier — les trois langues ; si EN/ES manquent, la question passe en `draft` « Traduction » (et non `published`) avec toast « Approuvée en brouillon : traductions à compléter ».
- Statut final : `published` (pool actif) ; `origin` reste `ai` ; `reviewedBy`/`reviewedAt` enregistrés ; compteur `pendingAi` décrémenté.
- « Rejeter » ouvre la modale de WF-05 (voir `ui-rejet-question-ia`) ; le rejet est définitif (`rejected`) mais la question reste consultable dans la liste (filtre Statut = Rejetée) et peut être rouverte en brouillon.
- 409 `ALREADY_PROCESSED` : un autre administrateur a déjà traité la question → la carte est retirée avec toast « Déjà traitée par Léa Martin ».
- Chargement par carte : bouton `loading`, autres boutons désactivés ; pas de double envoi (idempotence côté client via `useRef`).
- Audit : `QUIZ_AI_APPROVED`, `QUIZ_AI_REJECTED` avec identifiant, niveau, catégorie, motif ; rôles content-manager et super-admin.

## 🛠️ Tâches

- [ ] Implémenter `useApproveQuestion()` / `useRejectQuestion()` avec retrait optimiste de la carte et rollback (voir hooks).
- [ ] Créer `src/lib/quizReview.ts` : `reviewOutcome(question)` (published vs draft selon complétion) pour afficher le bon libellé de bouton.
- [ ] Mapper les erreurs 409/422/403 en toasts français (`ALREADY_PROCESSED`, `TRANSLATION_INCOMPLETE`).
- [ ] Passer le focus à la carte suivante et annoncer « Question approuvée » en `aria-live`.
- [ ] Ajouter les événements internes `quiz_ai_approved` / `quiz_ai_rejected` (FND journaux front).
- [ ] Invalider `['quiz','counters']`, `['quiz','pending-ai']` et `['quiz','list']`.
- [ ] Documenter le contrat de l'API pour la file IA.

## ✔️ Critères d'acceptation

- [ ] Étant donné une question complète en 3 langues, quand je clique « Approuver », alors elle est publiée et disparaît de la file.
- [ ] Étant donné une question FR seule, quand je clique « Approuver en brouillon », alors elle passe en « Traduction » et un toast l'indique.
- [ ] Étant donné un 409 `ALREADY_PROCESSED`, quand la réponse arrive, alors la carte est retirée avec le nom du relecteur.
- [ ] Étant donné un échec réseau, quand l'action échoue, alors la carte revient dans la file avec un message d'erreur.
- [ ] Étant donné une approbation, quand j'ouvre le journal d'audit, alors `QUIZ_AI_APPROVED` est visible.

## 🧪 Tests à écrire

- [ ] useApproveQuestion.test.tsx : succès, 409, rollback.
- [ ] quizReview.test.ts : issue selon complétion.
- [ ] AiQuestionCard.test.tsx : double clic ignoré.
- [ ] MSW : réponses `TRANSLATION_INCOMPLETE`.
- [ ] e2e : approuver une question de la file.

## ♿ Accessibilité et i18n

- Annonce `aria-live='polite'` du résultat ; focus déplacé sur la carte suivante ou sur le titre de page si la file est vide.

## 🔗 Dépendances

À réaliser après : `ADM-WF-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.1, §4.5.1, §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
