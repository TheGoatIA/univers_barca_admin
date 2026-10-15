> **ADM-WA-14** · Écran · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Une `ForbiddenPage` existe déjà. WA-08 la veut dans le layout complet (sidebar, barre supérieure), avec icône cadenas sur pastille, message nominatif du rôle et deux actions.

## ✅ Objectif

Refondre la page pour dire quel rôle manque d'accès à quel module, rassurer sur la session et proposer deux actions.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-08` — Accès non autorisé (403)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true' width='330' alt='WA-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true' width='330' alt='WA-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true' width='330' alt='WA-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true' width='330' alt='WA-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Accès non autorisé » · « Ton rôle » · « ne permet pas d'accéder à la modération. Tu es bien connecté(e) : aucune action n'est requise sur ta session. » · « Retour au tableau de bord » · « Demander l’accès »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-13%5D%22) · [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-37%5D%22)

## 📐 Règles de gestion

- Titre « ACCÈS NON AUTORISÉ » (Barlow Condensed), icône cadenas dans un double halo rosé.
- Texte : « Ton rôle **Content-manager** ne permet pas d'accéder à la modération. Tu es bien connecté(e) : aucune action n'est requise sur ta session. » (rôle et module dynamiques).
- Bouton primaire « Retour au tableau de bord » (icône maison) ; bouton secondaire « Demander l'accès » (icône enveloppe) → `mailto:` super-admin avec objet et corps préremplis (module, rôle, e-mail du demandeur).
- Fil d'Ariane de la barre supérieure : nom du module demandé (ex. « Modération »).

## 🔄 Comportement et états

- Les entrées de menu sans droit n'apparaissent pas dans la sidebar (cf. WA-08 : le content-manager ne voit pas Modération).
- Aucun appel API n'est émis pour la route refusée.
- Le titre du document devient « Accès non autorisé — Univers Barça Admin ».

## 🛠️ Tâches

- [ ] Refondre `src/pages/errors/ForbiddenPage.tsx` avec `EmptyState` étendu (icône halo, actions).
- [ ] Lire `deniedFrom` (module, libellé) depuis la navigation.
- [ ] Créer `mailtoRequestAccess(admin, module)` dans `src/lib/utils.ts`.
- [ ] Gérer le thème sombre (halo `bg-primary/10`).
- [ ] Ajouter la variable `VITE_ADMIN_CONTACT_EMAIL`.
- [ ] Tests RTL + capture.

## ✔️ Critères d'acceptation

- [ ] Étant donné un content-manager sur /moderation, quand la page s'affiche, alors le texte cite « Content-manager » et « la modération ».
- [ ] Étant donné le clic sur « Retour au tableau de bord », quand il est activé, alors j'arrive sur `/`.
- [ ] Étant donné « Demander l'accès », quand je clique, alors un lien mailto avec le module et mon e-mail est ouvert.
- [ ] Étant donné la page 403, quand elle est chargée, alors aucune requête XHR n'est émise.

## 🧪 Tests à écrire

- [ ] ForbiddenPage.test.tsx : message dynamique rôle/module
- [ ] ForbiddenPage.test.tsx : mailto encodé
- [ ] utils.test.ts : mailtoRequestAccess
- [ ] Playwright rbac.spec.ts : content-manager vers /moderation

## ♿ Accessibilité et i18n

- Titre H1, bouton principal focalisé à l'ouverture

## 🔗 Dépendances

À réaliser après : `ADM-WA-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §2.6
- CDC Admin §3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
