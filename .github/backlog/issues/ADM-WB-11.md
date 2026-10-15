> **ADM-WB-11** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC §4.9 : barre de recherche globale accessible partout (Ctrl+K / Cmd+K), recherche en temps réel après ~300 ms, portée joueurs / matchs / utilisateurs / groupes, 5 résultats max par catégorie, limitée aux entités consultables par le rôle.

## ✅ Objectif

Fournir le client API, le schéma et le hook de recherche réutilisés par la palette et la page de résultats.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-06` — Recherche globale — résultats
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true' width='330' alt='WB-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true' width='330' alt='WB-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true' width='330' alt='WB-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true' width='330' alt='WB-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « ped » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-12%5D%22) · [ADM-WB-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-14%5D%22) · [ADM-WB-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-15%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

#### `WB-07` — Recherche globale — aucun résultat
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true' width='330' alt='WB-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true' width='330' alt='WB-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true' width='330' alt='WB-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true' width='330' alt='WB-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « zzzq » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-13%5D%22) · [ADM-WB-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-15%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

## 📐 Règles de gestion

- Endpoint `GET /admin/search?q=&types=players,users,matches,groups&limit=5` ; réponse groupée `{ players:[{id,name,position,status,photoUrl}], users:[{id,name,email}], matches:[{id,label,date}], groups:[{id,name,city}] }`.
- Longueur minimale de la requête : 2 caractères (la palette affiche une invite en dessous) ; requête normalisée (trim, insensible à la casse et aux accents) ; recherche partielle sur nom/e-mail/identifiant de match.
- Droits : content-manager → joueurs + matchs ; moderator → utilisateurs + groupes ; super-admin → tout (cf. §3.1) ; le serveur filtre et le front n'affiche que les catégories renvoyées.
- Hook `useGlobalSearch(q)` : `useDebounced(q, 300)`, `queryKey ['search', q]`, `staleTime 30 s`, `placeholderData: keepPreviousData`, annulation de la requête précédente via `signal`.

## 🔄 Comportement et états

- Les e-mails des utilisateurs sont masqués partiellement pour le rôle non autorisé (jamais d'autres données personnelles).
- Toute erreur API affiche un état d'erreur dans la palette (pas de toast).
- Les requêtes de recherche ne sont pas journalisées dans l'audit (pas de mutation) mais le terme n'est jamais stocké côté client hors mémoire.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/search` | Recherche globale groupée par type d'entité | ?q=ped&types=players,users,matches,groups&limit=5 | { success:true, data:{ players:[…≤5], users:[…], matches:[…], groups:[…] } } |

## 🛠️ Tâches

- [ ] Créer `src/api/search.api.ts` et `src/schemas/search.schema.ts`.
- [ ] Créer `src/hooks/useGlobalSearch.ts` (debounce, annulation, groupes).
- [ ] Créer `src/lib/searchGroups.ts` : ordre des catégories (Joueurs, Utilisateurs, Matchs, Groupes), libellés, icônes, route cible (`/joueurs/:id`, `/utilisateurs/:id`, `/matchs/:id`, `/groupes/:id`).
- [ ] Normalisation `normalizeQuery` dans `src/lib/utils.ts`.
- [ ] Typer `SearchResult` discriminé par `type`.
- [ ] Tests MSW.
- [ ] Documenter le contrat.

## ✔️ Critères d'acceptation

- [ ] Étant donné « ped », quand le hook s'exécute après 300 ms, alors une seule requête `q=ped` est émise.
- [ ] Étant donné une saisie rapide « p », « pe », « ped », quand 300 ms s'écoulent après la dernière touche, alors une seule requête part et les précédentes sont annulées.
- [ ] Étant donné un content-manager, quand la réponse arrive, alors seules les catégories Joueurs et Matchs sont rendues.
- [ ] Étant donné 1 caractère saisi, quand le hook est monté, alors aucune requête n'est émise.

## 🧪 Tests à écrire

- [ ] useGlobalSearch.test.tsx : debounce 300 ms (fake timers)
- [ ] useGlobalSearch.test.tsx : annulation de la requête obsolète
- [ ] search.schema.test.ts
- [ ] searchGroups.test.ts : route cible par type

## 📚 Références

- CDC Admin §4.9
- CDC Admin §4.9.1
- CDC Admin §3.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
