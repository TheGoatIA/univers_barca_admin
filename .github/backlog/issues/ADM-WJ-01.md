> **ADM-WJ-01** · API · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le module users-admin (CDC §2.2) liste les comptes de l'application mobile, pour modérateurs et super-admin. Le dépôt API expose déjà le modèle User ; les routes /admin/users sont à créer.

## ✅ Objectif

Fournir les fonctions typées et hooks pour la liste, la fiche et les sanctions.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-01` — Liste des utilisateurs
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_light.webp?raw=true' width='330' alt='WJ-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_dark.webp?raw=true' width='330' alt='WJ-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_light.webp?raw=true' width='330' alt='WJ-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_dark.webp?raw=true' width='330' alt='WJ-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 12 480 comptes · 84 suspendus · 12 bannis » · « Exporter CSV » · « Rechercher… » · « Statut » · « Pays » · « Inscription » · « Langue » · « Utilisateur » · « Localisation » · « Points » · « Dernière activité » · « Boris T. » · « boris@exemple.com » · « Yaoundé, CM » · « Actif » · « 2 340 » · « il y a 2 min » · « Aïcha Ngono » · « aicha@exemple.com » · « 1 420 » · « il y a 1 h »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-02%5D%22) · [ADM-WJ-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-04%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22) · [API-MODER-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-15%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WJ-02` — Fiche utilisateur
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_light.webp?raw=true' width='330' alt='WJ-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_dark.webp?raw=true' width='330' alt='WJ-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_light.webp?raw=true' width='330' alt='WJ-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_dark.webp?raw=true' width='330' alt='WJ-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « ultras_bcn » · « Actif · 1 avertissement » · « ultras@exemple.com · inscrit le 14 juin 2026 · Barcelone, ES » · « Avertir » · « Suspendre » · « Bannir » · « Points » · « niveau Culé » · « Série max » · « 9 j » · « Signalements reçus » · « 2 fondés » · « Groupes » · « Culés Paris, Peñas BCN » · « Activité récente » · « Message publié dans Culés Paris » · « il y a 14 min » · « Quiz du jour terminé · 7/10 » · « il y a 2 h » · « Connexion · Chrome Android · Barcelone » · « Wallpaper généré » · « hier »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-03%5D%22) · [ADM-WJ-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-04%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22) · [API-MODER-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-03%5D%22) · [API-MODER-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-13%5D%22) · [API-MODER-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-14%5D%22) · [API-MODER-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-15%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Routes (à créer côté API) : GET /admin/users, GET /admin/users/:id, POST /admin/moderation/users/:id/action (avertir/suspendre/bannir), GET /admin/moderation/users/:id/history (CDC §4.12).
- Filtres : q, statut (actif, suspendu, banni), pays, période d'inscription, langue (FR/EN/ES) ; pagination serveur page/limit ; tri serveur.
- staleTime 30 s (données de modération, CDC §2.4).
- Réponse minimisée : jamais de position GPS (RG-MAP), ville déclarée uniquement.

## 🔄 Comportement et états

- Pas d'optimistic update sur les sanctions (CDC §2.4).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/users` | Liste paginée (à créer) | ?q&status&country&from&to&lang&page&limit&sort | {items:[{id,username,email,city,status,points,lastActivityAt}],total:12480,…} |

## 🛠️ Tâches

- [ ] Créer `src/features/users-admin/{api,hooks,types}`.
- [ ] Types AdminUserListItem{id,username,email,avatar,city,country,status,warnings,points,lastActivityAt}, AdminUserDetail, SanctionPayload{type,severity,justification,durationDays?}.
- [ ] Schémas Zod ; hooks useAdminUsers(filters), useAdminUser(id), useApplySanction.
- [ ] Hook useUserFilters (URL).
- [ ] Handlers MSW avec Boris T., Aïcha Ngono, ultras_bcn, xX_haine_Xx…
- [ ] Documenter les routes à créer.

## ✔️ Critères d'acceptation

- [ ] Étant donné des filtres, alors la requête les transmet en query params.
- [ ] Étant donné une sanction réussie, alors les clés ['admin-users'] et ['admin-users',id] sont invalidées.
- [ ] Étant donné une réponse avec champ gps, alors le schéma Zod le refuse.

## 🧪 Tests à écrire

- [ ] Test hook : useAdminUsers pagination
- [ ] Test hook : sanction invalide les clés
- [ ] Test unitaire : schéma rejette gps
- [ ] Test : useUserFilters round-trip

## 📚 Références

- CDC Admin §4.6, §4.12

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
