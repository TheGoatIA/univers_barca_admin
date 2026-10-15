> **ADM-WD-12** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Les matchs historiques non couverts par l'API football sont du contenu éditorial : comme les fiches joueurs (CDC Admin §4.2.1), ils ne doivent être visibles côté mobile qu'une fois leur contexte disponible en FR/EN/ES.

## ✅ Objectif

Implémenter la validation bloquante de publication, l'indicateur de complétion par langue et le filtrage « Historiques » correspondant.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-04` — Saisie d’un match historique
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_light.webp?raw=true' width='330' alt='WD-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_dark.webp?raw=true' width='330' alt='WD-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_light.webp?raw=true' width='330' alt='WD-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_dark.webp?raw=true' width='330' alt='WD-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau match historique » · « Saisie éditoriale pour les rencontres non couvertes par l’API football » · « Annuler » · « Enregistrer » · « Rencontre » · « Équipe domicile » · « FC Barcelone » · « Date » · « 28/05/2011 » · « Compétition » · « Ligue des champions »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-07%5D%22) · [ADM-WD-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-11%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-42%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22)

#### `WD-01` — Liste des matchs
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true' width='330' alt='WD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true' width='330' alt='WD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true' width='330' alt='WD-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true' width='330' alt='WD-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs et compétitions » · « Synchronisation API football : dernière mise à jour il y a 6 min » · « Synchroniser » · « Match historique » · « À venir » · « En direct » · « Historiques » · « Conflits » · « Rechercher… »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-02%5D%22) · [ADM-WD-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-03%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-22%5D%22) · [API-FOOT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-23%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-25%5D%22) · [API-FOOT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-26%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-31%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22)

## 📐 Règles de gestion

- Statuts éditoriaux du match manuel : Brouillon → En attente de traduction (FR renseigné, EN/ES manquants) → Prêt à publier (3 langues) → Publié ; le statut est dérivé de contextI18n et d'un champ publishedAt.
- La publication est refusée côté client et côté API (422 TRANSLATION_INCOMPLETE avec liste des langues manquantes).
- L'onglet « Historiques » affiche une colonne ou un badge de complétion (FR EN ES) pour les matchs source=manual.
- Le contexte est limité à 2 000 caractères par langue (valeur proposée, à aligner avec l'API) ; HTML interdit (texte brut).
- Un match historique publié ne peut pas être supprimé, seulement archivé ; chaque changement de statut produit une entrée d'audit HISTORICAL_MATCH_PUBLISHED / _ARCHIVED.

## 🔄 Comportement et états

- Bouton « Publier » grisé avec infobulle « Complète les 3 langues pour publier » tant que la règle n'est pas satisfaite.
- Après publication : toast et badge « Publié » (vert).
- Archivage : confirmation, le match disparaît de l'app mobile mais reste en base.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/matches/:id/publish` | Publie un match historique (validation i18n serveur) | — | {success:true,data:Match} ou 422 {code:'TRANSLATION_INCOMPLETE',details:{missing:['es']}} |

## 🗄️ Données

- Match.contextI18n, publishedAt, statut éditorial

## 🛠️ Tâches

- [ ] Créer src/lib/translation.ts : getMissingLocales(i18n) et computeEditorialStatus.
- [ ] Ajouter publishMatch() dans matches.api.ts et useMatchPublish.
- [ ] Afficher les pastilles FR/EN/ES dans MatchRow pour source=manual.
- [ ] Ajouter le bouton Publier/Archiver dans MatchHeader (match manuel).
- [ ] Gérer l'erreur 422 TRANSLATION_INCOMPLETE en pointant la langue manquante dans l'éditeur.
- [ ] Ajouter la limite 2 000 caractères avec compteur « 171 / 2000 ».
- [ ] Tester l'affichage du statut dérivé.
- [ ] Documenter la règle dans le README du module matches.

## ✔️ Critères d'acceptation

- [ ] Étant donné ES vide, quand je clique « Publier », alors rien n'est envoyé et l'onglet ES reçoit le focus avec une erreur.
- [ ] Étant donné 3 langues remplies, quand je publie, alors le statut devient « Publié » et une entrée d'audit est créée.
- [ ] Étant donné une réponse 422 TRANSLATION_INCOMPLETE, quand elle survient, alors la langue manquante est nommée dans le message.
- [ ] Étant donné un match publié, quand je le supprime, alors l'option n'existe pas ; seule l'archive est proposée.

## 🧪 Tests à écrire

- [ ] translation.test.ts : getMissingLocales avec chaînes vides ou espaces.
- [ ] computeEditorialStatus.test.ts : 4 statuts.
- [ ] publish flow MSW : 200 et 422.
- [ ] MatchHeader.test.tsx : Publier désactivé si incomplet.

## ♿ Accessibilité et i18n

- Message d'infobulle accessible au focus clavier (aria-describedby).

## 🔗 Dépendances

À réaliser après : `ADM-WD-11` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.1 (modèle de workflow)
- CDC Admin §5.3
- CDC Global §6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
