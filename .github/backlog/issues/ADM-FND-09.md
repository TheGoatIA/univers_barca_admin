> **ADM-FND-09** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`uiStore` persiste `theme` (`light|dark|system`) sous la clé `ub-ui` et `applyTheme` pose `data-theme` sur `<html>` ; `index.html` embarque un script **inline** anti-flash. Or la politique CSP de `docker/nginx.conf` (`default-src 'self'`, sans `script-src 'unsafe-inline'`) bloque tout script inline : en production le script anti-flash est ignoré et l'écran clignote en clair avant de passer en sombre. De plus, `applyTheme` n'écoute pas les changements de préférence système. CDC Admin §5.2 : bascule persistée en local et appliquée via `data-theme`.

## ✅ Objectif

Fiabiliser l'application du thème (avant le premier rendu, en suivant le système, sans violer la CSP).

## 📐 Règles de gestion

- Remplacer le script inline par un fichier statique `public/theme-init.js` chargé par `<script src='/theme-init.js'>` (autorisé par `script-src 'self'`) placé avant la feuille de styles ; il lit `localStorage['ub-ui']` (try/catch) et pose `data-theme` + `color-scheme` + `<meta name='theme-color'>`.
- `ThemeProvider` (`src/app/ThemeProvider.tsx`) : applique `data-theme` à partir de `uiStore.theme`, écoute `matchMedia('(prefers-color-scheme: dark)')` quand le mode vaut `system` et met à jour dynamiquement ; nettoyage des listeners au démontage.
- Trois choix dans l'interface (clair, sombre, système) : composant `ThemeToggle` fourni par ADS ; la valeur par défaut est `system` ; l'icône de la barre supérieure (soleil des maquettes) alterne clair/sombre en un clic et le menu utilisateur offre « Système ».
- Transition douce : `transition: background-color 150 ms, color 150 ms` désactivée avec `prefers-reduced-motion` et pendant le tout premier rendu (classe `no-transition` retirée après le premier frame) pour éviter l'animation initiale.
- Les graphiques Recharts et les composants à couleurs JS lisent les variables CSS (`getComputedStyle`) et se redessinent au changement de thème (événement `ub:theme-change`).
- Pages d'authentification et d'erreur globales : thème appliqué même hors layout ; impression : thème clair forcé (`@media print`).

## 🛠️ Tâches

- [ ] Créer `public/theme-init.js` et le référencer dans `index.html` (supprimer le script inline).
- [ ] Créer `src/app/ThemeProvider.tsx` et l'intégrer dans `src/main.tsx` ; refactorer `applyTheme` dans `src/lib/theme.ts`.
- [ ] Ajouter l'événement `ub:theme-change` et le hook `useThemeTokens()` (lecture des variables CSS pour Recharts).
- [ ] Ajouter `color-scheme: light dark` dans `src/index.css` et la classe `no-transition`.
- [ ] Mettre à jour `docker/nginx.conf` pour servir `theme-init.js` sans cache long (`Cache-Control: no-cache`) et vérifier la CSP.
- [ ] Écrire le test Playwright « aucun flash » (capture du `data-theme` avant le premier paint via `page.addInitScript` + CSP stricte).
- [ ] Documenter le mécanisme dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné le thème sombre mémorisé, quand la page se charge en production (CSP active), alors `data-theme='dark'` est posé avant le premier rendu.
- [ ] Étant donné le mode « Système », quand le système passe en sombre, alors l'interface bascule sans rechargement.
- [ ] Étant donné `prefers-reduced-motion`, quand le thème change, alors aucune transition n'est animée.
- [ ] Étant donné `localStorage` indisponible (navigation privée), quand l'application démarre, alors le thème système est utilisé sans erreur.
- [ ] Étant donné un graphique Recharts, quand le thème change, alors ses couleurs sont mises à jour.

## 🧪 Tests à écrire

- [ ] theme.test.ts : `applyTheme` et écouteur `matchMedia`.
- [ ] ThemeProvider.test.tsx : suivi du système et nettoyage.
- [ ] theme-init.js : test unitaire dans jsdom (localStorage vide/corrompu).
- [ ] Playwright : aucun flash avec CSP.
- [ ] useThemeTokens.test.tsx.

## ♿ Accessibilité et i18n

- Le changement de thème est annoncé (`aria-live`) ; contrastes AA vérifiés dans les deux thèmes (ADS `tokens-couleurs`).

## 📚 Références

- CDC Admin §5.1, §5.2
- docker/nginx.conf (CSP)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
