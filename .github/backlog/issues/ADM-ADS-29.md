> **ADM-ADS-29** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-05 : cibles ≥ 44 × 44, anneau de focus 3 px décalé de 2 px, aria-label=« Bannir l'utilisateur », aria-describedby → message d'erreur, raccourcis admin Ctrl K (recherche), J/K (signalement suivant/précédent), A/R (approuver/rejeter). CDC §9.2 : WCAG AA.

## ✅ Objectif

Socle d'accessibilité vérifié automatiquement et manuellement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-05` — Accessibilité
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_light.webp?raw=true' width='330' alt='ZD-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_dark.webp?raw=true' width='330' alt='ZD-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_light.webp?raw=true' width='230' alt='ZD-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_dark.webp?raw=true' width='230' alt='ZD-05 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Qualité · 01 » · « Accessibilité » · « Cibles tactiles ≥ 44 × 44 pt, contrastes WCAG AA dans les deux thèmes, libellés sémantiques pour VoiceOver/TalkBack, navigation clavier complète côté admin. » · « Cibles tactiles » · « Bouton icône 44 × 44 » · « 44 × 44 pt minimum » · « Bouton compact 36 px + zone étendue » · « Rejoindre » · « zone de frappe étendue à 44 pt » · « Espacement entre cibles » · « ≥ 8 px entre deux cibles » · « Focus, lecteur d’écran et clavier » · « Anneau de focus » · « Valider » · « Rechercher » · « contour 3 px · décalage 2 px » · « Libellés sémantiques » · « Semantics(label: « Partager mon résultat ») » · « Semantics(label: « Ajouter à mon agenda ») » · « aria-label=« Bannir l’utilisateur » » · « aria-describedby → message d’erreur » · « Raccourcis admin » · « Ctrl K » · « Recherche globale » · « J / K » · « Signalement suivant / précédent » · « A / R » · « Approuver / rejeter » · « Esc » · « Fermer le panneau »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-26%5D%22) · [ADM-ADS-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-27%5D%22) · [MOB-FND-36](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-36%5D%22) · [MOB-ZA-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-12%5D%22) · [MOB-ZB-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-03%5D%22) · [MOB-ZD-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-11%5D%22) · [MOB-ZD-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-12%5D%22)

## 📐 Règles de gestion

- Focus visible partout (`:focus-visible` outline 3 px secondary, offset 2) ; ordre de tabulation logique ; skip link.
- Raccourcis J/K/A/R activables/désactivables (préférence), jamais actifs dans un champ de saisie.
- jest-axe/vitest-axe sur chaque composant ; Playwright + axe sur pages.
- Messages d'erreur associés aux champs ; icônes seules avec aria-label.

## 🔄 Comportement et états

- Preference `prefers-reduced-motion` respectée.

## 🛠️ Tâches

- [ ] Ajouter `vitest-axe` et `@axe-core/playwright`.
- [ ] Créer `useHotkeys` + `ShortcutsHelpDialog` (touche ?).
- [ ] Ajouter `SkipLink`.
- [ ] Script de checklist manuelle (docs/ACCESSIBILITY.md).
- [ ] Brancher axe dans CI.
- [ ] Corriger les violations existantes.

## ✔️ Critères d'acceptation

- [ ] Étant donné J, alors le signalement suivant est sélectionné (hors champ).
- [ ] Étant donné un champ focalisé, alors J/K n'ont aucun effet.
- [ ] Étant donné la CI, alors zéro violation axe critique.

## 🧪 Tests à écrire

- [ ] Test hook : useHotkeys ignore les champs
- [ ] Test composant : skip link
- [ ] Test axe : composants DS
- [ ] E2E axe : pages principales

## ♿ Accessibilité et i18n

- Documentation des raccourcis

## 🔗 Dépendances

À réaliser après : `ADM-ADS-06` · `ADM-ADS-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
