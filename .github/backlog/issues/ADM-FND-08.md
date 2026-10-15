> **ADM-FND-08** · UX / Ergonomie · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le CDC Admin §9.3 vise prioritairement le poste de travail et prévoit une adaptation tablette (mise en page fluide, tables avec défilement horizontal contrôlé) pour la consultation ou la modération ponctuelle. Chaque maquette existe en variante `tablet` (clair/sombre) pour tous les écrans. ADS `responsive-breakpoints` définit les points de rupture (tablette 600, desktop 1100) et `useBreakpoint` ; WB refond la sidebar et la barre supérieure. Cette issue assemble le comportement du shell.

## ✅ Objectif

Faire de `MainLayout` un shell fluide qui fonctionne de 768 à 1440 px sans défilement horizontal de page.

## 📐 Règles de gestion

- Desktop ≥ 1100 px : sidebar fixe 248 px + contenu ; tablette 600-1099 px : sidebar rétractée en rail d'icônes (72 px) avec infobulles, dépliable en tiroir (overlay + voile) via le bouton menu de la barre supérieure ; < 600 px : tiroir plein, message « Cet outil est optimisé pour tablette et poste de travail » (aucune parité mobile visée).
- Le contenu occupe `max-w-[1440px]` centré ; les gouttières passent de 24 px (desktop) à 16 px (tablette) ; la barre supérieure reste collante (`sticky top-0`) avec la recherche réduite à une icône sous 900 px (le raccourci Ctrl K reste actif).
- Tables : conteneur `overflow-x-auto` avec ombre latérale indiquant le défilement, première colonne figée (`sticky left-0`) et colonnes secondaires masquables par `hideBelow` (ex. « Langues », « Mis à jour » sous 900 px) ; jamais de défilement horizontal de la page entière.
- Mises en page à deux colonnes (fiche joueur, éditeur de question, détail de signalement) : la colonne latérale passe sous le contenu sous 1100 px.
- Cibles tactiles ≥ 40 px sur tablette (boutons, cases, menus), espacement des lignes de table porté à 48 px ; états `hover` non indispensables (équivalent focus/appui).
- Orientation : bascule portrait/paysage sans perte d'état (aucun reset de formulaire) ; état de la sidebar (rail/déplié) mémorisé dans `uiStore.sidebarCollapsed`.

## 🛠️ Tâches

- [ ] Refondre `src/components/layout/MainLayout.tsx` : grille CSS (`grid-cols`) pilotée par `useBreakpoint()` (ADS).
- [ ] Créer `src/components/layout/SidebarRail.tsx` et `SidebarDrawer.tsx` (Radix Dialog) en cohérence avec WB `layout-sidebar-refonte`.
- [ ] Créer `src/components/layout/MobileMenuButton.tsx` dans le Header.
- [ ] Créer `src/components/shared/ScrollShadow.tsx` (ombres de défilement) et la prop `stickyFirstColumn` du `DataTable`.
- [ ] Créer `src/lib/responsive.ts` (`hideBelow`, breakpoints exportés) ; classes utilitaires Tailwind `tablet:` / `desktop:`.
- [ ] Passer en revue les écrans existants (login, dashboard, joueurs) aux largeurs 768, 1024 et 1440.
- [ ] Ajouter les projets Playwright `tablet-landscape` (1024×768) et `tablet-portrait` (768×1024).
- [ ] Vérifier l'absence de défilement horizontal de page par un test automatisé (`document.scrollingElement.scrollWidth <= innerWidth`).

## ✔️ Critères d'acceptation

- [ ] Étant donné une largeur de 1024 px, quand la page s'affiche, alors la sidebar est un rail de 72 px et le contenu occupe le reste.
- [ ] Étant donné un clic sur le bouton menu en tablette, quand le tiroir s'ouvre, alors le focus est piégé et `Échap` le ferme.
- [ ] Étant donné une table de 8 colonnes en 768 px, quand elle s'affiche, alors seul le conteneur de la table défile horizontalement.
- [ ] Étant donné une largeur de 480 px, quand la page s'affiche, alors le message d'optimisation tablette est visible.
- [ ] Étant donné un passage portrait → paysage, quand l'orientation change, alors le formulaire en cours conserve ses valeurs.

## 🧪 Tests à écrire

- [ ] MainLayout.test.tsx : modes desktop/tablette/mobile (matchMedia mocké).
- [ ] SidebarDrawer.test.tsx : focus et fermeture.
- [ ] DataTable.test.tsx : colonne figée et `hideBelow`.
- [ ] Playwright viewport : `scrollWidth <= innerWidth` sur 5 routes.
- [ ] Captures tablette clair/sombre comparées aux maquettes.

## ♿ Accessibilité et i18n

- Bouton menu avec `aria-expanded` et `aria-controls` ; le rail conserve les libellés accessibles (`aria-label`) ; cibles ≥ 40 px (WCAG 2.5.8).

## 📚 Références

- CDC Admin §9.3
- ADS responsive-breakpoints
- WB layout-sidebar-refonte

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
