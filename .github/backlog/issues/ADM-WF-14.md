> **ADM-WF-14** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le deuxième bouton de chaque carte (« Corriger puis approuver », icône crayon) permet de modifier la question générée avant de la valider — par exemple corriger une réponse suggérée douteuse (la première carte propose « Aucun » comme bonne réponse alors qu'une question sur le Pichichi 2021-22 du Barça est ambiguë). Les trois actions sont décrites par le CDC Admin §4.5.1.

## ✅ Objectif

Ouvrir un éditeur de correction dans un panneau latéral, enregistrer les corrections et approuver en une action.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

## 📐 Règles de gestion

- Le bouton ouvre un tiroir (Drawer ADS, 640 px) contenant l'éditeur complet (énoncé, 4 réponses, explication, niveau, catégorie) pré-rempli ; le pied de tiroir propose « Annuler » et « Enregistrer et approuver ».
- « Enregistrer et approuver » envoie `POST /:id/approve {corrections}` en un seul appel (atomique) ; sans modification, le bouton est désactivé (utiliser « Approuver »).
- Les corrections sont validées par le même schéma que l'éditeur (4 options distinctes, bonne réponse, énoncé ≤ 300 caractères) ; les textes corrigés sont tracés dans l'audit (diff avant/après) pour améliorer le prompt de génération.
- Si la correction ne contient que le français, la question est approuvée en brouillon (même règle de traductions que `fn-actions-validation-ia`) ; un bouton « Ouvrir dans l'éditeur complet » mène à `/quiz/:id` pour finir les traductions.
- Fermeture avec modifications non enregistrées : confirmation « Abandonner les corrections ? ».

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/CorrectQuestionDrawer.tsx` réutilisant `QuestionStatementCard`, `AnswersCard`, `SettingsCard` en mode compact.
- [ ] Extraire un `QuizQuestionForm` partagé entre la page d'édition et le tiroir (props `compact`, `onSubmit`).
- [ ] Calculer le diff (`src/lib/diff.ts`) et l'envoyer dans `corrections` (champs modifiés uniquement).
- [ ] Brancher `useApproveQuestion({corrections})` et retrait de la carte à la réussite.
- [ ] Gérer la validation (erreurs affichées dans le tiroir), le chargement et l'annulation.
- [ ] Ajouter l'ouverture au clavier (touche `C` sur la carte focalisée, voir raccourcis).
- [ ] Tests du tiroir et du diff.

## ✔️ Critères d'acceptation

- [ ] Étant donné un clic sur « Corriger puis approuver », quand le tiroir s'ouvre, alors les champs sont pré-remplis avec la question générée.
- [ ] Étant donné aucune modification, quand le tiroir est ouvert, alors « Enregistrer et approuver » est désactivé.
- [ ] Étant donné une réponse corrigée, quand je clique « Enregistrer et approuver », alors un seul appel `approve` contenant `corrections` est émis et la carte disparaît.
- [ ] Étant donné des corrections non enregistrées, quand je ferme le tiroir, alors la confirmation d'abandon s'affiche.
- [ ] Étant donné deux options identiques, quand je valide, alors l'erreur est affichée dans le tiroir et rien n'est envoyé.

## 🧪 Tests à écrire

- [ ] CorrectQuestionDrawer.test.tsx : pré-remplissage, validation, soumission.
- [ ] diff.test.ts : champs modifiés uniquement.
- [ ] useApproveQuestion.test.tsx : corps `corrections`.
- [ ] QuizQuestionForm.test.tsx : mode compact.
- [ ] axe : tiroir.

## ♿ Accessibilité et i18n

- Tiroir `role='dialog'` avec focus piégé et restauré sur le bouton d'origine ; titre « Corriger la question ».

## 🔗 Dépendances

À réaliser après : `ADM-WF-12` · `ADM-WF-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5.1, §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
