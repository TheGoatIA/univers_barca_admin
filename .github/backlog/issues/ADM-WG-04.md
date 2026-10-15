> **ADM-WG-04** · Écran · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-01 (rôle Modérateur « Karim Benali ») affiche « FILE DE SIGNALEMENTS », le sous-titre « 18 en attente · 6 urgents · tri par gravité automatique », deux boutons (« Raccourcis clavier », « Historique »), des onglets, des filtres et une table : Gravité auto, Type, Origine, Contenu signalé, Auteur, Motif, Il y a, avec la mention « Auto-évaluation indicative · décision finale humaine » et la pagination « 1–6 sur 18 ». La page `/moderation` est aujourd'hui un `ModulePage` vide.

## ✅ Objectif

Implémenter la page `/moderation` fidèle à la maquette.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-01` — File de signalements
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true' width='330' alt='WG-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true' width='330' alt='WG-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true' width='330' alt='WG-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true' width='330' alt='WG-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 18 en attente · 6 urgents · tri par gravité automatique » · « Raccourcis clavier » · « Historique » · « En attente » · « En cours » · « Traités » · « Ignorés » · « Rechercher… » · « Type de contenu » · « Gravité » · « Période » · « Auto-évaluation indicative · décision finale humaine » · « Gravité auto » · « Type » · « Origine » · « Contenu signalé » · « Auteur » · « Motif » · « Il y a » · « Urgent »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-06%5D%22) · [ADM-WG-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-07%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-25%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Colonnes : Gravité auto (badge avec point), Type (Message, Pseudo, Wallpaper), Origine (Culés Paris, Profil, Culés Douala, Culés Cameroun, Wallpapers IA), Contenu signalé (extrait tronqué, ex. « Allez les nuls, retournez dormir… » ; contenu urgent masqué : « … (propos menaçants masqués) … »), Auteur (pseudonyme en gras), Motif (Menace, Contenu haineux, Harcèlement, Propos déplacés, Droit d'image, Spam), Il y a (« 12 min », « 41 min », « 1 h », « 5 h »).
- Tri par défaut : gravité automatique décroissante (Urgent, À vérifier, Faible) puis ancienneté décroissante ; colonnes triables : Gravité auto, Type, Origine, Auteur, Motif, Il y a ; « Contenu signalé » non triable.
- Les lignes `Urgent` ont un fond rosé et une bordure gauche rouge ; clic sur la ligne → `/moderation/:reportId` ; navigation au clavier (`Entrée`).
- Pagination serveur 50 par page (« 1–6 sur 18 ») avec numéros et ellipse ; la page est conservée en revenant depuis le détail.
- Le bouton « Historique » ouvre la vue des décisions passées (onglet Traités) ; « Raccourcis clavier » ouvre l'aide (voir `fn-raccourcis-moderation`).
- Rôles : moderator et super-admin ; un content-manager est redirigé vers 403.

## 🔄 Comportement et états

- Chargement : squelettes ; erreur : bandeau avec « Réessayer » ; la mention « Auto-évaluation indicative · décision finale humaine » est toujours visible à droite des filtres.
- Le retour depuis le détail restaure l'onglet, les filtres, le tri et la page (état dans l'URL).

## 🛠️ Tâches

- [ ] Créer `src/pages/moderation/ModerationQueuePage.tsx` (lazy) et remplacer le `ModulePage` dans `App.tsx` ; `implemented: true` pour l'entrée « Modération ».
- [ ] Créer `src/components/moderation/ReportsTable.tsx`, `ReportRow.tsx`, `ContentExcerpt.tsx`, `ReportReasonCell.tsx`.
- [ ] Créer `src/components/moderation/QueueHeader.tsx` (titre, sous-titre compteurs, boutons).
- [ ] Créer `src/lib/dates.ts` : `formatElapsed(date)` (« 12 min », « 1 h », « 2 j ») commun avec WF/WC.
- [ ] Intégrer `DataTable` (ADS) avec tri serveur, pagination et lignes cliquables (`onRowClick`).
- [ ] Gérer chargement (6 lignes squelettes), erreur (ErrorState + Réessayer), vide (voir `ui-file-vide`) et rendu tablette.
- [ ] Ajouter le fil d'Ariane « Modération > File de signalements ».
- [ ] Tests de la table.

## ✔️ Critères d'acceptation

- [ ] Étant donné 18 signalements dont 6 urgents, quand la page s'affiche, alors le sous-titre « 18 en attente · 6 urgents · tri par gravité automatique » est visible.
- [ ] Étant donné un signalement urgent, quand sa ligne s'affiche, alors le badge « Urgent » est rouge et le contenu est masqué.
- [ ] Étant donné la table par défaut, quand elle se charge, alors les urgents précèdent les « À vérifier » puis les « Faible ».
- [ ] Étant donné un clic sur une ligne, quand la navigation s'effectue, alors l'URL devient `/moderation/<id>`.
- [ ] Étant donné un content-manager, quand il ouvre `/moderation`, alors la page 403 s'affiche.

## 🧪 Tests à écrire

- [ ] ReportsTable.test.tsx : colonnes et tri par défaut.
- [ ] ContentExcerpt.test.tsx : troncature et masquage.
- [ ] formatElapsed.test.ts : 12 min, 1 h, 2 j.
- [ ] ModerationQueuePage.test.tsx : chargement/erreur/403.
- [ ] e2e : ouverture d'un signalement depuis la file.

## ♿ Accessibilité et i18n

- Table avec `<caption>` « File de signalements » ; lignes cliquables = lien sur le contenu (pas un `onClick` seul) ; badge de gravité avec texte.

## 🔗 Dépendances

À réaliser après : `ADM-WG-03` · `ADM-WG-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6.1 (ModerationQueuePage), §4.8.2, §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
