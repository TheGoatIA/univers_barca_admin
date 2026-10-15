> **ADM-WB-02** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le `Header.tsx` actuel affiche « Espace sécurisé », un bouton thème, nom/rôle et Déconnexion. Les maquettes du tableau de bord montrent une barre plus riche : fil d'Ariane, champ « Rechercher joueur, match, utilisateur… » avec badge `Ctrl K`, pastille d'environnement « PRODUCTION », bascule de thème, cloche avec point de notification et bloc profil (avatar initiales, nom, rôle).

## ✅ Objectif

Refondre la barre supérieure pour qu'elle serve de point d'entrée à la recherche globale et affiche le contexte (environnement, utilisateur).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-01` — Dashboard — super-admin
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true' width='330' alt='WB-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true' width='330' alt='WB-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true' width='330' alt='WB-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true' width='330' alt='WB-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bonjour Camille, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % vs hier » · « Signalements en attente » · « +5 depuis hier » · « File BullMQ » · « 3 jobs » · « 0 en échec »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-04%5D%22) · [ADM-WB-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-05%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

#### `WB-02` — Dashboard — content-manager
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true' width='330' alt='WB-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true' width='330' alt='WB-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true' width='330' alt='WB-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true' width='330' alt='WB-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Bonjour Léa, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Fiches joueurs publiées » · « 64 / 71 » · « 7 incomplètes » · « Questions IA à valider » · « +4 depuis hier » · « Anecdotes planifiées » · « 9 jours non couverts » · « Taux de réussite moyen quiz » · « 63 % » · « +1,2 pt » · « Calendrier éditorial · à venir » · « Lun. 19 oct. » · « Le but de Koeman à Wembley » · « Planifié » · « Mar. 20 oct. » · « Aucun contenu » · « À programmer » · « Mer. 21 oct. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-06%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WB-03` — Dashboard — modérateur
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true' width='330' alt='WB-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true' width='330' alt='WB-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true' width='330' alt='WB-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true' width='330' alt='WB-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Bonjour Karim, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Signalements en attente » · « 6 urgents » · « Traités aujourd’hui » · « +12 vs hier » · « Délai moyen de traitement » · « 1 h 12 » · « −9 min » · « Groupes à valider » · « 2 depuis hier » · « À traiter en priorité » · « File complète » · « Gravité » · « Il y a » · « Message · Culés Paris » · « Urgent » · « 12 min » · « Pseudo · xX_haine_Xx » · « À vérifier »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-07%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22)

#### `WB-04` — Dashboard — chargement
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_light.webp?raw=true' width='330' alt='WB-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__desktop_dark.webp?raw=true' width='330' alt='WB-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_light.webp?raw=true' width='330' alt='WB-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-04_dashboard-chargement__tablet_dark.webp?raw=true' width='330' alt='WB-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Chargement des indicateurs… »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-09%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22)

#### `WB-06` — Recherche globale — résultats
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true' width='330' alt='WB-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true' width='330' alt='WB-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true' width='330' alt='WB-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true' width='330' alt='WB-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « ped » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-11%5D%22) · [ADM-WB-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-12%5D%22) · [ADM-WB-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-14%5D%22) · [ADM-WB-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-15%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

#### `WB-07` — Recherche globale — aucun résultat
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true' width='330' alt='WB-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true' width='330' alt='WB-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true' width='330' alt='WB-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true' width='330' alt='WB-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « zzzq » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-11%5D%22) · [ADM-WB-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-13%5D%22) · [ADM-WB-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-15%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

## 📐 Règles de gestion

- Gauche : fil d'Ariane issu de `navigation.ts` (ex. « Tableau de bord », « Contenu › Joueurs », « Joueurs › Lamine Yamal »).
- Centre-droit : faux champ de recherche (largeur ≈ 355 px) icône loupe + placeholder « Rechercher joueur, match, utilisateur… » + `kbd` « Ctrl K » (« ⌘ K » sur macOS) ; clic ou focus ouvre la palette (WB-06).
- Pastille d'environnement : « PRODUCTION » rouge clair en prod, « STAGING » jaune, « DÉVELOPPEMENT » bleu, d'après `VITE_APP_ENV`.
- Bouton thème (soleil/lune, `aria-label` dynamique), cloche (point rouge si notifications non lues ; panneau NotificationCenter hors périmètre, bouton inactif tant que non livré), bloc profil : avatar rond initiales (couleur dérivée de l'id), nom « Camille Durand », rôle « Super-admin » ; menu Radix avec « Déconnexion ».

## 🔄 Comportement et états

- Sous 1024 px le champ de recherche se réduit à une icône loupe.
- Le badge de raccourci est masqué sur écran tactile (`pointer: coarse`).
- L'avatar utilise les initiales (2 lettres) du nom complet.
- La barre est `sticky`, hauteur 64 px, bordure basse `border-line`.

## 🛠️ Tâches

- [ ] Refondre `src/components/layout/Header.tsx` (sous-composants `Breadcrumbs`, `SearchTrigger`, `EnvBadge`, `ThemeToggle`, `UserMenu`).
- [ ] Créer `src/components/layout/Breadcrumbs.tsx` alimenté par `useMatches()` de React Router (`handle.crumb`).
- [ ] Créer `src/components/shared/Avatar.tsx` (initiales + couleur déterministe).
- [ ] Ajouter `VITE_APP_ENV` dans `.env.example` et `vite-env.d.ts`.
- [ ] Ajouter à `uiStore` : `searchOpen`, `setSearchOpen`.
- [ ] Tests RTL (rôle affiché, badge environnement, ouverture de la recherche).
- [ ] Captures clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, quand la barre s'affiche, alors « Camille Durand » et « Super-admin » sont visibles.
- [ ] Étant donné `VITE_APP_ENV=production`, quand la barre s'affiche, alors la pastille « PRODUCTION » est rouge.
- [ ] Étant donné un clic sur le champ de recherche, quand il est cliqué, alors la palette s'ouvre.
- [ ] Étant donné 900 px de large, quand la barre s'affiche, alors le champ est réduit à une icône.
- [ ] Étant donné macOS, quand le raccourci est affiché, alors il indique « ⌘ K ».

## 🧪 Tests à écrire

- [ ] Header.test.tsx : fil d'Ariane selon la route
- [ ] Header.test.tsx : badge environnement
- [ ] Avatar.test.tsx : initiales et couleur stable
- [ ] Header.test.tsx : ouverture de la recherche au clic

## ♿ Accessibilité et i18n

- Champ de recherche : `role="button"` aria-label « Ouvrir la recherche globale (Ctrl K) »
- Navigation fil d'Ariane `nav aria-label="Fil d'Ariane"`

## 📚 Références

- CDC Admin §4.9
- CDC Admin §5.2
- CDC Admin §9.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
