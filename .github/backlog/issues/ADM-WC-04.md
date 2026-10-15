> **ADM-WC-04** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

La page `src/pages/players/PlayersPage.tsx` ne montre qu'une recherche et cinq colonnes. La maquette WC-01 (content-manager/super-admin « Camille Durand ») présente le titre « JOUEURS », le sous-titre « 71 fiches · 64 publiées · 7 incomplètes », trois boutons (« Importer CSV », « Exporter », « Nouveau joueur » grenat), une barre de filtres et une table riche avec avatars, âge, pastilles de langue, badges de statut, date relative et actions de ligne.

## ✅ Objectif

Reproduire fidèlement l'écran WC-01 (clair et sombre, desktop et tablette) en réutilisant le `DataTable` étendu du design system (ADS `datatable`).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-01` — Liste des joueurs
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_light.webp?raw=true' width='330' alt='WC-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__desktop_dark.webp?raw=true' width='330' alt='WC-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_light.webp?raw=true' width='330' alt='WC-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-01_liste-des-joueurs__tablet_dark.webp?raw=true' width='330' alt='WC-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-05%5D%22) · [ADM-WC-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-06%5D%22) · [ADM-WC-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-11%5D%22) · [ADM-WC-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-12%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-06%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-40%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-54](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-54%5D%22)

## 📐 Règles de gestion

- Colonnes (ordre maquette) : Joueur (avatar rond 40 px, nom en gras, sous-ligne « N°10 · 19 ans »), Poste, Nationalité, Langues (3 pastilles FR/EN/ES), Statut (badge), Mis à jour (date relative), actions (icône crayon + menu ⋮).
- Pastille de langue : verte `bg-success/15 text-success` si la biographie dans cette langue est renseignée, rouge `bg-danger/15 text-danger` sinon ; l'ordre est toujours FR, EN, ES ; libellé accessible « Biographie en anglais : manquante ».
- Badge de statut avec point coloré : Publié (vert), Prêt (bleu), Traduction (jaune), Brouillon (gris), Archivé (gris clair, sans point) ; réutilise `StatusBadge` en ajoutant les variantes `ready` et `awaiting-translation`.
- Date « Mis à jour » : relative sous 24 h (« il y a 4 min », « hier »), sinon « 12 oct. », « 28 sept. », « 1 juil. » (format `d MMM` français, année ajoutée si ≠ année courante).
- Sous-titre alimenté par `GET /admin/players/counters` (`total`, `published`, `incomplete`) et non par le nombre de lignes de la page ; pluriel géré (« 1 fiche · 1 publiée · 0 incomplète »).
- Clic sur la ligne ou le crayon → `/joueurs/:id` ; le menu ⋮ expose « Ouvrir la fiche », « Publier » (si statut `ready`), « Archiver » / « Désarchiver », « Copier l'ID joueur ».

## 🔄 Comportement et états

- Chargement : squelettes de ligne ; erreur réseau : bandeau ErrorState au-dessus de la table avec bouton « Réessayer ».
- Le crayon et le menu ⋮ restent atteignables au clavier (Tab) et ne déclenchent pas la navigation de la ligne.
- Les avatars sont des images `photoUrl` (variante vignette) avec repli sur initiales colorées.

## 🛠️ Tâches

- [ ] Créer `src/components/players/PlayersTable.tsx`, `PlayerCell.tsx` (avatar + nom + sous-ligne), `LangDots.tsx` (partagé avec ADS si déjà livré), `PlayerRowActions.tsx`.
- [ ] Refondre `src/pages/players/PlayersPage.tsx` : `PageHeader` avec titre/compteurs et trois boutons d'action alignés à droite ; zone de filtres ; table.
- [ ] Créer `src/components/players/PlayersHeaderStats.tsx` (texte de sous-titre + squelette de 200 px pendant le chargement).
- [ ] Ajouter les variantes `ready` / `awaiting-translation` à `src/components/shared/StatusBadge.tsx` avec tokens de couleur du design system.
- [ ] Créer `src/lib/dates.ts` : `formatRelativeFr(date)` et `formatShortDateFr(date)` (date-fns, locale `fr`) — partagé avec WD si présent.
- [ ] Gérer le chargement (6 lignes squelette de 56 px de haut), l'erreur (`ErrorState` avec « Réessayer ») et le vide (voir `ui-liste-etats-vides`).
- [ ] Appliquer le rendu tablette (≥ 600 px) : colonnes « Langues » et « Mis à jour » masquées sous 900 px, défilement horizontal contrôlé de la table.
- [ ] Mettre à jour `src/lib/navigation.ts` : libeller l'entrée « Joueurs » dans la rubrique CONTENU de la sidebar refondue (WB).

## ✔️ Critères d'acceptation

- [ ] Étant donné 71 fiches dont 64 publiées, quand la page se charge, alors le sous-titre affiche « 71 fiches · 64 publiées · 7 incomplètes ».
- [ ] Étant donné un joueur dont la biographie ES est vide, quand sa ligne s'affiche, alors la pastille ES est rouge et les pastilles FR/EN sont vertes.
- [ ] Étant donné un joueur mis à jour il y a 4 minutes, quand la ligne s'affiche, alors « il y a 4 min » apparaît dans la colonne « Mis à jour ».
- [ ] Étant donné un clic sur une ligne, quand la navigation s'effectue, alors l'URL devient `/joueurs/<id>`.
- [ ] Étant donné le thème sombre, quand la page s'affiche, alors les badges et pastilles restent lisibles (contraste AA).

## 🧪 Tests à écrire

- [ ] PlayersTable.test.tsx : rendu des 7 colonnes et des 10 lignes de la maquette.
- [ ] LangDots.test.tsx : couleurs et libellés accessibles par langue.
- [ ] StatusBadge.test.tsx : 5 statuts × libellé.
- [ ] dates.test.ts : « il y a 4 min », « hier », « 12 oct. », « 1 juil. ».
- [ ] PlayersPage.test.tsx : squelette pendant le chargement puis lignes ; erreur → bouton Réessayer.
- [ ] Story Storybook `PlayersTable` (clair/sombre).

## ♿ Accessibilité et i18n

- Table avec `<caption class='sr-only'>Liste des joueurs</caption>` et `aria-sort` sur les en-têtes triables.
- Icônes crayon/⋮ avec `aria-label` « Éditer Lamine Yamal » / « Plus d'actions pour Lamine Yamal ».
- Libellés FR centralisés (`src/i18n/fr.ts` si FND livré).

## 🔗 Dépendances

À réaliser après : `ADM-WC-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.2 (PlayersListPage), §9.4, §9.7
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
