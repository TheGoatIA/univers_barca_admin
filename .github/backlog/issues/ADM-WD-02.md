> **ADM-WD-02** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Écran d'entrée du module (route /matchs). La maquette montre le titre « MATCHS ET COMPÉTITIONS », la ligne « Synchronisation API football : dernière mise à jour il y a 6 min », le bouton secondaire « Synchroniser », le bouton principal « + Match historique » et quatre onglets avec compteurs (À venir 24, En direct 0, Historiques 1842, Conflits 1 en pastille rouge).

## ✅ Objectif

Livrer la page MatchesListPage : en-tête, onglets à compteurs, tableau paginé (DataTable) avec logos d'équipes, statut et source.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-01` — Liste des matchs
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true' width='330' alt='WD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true' width='330' alt='WD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true' width='330' alt='WD-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true' width='330' alt='WD-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs et compétitions » · « Synchronisation API football : dernière mise à jour il y a 6 min » · « Synchroniser » · « Match historique » · « À venir » · « En direct » · « Historiques » · « Conflits » · « Rechercher… »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-03%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-22%5D%22) · [API-FOOT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-23%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-25%5D%22) · [API-FOOT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-26%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-31%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22)

## 📐 Règles de gestion

- Colonnes : Match (écusson + nom domicile – écusson + nom extérieur), Compétition (ex. « Liga · J11 », « Ligue des champions », « Coupe du Roi »), Coup d'envoi (UTC+2) au format « Sam. 24 oct. 21:00 » dans le fuseau du navigateur (date-fns, locale fr), Statut, Source, Score (« 3 – 0 » ou « — » si non joué).
- Statuts affichés par badge : Programmé (bleu), En direct, Terminé (vert), Reporté (jaune), Annulé ; Sources : « API football » (vert), « Édition manuelle » (rose) et « Conflit » (rouge) quand syncConflict est renseigné.
- Tri serveur sur Match, Compétition, Coup d'envoi, Statut, Source, Score (icône de tri dans l'en-tête) ; pagination serveur « 1–6 sur 24 » avec boutons 1, 2, 3, …, 25, précédent/suivant ; 6 lignes par page par défaut (limit paramétrable 6/10/25).
- Onglet « Historiques » = matchs terminés ou source manuelle (1842 dans la maquette) ; onglet « Conflits » = matchs avec syncConflict non nul, pastille rouge numérique.
- Le bouton « + Match historique » mène à /matchs/historique/nouveau ; la ligne entière est cliquable vers /matchs/:id (le match en conflit mène directement à /matchs/:id/conflit via le lien « Résoudre → » de la bannière).

## 🔄 Comportement et états

- Chargement : 6 lignes squelette (Skeleton) ; compteurs d'onglets en squelette court.
- Vide : EmptyState « Aucun match ne correspond à vos filtres » + bouton « Réinitialiser les filtres ».
- Erreur : AppError avec bouton « Réessayer » et traceId.
- Bannière jaune sous les filtres tant qu'au moins un conflit existe : « 1 conflit de synchronisation nécessite ton arbitrage : l'API football a modifié le coup d'envoi de Bayern – Barça. » + lien « Résoudre → ».
- Rafraîchissement automatique des compteurs toutes les 30 s (refetchInterval) sur l'onglet En direct.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/matches` | Liste filtrée et paginée | ?tab=upcoming&page=1&limit=6&sort=kickoffAt:asc | items[], total, counts:{upcoming,live,history,conflicts} |

## 🗄️ Données

- Collection matches (status, source, kickoffAt, syncConflict)
- Collection teams (nom, écusson) et competitions (nom, code)

## 🛠️ Tâches

- [ ] Créer src/pages/matches/MatchesListPage.tsx et l'enregistrer dans implemented['/matchs'] de src/App.tsx.
- [ ] Créer src/components/matches/MatchesTabs.tsx (Radix Tabs) avec compteurs et pastille d'alerte.
- [ ] Créer src/components/matches/MatchRow.tsx : écusson FCB/équipes via Avatar avec repli sur trigramme (FCB, RMA, BAY, ATM, VIL, GIR, RSO).
- [ ] Créer src/components/matches/MatchStatusBadge.tsx et MatchSourceBadge.tsx (variants CVA, tokens success/warning/danger/info).
- [ ] Étendre src/components/shared/DataTable.tsx : tri serveur contrôlé (sorting, onSortingChange) et pagination serveur ; garder la compatibilité de PlayersPage.
- [ ] Créer src/components/shared/Pagination.tsx (1, 2, 3, …, N) si absent et l'utiliser ici.
- [ ] Créer src/components/matches/ConflictBanner.tsx avec lien vers la résolution.
- [ ] Ajouter formatKickoff(date) dans src/lib/utils.ts (UTC+2/CEST affiché explicitement dans l'en-tête de colonne selon le fuseau).
- [ ] Brancher le thème sombre : vérifier contrastes des badges avec les tokens.

## ✔️ Critères d'acceptation

- [ ] Étant donné 24 matchs à venir, quand j'ouvre /matchs, alors l'onglet « À venir » est actif et affiche « 1–6 sur 24 ».
- [ ] Étant donné un match avec syncConflict, quand la liste s'affiche, alors sa source est « Conflit » en rouge et la bannière jaune est visible.
- [ ] Étant donné un clic sur l'en-tête « Coup d'envoi », quand le tri change, alors la requête est relancée avec sort=kickoffAt et la page revient à 1.
- [ ] Étant donné un match terminé 3–0, quand la ligne s'affiche, alors le score « 3 – 0 » apparaît alignée à droite ; un match non joué affiche « — ».
- [ ] Étant donné un utilisateur moderator, quand il ouvre /matchs, alors il est redirigé vers /403.

## 🧪 Tests à écrire

- [ ] MatchesListPage.test.tsx : affiche 6 lignes et la pagination depuis un mock MSW.
- [ ] MatchStatusBadge.test.tsx : mapping des 5 statuts vers libellé/variant.
- [ ] MatchesTabs.test.tsx : la pastille Conflits s'affiche seulement si compteur > 0.
- [ ] DataTable.test.tsx : tri serveur déclenche onSortingChange.
- [ ] e2e Playwright matches-list.spec.ts : clic sur une ligne ouvre la fiche.

## ♿ Accessibilité et i18n

- Tableau avec <caption> masqué « Liste des matchs », en-têtes scope=col, aria-sort sur la colonne triée.
- Onglets Radix : rôle tablist, compteurs lus (« Conflits, 1 »).
- Badges de statut : texte + point coloré, jamais la couleur seule.
- Libellés FR en dur (pas d'i18n admin).

## 🔗 Dépendances

À réaliser après : `ADM-WD-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.3
- CDC Admin §7 (DataTable)
- CDC Admin §4.10

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
