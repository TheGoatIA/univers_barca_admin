> **ADM-FND-19** · Tests · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le CDC Admin §9.2 exige navigation clavier complète, contrastes WCAG AA dans les deux thèmes, libellés explicites sur les actions par icône et messages d'erreur associés aux champs ; §7.6 impose la vérification clavier avant livraison d'un module. ADS `accessibilite-clavier-focus` installe `vitest-axe` et `@axe-core/playwright` et fournit la checklist manuelle ; cette issue ajoute la politique de blocage en CI et l'outillage de suivi.

## ✅ Objectif

Faire de l'accessibilité un critère bloquant et mesurable à chaque pull request.

## 📐 Règles de gestion

- Politique : zéro violation de niveau `serious` ou `critical` sur les routes de référence (login, 403, 404, tableau de bord, liste joueurs, fiche joueur (4 onglets), file de validation IA, file de signalements, détail signalement) en thème clair ET sombre ; les niveaux `moderate`/`minor` sont reportés en avertissement.
- Test Playwright `tests/e2e/a11y.spec.ts` paramétré par route et thème, avec `AxeBuilder` (`wcag2a`, `wcag2aa`, `wcag21aa`, `best-practice`) ; les modales sont testées ouvertes (publication, archivage groupé, rejet de question, bannissement).
- Test de parcours clavier : pour chaque module, un scénario `tabThrough` vérifie l'ordre de tabulation, l'absence de piège de focus, la fermeture par `Échap` des modales et la restauration du focus.
- Exceptions : `a11y-exceptions.json` (règle, sélecteur, justification, date d'expiration ≤ 90 jours, issue liée) ; le test échoue si une exception expire ; aucune exception sur les contrastes.
- Rapport : `playwright-report` + résumé Markdown (violations par route) publié dans le résumé de job ; tendance suivie dans `docs/ACCESSIBILITY.md`.
- Vérifications complémentaires automatisées : `prefers-reduced-motion` respecté (animations > 0,3 s désactivées), zoom 200 % sans perte de contenu (viewport 720×450 équivalent), `lang='fr'` présent, un seul `<h1>` par page.

## 🛠️ Tâches

- [ ] Créer `tests/e2e/a11y.spec.ts` et `tests/e2e/helpers/axe.ts` (`expectNoA11yViolations(page, {include, exclude})`).
- [ ] Créer `tests/e2e/keyboard.spec.ts` (parcours Tab/Maj+Tab/Échap par module).
- [ ] Créer `a11y-exceptions.json` et `scripts/check-a11y-exceptions.mjs` (expiration).
- [ ] Ajouter l'étape à `admin-ci.yml` (job e2e) avec artefact de rapport.
- [ ] Ajouter `vitest-axe` dans les tests de composants des modules (au moins un test par composant partagé).
- [ ] Mettre à jour `docs/ACCESSIBILITY.md` (politique, comment lire un rapport, comment demander une exception).
- [ ] Ajouter un test de `prefers-reduced-motion` et de zoom 200 %.
- [ ] Ajouter une case « a11y vérifiée au clavier » au gabarit de pull request.

## ✔️ Critères d'acceptation

- [ ] Étant donné une route avec un bouton sans nom accessible, quand le test axe s'exécute, alors la CI échoue en `serious`.
- [ ] Étant donné une exception expirée dans `a11y-exceptions.json`, quand le script s'exécute, alors la CI échoue.
- [ ] Étant donné la modale de publication ouverte, quand `Échap` est pressé, alors elle se ferme et le focus revient sur « Publier ».
- [ ] Étant donné `prefers-reduced-motion: reduce`, quand une page s'affiche, alors aucune animation de plus de 0,3 s n'est active.
- [ ] Étant donné le thème sombre, quand axe s'exécute, alors aucune violation de contraste n'est signalée.

## 🧪 Tests à écrire

- [ ] a11y.spec.ts (9 routes × 2 thèmes).
- [ ] keyboard.spec.ts (un parcours par module).
- [ ] check-a11y-exceptions.test.mjs : expiration.
- [ ] vitest-axe sur les composants partagés.
- [ ] Test du zoom 200 %.

## ♿ Accessibilité et i18n

- Cible WCAG 2.1 AA ; les rapports listent la règle, l'impact et le sélecteur pour faciliter la correction.

## 📚 Références

- CDC Admin §9.2, §7.6
- ADS accessibilite-clavier-focus

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
