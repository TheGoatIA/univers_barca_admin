> **ADM-WG-06** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-01 affiche quatre onglets avec compteurs : « En attente 18 » (pastille grenat), « En cours 3 », « Traités 842 », « Ignorés 120 ». Le badge « 18 » est repris sur l'entrée « Modération » de la sidebar et le sous-titre mentionne « 6 urgents ». Le statut `in-progress` n'est pas décrit dans le CDC : il matérialise un signalement ouvert par un modérateur (voir règles).

## ✅ Objectif

Implémenter les onglets, leurs compteurs et la prise en charge d'un signalement (« En cours »).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-01` — File de signalements
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true' width='330' alt='WG-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true' width='330' alt='WG-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true' width='330' alt='WG-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true' width='330' alt='WG-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 18 en attente · 6 urgents · tri par gravité automatique » · « Raccourcis clavier » · « Historique » · « En attente » · « En cours » · « Traités » · « Ignorés » · « Rechercher… » · « Type de contenu » · « Gravité » · « Période » · « Auto-évaluation indicative · décision finale humaine » · « Gravité auto » · « Type » · « Origine » · « Contenu signalé » · « Auteur » · « Motif » · « Il y a » · « Urgent »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-04%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-07%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-25%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-07` — File de modération vide
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_light.webp?raw=true' width='330' alt='WG-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_dark.webp?raw=true' width='330' alt='WG-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_light.webp?raw=true' width='330' alt='WG-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_dark.webp?raw=true' width='330' alt='WG-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 0 en attente » · « File vide, bravo ! » · « Tous les signalements ont été traités. Prochaine vérification automatique dans quelques minutes. » · « Voir l’historique des décisions »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-23%5D%22) · [ADM-WG-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-25%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Onglets synchronisés avec l'URL (`?statut=pending|in-progress|resolved|ignored`, défaut `pending`) ; changer d'onglet remet `page=1` et conserve recherche et filtres.
- Compteurs : `GET /reports/counters` ; pastille grenat pour « En attente » (> 0), compteurs gris pour les autres ; « 842 » formaté fr-FR ; le sous-titre « 18 en attente · 6 urgents » utilise `pending` et `urgent` ; pluriels corrects (« 1 en attente · 1 urgent »).
- « En cours » : un signalement passe en `in-progress` quand un modérateur ouvre son détail (verrou souple) ; l'étiquette « En cours · Karim B. » apparaît dans la file pour les autres modérateurs ; le verrou expire après 15 minutes sans action (valeur proposée, à confirmer) ; un autre modérateur peut le reprendre avec un avertissement.
- Les onglets « Traités » et « Ignorés » affichent la colonne « Il y a » comme « Traité il y a … » et le nom du modérateur ; ils sont en lecture seule (aucune action de masse).
- Mise à jour : compteurs rafraîchis toutes les 60 s et après chaque action ; un nouveau signalement urgent affiche une pastille « Nouveau » sans recharger la liste (voir polling).

## 🛠️ Tâches

- [ ] Créer `src/components/moderation/QueueTabs.tsx` (Radix Tabs liés à l'URL, compteurs, variante pastille).
- [ ] Brancher `useReportCounters` sur les onglets, le sous-titre et la sidebar.
- [ ] Implémenter la prise en charge : `POST /reports/:id/claim` (à créer) à l'ouverture du détail et `release` à la sortie/inaction ; étiquette « En cours · <modérateur> ».
- [ ] Adapter les colonnes de `ReportsTable` selon l'onglet (« Traité il y a », « Modérateur »).
- [ ] Implémenter `pluralize` pour les sous-titres.
- [ ] Tests de synchronisation URL et de pastille.
- [ ] Documenter le statut `in-progress` et le verrou souple (décision à valider).

## ✔️ Critères d'acceptation

- [ ] Étant donné l'URL `?statut=resolved`, quand la page se charge, alors l'onglet « Traités » est actif et sa colonne affiche le modérateur.
- [ ] Étant donné 18 signalements en attente, quand la page s'affiche, alors la pastille grenat « 18 » est visible à côté de « En attente ».
- [ ] Étant donné qu'un autre modérateur a ouvert un signalement, quand la liste s'affiche, alors « En cours · Camille D. » est visible sur sa ligne.
- [ ] Étant donné un verrou de plus de 15 minutes, quand j'ouvre ce signalement, alors je peux le reprendre sans erreur.
- [ ] Étant donné un changement d'onglet, quand il s'applique, alors la page revient à 1.

## 🧪 Tests à écrire

- [ ] QueueTabs.test.tsx : URL, compteurs, pastille.
- [ ] ReportsTable.test.tsx : colonnes par onglet.
- [ ] useReportClaim.test.tsx : verrou et expiration.
- [ ] pluralize.test.ts : « 1 urgent », « 6 urgents ».
- [ ] e2e : parcours de changement d'onglet.

## ♿ Accessibilité et i18n

- Onglets `role='tablist'` avec compteurs annoncés (« En attente, 18 »).

## 🔗 Dépendances

À réaliser après : `ADM-WG-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6, §4.6.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
