> **ADM-WB-14** · Écran · Priorité **P2** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC §4.9.1 : le menu rapide propose un lien « voir tous les résultats » vers une page de résultats complète et paginée. La palette de WB-06 l'expose via « Voir tous les résultats → ».

## ✅ Objectif

Créer la page `/recherche?q=` listant tous les résultats par type avec pagination serveur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-06` — Recherche globale — résultats
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true' width='330' alt='WB-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true' width='330' alt='WB-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true' width='330' alt='WB-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true' width='330' alt='WB-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « ped » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-11%5D%22) · [ADM-WB-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-12%5D%22) · [ADM-WB-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-15%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

## 📐 Règles de gestion

- Route `/recherche` : champ de recherche pré-rempli, onglets par catégorie autorisée (Joueurs, Utilisateurs, Matchs, Groupes) avec compteurs ; défaut = première catégorie non vide.
- Pagination serveur 20 par page (`GET /admin/search?q=&types=players&page=2&limit=20`), paramètres `q`, `type`, `page` dans l'URL.
- Chaque ligne = même rendu que la palette ; clic → fiche.
- États : chargement (squelette), vide (réutilise SearchEmptyState), erreur.

## 🔄 Comportement et états

- Terme minimal 2 caractères ; sinon redirection vers le tableau de bord avec la palette ouverte.
- Les résultats utilisateurs n'affichent l'e-mail que si le rôle y a droit.
- Navigation clavier : Tab sur les lignes, Entrée ouvre.

## 🛠️ Tâches

- [ ] Créer `src/pages/search/SearchResultsPage.tsx` (lazy) et la route `/recherche`.
- [ ] Étendre `searchApi.search` avec `page`, `limit`.
- [ ] Créer `useSearchResults(q, type, page)`.
- [ ] Réutiliser `SearchResultRow`.
- [ ] Composant `Pagination` partagé (précédent/suivant, « Page 2 / 5 »).
- [ ] Tests RTL + E2E.

## ✔️ Critères d'acceptation

- [ ] Étant donné « ped » avec 12 joueurs, quand j'ouvre `/recherche?q=ped&type=players`, alors 12 lignes sont listées avec compteur « Joueurs 12 ».
- [ ] Étant donné la page 2, quand je recharge l'URL, alors la page 2 est conservée.
- [ ] Étant donné un terme vide, quand j'ouvre `/recherche`, alors je suis redirigé vers `/`.
- [ ] Étant donné un moderator, quand la page s'affiche, alors l'onglet Joueurs n'apparaît pas.

## 🧪 Tests à écrire

- [ ] SearchResultsPage.test.tsx : onglets par rôle
- [ ] SearchResultsPage.test.tsx : pagination et URL
- [ ] useSearchResults.test.tsx
- [ ] Playwright : lien « Voir tous les résultats »

## 🔗 Dépendances

À réaliser après : `ADM-WB-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.9.1
- CDC Admin §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
