> **ADM-ADS-03** · UX / Ergonomie · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZA-04 : échelle xs 4, sm 8, md 12, lg 16, xl 24, 2xl 32, 3xl 40 ; rayons 6 (tags), 8 (petits boutons), 12 (boutons, champs), 16 (cartes) ; ombres douces en clair, bordures subtiles en sombre.

## ✅ Objectif

Tokens Tailwind corrects et cohérents avec AppSpacing du mobile.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZA-04` — Espacements, rayons et ombres
_Module : Fondations_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__desktop_light.webp?raw=true' width='330' alt='ZA-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__desktop_dark.webp?raw=true' width='330' alt='ZA-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__mobile_light.webp?raw=true' width='230' alt='ZA-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-04_espacements-rayons-et-ombres__mobile_dark.webp?raw=true' width='230' alt='ZA-04 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fondations · 04 » · « Espacement et formes » · « Grille de 4/8 px, coins arrondis modérés et cohérents (12–16 px sur les cartes), ombres douces en thème clair, bordures subtiles en thème sombre. » · « Échelle d’espacement » · « multiples de 4 px » · « AppSpacing.xs » · « 4 px » · « AppSpacing.sm » · « 8 px » · « AppSpacing.md » · « 12 px » · « AppSpacing.lg » · « 16 px » · « AppSpacing.xl » · « 24 px » · « AppSpacing.2xl » · « 32 px » · « AppSpacing.3xl » · « 40 px » · « Rayons » · « xs » · « · 6 px » · « Tags » · « sm » · « · 8 px » · « Petits boutons » · « md » · « · 12 px » · « Boutons, champs » · « lg »

</details>

**Issues liées sur ce même écran :** [MOB-ZA-06](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-06%5D%22) · [MOB-ZA-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-07%5D%22) · [MOB-ZA-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-08%5D%22) · [MOB-ZA-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-13%5D%22) · [MOB-ZA-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-14%5D%22) · [MOB-ZA-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-15%5D%22) · [MOB-ZA-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-16%5D%22)

## 📐 Règles de gestion

- spacing : 1 = 4 px … 10 = 40 px ; rayons `xs 6, sm 8, md 12, lg 16, xl 24` (sheets 24 px).
- Ombres `shadow-1/2/3` en clair ; en sombre bordure 1 px rgba(255,255,255,.03–.06) + ombre portée forte.
- Aucune valeur arbitraire (ex. `p-[13px]`) hors dérogation commentée.

## 🔄 Comportement et états

- Les cartes en sombre n'ont pas d'ombre claire : bordure uniquement.

## 🛠️ Tâches

- [ ] Vérifier/étendre `theme.spacing`, `borderRadius`, `boxShadow` dans tailwind.config.ts.
- [ ] Alias `AppSpacing` documentés (docs/ARCHITECTURE.md).
- [ ] Règle lint sur les valeurs arbitraires.
- [ ] Page Storybook « Espacements ».
- [ ] Revue de l'existant (Card, Button, DataTable).

## ✔️ Critères d'acceptation

- [ ] Étant donné une carte, alors son rayon est 16 px.
- [ ] Étant donné le thème sombre, alors shadow-1 devient une bordure subtile.
- [ ] Étant donné `p-[13px]`, alors le lint avertit.

## 🧪 Tests à écrire

- [ ] Test unitaire : valeurs tailwind config
- [ ] Test visuel : carte clair/sombre
- [ ] Test lint : valeur arbitraire

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
