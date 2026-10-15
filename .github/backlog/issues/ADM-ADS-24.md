> **ADM-ADS-24** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-03 : états « Incomplet : publication bloquée » (« Publication bloquée : ES manquant(e)(s) », 0 / 800) et « Complet : prêt à publier » (« Les 3 langues sont complètes — prêt à publier », 131 / 800). CDC §5.3 : pastille verte/rouge par langue.

## ✅ Objectif

Composant de saisie trilingue réutilisé (biographie joueur, contenu historique, quiz, notifications).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-03` — Composants du back-office
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_light.webp?raw=true' width='330' alt='ZD-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__desktop_dark.webp?raw=true' width='330' alt='ZD-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_light.webp?raw=true' width='230' alt='ZD-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-03_composants-du-back-office__mobile_dark.webp?raw=true' width='230' alt='ZD-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Admin · 01 » · « Composants admin » · « DataTable, StatusBadge, TrilingualTextEditor, MediaUploader, ModerationActionMenu, ConfirmDialog, Toast : primitives Radix + Tailwind, accessibles au clavier. » · « DataTable » · « Pagination serveur, tri, filtres persistés dans l’URL, actions de masse et mode dense. » · « Joueur » · « Poste » · « Langues » · « Statut » · « Mis à jour » · « Pedri » · « Milieu » · « Publié » · « hier » · « Gavi » · « Traduction » · « 2 sept. » · « Balde » · « Latéral » · « Brouillon » · « 30 août » · « 1–3 sur 71 » · « TrilingualTextEditor — états » · « Incomplet : publication bloquée » · « Biographie » · « FR · Français » · « EN · English » · « ES · Español » · « Saisir le texte… » · « Publication bloquée : ES manquant(e)(s) »

**Composants repérés** : `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-14%5D%22) · [ADM-ADS-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-16%5D%22) · [ADM-ADS-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-21%5D%22) · [ADM-ADS-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-23%5D%22) · [ADM-ADS-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-25%5D%22) · [ADM-ADS-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-26%5D%22) · [ADM-ADS-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-27%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [ADM-ADS-37](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-37%5D%22)

## 📐 Règles de gestion

- Onglets FR · Français / EN · English / ES · Español avec pastille verte (complet) ou rouge (vide).
- Props : label, value `Record<'fr'|'en'|'es',string>`, onChange, required, maxLength (800 par défaut), minimum de caractères par langue.
- Message de blocage listant les langues manquantes ; compteur « n / 800 ».
- Variante `warnOnly` (notifications : avertissement non bloquant, WI-07).

## 🔄 Comportement et états

- Saisie préservée lors du changement d'onglet ; indicateur de complétion mis à jour en direct.

## 🛠️ Tâches

- [ ] Créer `src/components/shared/TrilingualTextEditor.tsx` (+ `LangTab`, `CompletionDot`).
- [ ] Hook `useTrilingualCompletion(value)`.
- [ ] Intégration RHF (`Controller`) + schéma Zod `trilingualSchema`.
- [ ] Variante éditeur riche (hors périmètre : texte simple).
- [ ] Stories (incomplet/complet/warnOnly).
- [ ] Tests du CDC §7.4.

## ✔️ Critères d'acceptation

- [ ] Étant donné fr/en/es vides, alors « Publication bloquée » est affiché.
- [ ] Étant donné 3 langues remplies, alors « prêt à publier ».
- [ ] Étant donné warnOnly, alors le blocage devient un avertissement non bloquant.

## 🧪 Tests à écrire

- [ ] Test composant : publication bloquée (exemple CDC §7.4)
- [ ] Test composant : pastilles de complétion
- [ ] Test unitaire : trilingualSchema
- [ ] Test composant : compteur 800
- [ ] Test a11y : tablist

## ♿ Accessibilité et i18n

- Pastille + texte « ES manquant »

## 🔗 Dépendances

À réaliser après : `ADM-ADS-10` · `ADM-ADS-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
