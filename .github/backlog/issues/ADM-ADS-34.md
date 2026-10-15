> **ADM-ADS-34** · UX / Ergonomie · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZE-04 : erreur affichée à la sortie du champ (pas à chaque frappe) avec message précis + comment corriger ; claviers adaptés (e-mail, code 6 chiffres pavé numérique + collage, recherche) ; actions destructives sécurisées ; lisibilité.

## ✅ Objectif

Conventions de formulaire homogènes pour tout l'admin.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZE-04` — Ergonomie — saisie, lisibilité et prévention des erreurs
_Module : Animations et micro-interactions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__desktop_light.webp?raw=true' width='330' alt='ZE-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__desktop_dark.webp?raw=true' width='330' alt='ZE-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__mobile_light.webp?raw=true' width='230' alt='ZE-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-04_ergonomie-saisie-lisibilite-et-prevention-des-erreurs__mobile_dark.webp?raw=true' width='230' alt='ZE-04 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ergonomie · 02 » · « Confort d’usage » · « Clavier, lisibilité, sécurité des actions et feedback : les détails qui donnent la sensation d’une application haut de gamme, fluide et fiable. » · « Univers Barça · Design System v1.1 » · « Mouvement & ergonomie » · « iOS · Android · Tablette » · « Saisie et clavier » · « Le clavier ne masque jamais l’action » · « boris@exemple.com » · « •••••• » · « Se connecter » · « CTA collé au-dessus du clavier · champ défilé en vue » · « Claviers adaptés au champ » · « E-mail » · « @ et .com visibles » · « Code à 6 chiffres » · « pavé numérique · collage SMS » · « Recherche » · « touche « Rechercher » » · « Message » · « saut de ligne, correction auto » · « Validation sans friction » · « boris@exemple » · « Adresse e-mail invalide » · « Erreur affichée à la sortie du champ, pas à chaque frappe. Message précis + comment corriger. » · « Mot de passe solide » · « Lisibilité et accessibilité fine » · « Texte dynamique » · « Jusqu’à 160 % sans coupure de mise en page » · « Plein soleil »

**Composants repérés** : `banner`, `btn`, `input`, `toast`

</details>

**Issues liées sur ce même écran :** [MOB-FND-36](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-36%5D%22)

## 📐 Règles de gestion

- Validation `mode: 'onTouched'` RHF par défaut ; messages précis (« Adresse e-mail invalide — ex. prenom@domaine.fr »).
- inputMode/autocomplete adaptés : email, numeric+one-time-code, search ; `autoComplete` désactivé pour champs sensibles.
- Protection de saisie : confirmation avant fermeture si formulaire modifié ; undo via toast (« Annuler ») quand réversible.
- Actions destructives : ConfirmDialog, justification, type-to-confirm pour les plus graves.

## 🔄 Comportement et états

- Après erreur de soumission : focus sur le premier champ invalide + résumé d'erreurs.

## 🛠️ Tâches

- [ ] Créer `useAppForm` (wrapper RHF+Zod mode onTouched).
- [ ] Composant `ErrorSummary`.
- [ ] Hook `useUnsavedChangesGuard`.
- [ ] Catalogue des messages Zod FR (`zodErrorMap.ts`).
- [ ] Docs « Conventions de formulaire ».
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un e-mail invalide, alors l'erreur n'apparaît qu'après la sortie du champ.
- [ ] Étant donné un envoi invalide, alors le focus va au premier champ en erreur.
- [ ] Étant donné un formulaire modifié, alors la fermeture demande confirmation.

## 🧪 Tests à écrire

- [ ] Test unitaire : zodErrorMap FR
- [ ] Test composant : ErrorSummary
- [ ] Test hook : unsaved guard
- [ ] Test composant : mode onTouched

## ♿ Accessibilité et i18n

- Résumé d'erreurs lié aux champs

## 🔗 Dépendances

À réaliser après : `ADM-ADS-07` · `ADM-ADS-16` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
