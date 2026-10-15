> **ADM-ADS-35** · Documentation · Priorité **P2** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-01 (jeux : Guess the Player, quiz, fantasy) et ZD-02 (carte, chat, calendrier) sont des composants Flutter non portés dans l'admin, mais certains tokens (couleurs de statut vert/jaune/rouge, tags, chronomètre) et visuels servent de référence aux aperçus et graphiques admin.

## ✅ Objectif

Documenter explicitement ce qui est réutilisé et ce qui ne l'est pas, pour éviter des écarts de design.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-01` — Composants de jeu
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__desktop_light.webp?raw=true' width='330' alt='ZD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__desktop_dark.webp?raw=true' width='330' alt='ZD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__mobile_light.webp?raw=true' width='230' alt='ZD-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-01_composants-de-jeu__mobile_dark.webp?raw=true' width='230' alt='ZD-01 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Métier · 01 » · « Composants de jeu » · « Guess the Player, Quiz, Fantasy : tuiles de résultat, options de réponse, terrain interactif. Les états sont distingués par la couleur ET par une icône ou un libellé. » · « Guess the Player — cellules d’indice » · « États d’une cellule » · « 28 ▲ » · « 10 ▼ » · « Vert : exact » · « Jaune : proche » · « Rouge : faux » · « ▲▼ plus / moins » · « Ligne de tentative » · « Pedri » · « 23 ▲ » · « 8 ▲ » · « Las Palmas » · « Quiz — options de réponse » · « Repos » · « Ivan Rakitić » · « Sélectionnée » · « Bonne réponse » · « Mauvaise réponse » · « Estompée » · « Chronomètre, paliers et classement » · « Chronomètre » · « normal · urgence ( » · « 5 s) » · « Paliers de difficulté » · « Supporter occasionnel » · « Culé »

**Composants repérés** : `card`, `empty`

</details>

#### `ZD-02` — Carte communautaire, chat et calendrier
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__desktop_light.webp?raw=true' width='330' alt='ZD-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__desktop_dark.webp?raw=true' width='330' alt='ZD-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__mobile_light.webp?raw=true' width='230' alt='ZD-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-02_carte-communautaire-chat-et-calendrier__mobile_dark.webp?raw=true' width='230' alt='ZD-02 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Métier · 02 » · « Carte, chat et calendrier » · « Marqueurs agrégés (jamais de position individuelle), bulles de chat, cartes de match et frise chronologique. » · « Carte — marqueurs et zones » · « RG-MAP-01 : aucun marqueur ne correspond à un utilisateur précis. Seuls des agrégats par zone et des groupes publics sont affichés. » · « Cluster (agrégat) » · « taille ∝ nombre de culés » · « Groupe local » · « or · entité publique » · « Ma zone (approximative) » · « zone floue, pas de point exact » · « Contrôles de carte » · « 44×44 » · « Chat Barça AI » · « Bulles » · « Combien de buts Lewandowski a marqué ? » · « 11 buts en 14 matchs cette saison. » · « Joueurs » · « Comparer » · « Messages d’état » · « Message non traité (charte) » · « Échec de l’envoi · » · « Réessayer » · « Barça AI nécessite une connexion. » · « Calendrier et frise » · « Ligne de match » · « OCT. » · « Barça » · « Real Madrid »

**Composants repérés** : `btn`, `card`

</details>

## 📐 Règles de gestion

- Réutilisés : tokens couleurs/typo/espacements, tags de statut, états vert/jaune/rouge (accompagnés d'icône/libellé), carte KPI/graphiques.
- Non portés : cellules d'indice Guess, options de quiz, terrain Fantasy, marqueurs de carte (RG-MAP-01 : jamais de position individuelle), bulles de chat.
- Aperçu « tel que dans l'application mobile » (CDC §4.4) : composant `MobilePreviewFrame` (cadre 390 px, thèmes clair/sombre) pour les prévisualisations de contenu.
- Aucune donnée de position utilisateur dans l'admin.

## 🔄 Comportement et états

- Le cadre d'aperçu bascule clair/sombre indépendamment du thème admin.

## 🛠️ Tâches

- [ ] Rédiger `docs/DESIGN_SYSTEM.md` : tableau composant mobile ↔ équivalent admin ↔ statut (porté / non porté).
- [ ] Créer `MobilePreviewFrame.tsx` (390 × 844 mis à l'échelle).
- [ ] Ajouter une page Storybook « Références mobiles ».
- [ ] Lien vers planches ZD-01 / ZD-02.
- [ ] Vérifier la cohérence des couleurs d'état.

## ✔️ Critères d'acceptation

- [ ] Étant donné docs/DESIGN_SYSTEM.md, alors chaque composant de ZD-01/ZD-02 a un statut explicite.
- [ ] Étant donné MobilePreviewFrame, alors le contenu est rendu à 390 px de large.
- [ ] Étant donné le thème, alors le cadre peut être clair ou sombre.

## 🧪 Tests à écrire

- [ ] Test composant : MobilePreviewFrame largeur
- [ ] Test composant : bascule de thème du cadre
- [ ] Test : lien documentation

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` · `ADM-ADS-14` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
