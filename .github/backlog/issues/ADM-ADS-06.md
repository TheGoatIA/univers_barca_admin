> **ADM-ADS-06** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZB-01 : variantes primaire, secondaire (contour), tonal, fantôme, texte, navy, or, danger ; hauteurs 28/36/44/52/56 px, rayon 12 px ; états repos/pressé/focus clavier/désactivé/chargement/succès ; formes carré 8, arrondi 12, pilule ; icône seule 44×44. `button.tsx` existe avec 6 variantes et 3 tailles : à compléter.

## ✅ Objectif

Un Button complet conforme à la planche, réutilisé partout.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZB-01` — Boutons — variantes, tailles et formes
_Module : Composants de base_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__desktop_light.webp?raw=true' width='330' alt='ZB-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__desktop_dark.webp?raw=true' width='330' alt='ZB-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__mobile_light.webp?raw=true' width='230' alt='ZB-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-01_boutons-variantes-tailles-et-formes__mobile_dark.webp?raw=true' width='230' alt='ZB-01 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 01 » · « Boutons » · « Hauteurs 28 / 36 / 44 / 52 / 56 px, rayon 12 px. Toute zone interactive respecte une cible tactile d’au moins 44 × 44 points (la zone invisible est étendue pour les boutons XS et SM). » · « Variantes » · « Primaire » · « Valider » · « BarcaButton.primary » · « Secondaire (contour) » · « BarcaButton.secondary » · « Tonal » · « BarcaButton.tonal » · « Fantôme » · « BarcaButton.ghost » · « Texte » · « BarcaButton.text » · « Navy » · « BarcaButton.navy » · « Or » · « BarcaButton.gold » · « Danger » · « BarcaButton.danger » · « Tailles » · « Hauteur et typographie par taille — de XS (28 px) à Large (56 px). » · « Échelle » · « XS · 28 px » · « Continuer » · « SM · 36 px » · « MD · 44 px » · « Défaut · 52 px » · « LG · 56 px »

**Composants repérés** : `btn`, `spinner`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [ADM-ADS-37](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-37%5D%22)

## 📐 Règles de gestion

- Variantes à ajouter : tonal (fond primary/10), text, gold ; garder primary, secondary, navy, ghost, danger (outline interne à mapper).
- Tailles : xs 28, sm 36, md 44 (défaut admin), lg 52, xl 56 ; zone de frappe étendue à 44 × 44 pour xs et sm (pseudo-élément).
- États : pressé = primary-press ; focus = anneau 3 px offset 2 px ; chargement = spinner + libellé (« Envoi… ») + aria-busy ; succès = fond success + coche (« Envoyé »).
- Icône + texte (gap 8 px), icône seule carrée 44 × 44 avec aria-label obligatoire ; formes square/rounded/pill.
- Largeur : auto, fixe, pleine (`fullWidth`).

## 🔄 Comportement et états

- Désactivé : opacité réduite + pointer-events none + aria-disabled.

## 🛠️ Tâches

- [ ] Étendre `src/components/ui/button.tsx` (cva) : variants tonal/text/gold, sizes xs/sm/md/lg/xl/icon, shape, fullWidth, status (idle/loading/success).
- [ ] Zone tactile étendue via `before:absolute before:inset-[-8px]` pour xs/sm.
- [ ] Typage : `aria-label` requis quand `size='icon'` (union discriminée).
- [ ] Mettre à jour les usages existants.
- [ ] Stories : toutes variantes × tailles × états × thèmes.
- [ ] Tests unitaires et a11y.

## ✔️ Critères d'acceptation

- [ ] Étant donné size=xs, alors la hauteur est 28 px et la zone cliquable 44 × 44.
- [ ] Étant donné status=loading, alors un spinner s'affiche, le bouton est désactivé et aria-busy=true.
- [ ] Étant donné size=icon sans aria-label, alors TypeScript refuse.
- [ ] Étant donné le focus clavier, alors un anneau de 3 px est visible.

## 🧪 Tests à écrire

- [ ] Test composant : chaque variante rend ses classes
- [ ] Test composant : loading désactive
- [ ] Test composant : zone tactile 44
- [ ] Test a11y : axe sur toutes variantes
- [ ] Test type : aria-label requis

## ♿ Accessibilité et i18n

- Contraste texte/fond AA pour chaque variante (gold : texte sombre)

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` · `ADM-ADS-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
