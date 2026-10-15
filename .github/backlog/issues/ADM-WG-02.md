> **ADM-WG-02** · API · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Le CDC Admin §4.12 liste `/admin/moderation/reports` (GET), `/admin/moderation/reports/:id` (GET), `/admin/moderation/reports/:id/action` (POST), `/admin/moderation/users/:id/history` (GET), `/admin/community-groups` (GET) et `/admin/community-groups/:id/validate` (POST). Aucune de ces routes n'existe dans l'API actuelle (modèles Mongoose seuls). Cette issue crée `src/api/moderation.api.ts` et `src/api/groups.api.ts`.

## ✅ Objectif

Fournir les clients typés du module avec filtres, tri, pagination et enveloppe API.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-01` — File de signalements
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true' width='330' alt='WG-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true' width='330' alt='WG-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true' width='330' alt='WG-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true' width='330' alt='WG-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 18 en attente · 6 urgents · tri par gravité automatique » · « Raccourcis clavier » · « Historique » · « En attente » · « En cours » · « Traités » · « Ignorés » · « Rechercher… » · « Type de contenu » · « Gravité » · « Période » · « Auto-évaluation indicative · décision finale humaine » · « Gravité auto » · « Type » · « Origine » · « Contenu signalé » · « Auteur » · « Motif » · « Il y a » · « Urgent »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-04%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-06%5D%22) · [ADM-WG-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-07%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-25%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-02` — Détail d’un signalement
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true' width='330' alt='WG-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true' width='330' alt='WG-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true' width='330' alt='WG-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true' width='330' alt='WG-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-08%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-10%5D%22) · [ADM-WG-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-11%5D%22) · [ADM-WG-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-12%5D%22) · [ADM-WG-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-14%5D%22) · [ADM-WG-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-15%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-03` — Action — bannir avec justification
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true' width='330' alt='WG-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true' width='330' alt='WG-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true' width='330' alt='WG-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true' width='330' alt='WG-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-13%5D%22) · [ADM-WG-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-14%5D%22) · [ADM-WG-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-15%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-02%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-04` — Historique de modération d’un utilisateur
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true' width='330' alt='WG-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true' width='330' alt='WG-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true' width='330' alt='WG-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true' width='330' alt='WG-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « ultras_bcn » · « Historique » · « Historique de modération » · « ultras_bcn · compte créé le 14 juin 2026 » · « Voir le profil » · « Signalements reçus » · « 2 fondés » · « Avertissements » · « 3 oct. 2026 » · « Suspensions » · « Statut » · « Actif » · « Récidive : rang 2 » · « Chronologie » · « 12 min » · « Signalement #R-20418 » · « Menace · en attente » · « 3 oct. » · « Avertissement » · « Propos déplacés · Karim B. · gravité faible » · « 28 sept. » · « Signalement ignoré » · « Non fondé · Karim B. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-16%5D%22) · [ADM-WG-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-17%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-02%5D%22) · [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-13%5D%22) · [API-MODER-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-14%5D%22) · [API-MODER-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-19%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-28%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-05` — Gestion des groupes locaux
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true' width='330' alt='WG-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true' width='330' alt='WG-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true' width='330' alt='WG-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true' width='330' alt='WG-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 212 groupes · 4 en attente de validation » · « Règle de validation » · « En attente » · « Actifs » · « Archivés » · « Groupe » · « Ville » · « Créateur » · « Membres » · « Statut » · « Actions » · « Culés Bafoussam » · « Bafoussam, CM » · « Boris T. » · « Valider » · « Refuser » · « Barça Lyon 69 » · « Lyon, FR » · « Sofía R. » · « Peña de Dakar » · « Dakar, SN »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-18%5D%22) · [ADM-WG-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-19%5D%22) · [ADM-WG-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-20%5D%22) · [ADM-WG-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-21%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-16%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Liste `GET /admin/moderation/reports?status&type&severity&from&to&q&page&limit=50&sort=-autoSeverity,createdAt` ; tri par défaut = gravité automatique décroissante puis ancienneté (le plus ancien d'abord) ; compteurs d'onglets via `GET /admin/moderation/reports/counters`.
- Détail `GET /reports/:id` : `{id,number,status,autoSeverity,contentType,reason,reportedAt,content:{authorId,authorName,text,masked,sensitive},context:[{authorName,text,at}],origin,author:{id,username,createdAt,status,reportsReceived,warnings,recidivismRank},reporter:{masked:true}}`.
- Action `POST /reports/:id/action {type:'ignore'|'hide'|'warn'|'suspend'|'ban', severity?, durationDays?, justification?}` → `{report, action, user?}` ; justification obligatoire pour `suspend` et `ban` (≥ 10 caractères) ; l'action est journalisée de façon immuable (`ModerationAction`) et déclenche la notification utilisateur côté backend.
- Historique `GET /moderation/users/:id/history` → `{user:{id,username,createdAt,status}, summary:{reports:5,founded:2,warnings:1,lastWarningAt,suspensions:0,recidivismRank:2}, timeline:[…]}`.
- Groupes : `GET /admin/community-groups?status&q&page&limit` + `GET /counters` (pending 4, active 202, archived 6, total 212) ; `POST /community-groups/:id/validate {decision:'approve'|'reject'|'archive'|'restore', reason?}`.
- Erreurs : 403 hors moderator/super-admin, 404, 409 `ALREADY_PROCESSED`, 422 `JUSTIFICATION_REQUIRED`.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/moderation/reports` | File de signalements (à créer) | ?status&type&severity&from&to&q&page&limit&sort | {items:[{id,number:20418,autoSeverity:'urgent',contentType:'message',origin:'Culés Paris',excerpt,authorName:'ultras_bcn',reason:'Menace',createdAt}],total:18,…} |
| `GET` | `/api/v1/admin/moderation/reports/counters` | Compteurs des onglets (à créer) | — | {pending:18,urgent:6,inProgress:3,resolved:842,ignored:120} |
| `GET` | `/api/v1/admin/moderation/reports/:id` | Détail d'un signalement (à créer) | — | {…voir règles} |
| `POST` | `/api/v1/admin/moderation/reports/:id/action` | Applique une action de modération (à créer) | {type,severity?,durationDays?,justification?} | {report,action,user} |
| `GET` | `/api/v1/admin/moderation/users/:id/history` | Historique de modération d'un utilisateur (à créer) | — | {user,summary,timeline} |
| `GET` | `/api/v1/admin/community-groups` | Liste des groupes locaux (à créer) | ?status&q&page&limit | {items:[{id,name,city,countryCode,createdBy,membersCount,status}],total:212,…} |
| `POST` | `/api/v1/admin/community-groups/:id/validate` | Décision sur un groupe (à créer) | {decision,reason?} | {group} |

## 🗄️ Données

- Collections `moderationreports` (champ `number`), `moderationactions` (immuable), `communitygroups`.

## 🛠️ Tâches

- [ ] Créer `src/api/moderation.api.ts` : `listReports`, `reportCounters`, `getReport`, `applyAction`, `userHistory`.
- [ ] Créer `src/api/groups.api.ts` : `listGroups`, `groupCounters`, `decideGroup`.
- [ ] Créer `serializeReportsQuery` (tri composé, statuts, plage de dates ISO).
- [ ] Valider les réponses avec les schémas Zod de `data-schemas-moderation`.
- [ ] Créer les handlers MSW `src/test/handlers/moderation.ts` et `groups.ts`.
- [ ] Mapper les erreurs métier vers des `ApiError` typées.
- [ ] Documenter dans `docs/ARCHITECTURE.md` les routes à créer côté API avec leur contrat.

## ✔️ Critères d'acceptation

- [ ] Étant donné `listReports({status:'pending', severity:['urgent']})`, quand la requête part, alors l'URL contient `status=pending&severity=urgent&limit=50`.
- [ ] Étant donné `applyAction(id,{type:'ban'})` sans justification, quand la fonction est appelée, alors une erreur de validation client est levée avant tout envoi.
- [ ] Étant donné 409 `ALREADY_PROCESSED`, quand `applyAction` est appelée, alors une `ApiError` typée est propagée.
- [ ] Étant donné `userHistory`, quand la réponse arrive, alors la timeline est triée de la plus récente à la plus ancienne.

## 🧪 Tests à écrire

- [ ] moderation.api.test.ts (MSW) : sérialisation des filtres.
- [ ] moderation.api.test.ts : validation `ban` sans justification.
- [ ] groups.api.test.ts : décisions de groupe.
- [ ] moderation.api.test.ts : schéma du détail (contexte, rapporteur masqué).
- [ ] moderation.api.test.ts : erreurs 403/409/422.

## 🔗 Dépendances

À réaliser après : `ADM-WG-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6, §4.12
- CDC Backend §3.11, §3.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
