> **ADM-WD-11** · Écran · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Route /matchs/historique/nouveau (titre « NOUVEAU MATCH HISTORIQUE », sous-titre « Saisie éditoriale pour les rencontres non couvertes par l'API football »). Colonne gauche : carte « Rencontre » (Équipe domicile « FC Barcelone », Équipe extérieur « Manchester United », Date « 28/05/2011 », Score « 3 – 1 », Compétition « Ligue des champions », Stade « Wembley, Londres ») et carte « Buteurs et événements ». Colonne droite : « Contexte du match * » trilingue FR/EN/ES avec alerte de publication bloquée.

## ✅ Objectif

Livrer le formulaire de création d'un match source=manual avec tableau d'événements et éditeur trilingue du contexte.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-04` — Saisie d’un match historique
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_light.webp?raw=true' width='330' alt='WD-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__desktop_dark.webp?raw=true' width='330' alt='WD-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_light.webp?raw=true' width='330' alt='WD-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-04_saisie-d-un-match-historique__tablet_dark.webp?raw=true' width='330' alt='WD-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Nouveau match historique » · « Saisie éditoriale pour les rencontres non couvertes par l’API football » · « Annuler » · « Enregistrer » · « Rencontre » · « Équipe domicile » · « FC Barcelone » · « Date » · « 28/05/2011 » · « Compétition » · « Ligue des champions »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-07%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-42%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22)

## 📐 Règles de gestion

- Champs obligatoires : équipe domicile, équipe extérieur (différentes), date (JJ/MM/AAAA, ≤ aujourd'hui), compétition, score ; le stade est facultatif ; le match est créé avec status=finished et source=manual.
- Buteurs et événements : tableau Minute / Type / Joueur (ex. 27' But Pedro ; 34' But (adv.) Rooney ; 54' But Messi ; 69' But Villa), bouton « + Ajouter » (rose), corbeille par ligne ; tri par minute.
- Contexte du match : TrilingualTextEditor avec pastilles de complétion (verte si renseigné, rouge si vide) sur FR · Français, EN · English, ES · Español ; texte d'aide « Saisir le texte… ».
- Tant que les trois langues ne sont pas renseignées : message rouge « Publication bloquée : ES manquant(e)(s) » sous l'éditeur et encart jaune « Publication bloquée tant que le contexte n'est pas saisi dans les 3 langues. ».
- Boutons « Annuler » (confirme si modifié) et « Enregistrer » (coche) : l'enregistrement en brouillon reste possible, la publication visible côté mobile exige les 3 langues.

## 🔄 Comportement et états

- Squelette uniquement pour les listes d'équipes/compétitions chargées depuis l'API.
- Succès : toast « Match historique enregistré », redirection vers /matchs/:id.
- Erreur 422 : erreurs sous les champs, onglet de langue en erreur marqué d'une pastille rouge.
- Doublon probable (même date + mêmes équipes) : avertissement « Un match existe déjà à cette date » avec lien.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/matches` | Crée un match historique manuel | {homeTeamId,awayTeamId,competitionId,kickoffAt,scoreHome,scoreAway,venue?,contextI18n:{fr,en,es},events:[...],source:'manual'} | {success:true,data:Match} |

## 🗄️ Données

- Match (source:'manual', status:'finished', contextI18n)
- Team, Competition (listes de référence)

## 🛠️ Tâches

- [ ] Créer src/pages/matches/HistoricalMatchPage.tsx et la route /matchs/historique/nouveau (avant /matchs/:id dans le routeur).
- [ ] Créer src/components/matches/HistoricalMatchForm.tsx (RHF + zodResolver(historicalMatchSchema)).
- [ ] Créer src/components/shared/TrilingualTextEditor.tsx (si absent : voir l'issue we-composant-editeur-trilingue du groupe WE ; cet écran en est consommateur).
- [ ] Réutiliser EventsTable et EventDialog de ui-compositions-evenements en mode « brouillon local ».
- [ ] Créer src/components/shared/TeamSelect.tsx et CompetitionSelect.tsx (GET /admin/teams, /admin/matches/competitions).
- [ ] Implémenter le champ Score « 3 – 1 » avec masque (deux entiers) et parsing.
- [ ] Implémenter la détection de doublon (GET /admin/matches?from=&to=&q=).
- [ ] Ajouter useBlocker pour la sortie avec modifications.

## ✔️ Critères d'acceptation

- [ ] Étant donné le formulaire vide, quand je clique « Enregistrer », alors les champs obligatoires affichent « Champ obligatoire » et rien n'est envoyé.
- [ ] Étant donné FR et EN saisis mais pas ES, quand l'écran s'affiche, alors la pastille ES est rouge et le message « Publication bloquée : ES manquant(e)(s) » est visible.
- [ ] Étant donné domicile = extérieur, quand je valide, alors une erreur « Les deux équipes doivent être différentes » s'affiche.
- [ ] Étant donné une date future, quand je valide, alors l'erreur « La date doit être passée » s'affiche.

## 🧪 Tests à écrire

- [ ] HistoricalMatchForm.test.tsx : validations obligatoires.
- [ ] historicalMatchSchema.test.ts : équipes distinctes, date passée, score entier.
- [ ] TrilingualTextEditor.test.tsx : pastilles de complétion.
- [ ] e2e : création du match du 28/05/2011 puis affichage dans l'onglet Historiques.

## ♿ Accessibilité et i18n

- Onglets de langue avec libellé complet « Français, renseigné » / « Espagnol, manquant » (pas seulement la couleur).
- Date : champ texte masqué + sélecteur accessible au clavier.

## 🔗 Dépendances

À réaliser après : `ADM-WD-01` · `ADM-WD-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.3
- CDC Admin §5.3
- CDC Global §6 (i18n complète)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
