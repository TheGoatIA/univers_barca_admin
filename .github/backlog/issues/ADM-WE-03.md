> **ADM-WE-03** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La barre de la bibliothèque propose Rechercher…, Catégorie, Statut, Langues et un filtre actif « Mois : octobre ». Le CDC Admin §4.1 demande aussi des raccourcis vers les contenus incomplets (ex. une langue manquante) depuis le tableau de bord.

## ✅ Objectif

Rendre la bibliothèque filtrable via l'URL, avec un filtre Langues qui isole les contenus à traduire.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-01` — Bibliothèque d’anecdotes
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true' width='330' alt='WE-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true' width='330' alt='WE-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true' width='330' alt='WE-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true' width='330' alt='WE-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Anecdotes « Aujourd’hui dans l’histoire » · 212 contenus » · « Calendrier éditorial » · « Nouvelle anecdote » · « Rechercher… » · « Catégorie » · « Statut » · « Langues » · « Mois : octobre » · « Date de diffusion » · « Titre » · « 19 oct. » · « Le but de Koeman à Wembley » · « Histoire du club » · « Planifié » · « 21 oct. » · « Naissance de Gavi » · « 23 oct. » · « Le 5-0 de la Manita » · « En attente de traduction »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-02%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-09%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

## 📐 Règles de gestion

- Recherche debouncée à 300 ms sur le titre (FR, EN, ES).
- Catégorie : multi-sélection ; Statut : Brouillon, En attente de traduction, Prêt à publier, Planifié, Publié.
- Langues : « Complètes (FR+EN+ES) », « EN manquante », « ES manquante » ; un lien depuis le tableau de bord pointe vers ?langs=incomplete.
- Mois : sélecteur mois/année (défaut mois courant) ; l'état est stocké dans ?month=2026-10 ; option « Tous les mois ».
- Tous les filtres sont persistés dans l'URL (?q&category&status&langs&month&page) et page repasse à 1 à chaque changement.

## 🔄 Comportement et états

- Résultat vide : message rappelant les filtres actifs (chips).
- Le compteur du sous-titre reflète le total filtré (« 7 contenus »).
- Un filtre « Mois » sans contenu affiche des suggestions « Ouvrir le calendrier ».

## 🗄️ Données

- Query params de /contenu

## 🛠️ Tâches

- [ ] Créer src/hooks/useHistoryFilters.ts (Zod + useSearchParams).
- [ ] Créer src/components/content/HistoryFilters.tsx (Input + 4 DropdownMenu).
- [ ] Créer src/components/shared/MonthPicker.tsx.
- [ ] Réutiliser FilterChips (créé dans WD) ou le créer dans src/components/shared/.
- [ ] Ajouter le support langs= côté client (paramètre langs=missing-en,missing-es).
- [ ] Exposer l'URL de raccourci pour le tableau de bord (src/lib/shortcuts.ts).
- [ ] Ajouter l'invalidation lors des changements de mois.

## ✔️ Critères d'acceptation

- [ ] Étant donné ?langs=missing-es, quand la liste charge, alors seules des anecdotes sans traduction espagnole sont listées.
- [ ] Étant donné un changement de mois, quand je sélectionne novembre, alors la date du filtre et l'URL passent à 2026-11 et page=1.
- [ ] Étant donné une saisie « Koeman », quand 300 ms s'écoulent, alors une requête q=Koeman est émise.

## 🧪 Tests à écrire

- [ ] useHistoryFilters.test.ts
- [ ] MonthPicker.test.tsx
- [ ] HistoryFilters.test.tsx : debounce.
- [ ] e2e : filtre « ES manquante ».

## ♿ Accessibilité et i18n

- Chaque menu de filtre a un aria-label explicite et un état actif annoncé.

## 🔗 Dépendances

À réaliser après : `ADM-WE-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.1
- CDC Admin §4.10

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
