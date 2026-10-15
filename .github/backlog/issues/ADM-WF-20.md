> **ADM-WF-20** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La carte « À corriger en priorité » de WF-04 liste des questions avec leur taux sous forme de pastille colorée : « Score du Clásico du 2 mai 2009 ? 19 % » (rouge), « Ballons d'or de Messi au Barça ? 48 % » (jaune), « Année de fondation du club ? 99 % » (bleu). Elle doit aider à corriger les questions ambiguës ou mal calibrées (CDC Admin §4.5).

## ✅ Objectif

Calculer et afficher les questions à corriger avec leur priorité et un accès direct à l'éditeur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-04` — Performance des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-04_performance-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Performance » · « Performance des questions » · « Repère les questions mal calibrées ou ambiguës » · « Exporter » · « Réussite moyenne » · « 63 % » · « +1,2 pt » · « Trop faciles (> 95 %) » · « à relever » · « Trop difficiles ( » · « 15 %) » · « à vérifier » · « Réponses (30 j) » · « 184 k » · « +12 % » · « Répartition du taux de réussite » · « À corriger en priorité » · « Score du Clásico du 2 mai 2009 ? » · « 19 % » · « Ballons d’or de Messi au Barça ? »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-18%5D%22) · [ADM-WF-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-19%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22)

## 📐 Règles de gestion

- Critères d'inclusion (proposés) : taux < 15 % ou > 95 % avec ≥ 30 réponses, ou écart ≥ 40 points entre le taux observé et la cible de son niveau (niveau 1 ≈ 80 %, niveau 2 ≈ 75 %, niveau 3 ≈ 70 %, niveau 4 ≈ 65 % selon les seuils de passage du CDC Backend §3.12.1) ; la maquette montre aussi 48 % (jaune) : cas d'écart au niveau annoncé.
- Classement par score de priorité = écart absolu à la cible × log(nombre de réponses) ; 5 éléments affichés, lien « Voir toutes (N) » vers la liste filtrée.
- Pastille : rouge si < 15 %, bleue si > 95 %, jaune sinon ; texte « 19 % » avec point coloré ; l'infobulle explique la raison (« Trop difficile pour le niveau 3 »).
- Clic sur la question → `/quiz/:id` (éditeur) ; action secondaire « Archiver » en menu.
- Les questions déjà marquées « vérifiées » (case dans l'éditeur, option future) ne sont pas ré-proposées : hors périmètre ici, le tri exclut simplement les questions modifiées depuis moins de 7 jours.

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/PriorityFixList.tsx` et `PriorityFixItem.tsx`.
- [ ] Implémenter `GET /admin/quiz-questions/stats/to-fix?limit=5` côté client (`useQuizToFix`) ; contrat décrit dans l'issue API.
- [ ] Créer `src/lib/quiz.ts` : `targetRateForLevel(level)`, `priorityScore(q)`, `calibrationReason(q)`.
- [ ] Réutiliser `RatePill` (pastille colorée) du composant `SuccessRateCell`.
- [ ] Ajouter le lien « Voir toutes (N) » avec filtres (`minRate`, `maxRate`).
- [ ] Gérer états vide (« Aucune question à corriger »), chargement et erreur.
- [ ] Tests des règles de priorité.

## ✔️ Critères d'acceptation

- [ ] Étant donné une question à 19 % au niveau 3, quand la liste s'affiche, alors la pastille est rouge et l'infobulle précise « Trop difficile ».
- [ ] Étant donné une question à 99 %, quand elle est listée, alors la pastille est bleue.
- [ ] Étant donné 12 questions éligibles, quand la carte s'affiche, alors 5 sont montrées avec « Voir toutes (12) ».
- [ ] Étant donné aucune question éligible, quand la carte s'affiche, alors « Aucune question à corriger » est visible.
- [ ] Étant donné un clic sur une question, quand la navigation s'effectue, alors l'éditeur de cette question s'ouvre.

## 🧪 Tests à écrire

- [ ] priorityScore.test.ts : classement et bornes.
- [ ] PriorityFixList.test.tsx : pastilles et lien.
- [ ] targetRateForLevel.test.ts : cibles.
- [ ] MSW : réponse vide.
- [ ] e2e : ouvrir une question depuis la liste prioritaire.

## ♿ Accessibilité et i18n

- Liste `<ul>` ; pastilles avec texte (« 19 %, trop difficile ») ; liens avec libellé de la question.

## 🔗 Dépendances

À réaliser après : `ADM-WF-18` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5
- CDC Backend §3.12.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
