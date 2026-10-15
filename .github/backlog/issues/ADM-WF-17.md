> **ADM-WF-17** · Fonctionnel · Priorité **P2** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Admin §9.7 prévoit des raccourcis sur les actions fréquentes (« touches rapides pour approuver/rejeter depuis la file ») activables/désactivables. WB `fn-keyboard-shortcuts` fournit `useHotkeys` et la préférence `shortcutsEnabled`. Les cartes de WF-03 sont traitées en série, d'où l'intérêt.

## ✅ Objectif

Définir et brancher les raccourcis de la file IA sur le registre global.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

#### `WF-05` — Rejet d’une question IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true' width='330' alt='WF-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true' width='330' alt='WF-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true' width='330' alt='WF-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true' width='330' alt='WF-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de 2011 ? » · « Wembley » · « Rome » · « Bernabéu » · « Camp Nou » · « Rejeter cette question ? »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-16%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22)

## 📐 Règles de gestion

- Navigation : `J`/`↓` carte suivante, `K`/`↑` carte précédente (focus visible grenat) ; actions sur la carte focalisée : `A` Approuver, `C` Corriger puis approuver, `R` Rejeter (ouvre la modale WF-05), `X` cocher/décocher pour la sélection.
- Désactivés si `shortcutsEnabled=false` ou si le focus est dans un champ de saisie ou une modale ; scope limité à la route `/quiz/validation`.
- `A` ne s'applique pas sans confirmation visuelle : la carte focalisée doit être entièrement dans la fenêtre (scroll automatique) pour éviter l'approbation à l'aveugle.
- Aide : touche `?` ouvre la liste des raccourcis du scope (`ShortcutsHelpDialog`) ; ils sont affichés en `Kbd` dans les infobulles des boutons (« Approuver (A) »).
- Annulation : après `A`, un toast avec « Annuler » pendant 5 s (retour à `pending-ai`) si l'API le permet (`POST /:id/revert`, à créer) ; à défaut aucune annulation.

## 🛠️ Tâches

- [ ] Enregistrer le scope `quiz-validation` dans `useHotkeys` (WB) avec les 6 raccourcis.
- [ ] Gérer l'état « carte focalisée » (`focusedIndex`) et le défilement `scrollIntoView({block:'nearest'})`.
- [ ] Ajouter les `Kbd` aux infobulles de `AiQuestionCard`.
- [ ] Compléter `ShortcutsHelpDialog` avec la section « File de validation IA ».
- [ ] Ignorer les raccourcis quand `event.target` est un champ éditable.
- [ ] Tests avec `userEvent.keyboard`.
- [ ] Documenter la préférence dans les paramètres utilisateur de l'admin.

## ✔️ Critères d'acceptation

- [ ] Étant donné la carte 1 focalisée, quand j'appuie sur `A`, alors l'approbation est lancée sur cette carte.
- [ ] Étant donné le focus dans le champ Commentaire, quand j'appuie sur `R`, alors aucun raccourci ne se déclenche.
- [ ] Étant donné `shortcutsEnabled=false`, quand j'appuie sur `A`, alors rien ne se passe.
- [ ] Étant donné la touche `?`, quand elle est pressée, alors la liste des raccourcis s'affiche.
- [ ] Étant donné `J` sur la dernière carte, quand je l'appuie, alors le focus reste sur la dernière carte.

## 🧪 Tests à écrire

- [ ] useQuizShortcuts.test.tsx : touches, scopes, champs de saisie.
- [ ] AiQuestionCard.test.tsx : `Kbd` dans l'infobulle.
- [ ] ShortcutsHelpDialog.test.tsx : section dédiée.
- [ ] e2e : `J`, `A`, `J`, `R` enchaînés.
- [ ] Test de désactivation par préférence.

## ♿ Accessibilité et i18n

- Les raccourcis sont des alternatives (jamais la seule voie) ; annonce `aria-live` du résultat ; focus visible sur la carte courante.

## 🔗 Dépendances

À réaliser après : `ADM-WF-13` · `ADM-WF-16` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.7
- WB fn-keyboard-shortcuts

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
