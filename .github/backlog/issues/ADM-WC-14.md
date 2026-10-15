> **ADM-WC-14** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

L'onglet Identité de WC-05 est un formulaire en grille deux colonnes : Nom complet « Lamine Yamal Nasraoui Ebana », Poste « Ailier droit (AD) », Nom affiché « Lamine Yamal », Numéro « 10 », Date de naissance « 13/07/2007 » (icône calendrier), Pied fort « Gauche », Nationalité « Espagne », Club précédent (Guess the Player) « La Masia », puis sur une ligne Taille « 180 cm », Statut « Actif » et ID externe API football « api-fb:386828 » (police monospace).

## ✅ Objectif

Implémenter l'onglet Identité fidèle à la maquette, branché sur le formulaire RHF de la fiche.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-05` — Fiche joueur — identité
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true' width='330' alt='WC-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true' width='330' alt='WC-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true' width='330' alt='WC-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true' width='330' alt='WC-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Nom complet » · « Lamine Yamal Nasraoui Ebana »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-15%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22)

## 📐 Règles de gestion

- Champs : `fullName` (texte), `position` (select 10 postes, libellé « Ailier droit (AD) »), `shortName`, `shirtNumber` (entier 1-99), `birthDate` (sélecteur de date, format d'affichage JJ/MM/AAAA), `strongFoot` (Gauche, Droit, Les deux), `nationality` (select pays, recherche intégrée), `previousClub` (select/combobox avec saisie libre, valeur « La Masia »), `heightCm` (champ numérique avec suffixe « cm »), `isActive` (select « Actif » / « Ancien joueur »), `externalRef` (monospace, préfixe `api-fb:`).
- Le champ `externalRef` est en lecture seule si la fiche est synchronisée avec l'API football (indicateur « Synchronisé ») ; modifiable uniquement par super-admin.
- Libellé du champ club : « Club précédent (Guess the Player) » car cette valeur alimente le jeu quotidien (indice) ; aide contextuelle sous le champ « Utilisé comme indice dans Guess the Player ».
- Le titre de l'en-tête (nom affiché, sous-ligne N°/poste/ID) se met à jour en direct à la saisie (`watch`).
- Les erreurs de validation s'affichent sous le champ en rouge, liées par `aria-describedby`, et l'onglet reçoit un point rouge si une erreur existe.

## 🛠️ Tâches

- [ ] Créer `src/components/players/IdentityForm.tsx` avec les 11 champs (composants `Input`, `Select`, `DatePicker`, `Combobox` du design system ADS).
- [ ] Créer `src/components/shared/DatePicker.tsx` (Radix Popover + calendrier date-fns locale fr) si absent.
- [ ] Créer `src/components/shared/CountrySelect.tsx` (liste `countries.ts`, recherche).
- [ ] Créer `src/components/shared/UnitInput.tsx` (suffixe « cm »).
- [ ] Charger la liste des clubs précédents distincts via `GET /admin/players/meta` (à créer) ou repli sur liste statique.
- [ ] Appliquer la grille responsive : 2 colonnes ≥ 900 px, 1 colonne en dessous ; la ligne Taille/Statut/ID passe en 3 colonnes ≥ 900 px.
- [ ] Câbler l'initialisation depuis `usePlayer(id)` et la remise à zéro après enregistrement.
- [ ] Tests de rendu des champs et des états erreur/désactivé.

## ✔️ Critères d'acceptation

- [ ] Étant donné la fiche de Lamine Yamal, quand l'onglet s'affiche, alors les 11 champs contiennent les valeurs de la maquette (13/07/2007, Espagne, La Masia, 180 cm, api-fb:386828).
- [ ] Étant donné une modification du nom affiché, quand je saisis, alors le titre de l'en-tête est mis à jour sans enregistrement.
- [ ] Étant donné un numéro « 100 », quand je quitte le champ, alors l'erreur « Le numéro doit être compris entre 1 et 99 » s'affiche.
- [ ] Étant donné un content-manager, quand il ouvre la fiche, alors l'ID externe est en lecture seule.
- [ ] Étant donné le thème sombre, quand les champs s'affichent, alors les bordures et textes respectent les tokens.

## 🧪 Tests à écrire

- [ ] IdentityForm.test.tsx : valeurs initiales et édition.
- [ ] DatePicker.test.tsx : saisie manuelle JJ/MM/AAAA et sélection.
- [ ] CountrySelect.test.tsx : recherche « Esp » → Espagne.
- [ ] IdentityForm.test.tsx : champ lecture seule selon rôle.
- [ ] axe : aucun défaut sur l'onglet.

## ♿ Accessibilité et i18n

- Chaque champ a un `<label>` explicite ; l'astérisque des champs requis est accompagné de « (obligatoire) » masqué ; autocomplétion désactivée sur les champs métier.
- Libellés FR centralisés (`fr.players.identity.*`).

## 🔗 Dépendances

À réaliser après : `ADM-WC-13` · `ADM-WC-15` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2, §4.2.2
- CDC Backend §3.2 (Player)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
