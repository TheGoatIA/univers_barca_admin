> **ADM-ADS-26** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-03 : boutons Ignorer, Masquer, Avertir, Suspendre (tonal rose), Bannir (danger) et la mention « Justification obligatoire : Suspendre / Bannir ». ZD-05 : aria-label « Bannir l'utilisateur ».

## ✅ Objectif

Composant d'actions de modération réutilisable (signalement, fiche utilisateur).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-03` — Composants du back-office
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true' width='330' alt='ZD-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true' width='330' alt='ZD-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true' width='230' alt='ZD-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true' width='230' alt='ZD-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Admin · 01 » · « Composants admin » · « DataTable, StatusBadge, TrilingualTextEditor, MediaUploader, ModerationActionMenu, ConfirmDialog, Toast : primitives Radix + Tailwind, accessibles au clavier. » · « DataTable » · « Pagination serveur, tri, filtres persistés dans l’URL, actions de masse et mode dense. » · « Joueur » · « Poste » · « Langues » · « Statut » · « Mis à jour » · « Pedri » · « Milieu » · « Publié » · « hier » · « Gavi » · « Traduction » · « 2 sept. » · « Balde » · « Latéral » · « Brouillon » · « 30 août » · « 1–3 sur 71 » · « TrilingualTextEditor — états » · « Incomplet : publication bloquée » · « Biographie » · « FR · Français » · « EN · English » · « ES · Español » · « Saisir le texte… » · « Publication bloquée : ES manquant(e)(s) »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-14%5D%22) · [ADM-ADS-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-16%5D%22) · [ADM-ADS-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-21%5D%22) · [ADM-ADS-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-23%5D%22) · [ADM-ADS-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-24%5D%22) · [ADM-ADS-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-25%5D%22) · [ADM-ADS-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-27%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [ADM-ADS-37](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-37%5D%22) · [MOB-ZD-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-08%5D%22)

#### `ZD-05` — Accessibilité
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_light.webp?raw=true' width='330' alt='ZD-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__desktop_dark.webp?raw=true' width='330' alt='ZD-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_light.webp?raw=true' width='230' alt='ZD-05 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-05_accessibilite__mobile_dark.webp?raw=true' width='230' alt='ZD-05 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Qualité · 01 » · « Accessibilité » · « Cibles tactiles ≥ 44 × 44 pt, contrastes WCAG AA dans les deux thèmes, libellés sémantiques pour VoiceOver/TalkBack, navigation clavier complète côté admin. » · « Cibles tactiles » · « Bouton icône 44 × 44 » · « 44 × 44 pt minimum » · « Bouton compact 36 px + zone étendue » · « Rejoindre » · « zone de frappe étendue à 44 pt » · « Espacement entre cibles » · « ≥ 8 px entre deux cibles » · « Focus, lecteur d’écran et clavier » · « Anneau de focus » · « Valider » · « Rechercher » · « contour 3 px · décalage 2 px » · « Libellés sémantiques » · « Semantics(label: « Partager mon résultat ») » · « Semantics(label: « Ajouter à mon agenda ») » · « aria-label=« Bannir l’utilisateur » » · « aria-describedby → message d’erreur » · « Raccourcis admin » · « Ctrl K » · « Recherche globale » · « J / K » · « Signalement suivant / précédent » · « A / R » · « Approuver / rejeter » · « Esc » · « Fermer le panneau »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-27%5D%22) · [ADM-ADS-29](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-29%5D%22) · [MOB-FND-36](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-36%5D%22) · [MOB-ZA-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-12%5D%22) · [MOB-ZB-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-03%5D%22) · [MOB-ZD-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-11%5D%22) · [MOB-ZD-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-12%5D%22)

## 📐 Règles de gestion

- Cinq actions du CDC §4.6 ; chacune ouvre ConfirmDialog ; justification obligatoire (champ requis) pour Suspendre et Bannir.
- Actions visibles selon permissions (moderator, super-admin).
- Raccourcis clavier optionnels (J/K, A/R ailleurs) ; aria-label explicites.
- Variante menu déroulant compacte (⋮) sur tablette.

## 🔄 Comportement et états

- Action en cours : boutons désactivés avec spinner.

## 🛠️ Tâches

- [ ] Créer `ModerationActionMenu.tsx` + `ModerationActionDialog.tsx`.
- [ ] Props `allowedActions`, `onAction(type, justification)`.
- [ ] Intégration `Can` permissions.
- [ ] Stories.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné Bannir, alors la justification est requise avant confirmation.
- [ ] Étant donné un rôle non autorisé, alors le menu n'est pas rendu.
- [ ] Étant donné une tablette, alors le menu est compact.

## 🧪 Tests à écrire

- [ ] Test composant : justification requise
- [ ] Test composant : permissions
- [ ] Test composant : compact
- [ ] Test a11y : labels

## ♿ Accessibilité et i18n

- aria-label complets « Bannir l'utilisateur ultras_bcn »

## 🔗 Dépendances

À réaliser après : `ADM-ADS-16` · `ADM-ADS-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
