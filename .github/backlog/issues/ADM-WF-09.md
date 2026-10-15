> **ADM-WF-09** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La colonne droite de WF-02 contient la carte « Paramètres » (Niveau de difficulté « 2 · Culé », Catégorie « Joueurs », Joueur associé « Ivan Rakitić » avec icône personne, Statut « Publiée ») et la carte « Performance » : « Taux de réussite observé 71 % », barre de progression grenat, « 2 840 réponses · calibrage : correct » (mot « correct » en vert).

## ✅ Objectif

Implémenter les deux cartes branchées sur le formulaire et sur les statistiques de la question.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-02` — Éditeur de question trilingue
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true' width='330' alt='WF-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true' width='330' alt='WF-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true' width='330' alt='WF-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true' width='330' alt='WF-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Éditer » · « Éditer la question » · « ID q-00481 · Niveau 2 · Joueurs » · « Annuler » · « Enregistrer » · « Énoncé » · « FR · Français » · « EN · English » · « ES · Español » · « Qui a marqué le but de la victoire en finale de la Ligue des champions 2015 ? » · « Les 3 langues sont complètes — prêt à publier » · « Réponses (FR) » · « Coche la bonne réponse » · « Neymar Jr » · « EN · ES » · « Luis Suárez » · « Ivan Rakitić » · « Lionel Messi » · « Explication affichée après la réponse » · « Rakitić ouvre le score dès la 4e minute, avant Suárez et Neymar (3-1). » · « Paramètres » · « Niveau de difficulté »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-07%5D%22) · [ADM-WF-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-08%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-11%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22)

## 📐 Règles de gestion

- Niveau : select 1-5 (« 1 · Supporter occasionnel » … « 5 · La Masia ») ; changer le niveau met à jour le badge du sous-titre ; Catégorie : select (Joueurs, Histoire, Trophées, Matchs) ; si Catégorie = Joueurs, « Joueur associé » est proposé.
- Joueur associé : combobox de recherche dans les joueurs publiés (`PlayerCombobox` partagé WD) ; champ optionnel ; stocke `playerId` ; effacement par croix ; lien « Ouvrir la fiche » vers `/joueurs/:id`.
- Statut : select Brouillon, Publiée, Archivée ; « Publiée » est désactivé tant que les trois langues ne sont pas complètes (info-bulle « Complétez FR, EN et ES »).
- Performance : taux = `correct/answers` ; barre grenat proportionnelle ; « 2 840 réponses » = `stats.answers` formaté fr-FR ; « calibrage : correct » (vert) si 15 % ≤ taux ≤ 95 %, « trop facile » (bleu) > 95 %, « trop difficile » (rouge) < 15 %.
- Nouvelle question : la carte Performance affiche « Pas encore de réponses » ; un niveau très éloigné du taux observé (ex. niveau 1 avec 20 % de réussite) affiche un conseil « Niveau peut-être trop élevé » (indicatif, non bloquant).

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/SettingsCard.tsx` (selects, combobox).
- [ ] Créer `src/components/quiz/PerformanceCard.tsx` (taux, barre, volume, calibrage via `calibration()`).
- [ ] Réutiliser `src/components/shared/PlayerCombobox.tsx` (WD) ou le créer avec recherche `GET /admin/players?q=&status=published&limit=8`.
- [ ] Créer `src/components/shared/ProgressBar.tsx` (grenat, `role='progressbar'`) si absent.
- [ ] Gérer l'état « nouvelle question » (pas de statistiques) et le chargement des stats.
- [ ] Brancher les champs sur RHF (`level`, `category`, `playerId`, `status`).
- [ ] Tests de la règle de désactivation « Publiée ».

## ✔️ Critères d'acceptation

- [ ] Étant donné `stats {answers:2840, correct:2016}`, quand la carte Performance s'affiche, alors « 71 % », « 2 840 réponses » et « calibrage : correct » apparaissent.
- [ ] Étant donné une question sans langue ES, quand je regarde le select Statut, alors l'option « Publiée » est désactivée.
- [ ] Étant donné Catégorie = Histoire, quand le formulaire se met à jour, alors le champ « Joueur associé » est masqué ou facultatif.
- [ ] Étant donné un taux de 97 %, quand la carte s'affiche, alors le calibrage « trop facile » est en bleu.

## 🧪 Tests à écrire

- [ ] PerformanceCard.test.tsx : 3 calibrages.
- [ ] SettingsCard.test.tsx : désactivation de « Publiée ».
- [ ] PlayerCombobox.test.tsx : recherche et sélection.
- [ ] ProgressBar.test.tsx : valeur ARIA.
- [ ] axe : cartes latérales.

## ♿ Accessibilité et i18n

- Barre de performance `role='progressbar'` avec `aria-valuenow=71` ; calibrage exprimé en texte (pas seulement en couleur).

## 🔗 Dépendances

À réaliser après : `ADM-WF-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5
- CDC Backend §3.12.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
