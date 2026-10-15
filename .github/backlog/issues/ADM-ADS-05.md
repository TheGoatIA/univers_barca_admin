> **ADM-ADS-05** · UX / Ergonomie · Priorité **P1** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZA-05 liste 146 icônes originales (home, gamepad, history, trophy, shirt, users, pin, calendar, bell, user-plus, settings, search, chevrons, check…). L'admin utilise lucide-react ; il faut un composant Icon unifié mappant le jeu de la planche.

## ✅ Objectif

Garantir cohérence visuelle des icônes et un mapping stable nom → composant.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZA-05` — Iconographie
_Module : Fondations_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__desktop_light.webp?raw=true' width='330' alt='ZA-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__desktop_dark.webp?raw=true' width='330' alt='ZA-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__mobile_light.webp?raw=true' width='230' alt='ZA-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-05_iconographie__mobile_dark.webp?raw=true' width='230' alt='ZA-05 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fondations · 05 » · « Iconographie » · « Jeu d’icônes original sur grille 24 px, trait 1,8 px, extrémités arrondies. Aucun élément de marque protégé. » · « Bibliothèque » · « 146 icônes » · « home » · « gamepad » · « history » · « trophy » · « shirt » · « users » · « pin » · « calendar » · « calendar-plus » · « bell » · « bell-off » · « user » · « user-plus » · « user-x » · « user-check » · « settings » · « search » · « chevron-l » · « chevron-r » · « chevron-d » · « chevron-u » · « chevrons-ud » · « check » · « check-circle » · « x-circle »

</details>

## 📐 Règles de gestion

- Grille 24 px, trait 1,8 px, extrémités arrondies : `strokeWidth={1.8}` par défaut.
- Mapping `iconMap.ts` des noms de la planche vers lucide (ou SVG maison pour les absents) ; icônes de la sidebar : tableau de bord, joueurs, matchs, contenu historique, quiz, modération, groupes locaux, utilisateurs, supervision, journal d'audit, notifications, comptes admin, configuration.
- Icône seule : toujours avec `aria-label` ; décorative : aria-hidden.
- Tailles 16/20/24 px.

## 🔄 Comportement et états

- Icône inconnue : fallback visible en dev (warning console), neutre en prod.

## 🛠️ Tâches

- [ ] Créer `src/components/ui/icon.tsx` et `iconMap.ts`.
- [ ] Importer uniquement les icônes utilisées (tree-shaking lucide).
- [ ] SVG maison pour icônes absentes dans `src/assets/icons/`.
- [ ] Page Storybook « Icônes » avec recherche.
- [ ] Remplacer les icônes ad hoc existantes (`navigation.ts`).
- [ ] Test de couverture du mapping.

## ✔️ Critères d'acceptation

- [ ] Étant donné le nom 'bell', alors l'icône Bell 24 px trait 1,8 est rendue.
- [ ] Étant donné une icône seule sans label, alors le lint a11y échoue.
- [ ] Étant donné un nom inconnu en dev, alors un warning est émis.

## 🧪 Tests à écrire

- [ ] Test unitaire : iconMap couvre les noms utilisés
- [ ] Test composant : Icon tailles
- [ ] Test a11y : aria-hidden/label
- [ ] Test snapshot : trait 1,8

## ♿ Accessibilité et i18n

- aria-hidden par défaut pour icônes décoratives

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
