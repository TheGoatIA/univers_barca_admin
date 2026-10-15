> **ADM-WF-08** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La carte « Réponses (FR) » de WF-02 affiche quatre lignes : une case radio (« Coche la bonne réponse »), un champ texte FR (Neymar Jr, Luis Suárez, Ivan Rakitić — bonne réponse avec bordure verte —, Lionel Messi) et à droite l'indicateur « EN · ES ✓ » signalant que les traductions de cette option existent. Les options sont stockées dans `optionsI18n[]` avec `correctOption` (index).

## ✅ Objectif

Implémenter la saisie des 4 options, leur traduction par langue et la désignation de la bonne réponse.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-02` — Éditeur de question trilingue
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true' width='330' alt='WF-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true' width='330' alt='WF-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true' width='330' alt='WF-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true' width='330' alt='WF-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Éditer » · « Éditer la question » · « ID q-00481 · Niveau 2 · Joueurs » · « Annuler » · « Enregistrer » · « Énoncé » · « FR · Français » · « EN · English » · « ES · Español » · « Qui a marqué le but de la victoire en finale de la Ligue des champions 2015 ? » · « Les 3 langues sont complètes — prêt à publier » · « Réponses (FR) » · « Coche la bonne réponse » · « Neymar Jr » · « EN · ES » · « Luis Suárez » · « Ivan Rakitić » · « Lionel Messi » · « Explication affichée après la réponse » · « Rakitić ouvre le score dès la 4e minute, avant Suárez et Neymar (3-1). » · « Paramètres » · « Niveau de difficulté »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-07%5D%22) · [ADM-WF-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-09%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-11%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22)

## 📐 Règles de gestion

- Quatre options exactement (CDC : QCM à 4 choix, `optionsI18n` de longueur 4) ; chaque option 1-80 caractères ; les 4 libellés d'une même langue doivent être distincts (insensible à la casse) sinon « Deux réponses identiques ».
- Le titre de la carte suit la langue active de l'énoncé (« Réponses (FR) », « Réponses (EN) », « Réponses (ES) ») : un sélecteur de langue partagé avec l'éditeur d'énoncé change la langue affichée des options.
- Radio unique : `correctOption` ∈ 0-3 ; la ligne cochée a une bordure verte et fond vert clair ; une seule bonne réponse par question.
- Indicateur à droite de chaque option : « EN · ES ✓ » (vert) si les deux traductions sont renseignées, « EN manquant » / « ES manquant » (rouge) sinon ; cliquer sur l'indicateur bascule la langue affichée.
- Option « Aucun » ou « Toutes les réponses » : acceptée mais l'éditeur affiche un avertissement jaune non bloquant « Réponse atypique : vérifiez la formulation » (cas observé dans la file IA, WF-03).
- Les options sont mélangées à l'affichage mobile (pas d'ordre imposé) ; l'ordre de saisie n'a pas de signification.

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/AnswersCard.tsx` et `AnswerRow.tsx` (radio + champ + indicateur de traduction).
- [ ] Implémenter `useFieldArray` pour `optionsI18n` (longueur fixe 4, pas d'ajout/suppression).
- [ ] Créer `src/components/quiz/TranslationStatusPill.tsx` (« EN · ES ✓ », « ES manquant »).
- [ ] Gérer le partage de la langue active via `useQuizLocale()` (contexte local au formulaire).
- [ ] Ajouter le contrôle d'unicité par langue dans `quizQuestionSchema` (`superRefine`).
- [ ] Implémenter l'avertissement « réponse atypique » (`isAtypicalAnswer(text)`).
- [ ] Tests de saisie clavier (flèches sur les radios).
- [ ] Stories : normal, avec doublon, option manquante.

## ✔️ Critères d'acceptation

- [ ] Étant donné les 4 options FR de la maquette, quand je coche « Ivan Rakitić », alors `correctOption=2` et la ligne a la bordure verte.
- [ ] Étant donné deux options FR identiques, quand je valide, alors l'erreur « Deux réponses identiques » apparaît sur la seconde.
- [ ] Étant donné l'option 3 sans traduction espagnole, quand l'indicateur s'affiche, alors « ES manquant » est rouge.
- [ ] Étant donné aucune bonne réponse cochée, quand j'enregistre, alors l'erreur « Choisissez la bonne réponse » s'affiche.
- [ ] Étant donné l'option « Aucun », quand elle est saisie, alors l'avertissement de réponse atypique est affiché sans bloquer.

## 🧪 Tests à écrire

- [ ] AnswersCard.test.tsx : radio unique et bordure.
- [ ] quiz.schema.test.ts : doublons par langue, 4 options.
- [ ] TranslationStatusPill.test.tsx.
- [ ] isAtypicalAnswer.test.ts.
- [ ] axe : groupe de radios.

## ♿ Accessibilité et i18n

- Groupe `role='radiogroup'` `aria-label='Bonne réponse'` ; chaque champ libellé « Réponse A (FR) » ; la bonne réponse annoncée « sélectionnée comme bonne réponse ».

## 🔗 Dépendances

À réaliser après : `ADM-WF-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5
- CDC Backend §3.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
