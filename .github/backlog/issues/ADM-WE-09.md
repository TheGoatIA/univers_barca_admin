> **ADM-WE-09** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'intérêt du calendrier est d'identifier les dates non couvertes et de programmer à l'avance (CDC Admin §4.4.1). La maquette propose le segment Mois/Semaine et le bouton « + Nouvelle anecdote ».

## ✅ Objectif

Permettre de créer une anecdote directement sur un jour libre, de consulter la vue Semaine et de reprogrammer sans repasser par la liste.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-03` — Calendrier éditorial
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_light.webp?raw=true' width='330' alt='WE-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__desktop_dark.webp?raw=true' width='330' alt='WE-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_light.webp?raw=true' width='330' alt='WE-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-03_calendrier-editorial__tablet_dark.webp?raw=true' width='330' alt='WE-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Calendrier éditorial » · « Planifie les anecdotes à l’avance · 9 jours non couverts ce mois-ci » · « Mois » · « Semaine » · « Nouvelle anecdote » · « Octobre 2026 » · « Histoire » · « Non couvert » · « Lun » · « Mar » · « Mer » · « Jeu » · « Ven » · « Sam » · « Dim » · « Fondation du club » · « Clásico 2009 » · « Eto’o signe » · « Gavi débute »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-08%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22)

#### `WE-01` — Bibliothèque d’anecdotes
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_light.webp?raw=true' width='330' alt='WE-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__desktop_dark.webp?raw=true' width='330' alt='WE-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_light.webp?raw=true' width='330' alt='WE-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-01_bibliotheque-d-anecdotes__tablet_dark.webp?raw=true' width='330' alt='WE-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Anecdotes « Aujourd’hui dans l’histoire » · 212 contenus » · « Calendrier éditorial » · « Nouvelle anecdote » · « Rechercher… » · « Catégorie » · « Statut » · « Langues » · « Mois : octobre » · « Date de diffusion » · « Titre » · « 19 oct. » · « Le but de Koeman à Wembley » · « Histoire du club » · « Planifié » · « 21 oct. » · « Naissance de Gavi » · « 23 oct. » · « Le 5-0 de la Manita » · « En attente de traduction »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-02%5D%22) · [ADM-WE-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-03%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22) · [API-FOOT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-53%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

## 📐 Règles de gestion

- Clic sur une chip « Non couvert » : ouvre /contenu/nouveau?publishOn=2026-10-17 avec la date pré-remplie.
- Vue Semaine : 7 colonnes de la semaine courante avec cartes plus détaillées (titre, catégorie, statut, pastilles de langues) ; le segment Mois/Semaine est mémorisé dans l'URL (&view=week).
- Reprogrammation par glisser-déposer d'une chip vers un autre jour du mois (mutation PATCH publishOn) : uniquement pour les statuts Brouillon, Prêt à publier, Planifié ; refusée pour Publié.
- Un jour ne reçoit qu'une anecdote planifiée ; un dépôt sur un jour occupé propose « Échanger les deux dates » ou annule.
- Chaque reprogrammation est journalisée (HISTORY_CONTENT_RESCHEDULED, avant/après).

## 🔄 Comportement et états

- Glisser-déposer annulable (Échap) et alternative clavier : bouton « Déplacer… » dans le menu contextuel de la chip.
- Mise à jour optimiste avec rollback automatique en cas d'erreur (action à faible risque).
- Erreur 409 : message « Cette date est déjà occupée ».

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PATCH` | `/api/v1/admin/history-content/:id` | Replanifie | {publishOn:'2026-10-24'} | Anecdote |

## 🗄️ Données

- Anecdote.publishOn

## 🛠️ Tâches

- [ ] Ajouter la vue Semaine : src/components/content/WeekView.tsx et le segment Mois/Semaine.
- [ ] Implémenter le drag-and-drop accessible (@dnd-kit/core ou API HTML5) dans CalendarDayCell.
- [ ] Créer useRescheduleAnecdote (optimiste + rollback).
- [ ] Pré-remplir publishOn dans AnecdoteEditorPage depuis les search params.
- [ ] Créer ChipContextMenu.tsx (Radix DropdownMenu : Ouvrir, Déplacer…).
- [ ] Implémenter « Échanger les deux dates ».
- [ ] Auditer la reprogrammation.
- [ ] Ajouter les tests d'accessibilité clavier.

## ✔️ Critères d'acceptation

- [ ] Étant donné le 17 octobre non couvert, quand je clique la chip, alors le formulaire s'ouvre avec 17/10/2026.
- [ ] Étant donné une anecdote Planifiée, quand je la glisse sur le 24, alors sa date devient 24/10/2026.
- [ ] Étant donné une anecdote Publiée, quand je tente de la déplacer, alors l'action est refusée.
- [ ] Étant donné une erreur serveur, quand le déplacement échoue, alors la chip revient à sa place d'origine.

## 🧪 Tests à écrire

- [ ] WeekView.test.tsx
- [ ] useRescheduleAnecdote.test.tsx : rollback.
- [ ] ChipContextMenu.test.tsx : alternative clavier.
- [ ] e2e : drag d'une chip.

## ♿ Accessibilité et i18n

- Déplacement possible au clavier (menu « Déplacer… ») ; annonces aria-live du résultat.

## 🔗 Dépendances

À réaliser après : `ADM-WE-08` · `ADM-WE-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.4.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
