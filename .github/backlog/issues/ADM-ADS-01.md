> **ADM-ADS-01** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

La planche ZA-02 liste les couleurs de marque (garnet, navy, gold, gradient hero), surfaces et états, avec valeurs claire/sombre. `src/index.css` contient déjà une base ; il faut la vérifier jeton par jeton et la figer comme source unique.

## ✅ Objectif

Disposer de variables CSS et d'une configuration Tailwind strictement conformes au CDC, contrôlées par test.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZA-02` — Palette de couleurs
_Module : Fondations_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__desktop_light.webp?raw=true' width='330' alt='ZA-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__desktop_dark.webp?raw=true' width='330' alt='ZA-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__mobile_light.webp?raw=true' width='230' alt='ZA-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-02_palette-de-couleurs__mobile_dark.webp?raw=true' width='230' alt='ZA-02 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fondations · 02 » · « Couleurs » · « Palette sobre : grenat et marine en couleurs de marque, or en accent ponctuel. Tous les couples texte/fond respectent WCAG AA dans les deux thèmes. » · « Marque » · « Primary · Garnet » · « --primary » · « Clair #A50044 » · « Sombre #C4265E » · « Secondary · Navy » · « --secondary » · « Clair #004D98 » · « Sombre #4C86C9 » · « Accent · Gold » · « --accent » · « Clair #EDBB00 » · « Sombre #EDBB00 » · « Gradient hero » · « --hero » · « 135° garnet → navy » · « Cartes mises en avant » · « Surfaces et texte » · « Background » · « --bg » · « Clair #FFFFFF » · « Sombre #121218 » · « Surface » · « --surface » · « Clair #F7F7F9 » · « Sombre #1E1E27 » · « Text primary »

</details>

**Issues liées sur ce même écran :** [MOB-ZA-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-01%5D%22) · [MOB-ZA-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-02%5D%22) · [MOB-ZA-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-03%5D%22) · [MOB-ZA-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-08%5D%22) · [MOB-ZA-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-13%5D%22) · [MOB-ZA-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-14%5D%22) · [MOB-ZA-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-15%5D%22) · [MOB-ZA-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-16%5D%22)

## 📐 Règles de gestion

- Marque : --primary #A50044 (sombre #C4265E), --secondary #004D98 (#4C86C9), --accent #EDBB00 (identique) ; --hero dégradé 135° garnet → navy.
- Surfaces/texte : --bg #FFFFFF/#121218, --surface #F7F7F9/#1E1E27, --text #1A1A2E/#F2F2F5, --text-2 #595959/#A0A0AE.
- États : success #1E8E5A/#3CBE82, error #D64545/#E86C6C, warning #E0A400/#F0C24B ; info = secondary.
- Tous les couples texte/fond respectent WCAG AA (≥ 4,5:1 texte, ≥ 3:1 composants) dans les deux thèmes.
- Thème porté par `data-theme` sur <html> ; persistance localStorage `ub-ui`.

## 🔄 Comportement et états

- Option « Système » suit prefers-color-scheme en direct.
- Aucune couleur hexadécimale en dur dans les composants (règle ESLint/grep CI).

## 🛠️ Tâches

- [ ] Auditer `src/index.css` et `tailwind.config.ts` face au CDC §5.1 ; corriger les écarts.
- [ ] Ajouter jetons manquants (--primary-ink, --primary-press, --surface-2/3, --line*, --scrim, --shadow-*).
- [ ] Script `scripts/check-contrast.ts` calculant les ratios AA des couples déclarés.
- [ ] Règle de lint interdisant `#xxxxxx` dans `src/**/*.tsx`.
- [ ] Composant `ThemeToggle` (clair/sombre/système) avec icône Sun/Moon.
- [ ] Page Storybook « Couleurs » listant swatches + ratios.
- [ ] Documenter la correspondance Flutter ↔ CSS.

## ✔️ Critères d'acceptation

- [ ] Étant donné le thème sombre, alors --bg vaut #121218 et --primary #C4265E.
- [ ] Étant donné le script de contraste, alors aucun couple n'est sous AA.
- [ ] Étant donné « Système » et un OS sombre, alors data-theme=dark.
- [ ] Étant donné un hex en dur ajouté, alors le lint échoue.

## 🧪 Tests à écrire

- [ ] Test unitaire : script contraste
- [ ] Test composant : ThemeToggle persiste
- [ ] Test unitaire : applyTheme système
- [ ] Test snapshot : variables CSS exposées

## ♿ Accessibilité et i18n

- Ratios AA documentés
- Libellés ThemeToggle « Thème clair/sombre/système »

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
