> **ADM-WF-22** · Sécurité · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Admin §3.1 autorise la validation des questions générées par IA aux content-manager et super-admin, jamais au moderator. §6.4 impose une piste d'audit des mutations (qui, quoi, quand, avant/après, justification). Les routes `/quiz*` sont déjà déclarées dans `navigation.ts` pour ces deux rôles.

## ✅ Objectif

Verrouiller routes et actions par rôle et lister précisément les événements d'audit du module.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-01` — Liste des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « 1 248 questions actives · 12 en attente de validation IA » · « File de validation IA (12) » · « Nouvelle question » · « Rechercher… » · « Niveau » · « Catégorie » · « Statut » · « Réussite : 0–100 % » · « Question » · « Langues » · « Réussite » · « Qui a marqué le but de la victoire en finale de la LDC 2015 ? » · « Niv. 2 » · « Publiée » · « 71 % » · « En quelle année le club a-t-il été fondé ? » · « Histoire » · « Niv. 1 » · « 92 % »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-04%5D%22) · [ADM-WF-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-05%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-26%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22)

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

#### `WF-05` — Rejet d’une question IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true' width='330' alt='WF-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true' width='330' alt='WF-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true' width='330' alt='WF-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true' width='330' alt='WF-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de 2011 ? » · « Wembley » · « Rome » · « Bernabéu » · « Camp Nou » · « Rejeter cette question ? »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-16%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22)

## 📐 Règles de gestion

- Routes `/quiz`, `/quiz/nouvelle`, `/quiz/:id`, `/quiz/validation`, `/quiz/performance` : `ProtectedRoute allowedRoles=['content-manager','super-admin']` ; moderator → page 403 (WA-08).
- Permissions `quiz:read`, `quiz:write`, `quiz:review`, `quiz:export` (WA `fn-require-role`) ; l'interface masque les boutons, l'API contrôle (403).
- Événements d'audit : `QUIZ_QUESTION_CREATED|UPDATED|PUBLISHED|ARCHIVED|DELETED`, `QUIZ_AI_APPROVED`, `QUIZ_AI_REJECTED`, `QUIZ_AI_BATCH_APPROVED`, `EXPORT_QUIZ_STATS` ; champs : admin, horodatage, `entityId`, avant/après, motif de rejet comme justification.
- Contenu : les énoncés sont affichés en texte brut ; aucune interprétation HTML des textes générés par l'IA (contenu non fiable : risque XSS stocké) — `react/no-danger` et sanitation à la saisie.
- Les motifs de rejet et commentaires sont conservés pour l'amélioration du prompt mais ne contiennent aucune donnée personnelle (champ libre : avertissement « N'indiquez pas de données personnelles »).

## 🛠️ Tâches

- [ ] Ajouter les permissions `quiz:*` dans `src/lib/permissions.ts` et utiliser `<Can>` sur les boutons.
- [ ] Vérifier `navigation.ts` (visibilité par rôle) et le badge de sidebar (désactivé pour moderator).
- [ ] Écrire le test e2e de redirection 403 pour un moderator sur toutes les routes `/quiz*`.
- [ ] Ajouter `sanitizePlainText` aux champs d'énoncé, réponses, explication et commentaire.
- [ ] Documenter la table des événements dans `docs/ARCHITECTURE.md`.
- [ ] Vérifier l'affichage des événements dans le Journal d'audit (WH) avec filtre `entityType=quiz-question`.
- [ ] Ajouter l'avertissement « N'indiquez pas de données personnelles » sous le champ commentaire.

## ✔️ Critères d'acceptation

- [ ] Étant donné un moderator, quand il ouvre `/quiz/validation`, alors la page « Accès non autorisé » s'affiche.
- [ ] Étant donné un contenu généré contenant `<script>`, quand la carte s'affiche, alors le texte est montré tel quel sans exécution.
- [ ] Étant donné une approbation, quand j'ouvre le journal d'audit, alors `QUIZ_AI_APPROVED` figure avec l'auteur.
- [ ] Étant donné la sidebar d'un moderator, quand elle s'affiche, alors « Questions de quiz » est absente.

## 🧪 Tests à écrire

- [ ] permissions.test.ts : `quiz:*` par rôle.
- [ ] ProtectedRoute.test.tsx : routes `/quiz*`.
- [ ] sanitizePlainText.test.ts : scripts et balises.
- [ ] AiQuestionCard.test.tsx : rendu texte brut.
- [ ] e2e : `quiz-rbac.spec.ts` (3 rôles).

## ♿ Accessibilité et i18n

- Page 403 avec lien de retour ; aucun contenu sensible révélé dans le message d'erreur.

## 🔗 Dépendances

À réaliser après : `ADM-WF-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.1, §6.2, §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
