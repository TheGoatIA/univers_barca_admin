> **ADM-WC-18** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WC-06 montre l'onglet Biographie incomplet : bandeau rouge « Publication bloquée · la biographie doit être renseignée en FR, EN et ES. », champ « Biographie * » avec trois onglets FR · Français (pastille verte), EN · English (verte) et ES · Español (pastille rouge, actif), zone vide « Saisir le texte… », compteur « 0 / 800 » et message rouge « Publication bloquée : ES manquant(e)(s) ». WC-07 montre le même onglet complet : trois pastilles vertes, texte espagnol « Incorporado muy joven… » et message vert « Les 3 langues sont complètes ».

## ✅ Objectif

Intégrer le `TrilingualTextEditor` (WE `we-composant-editeur-trilingue`) à l'onglet Biographie avec les états incomplet et complet de WC-06/WC-07.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-06` — Fiche joueur — biographie incomplète
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_light.webp?raw=true' width='330' alt='WC-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__desktop_dark.webp?raw=true' width='330' alt='WC-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_light.webp?raw=true' width='330' alt='WC-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-06_fiche-joueur-biographie-incomplete__tablet_dark.webp?raw=true' width='330' alt='WC-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Publication bloquée » · « · la biographie doit être renseignée en FR, EN et ES. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-19%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-36%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WC-07` — Fiche joueur — biographie trilingue complète
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_light.webp?raw=true' width='330' alt='WC-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__desktop_dark.webp?raw=true' width='330' alt='WC-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_light.webp?raw=true' width='330' alt='WC-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-07_fiche-joueur-biographie-trilingue-complete__tablet_dark.webp?raw=true' width='330' alt='WC-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « Prête à publier » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « FR · Français » · « EN · English »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-19%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-08%5D%22) · [API-FOOT-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-09%5D%22) · [API-FOOT-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-35%5D%22) · [API-FOOT-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-36%5D%22)

## 📐 Règles de gestion

- Limite 800 caractères par langue (compteur « 0 / 800 », rouge au-delà, saisie non bloquée mais validation en erreur) ; minimum 50 caractères pour considérer une langue « renseignée » (seuil proposé, à confirmer) afin d'éviter les biographies factices.
- Bandeau rouge `Alert` au-dessus du champ tant qu'au moins une langue est vide : « Publication bloquée · la biographie doit être renseignée en FR, EN et ES. » ; il disparaît dès que les trois sont complètes et fait place au message vert sous le champ.
- Le composant expose `missingLocales` : le bouton « Publier », la checklist, le point rouge de l'onglet et la pastille de l'onglet de langue en dépendent.
- Texte brut uniquement : aucun HTML interprété, collage nettoyé (CDC Admin §6.2 : jamais de `dangerouslySetInnerHTML`) ; retours à la ligne conservés.
- La langue active à l'ouverture est la première langue manquante (ES dans WC-06), sinon FR ; le changement d'onglet de langue conserve le focus dans la zone de saisie.
- Biographie obligatoire : champ `bioI18n` `{fr,en,es}` du modèle `Player`.

## 🛠️ Tâches

- [ ] Créer `src/components/players/BiographyTab.tsx` utilisant `TrilingualTextEditor` en mode contrôlé `Controller` RHF (`name='bioI18n'`).
- [ ] Créer `src/components/players/PublicationBlockedAlert.tsx` (variante `danger`, icône triangle).
- [ ] Implémenter `useMissingLocales(bioI18n)` partagé avec la checklist et le bouton Publier.
- [ ] Câbler la propriété `maxLength=800`, `minRenderedLength=50`, `placeholder='Saisir le texte…'`.
- [ ] Définir la langue initiale (`defaultLocale = firstMissing ?? 'fr'`) et la restaurer lors du retour sur l'onglet.
- [ ] Appliquer la sanitation à la saisie et au collage (`sanitizePlainText`) ; test avec contenu `<script>`.
- [ ] Brancher le point rouge de l'onglet Biographie sur `missingLocales.length > 0`.
- [ ] Vérifier clair/sombre et tablette ; stories Storybook « incomplet » / « complet ».

## ✔️ Critères d'acceptation

- [ ] Étant donné FR et EN renseignées et ES vide, quand l'onglet s'ouvre, alors l'onglet ES est actif, sa pastille est rouge et le message « Publication bloquée : ES manquant(e)(s) » est affiché.
- [ ] Étant donné les trois langues complètes, quand l'onglet s'affiche, alors le message vert « Les 3 langues sont complètes » apparaît et le bandeau rouge est absent.
- [ ] Étant donné une saisie de 801 caractères, quand le compteur est évalué, alors il est rouge et l'enregistrement est refusé.
- [ ] Étant donné un collage contenant des balises HTML, quand le texte est inséré, alors seul le texte brut est conservé.
- [ ] Étant donné une langue complétée, quand je reviens sur l'onglet Biographie, alors la pastille correspondante est verte et le point rouge disparaît quand les trois le sont.

## 🧪 Tests à écrire

- [ ] BiographyTab.test.tsx : états incomplet (WC-06) et complet (WC-07).
- [ ] PublicationBlockedAlert.test.tsx : rendu conditionnel.
- [ ] useMissingLocales.test.ts : seuil 50 caractères.
- [ ] sanitizePlainText.test.ts : balises et scripts.
- [ ] axe : onglets de langue (rôles tab/tabpanel).

## ♿ Accessibilité et i18n

- Messages d'état annoncés via `aria-live='polite'` ; compteurs en `aria-label` « 0 caractère sur 800 » ; pastilles avec libellé masqué (« Espagnol manquant »).

## 🔗 Dépendances

À réaliser après : `ADM-WC-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2, §5.3, §6.2
- CDC Global §2.14 (i18n complète du contenu)
- WE we-composant-editeur-trilingue

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
