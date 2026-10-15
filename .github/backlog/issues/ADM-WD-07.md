> **ADM-WD-07** · Écran · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

La fiche match comporte les onglets Compositions et Événements (CDC Admin §4.3 : « score, compositions, événements »). Les données sont embarquées dans le document Match (lineups[], events[]). Les événements (buts, cartons, remplacements) sont aussi saisis dans l'écran de match historique (tableau « Minute / Type / Joueur » avec bouton « + Ajouter » et corbeille).

## ✅ Objectif

Afficher et éditer les compositions (titulaires/remplaçants) et la chronologie d'événements, avec composant tableau partagé avec WD-04.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-02` — Détail d’un match
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true' width='330' alt='WD-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true' width='330' alt='WD-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true' width='330' alt='WD-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true' width='330' alt='WD-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça – Real Madrid » · « Programmé » · « Liga · Journée 11 · Sam. 24 oct. 2026 · 21:00 CEST · Estadi Olímpic » · « Modifier » · « Saisir le résultat » · « Informations » · « Compositions » · « Événements » · « Historique des modifications »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-05%5D%22) · [ADM-WD-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-06%5D%22) · [ADM-WD-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-08%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

#### `WD-04` — Saisie d’un match historique
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_light.webp?raw=true' width='330' alt='WD-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_dark.webp?raw=true' width='330' alt='WD-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_light.webp?raw=true' width='330' alt='WD-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_dark.webp?raw=true' width='330' alt='WD-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau match historique » · « Saisie éditoriale pour les rencontres non couvertes par l’API football » · « Annuler » · « Enregistrer » · « Rencontre » · « Équipe domicile » · « FC Barcelone » · « Date » · « 28/05/2011 » · « Compétition » · « Ligue des champions »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-11%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-42%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22)

## 📐 Règles de gestion

- Compositions : deux colonnes (FC Barcelone / adversaire), onze titulaires (isStarter=true) puis remplaçants, chaque ligne = joueur (recherche dans GET /players), poste (GB, DD, DC, DG, MD, MC, MO, AD, AG, BU) et numéro.
- Événements : tableau Minute (entier 0–130, affiché « 27' »), Type (But, But (adv.), Carton jaune, Carton rouge, Remplacement), Joueur ; tri par minute croissante ; suppression par icône corbeille avec confirmation ; ajout par modale « + Ajouter ».
- Contraintes : 11 titulaires maximum par équipe ; un joueur ne peut apparaître qu'une fois dans la composition ; un but nécessite un joueur ; « But (adv.) » accepte un nom libre (joueur adverse non référencé).
- Le score affiché en en-tête est recalculé et comparé aux buts saisis : avertissement non bloquant « Le score (3–1) ne correspond pas aux buts saisis (3–2) ».
- Lecture seule pour les matchs source=api en direct ou terminés (les données API font foi) : un bandeau « Données fournies par l'API football » désactive l'édition sauf action explicite « Corriger manuellement » (génère un conflit potentiel).

## 🔄 Comportement et états

- Chargement par onglet (squelette tableau) ; données chargées une seule fois avec le match.
- Vide : « Aucune composition renseignée » / « Aucun événement » avec bouton d'ajout pour les matchs manuels.
- Succès d'ajout : ligne insérée à sa place chronologique avec mise en évidence 1 s.
- Erreur de sauvegarde : la ligne revient à son état précédent (rollback) et un toast explique l'échec.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PATCH` | `/api/v1/admin/matches/:id` | Remplace lineups[] et/ou events[] | {lineups?:[{playerId,teamId,isStarter,position}],events?:[{minute,type,playerId,detailI18n}],expectedUpdatedAt} | Match mis à jour |

## 🗄️ Données

- Match.lineups[], Match.events[] (embarqués)
- Player (recherche par fullName)

## 🛠️ Tâches

- [ ] Créer src/components/matches/LineupsTab.tsx (deux colonnes, titulaires/remplaçants).
- [ ] Créer src/components/matches/EventsTab.tsx basé sur src/components/matches/EventsTable.tsx (partagé avec WD-04).
- [ ] Créer src/components/matches/EventDialog.tsx (RHF, champs Minute, Type, Joueur).
- [ ] Créer src/components/shared/PlayerCombobox.tsx (recherche GET /players?q=, debounce 300 ms).
- [ ] Créer le schéma Zod eventSchema et lineupSchema (limites 11 titulaires, minute 0–130).
- [ ] Implémenter le recalcul du score déduit des événements (computeScoreFromEvents) et l'avertissement.
- [ ] Ajouter le mode « Corriger manuellement » pour les matchs API avec confirmation.
- [ ] Gérer le rollback optimiste sur suppression d'événement (action à faible risque, CDC Admin §2.5).

## ✔️ Critères d'acceptation

- [ ] Étant donné un match manuel, quand j'ajoute un but à la 27' pour Pedro, alors la ligne « 27' · But · Pedro » apparaît triée par minute.
- [ ] Étant donné 11 titulaires déjà saisis, quand j'ajoute un 12e, alors l'ajout est refusé avec un message explicite.
- [ ] Étant donné un score 3–1 et 4 buts saisis, quand l'onglet s'affiche, alors l'avertissement de cohérence est visible mais n'empêche pas l'enregistrement.
- [ ] Étant donné un match API terminé, quand j'ouvre l'onglet Événements, alors l'édition est désactivée tant que « Corriger manuellement » n'est pas confirmé.

## 🧪 Tests à écrire

- [ ] eventSchema.test.ts : minute 131 refusée, joueur obligatoire pour un but.
- [ ] computeScoreFromEvents.test.ts : buts adverses comptés pour l'extérieur.
- [ ] EventsTab.test.tsx : tri par minute et suppression avec rollback.
- [ ] LineupsTab.test.tsx : limite de 11 titulaires.
- [ ] PlayerCombobox.test.tsx : debounce et sélection.

## ♿ Accessibilité et i18n

- Corbeille avec aria-label « Supprimer l'événement 27' But Pedro ».
- Tableau navigable au clavier ; annonce de l'ajout via aria-live.

## 🔗 Dépendances

À réaliser après : `ADM-WD-05` · `ADM-WD-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.3
- CDC Backend §3.2 (MatchEvent, MatchLineup)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
