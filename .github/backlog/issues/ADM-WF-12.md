> **ADM-WF-12** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WF-03 présente « FILE DE VALIDATION IA », le sous-titre « 12 questions en attente · aucune n'est publiée sans relecture humaine », le bouton « Approuver la sélection », un bandeau d'information bleu (« Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. ») et une grille de cartes sur deux colonnes. Chaque carte porte les étiquettes « Généré par IA », « Niv. 2 », « Joueurs », l'ancienneté (« il y a 12 min »), l'énoncé, les 4 réponses en grille 2×2 (la réponse suggérée en vert avec coche) et trois boutons : « Approuver », « Corriger puis approuver », « Rejeter ».

## ✅ Objectif

Implémenter la page `/quiz/validation` et le composant carte de relecture.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

## 📐 Règles de gestion

- Aucune question IA n'est publiée sans relecture humaine en V1 (CDC Admin §4.5.1) : seules les actions de cette page font passer `pending-ai` à `published` ou `rejected`.
- Ordre : de la plus ancienne à la plus récente (FIFO) par défaut pour éviter l'accumulation, avec tri alternatif « Niveau » ; pagination par lots de 20 cartes avec « Charger plus » (curseur).
- Carte : étiquettes (rose « Généré par IA » avec point, bleu « Niv. 2 », gris « Joueurs »), ancienneté relative en haut à droite (« il y a 12 min », « il y a 1 h »), énoncé en gras sur 2 lignes maximum (ellipsis), 4 réponses dans une grille 2×2 dont la réponse suggérée a fond vert clair, bordure verte et icône coche.
- Boutons : « Approuver » (grenat plein, icône coche), « Corriger puis approuver » (contour, icône crayon), « Rejeter » (contour rouge, icône croix) ; tous au clavier et avec états de chargement indépendants par carte.
- Une question générée est généralement en français seul : si EN/ES sont absents, la carte affiche un badge jaune « Traductions à compléter » et « Approuver » est remplacé par « Approuver en brouillon » (voir `fn-actions-validation-ia`).
- État vide : « File vide, bravo ! » (même gabarit que WG-07) ; erreur : ErrorState + « Réessayer » ; chargement : 4 cartes squelettes.

## 🔄 Comportement et états

- Les cartes sont affichées dans l'ordre de la file ; après une action la carte disparaît avec une animation de 200 ms (fondu + réduction) respectant `prefers-reduced-motion`.
- Le focus passe automatiquement à la carte suivante après approbation/rejet.

## 🛠️ Tâches

- [ ] Créer `src/pages/quiz/QuizValidationPage.tsx` (lazy, route `/quiz/validation`) avec fil d'Ariane « Contenu > Questions de quiz > Validation IA ».
- [ ] Créer `src/components/quiz/AiQuestionCard.tsx` (étiquettes, énoncé, options, actions) et `AiQuestionGrid.tsx`.
- [ ] Créer `src/components/quiz/OptionPill.tsx` (variante `suggested` avec coche).
- [ ] Créer `src/components/quiz/InfoBanner.tsx` (bandeau bleu avec icône étincelles) ou réutiliser `Alert` (ADS).
- [ ] Implémenter `usePendingAiQuestions` en pagination par curseur (`useInfiniteQuery`) avec bouton « Charger plus ».
- [ ] Créer `src/components/shared/RelativeTime.tsx` (« il y a 12 min », mise à jour chaque minute).
- [ ] Gérer les états chargement, vide, erreur et rendu tablette (grille 1 colonne < 900 px).
- [ ] Brancher le lien d'accès depuis la liste (bouton « File de validation IA (12) »).
- [ ] Ajouter `implemented` et routes dans `navigation.ts` et `App.tsx`.

## ✔️ Critères d'acceptation

- [ ] Étant donné 12 questions en attente, quand la page s'affiche, alors le sous-titre « 12 questions en attente · aucune n'est publiée sans relecture humaine » est visible.
- [ ] Étant donné une carte, quand elle s'affiche, alors la réponse suggérée a une coche verte et les 4 réponses sont en grille 2×2.
- [ ] Étant donné une question générée il y a 12 minutes, quand la carte s'affiche, alors « il y a 12 min » apparaît en haut à droite.
- [ ] Étant donné 0 question en attente, quand la page s'affiche, alors l'état « File vide, bravo ! » est montré.
- [ ] Étant donné 25 questions, quand la page se charge, alors 20 cartes sont affichées et « Charger plus » en charge 5.

## 🧪 Tests à écrire

- [ ] AiQuestionCard.test.tsx : étiquettes, réponse suggérée, actions.
- [ ] QuizValidationPage.test.tsx : chargement, vide, erreur.
- [ ] RelativeTime.test.tsx : formats et mise à jour (fake timers).
- [ ] usePendingAiQuestions.test.tsx : curseur.
- [ ] axe : page de validation.

## ♿ Accessibilité et i18n

- Chaque carte est un `<article aria-labelledby>` ; les boutons mentionnent la question (« Approuver : Quel joueur a remporté… ») ; la réponse suggérée est annoncée « réponse suggérée ».

## 🔗 Dépendances

À réaliser après : `ADM-WF-03` · `ADM-WF-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5.1
- CDC Backend §3.4 (génération assistée par IA validée)
- CDC Global §2.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
