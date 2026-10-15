> **ADM-ADS-19** · UX / Ergonomie · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZC-02 : spinner 18/28/44 px, spinner dans un bouton (« Connexion… »), squelettes shimmer carte/liste/tableau admin, barres fine/standard/épaisse, anneaux de progression (64 %), chargeur de marque. `skeleton.tsx` existe.

## ✅ Objectif

Jeu complet d'indicateurs de chargement homogènes.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZC-02` — Chargement et progression
_Module : Retours et états_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__desktop_light.webp?raw=true' width='330' alt='ZC-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__desktop_dark.webp?raw=true' width='330' alt='ZC-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__mobile_light.webp?raw=true' width='230' alt='ZC-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-02_chargement-et-progression__mobile_dark.webp?raw=true' width='230' alt='ZC-02 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 08 » · « Chargement » · « Spinner pour les actions courtes, squelette « shimmer » pour les contenus, progression déterministe pour les opérations longues. Chaque écran gère chargement, contenu, vide et erreur. » · « Indicateurs de chargement » · « Spinner · petit » · « 18 · 28 · 44 px » · « Spinner sur fond de marque » · « Dans un bouton » · « Connexion… » · « Envoi… » · « Points (assistant) » · « Barça AI écrit… » · « Squelettes (shimmer) » · « Carte » · « Liste » · « Tableau admin » · « Progression » · « Barres » · « fine · standard · épaisse » · « Anneaux » · « Génération de wallpaper » · « En file d’attente » · « 64 % » · « cible » · « 15 s » · « Chargeur de marque » · « Préparation de ton compte » · « Tirer pour actualiser et chargement paginé » · « Pull-to-refresh » · « Mise à jour… »

**Composants repérés** : `btn`, `card`, `spinner`

</details>

**Issues liées sur ce même écran :** [MOB-FND-38](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-38%5D%22) · [MOB-ZB-02](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-02%5D%22) · [MOB-ZC-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-06%5D%22) · [MOB-ZC-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-07%5D%22) · [MOB-ZC-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-08%5D%22) · [MOB-ZC-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-09%5D%22) · [MOB-ZC-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-12%5D%22) · [MOB-ZC-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-17%5D%22)

## 📐 Règles de gestion

- Spinner : 18/28/44 px, couleur currentColor ; Skeleton : shimmer 1,4 s, désactivé si reduced-motion.
- Variantes skeleton : `card`, `list`, `table-row`, `text`, `kpi`.
- Progression : barre (4/8/12 px de hauteur) et anneau avec valeur centrée ; `role=progressbar` avec valeurs.
- Chaque écran gère chargement, contenu, vide, erreur.

## 🔄 Comportement et états

- Chargement > 400 ms seulement pour éviter le clignotement.

## 🛠️ Tâches

- [ ] Créer `spinner.tsx`, `progress.tsx`, `progress-ring.tsx`, étendre `skeleton.tsx`.
- [ ] Hook `useDelayedLoading(ms=400)`.
- [ ] Skeletons de table (réutilisés par DataTable).
- [ ] Stories.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un chargement de 200 ms, alors aucun skeleton n'est affiché.
- [ ] Étant donné progress=64, alors aria-valuenow=64.
- [ ] Étant donné reduced-motion, alors le shimmer est statique.

## 🧪 Tests à écrire

- [ ] Test hook : useDelayedLoading
- [ ] Test composant : progress aria
- [ ] Test composant : skeleton variants
- [ ] Test a11y

## ♿ Accessibilité et i18n

- aria-busy sur conteneurs en chargement

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` · `ADM-ADS-30` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
