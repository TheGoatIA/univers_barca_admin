> **ADM-WF-06** · Fonctionnel · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Le chiffre « 12 » apparaît en quatre endroits dans WF-01/WF-03 : sous-titre « 12 en attente de validation IA », bouton « File de validation IA (12) », badge grenat sur l'entrée « Questions de quiz » de la sidebar et sous-titre de la file « 12 questions en attente ». Le CDC Admin §4.5.1 demande un indicateur de charge visible depuis le tableau de bord pour éviter l'accumulation.

## ✅ Objectif

Alimenter ces quatre emplacements (et le widget du tableau de bord) par une source unique et cohérente.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-01` — Liste des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « 1 248 questions actives · 12 en attente de validation IA » · « File de validation IA (12) » · « Nouvelle question » · « Rechercher… » · « Niveau » · « Catégorie » · « Statut » · « Réussite : 0–100 % » · « Question » · « Langues » · « Réussite » · « Qui a marqué le but de la victoire en finale de la LDC 2015 ? » · « Niv. 2 » · « Publiée » · « 71 % » · « En quelle année le club a-t-il été fondé ? » · « Histoire » · « Niv. 1 » · « 92 % »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-04%5D%22) · [ADM-WF-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-05%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-26%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22)

#### `WF-03` — File de validation des questions IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_light.webp?raw=true' width='330' alt='WF-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__desktop_dark.webp?raw=true' width='330' alt='WF-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_light.webp?raw=true' width='330' alt='WF-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-03_file-de-validation-des-questions-ia__tablet_dark.webp?raw=true' width='330' alt='WF-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente · aucune n’est publiée sans relecture humaine » · « Approuver la sélection » · « Les questions générées passent par le statut « en attente de validation » avant d'intégrer le pool actif. » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 avec le FC Barcelone ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de la Ligue des champions 2011 ? » · « Wembley » · « Stade olympique de Rome » · « Santiago Bernabéu »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-12%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-14%5D%22) · [ADM-WF-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-15%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-28%5D%22)

## 📐 Règles de gestion

- Source unique `GET /admin/quiz-questions/counters` (`pendingAi`, `active`) mise en cache 30 s avec rafraîchissement 60 s ; le compteur se met à jour immédiatement après approbation/rejet (invalidation).
- Badge de sidebar : masqué à 0, affiché « 99+ » au-delà de 99 ; couleur grenat sur fond blanc ; visible uniquement pour content-manager et super-admin.
- Seuil d'alerte : au-delà de 50 questions en attente, une bannière jaune « 50+ questions en attente : pensez à vider la file » s'affiche sur la liste (seuil proposé, configurable `VITE_QUIZ_QUEUE_WARN`).
- Pluriel : « 1 question en attente », « 0 question en attente » (WG-07 style « file vide »).
- Le widget du tableau de bord (WB) réutilise le hook `useQuizBadge` (pas de second appel API).

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/PendingAiBadge.tsx` (compteur compact, plafonné à « 99+ »).
- [ ] Étendre `Sidebar.tsx` / `navigation.ts` : propriété `badge` par entrée alimentée par un hook de compteur (compatible avec WB `layout-sidebar-refonte` et le badge « Modération 18 »).
- [ ] Créer `src/components/quiz/QueueWarningBanner.tsx`.
- [ ] Implémenter `pluralize(count, one, other)` dans `src/lib/utils.ts` si absent.
- [ ] Exposer `useQuizBadge` au widget de tableau de bord.
- [ ] Tests des 4 emplacements.

## ✔️ Critères d'acceptation

- [ ] Étant donné 12 questions en attente, quand j'ouvre la liste, alors « 12 » apparaît dans le sous-titre, le bouton et le badge de sidebar.
- [ ] Étant donné une approbation, quand la file passe à 11, alors les quatre emplacements affichent 11 sans rechargement.
- [ ] Étant donné 120 questions en attente, quand le badge s'affiche, alors « 99+ » est montré.
- [ ] Étant donné 0 question, quand la page s'affiche, alors le badge et le compteur du bouton sont masqués.

## 🧪 Tests à écrire

- [ ] PendingAiBadge.test.tsx : plafond et masquage.
- [ ] Sidebar.test.tsx : badge par rôle.
- [ ] pluralize.test.ts.
- [ ] QueueWarningBanner.test.tsx : seuil.
- [ ] e2e : badge décrémenté après approbation.

## ♿ Accessibilité et i18n

- Le badge est accompagné d'un libellé masqué « 12 questions en attente de validation » ; annonce en `aria-live='polite'` lors des mises à jour.

## 🔗 Dépendances

À réaliser après : `ADM-WF-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5.1, §4.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
