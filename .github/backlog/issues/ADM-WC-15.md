> **ADM-WC-15** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

La validation du formulaire d'identité doit être identique côté client (Zod) et côté API (Joi) pour éviter des divergences (CDC Admin §1.1 : schémas partageables et cohérents avec les DTO backend). WC-05 impose des champs structurés ; le serveur renvoie les erreurs au format `{success:false,error:{code,message,details,traceId}}`.

## ✅ Objectif

Centraliser les règles de validation de l'identité et le rattachement des erreurs serveur aux champs.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-05` — Fiche joueur — identité
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_light.webp?raw=true' width='330' alt='WC-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__desktop_dark.webp?raw=true' width='330' alt='WC-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_light.webp?raw=true' width='330' alt='WC-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-05_fiche-joueur-identite__tablet_dark.webp?raw=true' width='330' alt='WC-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Nom complet » · « Lamine Yamal Nasraoui Ebana »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-01%5D%22) · [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-14%5D%22) · [ADM-WC-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-16%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [ADM-WC-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-27%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-01%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-39%5D%22)

## 📐 Règles de gestion

- `fullName` obligatoire, 2 à 120 caractères ; `shortName` obligatoire, 2 à 60 caractères (affiché dans les listes) ; `position` obligatoire ; `shirtNumber` optionnel entier 1-99 ; `birthDate` obligatoire, passé, âge entre 15 et 60 ans pour un joueur actif.
- `nationality` code ISO alpha-2 valide ; `heightCm` entier 150-220 si renseigné ; `strongFoot` ∈ {left,right,both} ; `externalRef` format `api-fb:<chiffres>` ou vide.
- Unicité : deux joueurs actifs ne peuvent pas partager le même `shirtNumber` — contrôle serveur (409 `SHIRT_NUMBER_TAKEN`) avec message « Le numéro 10 est déjà attribué à Lamine Yamal » ; le client n'effectue qu'une vérification indicative.
- Les erreurs serveur 422/409 sont mappées sur les champs via `details[].path` grâce à `applyServerErrors(form, error)` (WA `error-mapping-toasts`).
- Les messages Zod sont en français via la table d'erreurs partagée (FND `fnd-formats-intl-zod-fr`) ; aucune chaîne anglaise par défaut ne doit fuiter.

## 🛠️ Tâches

- [ ] Compléter `src/lib/schemas/player.schema.ts` : `playerIdentitySchema` avec `superRefine` pour l'âge selon `isActive`.
- [ ] Créer `src/lib/forms.ts` : `applyServerErrors` (si non fourni par WA) et `focusFirstError(form)`.
- [ ] Ajouter les messages d'erreur dans le catalogue FR (`fr.players.validation.*`).
- [ ] Mettre en place `mode: 'onBlur'` et `reValidateMode: 'onChange'` sur le formulaire RHF.
- [ ] Gérer le cas 409 `SHIRT_NUMBER_TAKEN` avec lien vers la fiche en conflit.
- [ ] Test de parité : un fichier de cas partagés `tests/fixtures/player-validation-cases.json` à rejouer côté API.
- [ ] Documenter les règles dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un nom complet d'un caractère, quand je quitte le champ, alors « Le nom complet doit contenir au moins 2 caractères » s'affiche.
- [ ] Étant donné une date de naissance dans le futur, quand je valide, alors l'erreur « La date de naissance doit être passée » apparaît.
- [ ] Étant donné une réponse 409 `SHIRT_NUMBER_TAKEN`, quand elle arrive, alors l'erreur est affichée sous le champ Numéro avec le nom du détenteur.
- [ ] Étant donné `externalRef='abc'`, quand je valide, alors le format attendu `api-fb:386828` est rappelé.
- [ ] Étant donné plusieurs erreurs, quand je soumets, alors le focus va au premier champ en erreur.

## 🧪 Tests à écrire

- [ ] player.schema.test.ts : bornes numéro, taille, âge.
- [ ] forms.test.ts : `applyServerErrors` sur chemins imbriqués.
- [ ] IdentityForm.test.tsx : focus premier champ invalide.
- [ ] MSW : 409 SHIRT_NUMBER_TAKEN.
- [ ] Test de parité avec les cas partagés.

## ♿ Accessibilité et i18n

- Messages liés par `aria-describedby`, `aria-invalid='true'`, annonce du nombre d'erreurs via `role='alert'` à la soumission.

## 🔗 Dépendances

À réaliser après : `ADM-WC-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §1.1, §9.2
- CDC Backend §11.6 (409, 422)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
