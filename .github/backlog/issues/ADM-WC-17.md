> **ADM-WC-17** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La colonne de droite des fiches affiche deux cartes : « Workflow de publication » (1 Brouillon « Visible uniquement dans l'admin », 2 En attente de traduction « FR rempli, EN/ES manquants », 3 Prête à publier « 3 langues complètes », 4 Publiée « Visible dans l'app mobile », 5 Archivée « Retirée de la circulation ») et « Checklist » (Identité, Biographie FR, Biographie EN, Biographie ES, Statistiques saison, Photo). L'étape courante est cerclée de grenat ; les étapes passées sont vertes avec coche.

## ✅ Objectif

Implémenter le stepper vertical et la checklist, calculés en direct depuis l'état du formulaire.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-05` — Fiche joueur — identité
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true' width='330' alt='WC-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true' width='330' alt='WC-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true' width='330' alt='WC-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true' width='330' alt='WC-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Nom complet » · « Lamine Yamal Nasraoui Ebana »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-14%5D%22) · [ADM-WC-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-15%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22)

#### `WC-06` — Fiche joueur — biographie incomplète
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_light.webp?raw=true' width='330' alt='WC-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_dark.webp?raw=true' width='330' alt='WC-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_light.webp?raw=true' width='330' alt='WC-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_dark.webp?raw=true' width='330' alt='WC-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Publication bloquée » · « · la biographie doit être renseignée en FR, EN et ES. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-18%5D%22) · [ADM-WC-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-19%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-36%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WC-07` — Fiche joueur — biographie trilingue complète
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_light.webp?raw=true' width='330' alt='WC-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_dark.webp?raw=true' width='330' alt='WC-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_light.webp?raw=true' width='330' alt='WC-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_dark.webp?raw=true' width='330' alt='WC-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « Prête à publier » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « FR · Français » · « EN · English »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-18%5D%22) · [ADM-WC-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-19%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-08%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-36%5D%22)

#### `WC-08` — Fiche joueur — statistiques par saison
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true' width='330' alt='WC-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true' width='330' alt='WC-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true' width='330' alt='WC-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true' width='330' alt='WC-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Importer CSV » · « Ajouter une saison »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-20%5D%22) · [ADM-WC-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-21%5D%22) · [ADM-WC-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-23%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-38%5D%22)

#### `WC-09` — Fiche joueur — photo (upload)
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_light.webp?raw=true' width='330' alt='WC-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__desktop_dark.webp?raw=true' width='330' alt='WC-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_light.webp?raw=true' width='330' alt='WC-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-09_fiche-joueur-photo-upload__tablet_dark.webp?raw=true' width='330' alt='WC-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Photo / illustration » · « Glisse une image ici »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-24%5D%22) · [ADM-WC-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-25%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22) · [API-FOOT-56](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-56%5D%22)

## 📐 Règles de gestion

- Étape courante dérivée du statut serveur ET de l'état local non enregistré : l'aperçu local peut anticiper (« 3 Prête à publier ») mais le badge d'en-tête ne change qu'après enregistrement.
- Checklist : Identité = champs obligatoires valides ; Biographie FR/EN/ES = texte non vide après trim ; Statistiques saison = au moins une saison saisie ; Photo = `photoKey` présent ; icône coche verte (complet) ou croix grise (manquant).
- Seuls l'identité et la biographie trilingue conditionnent la publication (CDC Admin §4.2) ; « Statistiques saison » et « Photo » sont recommandés (non bloquants) — décision à confirmer avec le propriétaire car la maquette les affiche dans la même liste.
- Cliquer un item de la checklist ouvre l'onglet concerné (`?onglet=biographie` etc.) et place le focus sur le premier champ manquant (ex. onglet ES).
- Pour une fiche publiée, l'étape 4 est cerclée ; pour une fiche archivée l'étape 5 ; les étapes 1 à 3 restent cochées.
- Les libellés et sous-textes des cinq étapes proviennent d'un dictionnaire unique (`PUBLICATION_STEPS`).

## 🛠️ Tâches

- [ ] Créer `src/components/players/PublicationWorkflowCard.tsx` (stepper vertical, ligne de liaison, états `done|current|upcoming`).
- [ ] Créer `src/components/players/CompletionChecklist.tsx` (items cliquables, icônes `CheckCircle2` / `XCircle`).
- [ ] Créer `src/lib/players.ts` : `publicationStep(status)`, `computeChecklist(formValues, stats, photoKey)`.
- [ ] Abonner la checklist au formulaire par `useWatch` (re-rendu limité) et au cache stats/photo.
- [ ] Implémenter la navigation par item + focus programmatique (`form.setFocus`).
- [ ] Gérer l'affichage replié sous le formulaire en tablette (accordéon facultatif).
- [ ] Stories Storybook des 5 statuts.
- [ ] Tests unitaires du calcul.

## ✔️ Critères d'acceptation

- [ ] Étant donné un statut `awaiting-translation`, quand la carte s'affiche, alors l'étape 2 est cerclée et l'étape 1 est cochée.
- [ ] Étant donné une biographie EN vide, quand la checklist s'affiche, alors « Biographie EN » porte une croix grise.
- [ ] Étant donné un clic sur « Biographie ES », quand l'onglet s'ouvre, alors le curseur est dans le champ ES.
- [ ] Étant donné les trois langues complètes saisies mais non enregistrées, quand je regarde le workflow, alors l'étape 3 est prévisualisée mais le badge d'en-tête reste « En attente de traduction ».
- [ ] Étant donné une fiche archivée, quand la carte s'affiche, alors l'étape 5 est active.

## 🧪 Tests à écrire

- [ ] PublicationWorkflowCard.test.tsx : 5 statuts.
- [ ] CompletionChecklist.test.tsx : items et navigation.
- [ ] players.test.ts : `computeChecklist` cas limites (espaces seuls).
- [ ] axe : listes ordonnées et statuts.
- [ ] Story visuelle clair/sombre.

## ♿ Accessibilité et i18n

- Stepper en `<ol>` avec `aria-current='step'` ; checklist en `<ul>` ; état de chaque item exprimé en texte masqué (« complet » / « manquant »).

## 🔗 Dépendances

À réaliser après : `ADM-WC-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
