> **ADM-WE-06** · UX / Ergonomie · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC Admin §4.4 exige un aperçu du rendu tel qu'il apparaîtra dans l'application mobile avant publication, dans les deux thèmes. La maquette montre une carte « Aperçu mobile » avec un segment « Clair | Sombre » et un cadre de téléphone (9:41) contenant la carte « AUJOURD'HUI DANS L'HISTOIRE » : pastille date « oct. 19 », titre « Koeman offre la première Coupe d'Europe », texte tronqué avec « … ».

## ✅ Objectif

Reproduire fidèlement la carte du dashboard mobile en temps réel selon la saisie, dans la langue et le thème choisis.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-02` — Éditeur trilingue et aperçu mobile
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true' width='330' alt='WE-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true' width='330' alt='WE-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true' width='330' alt='WE-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true' width='330' alt='WE-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Le but de Koeman à Wembley » · « Prêt à publier » · « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 » · « Planifier » · « Publier » · « Titre » · « Texte » · « FR · Français » · « EN · English » · « ES · Español » · « Le 20 mai 1992, Ronald Koeman inscrit sur coup franc le but qui offre au Barça sa première Coupe d’Europe des clubs champions, face à la Sampdoria. » · « Les 3 langues sont complètes — prêt à publier » · « 171 / 600 » · « Image d’illustration » · « Choisir dans la médiathèque » · « Date de diffusion » · « 19/10/2026 » · « Catégorie » · « Histoire du club » · « Aperçu mobile » · « Clair » · « Sombre »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WE-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-05%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

## 📐 Règles de gestion

- L'aperçu se met à jour en temps réel (debounce 150 ms) depuis l'état du formulaire sans appel réseau.
- Bascule Clair/Sombre locale à l'aperçu (n'affecte pas le thème de l'admin) en utilisant data-theme sur le conteneur de l'aperçu ; les tokens sont les mêmes que le mobile (garnet #A50044 / #C4265E, navy #004D98 / #4C86C9, fond #FFFFFF / #121218).
- Sélecteur de langue de l'aperçu (FR par défaut, EN, ES) ; si la langue est vide, afficher « Traduction manquante » en italique au lieu de l'espace vide.
- Le texte est tronqué à 3 lignes avec ellipsis comme sur le mobile ; image d'illustration affichée en en-tête si imageKey présent.
- Le cadre téléphone fait 280 px de large environ, barre d'état fixe « 9:41 ».
- L'aperçu est en lecture seule et n'exécute aucun HTML (texte échappé).

## 🔄 Comportement et états

- Transition de thème : fondu 150 ms (framer-motion), désactivé si prefers-reduced-motion.
- Sans titre ni texte : placeholder grisé « Aperçu disponible dès la saisie du titre ».
- En écran étroit (< 1024 px) l'aperçu passe sous le formulaire.

## 🛠️ Tâches

- [ ] Créer src/components/content/MobilePreview.tsx (cadre + carte).
- [ ] Créer src/components/content/PhoneFrame.tsx (bordure arrondie, barre d'état).
- [ ] Créer src/components/content/HistoryCardPreview.tsx imitant la carte mobile (pastille date, titre, extrait).
- [ ] Créer src/components/shared/SegmentedControl.tsx (Clair/Sombre, Radix ToggleGroup).
- [ ] Définir src/styles/preview-tokens.css (variables scopées [data-preview-theme]).
- [ ] Brancher useWatch du formulaire avec debounce 150 ms.
- [ ] Ajouter le sélecteur de langue de l'aperçu.
- [ ] Gérer le repli lorsqu'une langue est vide.
- [ ] Ajouter des stories Storybook (clair/sombre, texte long, image).

## ✔️ Critères d'acceptation

- [ ] Étant donné un titre saisi, quand je tape, alors l'aperçu reflète le titre en moins de 300 ms.
- [ ] Étant donné la bascule Sombre, quand je clique, alors seule la carte d'aperçu passe en thème sombre.
- [ ] Étant donné un texte de 600 caractères, quand l'aperçu s'affiche, alors il est tronqué à 3 lignes.
- [ ] Étant donné la langue ES vide, quand je choisis ES, alors « Traduction manquante » est affiché.

## 🧪 Tests à écrire

- [ ] MobilePreview.test.tsx : mise à jour et bascule thème.
- [ ] HistoryCardPreview.test.tsx : troncature et repli de langue.
- [ ] SegmentedControl.test.tsx
- [ ] Storybook visual : deux thèmes.

## ♿ Accessibilité et i18n

- Le cadre d'aperçu est marqué role=img avec aria-label « Aperçu de la carte sur mobile » ; contenu masqué aux lecteurs d'écran en doublon (aria-hidden sur le clone).
- Contrastes AA vérifiés dans les deux thèmes.

## 🔗 Dépendances

À réaliser après : `ADM-WE-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.4
- CDC Admin §5.1
- CDC Flutter §9.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
