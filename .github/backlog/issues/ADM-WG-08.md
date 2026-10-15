> **ADM-WG-08** · Écran · Priorité **P0** · Taille **L** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-02 affiche « SIGNALEMENT #R-20418 » avec les badges « Urgent » et « En attente », des flèches précédent/suivant, une carte principale (étiquettes « Message de groupe » et « Menace », « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » »), une carte « Actions » (Ignorer, Masquer le contenu, Avertir, Suspendre, Bannir) avec la mention « Justification obligatoire pour Suspendre et Bannir · chaque action est journalisée de façon immuable. » et une colonne droite (« Auteur du contenu », « Rapporteur »). La spécification de ReportDetailPage figure au CDC Admin §4.6.4.

## ✅ Objectif

Implémenter la page `/moderation/:reportId` et sa mise en page.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-02` — Détail d’un signalement
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true' width='330' alt='WG-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true' width='330' alt='WG-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true' width='330' alt='WG-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true' width='330' alt='WG-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-10%5D%22) · [ADM-WG-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-11%5D%22) · [ADM-WG-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-12%5D%22) · [ADM-WG-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-14%5D%22) · [ADM-WG-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-15%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- En-tête : titre « SIGNALEMENT #R-20418 » (Barlow Condensed), badges gravité auto et statut (« En attente » jaune, « En cours », « Traité », « Ignoré »), flèches `‹` `›` (voir navigation précédent/suivant).
- Zone principale : étiquettes (type de contenu « Message de groupe », nature « Menace » = motif normalisé), ligne « Signalé il y a 12 min · motif déclaré : « … » » ; le motif déclaré par le rapporteur (libellé libre) est distinct de la nature évaluée.
- Zone d'actions : cinq boutons — Ignorer (contour), Masquer le contenu (icône œil barré), Avertir (icône triangle), Suspendre (rose, icône pause), Bannir (rouge plein, icône interdit) ; mention de journalisation immuable en pied (icône ⓘ).
- Pied de page conforme au CDC : lien « Historique complet de modération → » (dans le panneau auteur) vers `/moderation/utilisateurs/:userId/historique`.
- Mise en page deux colonnes (`grid-cols-[1fr_340px]`, une colonne sous 1100 px) ; chargement en squelette, 404 « Signalement introuvable », 403.
- Un signalement déjà traité affiche un bandeau « Traité par Karim B. le 3 oct. : Avertissement » et masque la zone d'actions (lecture seule).

## 🛠️ Tâches

- [ ] Créer `src/pages/moderation/ReportDetailPage.tsx` (lazy, route `/moderation/:reportId`).
- [ ] Créer `src/components/moderation/ReportHeader.tsx`, `ReportMetaLine.tsx`, `ReportActionsCard.tsx`.
- [ ] Créer `src/components/moderation/ProcessedBanner.tsx` pour les signalements clos.
- [ ] Mettre en place `handle.crumb` (« Modération > Signalements > #R-20418 »).
- [ ] Brancher `useReport(id)` et la prise en charge (`claim`).
- [ ] Gérer chargement, 404, 403 et erreur réseau.
- [ ] Disposition responsive et thème sombre.
- [ ] Tests de la page.

## ✔️ Critères d'acceptation

- [ ] Étant donné le signalement R-20418, quand la page s'ouvre, alors le titre, les badges « Urgent » et « En attente » et la mention « motif déclaré » sont visibles.
- [ ] Étant donné un signalement déjà traité, quand la page s'ouvre, alors la zone d'actions est remplacée par le bandeau de traitement.
- [ ] Étant donné un identifiant inconnu, quand l'API répond 404, alors « Signalement introuvable » est affiché.
- [ ] Étant donné un content-manager, quand il ouvre l'URL, alors la page 403 s'affiche.
- [ ] Étant donné une largeur de 1024 px, quand la page s'affiche, alors la colonne droite passe sous le contenu.

## 🧪 Tests à écrire

- [ ] ReportHeader.test.tsx : badges et titre.
- [ ] ReportActionsCard.test.tsx : 5 boutons et mention.
- [ ] ProcessedBanner.test.tsx.
- [ ] ReportDetailPage.test.tsx : chargement/404/403.
- [ ] axe : page de détail.

## ♿ Accessibilité et i18n

- `<h1>` unique ; boutons d'action avec libellé complet (« Bannir l'utilisateur ultras_bcn ») ; la mention de journalisation est liée aux boutons par `aria-describedby`.

## 🔗 Dépendances

À réaliser après : `ADM-WG-03` · `ADM-WG-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6.4
- CDC Global §2.15

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
