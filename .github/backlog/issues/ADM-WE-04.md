> **ADM-WE-04** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Admin §5.2-5.3 définit un composant réutilisable TrilingualTextEditor : trois onglets FR/EN/ES avec pastille verte quand la langue est renseignée et rouge quand elle est vide, bloquant la publication tant que les trois langues ne sont pas complètes. Il est utilisé par les anecdotes (WE-02), les questions (WF-02), les matchs historiques (WD-04) et les fiches joueurs (WC).

## ✅ Objectif

Livrer un composant contrôlé, accessible et testé, avec compteur de caractères et message d'état « Les 3 langues sont complètes — prêt à publier ».

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-02` — Éditeur trilingue et aperçu mobile
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true' width='330' alt='WE-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true' width='330' alt='WE-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true' width='330' alt='WE-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true' width='330' alt='WE-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Le but de Koeman à Wembley » · « Prêt à publier » · « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 » · « Planifier » · « Publier » · « Titre » · « Texte » · « FR · Français » · « EN · English » · « ES · Español » · « Le 20 mai 1992, Ronald Koeman inscrit sur coup franc le but qui offre au Barça sa première Coupe d’Europe des clubs champions, face à la Sampdoria. » · « Les 3 langues sont complètes — prêt à publier » · « 171 / 600 » · « Image d’illustration » · « Choisir dans la médiathèque » · « Date de diffusion » · « 19/10/2026 » · « Catégorie » · « Histoire du club » · « Aperçu mobile » · « Clair » · « Sombre »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-05%5D%22) · [ADM-WE-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-06%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

#### `WF-02` — Éditeur de question trilingue
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_light.webp?raw=true' width='330' alt='WF-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__desktop_dark.webp?raw=true' width='330' alt='WF-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_light.webp?raw=true' width='330' alt='WF-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-02_editeur-de-question-trilingue__tablet_dark.webp?raw=true' width='330' alt='WF-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Éditer » · « Éditer la question » · « ID q-00481 · Niveau 2 · Joueurs » · « Annuler » · « Enregistrer » · « Énoncé » · « FR · Français » · « EN · English » · « ES · Español » · « Qui a marqué le but de la victoire en finale de la Ligue des champions 2015 ? » · « Les 3 langues sont complètes — prêt à publier » · « Réponses (FR) » · « Coche la bonne réponse » · « Neymar Jr » · « EN · ES » · « Luis Suárez » · « Ivan Rakitić » · « Lionel Messi » · « Explication affichée après la réponse » · « Rakitić ouvre le score dès la 4e minute, avant Suárez et Neymar (3-1). » · « Paramètres » · « Niveau de difficulté »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-01%5D%22) · [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-07%5D%22) · [ADM-WF-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-08%5D%22) · [ADM-WF-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-09%5D%22) · [ADM-WF-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-10%5D%22) · [ADM-WF-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-11%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-11%5D%22) · [API-JEUX-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-25%5D%22) · [API-JEUX-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-29%5D%22)

## 📐 Règles de gestion

- Onglets : « FR · Français », « EN · English », « ES · Español » (Radix Tabs) ; pastille verte (renseigné, après trim) / rouge (vide).
- Message sous le champ : vert « Les 3 langues sont complètes — prêt à publier » ou rouge « Publication bloquée : ES manquant(e)(s) » listant les langues manquantes.
- Compteur « 171 / 600 » aligné à droite, passe en rouge au-delà de maxLength ; saisie non bloquée mais validation Zod en erreur.
- Props : label, value {fr,en,es}, onChange, languages=['fr','en','es'], required, maxLength, rows, multiline (Input vs Textarea), placeholder « Saisir le texte… », error.
- Le texte est brut : aucun HTML interprété (sanitation, CDC Admin §6.2) ; coller du texte riche supprime le formatage.

## 🔄 Comportement et états

- Le changement d'onglet conserve la valeur et le focus dans le champ.
- Un onglet en erreur de validation reçoit une pastille rouge et un aria-invalid.
- État désactivé (lecture seule) : champs grisés, pastilles conservées.

## 🛠️ Tâches

- [ ] Créer src/components/shared/TrilingualTextEditor.tsx et son index.
- [ ] Créer src/components/shared/LocaleTab.tsx (pastille + libellé).
- [ ] Créer src/components/shared/CharCounter.tsx.
- [ ] Implémenter completionByLocale via src/lib/translation.ts.
- [ ] Ajouter l'intégration React Hook Form (Controller) et un exemple dans Storybook (états : complet, partiel, vide, erreur, désactivé, clair/sombre).
- [ ] Tester la navigation clavier (flèches entre onglets).
- [ ] Documenter l'API du composant dans docs/ et le README des composants.
- [ ] Exposer onCompletionChange(missingLocales) pour piloter le bouton Publier.

## ✔️ Critères d'acceptation

- [ ] Étant donné FR renseigné et EN/ES vides, quand le composant s'affiche, alors les pastilles EN et ES sont rouges et le message liste « EN, ES manquant(e)(s) ».
- [ ] Étant donné 171 caractères avec maxLength 600, quand je regarde le compteur, alors « 171 / 600 » est affiché en couleur neutre.
- [ ] Étant donné 601 caractères, quand je saisis, alors le compteur devient rouge et une erreur est exposée.
- [ ] Étant donné la valeur collée avec balises HTML, quand je colle, alors seul le texte brut est conservé.

## 🧪 Tests à écrire

- [ ] TrilingualTextEditor.test.tsx : pastilles, message, compteur.
- [ ] TrilingualTextEditor.a11y.test.tsx : rôles tab/tabpanel, axe.
- [ ] CharCounter.test.tsx
- [ ] Story Storybook : tous états.

## ♿ Accessibilité et i18n

- Pastilles accompagnées d'un libellé caché (« Français renseigné »).
- Message d'état en aria-live=polite ; navigation par flèches entre onglets.

## 🔗 Dépendances

À réaliser après : `ADM-WE-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Admin §5.3
- CDC Admin §4.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
