> **ADM-WE-08** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Route /contenu/calendrier : titre « CALENDRIER ÉDITORIAL », sous-titre « Planifie les anecdotes à l'avance · 9 jours non couverts ce mois-ci », segment « Mois | Semaine », bouton « + Nouvelle anecdote », navigation « ‹ Octobre 2026 › » et légende (Histoire en rose, Joueurs en bleu, Non couvert en pointillés jaunes). Grille de 7 colonnes Lun…Dim avec chips d'anecdotes (« Fondation du club », « Clásico 2009 », « Eto'o signe », « Gavi débute », « 4-0 en LDC », « But de Koeman », « Naissance de Gavi », « Camp Nou »).

## ✅ Objectif

Afficher la planification du mois : chaque jour montre son anecdote ou « Non couvert » ; le jour courant est encadré.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-03` — Calendrier éditorial
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true' width='330' alt='WE-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true' width='330' alt='WE-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true' width='330' alt='WE-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true' width='330' alt='WE-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Calendrier éditorial » · « Planifie les anecdotes à l’avance · 9 jours non couverts ce mois-ci » · « Mois » · « Semaine » · « Nouvelle anecdote » · « Octobre 2026 » · « Histoire » · « Non couvert » · « Lun » · « Mar » · « Mer » · « Jeu » · « Ven » · « Sam » · « Dim » · « Fondation du club » · « Clásico 2009 » · « Eto’o signe » · « Gavi débute »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-09%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22)

## 📐 Règles de gestion

- Calendrier distinct du calendrier des matchs (CDC Admin §4.4.1) ; semaine commençant le lundi, locale fr.
- Chaque chip est colorée par catégorie (Histoire = garnet, Joueurs = navy) et affiche le titre court ; un clic ouvre /contenu/:id ; au plus 2 chips par jour + « +1 autre » au-delà.
- Jours non couverts : chip en pointillés jaunes « Non couvert » sur les jours futurs sans anecdote ; le compteur « 9 jours non couverts ce mois-ci » compte uniquement les jours à venir sans contenu planifié ou publié.
- Le jour courant (15 octobre) a un cadre garnet épais ; les jours hors mois sont grisés (case vide à droite en fin de grille).
- Navigation mois précédent/suivant (flèches et raccourcis ←/→) ; la position est mémorisée dans l'URL (?month=2026-10&view=month).

## 🔄 Comportement et états

- Chargement : grille squelette 5 lignes.
- Mois sans contenu : tous les jours futurs « Non couvert » + bandeau d'aide.
- Erreur : AppError avec Réessayer.
- Hover d'une chip : infobulle avec titre complet, statut et langues.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/history-content` | Contenus du mois pour le calendrier | ?month=2026-10&view=calendar&limit=100 | items[{id,titleI18n,category,publishOn,status}], uncoveredDays:[ISO] |

## 🗄️ Données

- Anecdote.publishOn, category, status

## 🛠️ Tâches

- [ ] Créer src/pages/content/EditorialCalendarPage.tsx et la route /contenu/calendrier.
- [ ] Créer src/components/content/CalendarGrid.tsx (7 colonnes, semaines, jour courant).
- [ ] Créer src/components/content/CalendarDayCell.tsx (chips, « +N autres », non couvert).
- [ ] Créer src/components/content/CalendarLegend.tsx (Histoire, Joueurs, Non couvert).
- [ ] Créer src/lib/calendar.ts : buildMonthMatrix(year, month, weekStartsOn=1) avec date-fns.
- [ ] Créer src/components/shared/MonthNavigator.tsx.
- [ ] Ajouter useEditorialMonth (requête + calcul des jours non couverts).
- [ ] Gérer le thème sombre (tokens de catégories).
- [ ] Ajouter les raccourcis clavier ←/→.

## ✔️ Critères d'acceptation

- [ ] Étant donné octobre 2026, quand la page charge, alors la grille commence le jeudi 1 et la première colonne est Lundi.
- [ ] Étant donné 9 jours futurs sans anecdote, quand l'en-tête s'affiche, alors « 9 jours non couverts ce mois-ci » est visible.
- [ ] Étant donné le 15 octobre, quand la grille s'affiche, alors la case est encadrée comme jour courant.
- [ ] Étant donné un clic sur « But de Koeman », quand je clique, alors /contenu/:id s'ouvre.
- [ ] Étant donné un mois précédent, quand je clique ‹, alors ?month=2026-09 est appliqué.

## 🧪 Tests à écrire

- [ ] calendar.test.ts : matrice octobre 2026 (31 jours, début jeudi).
- [ ] CalendarGrid.test.tsx : jour courant et non couverts.
- [ ] CalendarDayCell.test.tsx : « +1 autre ».
- [ ] MonthNavigator.test.tsx : raccourcis clavier.
- [ ] e2e : navigation mois et ouverture d'une chip.

## ♿ Accessibilité et i18n

- Grille role=grid, cellules avec aria-label « 19 octobre, But de Koeman, Histoire du club, Planifié ».
- Jour non couvert annoncé « non couvert » (pas seulement la couleur).

## 🔗 Dépendances

À réaliser après : `ADM-WE-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.4.1
- CDC Admin §4.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
