> **ADM-ADS-32** · UX / Ergonomie · Priorité **P2** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZE-02 : chronologies par écran (Accueil 1 900 ms : en-tête 0–400, cartes 60–700…). Côté admin, seule une adaptation sobre s'applique : apparition échelonnée des cartes KPI du tableau de bord et transition de route.

## ✅ Objectif

Définir une chorégraphie sobre et mesurable pour le tableau de bord et les pages.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZE-02` — Chorégraphie des écrans clés
_Module : Animations et micro-interactions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__desktop_light.webp?raw=true' width='330' alt='ZE-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__desktop_dark.webp?raw=true' width='330' alt='ZE-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__mobile_light.webp?raw=true' width='230' alt='ZE-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-02_choregraphie-des-ecrans-cles__mobile_dark.webp?raw=true' width='230' alt='ZE-02 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Mouvement · 02 » · « Chorégraphies d’écran » · « Au-delà des composants, chaque écran clé a une séquence orchestrée : qui entre, quand, comment. Les chronologies ci-dessous sont les spécifications transmises au développement Flutter (AnimationController + Interval). » · « Univers Barça · Design System v1.1 » · « Mouvement & ergonomie » · « iOS · Android · Tablette » · « Chronologies » · « Accueil · première ouverture » · « 1900 ms » · « En-tête » · « 0–400 » · « Carte prochain match » · « 60–700 » · « Compte à rebours (pulsation) » · « 700–1200 » · « Cartes jeux » · « 180–700 » · « Histoire du jour » · « 260–700 » · « Streak + flamme » · « 340–900 » · « Fantasy » · « 420–700 » · « Bulle IA : apparition + respiration » · « 900–1900 » · « Victoire à Guess the Player » · « 2600 ms » · « Dernière rangée : retournement des cellules » · « 0–500 » · « Flash vert + vibration »

</details>

**Issues liées sur ce même écran :** [MOB-FND-27](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-27%5D%22)

## 📐 Règles de gestion

- Stagger de 60 ms entre cartes KPI (opacité+translateY 8 px, 280 ms), durée totale < 600 ms.
- Transition de route : fondu 180 ms, aucun blocage du contenu.
- Désactivé en reduced-motion et en test.
- Skeleton → contenu : fondu croisé 180 ms.

## 🔄 Comportement et états

- Première ouverture uniquement : pas de rejeu lors de refetch.

## 🛠️ Tâches

- [ ] Créer `components/motion/Stagger.tsx` et `PageTransition.tsx` (framer-motion).
- [ ] Appliquer au DashboardPage.
- [ ] Flag `VITE_MOTION=off` pour E2E.
- [ ] Tests unitaires.
- [ ] Doc dans Storybook.

## ✔️ Critères d'acceptation

- [ ] Étant donné 4 cartes KPI, alors elles apparaissent avec 60 ms d'écart.
- [ ] Étant donné un refetch, alors l'animation ne se rejoue pas.
- [ ] Étant donné reduced-motion, alors aucune animation.

## 🧪 Tests à écrire

- [ ] Test composant : Stagger délais
- [ ] Test composant : PageTransition
- [ ] Test : pas de rejeu au refetch

## 🔗 Dépendances

À réaliser après : `ADM-ADS-31` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
