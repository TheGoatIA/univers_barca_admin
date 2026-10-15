> **ADM-ADS** · Épopée · Phase 0 — Socle technique

## 🎯 Objectif

Implémenter dans l'admin React/Tailwind le design system Univers Barça (planches ZA à ZE) : tokens partagés avec le mobile, composants shadcn-style sur primitives Radix, documentés dans Storybook et testés, afin que chaque écran métier se compose sans CSS ad hoc.

## 📦 Périmètre

- Tokens : couleurs, typographie, espacements, rayons, ombres, mouvement, icônes (ZA-01 à ZA-05, ZD-06)
- Composants de base : bouton, champ, select, contrôles de sélection, onglets, stepper, badges, avatars, cartes, navigation (ZB-01 à ZB-06)
- Retours et états : dialog/sheet, toast, tooltip, skeleton/spinner/progression, empty/error, bannières, graphiques (ZC-01 à ZC-04)
- Composants back-office : DataTable, StatusBadge, TrilingualTextEditor, MediaUploader, ModerationActionMenu, ConfirmDialog, KPI, recherche globale (ZD-03)
- Responsive, accessibilité, mouvement, ergonomie (ZD-04, ZD-05, ZD-06, ZE-01 à ZE-04)
- Storybook et tests visuels/accessibilité des composants

## 🚫 Hors périmètre

- Composants de jeu, carte, chat Flutter (ZD-01, ZD-02) : uniquement référencés pour la cohérence des tokens
- Implémentation des écrans métier (autres groupes)
- Gestes mobiles (zone du pouce) : adaptés seulement à l'usage tablette

## 📚 Références

- CDC Global §4.5 (charte et design system)
- CDC Admin §5.1 à §5.5, §9.2, §9.3, §9.4, §12.2
- Maquettes ZA-01…ZE-04 (planches design system)

## 🧩 Issues de l'épopée (37)

{{CHILDREN}}
