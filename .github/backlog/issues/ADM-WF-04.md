> **ADM-WF-04** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WF-01 (rôle content-manager « Léa Martin ») présente le titre « QUESTIONS DE QUIZ », le sous-titre « 1 248 questions actives · 12 en attente de validation IA », les boutons « File de validation IA (12) » (icône étincelles) et « Nouvelle question » (grenat), la recherche et quatre filtres (Niveau, Catégorie, Statut, « Réussite : 0–100 % »), puis une table Question / Catégorie / Niveau / Langues / Statut / Réussite avec pagination « 1–5 sur 1248 » et pages 1 2 3 … 25. Le module n'a aujourd'hui qu'une entrée placeholder (`ModulePage`).

## ✅ Objectif

Implémenter la page `/quiz` fidèle à la maquette avec tri, pagination serveur et états.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-01` — Liste des questions
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_light.webp?raw=true' width='330' alt='WF-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__desktop_dark.webp?raw=true' width='330' alt='WF-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_light.webp?raw=true' width='330' alt='WF-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-01_liste-des-questions__tablet_dark.webp?raw=true' width='330' alt='WF-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « 1 248 questions actives · 12 en attente de validation IA » · « File de validation IA (12) » · « Nouvelle question » · « Rechercher… » · « Niveau » · « Catégorie » · « Statut » · « Réussite : 0–100 % » · « Question » · « Langues » · « Réussite » · « Qui a marqué le but de la victoire en finale de la LDC 2015 ? » · « Niv. 2 » · « Publiée » · « 71 % » · « En quelle année le club a-t-il été fondé ? » · « Histoire » · « Niv. 1 » · « 92 % »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-03%5D%22) · [ADM-WF-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-05%5D%22) · [ADM-WF-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-06%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-21%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-26%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22) · [API-JEUX-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-30%5D%22) · [API-JEUX-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-31%5D%22) · [API-JEUX-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-36%5D%22)

## 📐 Règles de gestion

- Colonnes : Question (texte FR tronqué à une ligne avec ellipsis, infobulle au survol du texte complet), Catégorie, Niveau (badge « Niv. 2 » : bleu clair niveaux 1-3, rose niveaux 4-5), Langues (pastilles FR/EN/ES vertes/rouges comme WC-01), Statut (« Publiée » vert, « Traduction » jaune), Réussite (« 71 % » aligné à droite en gras ; « — » si aucune réponse).
- Tri : par défaut `Réussite` croissante (chevron ↑ visible dans la maquette) pour faire remonter les questions à corriger ; colonnes triables : Question, Catégorie, Niveau, Statut, Réussite ; « Langues » non triable.
- Pagination serveur 50/page : « 1–50 sur 1 248 », 25 pages, contrôle précédent/suivant avec numéros et ellipse ; le chiffre « 1 248 » utilise l'espace insécable fin (format fr-FR).
- Sous-titre : « 1 248 questions actives » = `counters.active` (statut `published`), « 12 en attente de validation IA » = `counters.pendingAi` ; le bouton « File de validation IA (12) » mène à `/quiz/validation` et son compteur est masqué si 0.
- Clic sur une ligne → `/quiz/:id` ; actions rapides au survol : Éditer (crayon) ; menu ⋮ : « Dupliquer en brouillon », « Archiver », « Voir les statistiques ».
- Rôles : content-manager et super-admin ; un moderator est redirigé vers 403.

## 🔄 Comportement et états

- Chargement : squelettes dans la table ; erreur réseau : bandeau avec « Réessayer ».
- La question longue est tronquée (« Qui a marqué le but de la victoire en finale de la LDC 20… ») et son intégralité est dans `title` et `aria-label`.

## 🛠️ Tâches

- [ ] Créer `src/pages/quiz/QuizListPage.tsx` (lazy) et enregistrer `/quiz` dans `App.tsx` en remplaçant le `ModulePage` (mettre `implemented: true` dans `navigation.ts`).
- [ ] Créer `src/components/quiz/QuizTable.tsx`, `QuestionCell.tsx`, `LevelBadge.tsx`, `SuccessRateCell.tsx`.
- [ ] Créer `src/components/quiz/QuizHeader.tsx` (titre, sous-titre compteurs, boutons).
- [ ] Réutiliser `LangDots`, `StatusBadge`, `DataTablePagination` (ADS) ; ajouter les variantes `translation` et `pending-ai` à `StatusBadge`.
- [ ] Créer `src/lib/format.ts` : `formatInt(n)` (1 248) et `formatPercent(n)` (71 %) en `fr-FR` si FND `fnd-formats-intl-zod-fr` n'est pas livrée.
- [ ] Gérer chargement (squelettes 5 lignes), erreur (ErrorState + Réessayer), vide (voir états du filtrage) et le rendu tablette (colonnes Catégorie/Langues masquées < 900 px).
- [ ] Ajouter `useBreadcrumb` (« Contenu > Questions de quiz »).

## ✔️ Critères d'acceptation

- [ ] Étant donné 1 248 questions actives et 12 en attente, quand la page se charge, alors le sous-titre et le bouton « File de validation IA (12) » les affichent.
- [ ] Étant donné une question avec 92 % de réussite, quand la ligne s'affiche, alors « 92 % » est aligné à droite et le badge « Niv. 1 » est bleu.
- [ ] Étant donné une question sans réponse, quand la ligne s'affiche, alors la colonne Réussite affiche « — ».
- [ ] Étant donné le tri par défaut, quand la page s'affiche, alors les questions à faible réussite sont en tête.
- [ ] Étant donné un moderator, quand il ouvre `/quiz`, alors la page 403 s'affiche.

## 🧪 Tests à écrire

- [ ] QuizTable.test.tsx : colonnes, badges, ellipsis.
- [ ] LevelBadge.test.tsx : couleurs par niveau.
- [ ] SuccessRateCell.test.tsx : « — » et arrondi.
- [ ] QuizListPage.test.tsx : chargement/erreur/vide.
- [ ] e2e : ouverture de la liste puis de la première question.

## ♿ Accessibilité et i18n

- Table avec `<caption>` « Questions de quiz » ; badges de niveau avec texte « Niveau 2 » masqué pour lecteurs d'écran ; boutons icône avec `aria-label`.

## 🔗 Dépendances

À réaliser après : `ADM-WF-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5, §9.4
- CDC Backend §3.12.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
