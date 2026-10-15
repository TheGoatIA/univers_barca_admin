> **ADM-WC-22** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Depuis « Importer CSV » de l'onglet Statistiques, WC-11 ouvre un tiroir latéral droit « Importer des statistiques (CSV) » : zone pointillée avec icône d'envoi, nom du fichier « saison-2025-26.csv » et « 42 Ko · 71 lignes détectées », encadré vert « 68 lignes valides · prêtes à importer », encadré rouge « 3 lignes en erreur · ligne 14 : « buts » doit être un entier ; ligne 33 : joueur introuvable ; ligne 52 : saison invalide. », rappel « Colonnes attendues : player_id, season, matches, goals, assists, trophies », lien « Télécharger le modèle » et pied de tiroir « Annuler » / « Importer 68 lignes ». Il sert à la mise à jour de fin de saison (CDC Admin §4.2.2).

## ✅ Objectif

Implémenter le tiroir d'import CSV générique `CsvImportDrawer` et son usage pour les statistiques.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-11` — Import CSV des statistiques
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_light.webp?raw=true' width='330' alt='WC-11 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__desktop_dark.webp?raw=true' width='330' alt='WC-11 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_light.webp?raw=true' width='330' alt='WC-11 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-11_import-csv-des-statistiques__tablet_dark.webp?raw=true' width='330' alt='WC-11 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Importer CSV » · « Ajouter une saison »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-23%5D%22) · [API-FOOT-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-38%5D%22)

## 📐 Règles de gestion

- Le tiroir (Radix Dialog en mode drawer, largeur 480 px, plein écran en tablette portrait) a trois états : dépôt (zone vide + « glisse un fichier ici ou parcours »), analyse (barre de progression), rapport (encadrés valide/erreur + détail).
- Le rapport affiche toujours le nombre de lignes valides (vert) et en erreur (rouge) ; la liste détaillée des erreurs est tronquée à 3 puis « Voir les 47 autres erreurs » (déroulant, max 200) ; téléchargement du rapport d'erreurs en CSV.
- Le bouton « Importer N lignes » n'est actif que s'il existe au moins une ligne valide ; les lignes en erreur sont ignorées (jamais importées) et le libellé indique le nombre exact (« Importer 68 lignes »).
- Le fichier modèle téléchargeable contient les 6 colonnes attendues et deux lignes d'exemple (`ub-0010,2026-27,11,5,4,0`).
- L'import ne modifie rien tant que l'administrateur n'a pas cliqué sur le bouton final ; fermer le tiroir abandonne l'analyse.
- Après import : toast « 68 lignes importées · 3 ignorées », invalidation des stats et de la liste.

## 🛠️ Tâches

- [ ] Créer `src/components/shared/CsvImportDrawer.tsx` (props : `title`, `expectedColumns`, `templateFile`, `parse`, `dryRun`, `commit`, `confirmLabel`).
- [ ] Créer `src/components/shared/FileDropArea.tsx` (bordure pointillée, états survol/erreur) en s'appuyant sur le socle FND `fnd-upload-dropzone-socle`.
- [ ] Créer `src/components/shared/ImportReport.tsx` (encadré vert, encadré rouge, liste dépliable).
- [ ] Créer `src/components/players/StatsImportDrawer.tsx` : instance du tiroir pour les stats.
- [ ] Ajouter le bouton « Télécharger le modèle » (`modele-statistiques.csv`).
- [ ] Gérer états chargement / erreur réseau (« L'analyse a échoué · Réessayer »).
- [ ] Brancher le bouton d'ouverture « Importer CSV » de WC-08.
- [ ] Animations d'ouverture du tiroir (250 ms, `prefers-reduced-motion` respecté).

## ✔️ Critères d'acceptation

- [ ] Étant donné le dépôt de `saison-2025-26.csv`, quand l'analyse se termine, alors « 68 lignes valides · prêtes à importer » et « 3 lignes en erreur » sont affichés.
- [ ] Étant donné 0 ligne valide, quand le rapport s'affiche, alors le bouton d'import est désactivé.
- [ ] Étant donné un clic sur « Télécharger le modèle », quand le fichier est généré, alors il contient les 6 colonnes attendues.
- [ ] Étant donné un clic sur « Annuler », quand le tiroir se ferme, alors aucune donnée n'est modifiée.
- [ ] Étant donné un import réussi, quand le tiroir se ferme, alors le toast mentionne 68 importées et 3 ignorées.

## 🧪 Tests à écrire

- [ ] CsvImportDrawer.test.tsx : trois états.
- [ ] ImportReport.test.tsx : troncature et déroulant.
- [ ] StatsImportDrawer.test.tsx : intitulé du bouton selon les lignes valides.
- [ ] axe : tiroir (focus piégé).
- [ ] Story Storybook des états.

## ♿ Accessibilité et i18n

- Tiroir `role='dialog'` `aria-labelledby` ; rapport annoncé via `role='status'` ; la zone de dépôt est un bouton accessible au clavier.

## 🔗 Dépendances

À réaliser après : `ADM-WC-20` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.2 (PlayerStatsHistoryPage), §9.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
