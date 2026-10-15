> **ADM-WG-24** · Fonctionnel · Priorité **P2** · Taille **S** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-01 expose un bouton « Raccourcis clavier ». Le CDC Admin §9.7 prévoit des touches rapides pour les actions fréquentes, activables/désactivables. Le registre `useHotkeys` et la préférence `shortcutsEnabled` viennent de WB `fn-keyboard-shortcuts`.

## ✅ Objectif

Définir les raccourcis de la file et du détail, l'aide associée et la préférence d'activation.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-01` — File de signalements
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true' width='330' alt='WG-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true' width='330' alt='WG-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true' width='330' alt='WG-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true' width='330' alt='WG-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 18 en attente · 6 urgents · tri par gravité automatique » · « Raccourcis clavier » · « Historique » · « En attente » · « En cours » · « Traités » · « Ignorés » · « Rechercher… » · « Type de contenu » · « Gravité » · « Période » · « Auto-évaluation indicative · décision finale humaine » · « Gravité auto » · « Type » · « Origine » · « Contenu signalé » · « Auteur » · « Motif » · « Il y a » · « Urgent »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-04%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-06%5D%22) · [ADM-WG-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-07%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-25%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-02` — Détail d’un signalement
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true' width='330' alt='WG-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true' width='330' alt='WG-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true' width='330' alt='WG-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true' width='330' alt='WG-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-08%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-10%5D%22) · [ADM-WG-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-11%5D%22) · [ADM-WG-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-12%5D%22) · [ADM-WG-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-14%5D%22) · [ADM-WG-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-15%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- File : `J`/`↓` ligne suivante, `K`/`↑` précédente, `Entrée` ouvrir, `1`-`4` changer d'onglet (En attente, En cours, Traités, Ignorés), `/` focaliser la recherche.
- Détail : `I` Ignorer, `M` Masquer, `V` Avertir (ouvrent la confirmation, jamais d'exécution directe) ; **aucun raccourci pour Suspendre et Bannir** (justification obligatoire, actions lourdes) ; `J`/`K` signalement suivant/précédent, `A` afficher/masquer le contenu sensible, `H` ouvrir l'historique de l'auteur.
- Le bouton « Raccourcis clavier » ouvre `ShortcutsHelpDialog` avec deux sections (File, Détail) et un interrupteur « Activer les raccourcis » (préférence persistée par administrateur).
- Les raccourcis sont ignorés dans les champs de saisie et pendant l'ouverture d'une modale ; en thème Mac les touches utilisent `⌘`.
- Jamais d'action irréversible sans confirmation visible : un raccourci ouvre le dialogue, la validation exige `Entrée` explicite sur le bouton.

## 🛠️ Tâches

- [ ] Enregistrer les scopes `moderation-queue` et `moderation-detail` dans `useHotkeys`.
- [ ] Créer `src/components/moderation/ModerationShortcutsDialog.tsx` (ou compléter `ShortcutsHelpDialog`) avec l'interrupteur.
- [ ] Brancher le bouton « Raccourcis clavier » de `QueueHeader`.
- [ ] Gérer la ligne focalisée (`focusedRowIndex`) dans `ReportsTable`.
- [ ] Ajouter les `Kbd` aux infobulles des boutons d'action.
- [ ] Tests clavier avec `userEvent`.
- [ ] Documenter les raccourcis dans `docs/`.

## ✔️ Critères d'acceptation

- [ ] Étant donné la file, quand j'appuie sur `J` puis `Entrée`, alors le détail du deuxième signalement s'ouvre.
- [ ] Étant donné le détail, quand j'appuie sur `I`, alors la confirmation d'ignorer s'ouvre sans exécuter l'action.
- [ ] Étant donné le détail, quand j'appuie sur `B`, alors rien ne se passe (aucun raccourci de bannissement).
- [ ] Étant donné l'interrupteur désactivé, quand j'appuie sur `J`, alors rien ne se passe.
- [ ] Étant donné le focus dans la recherche, quand j'appuie sur `I`, alors la lettre est saisie normalement.

## 🧪 Tests à écrire

- [ ] useModerationShortcuts.test.tsx : scopes et champs de saisie.
- [ ] ModerationShortcutsDialog.test.tsx : sections et interrupteur.
- [ ] uiStore.test.ts : préférence.
- [ ] e2e : navigation clavier dans la file.
- [ ] Test de l'absence de raccourci de bannissement.

## ♿ Accessibilité et i18n

- Les raccourcis sont optionnels ; l'aide liste les touches avec `<kbd>` ; interrupteur avec `role='switch'`.

## 🔗 Dépendances

À réaliser après : `ADM-WG-04` · `ADM-WG-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.7
- WB fn-keyboard-shortcuts

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
