> **ADM-WA-12** · Écran · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

WA-07 affiche une icône horloge jaune, « Session expirée », le message d'inactivité de 8 h, l'e-mail grisé et un champ mot de passe focalisé avec le bouton « Se reconnecter ».

## ✅ Objectif

Offrir une reconnexion en un champ qui ramène l'administrateur exactement là où il se trouvait.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-07` — Session expirée — inactivité
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true' width='330' alt='WA-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true' width='330' alt='WA-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true' width='330' alt='WA-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true' width='330' alt='WA-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Session expirée » · « Tu as été déconnecté(e) après 8 h d’inactivité. Ton travail non enregistré n’a pas été perdu : il sera restauré. » · « E-mail » · « camille.durand@univers-barca.app » · « Mot de passe » · « Se reconnecter »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-11%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22)

## 📐 Règles de gestion

- Titre « Session expirée » ; texte « Tu as été déconnecté(e) après 8 h d'inactivité. Ton travail non enregistré n'a pas été perdu : il sera restauré. ».
- E-mail en lecture seule (champ grisé, `readOnly`, valeur `authStore.lastEmail`) ; mot de passe focalisé automatiquement ; bouton « Se reconnecter ».
- Après succès : navigation vers le paramètre `from` (si chemin interne commençant par `/`, sinon `/`) ; 2FA demandé si activé.
- Sans e-mail mémorisé, l'écran se comporte comme WA-01 (champ e-mail éditable).

## 🔄 Comportement et états

- Paramètre `from` validé (liste blanche de chemins internes) pour éviter une redirection ouverte.
- Erreurs identiques à WA-02/WA-03.
- Lien discret « Se connecter avec un autre compte » efface `lastEmail` et les brouillons.

## 🛠️ Tâches

- [ ] Créer `src/pages/auth/SessionExpiredPage.tsx` (route `/session-expiree`).
- [ ] Réutiliser `useLogin`, `PasswordInput`, `AuthNotice`.
- [ ] Créer `safeRedirectPath(from)` dans `src/lib/utils.ts` + tests.
- [ ] Icône `Clock` sur pastille jaune (token accent).
- [ ] Autofocus via `useEffect` et `ref`.
- [ ] Capture clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné une expiration depuis `/joueurs/ub-0010`, quand je me reconnecte, alors j'arrive sur `/joueurs/ub-0010`.
- [ ] Étant donné `from=https://evil.com`, quand je me reconnecte, alors je suis redirigé vers `/`.
- [ ] Étant donné l'écran affiché, quand il se charge, alors le champ mot de passe a le focus.
- [ ] Étant donné « autre compte », quand je clique, alors le champ e-mail devient éditable et vide.

## 🧪 Tests à écrire

- [ ] SessionExpiredPage.test.tsx : e-mail prérempli en lecture seule
- [ ] utils.test.ts : safeRedirectPath (cas malveillants)
- [ ] SessionExpiredPage.test.tsx : focus automatique
- [ ] Playwright : expiration → reconnexion → retour sur la page

## ♿ Accessibilité et i18n

- Texte « Session expirée » en H1

## 🔗 Dépendances

À réaliser après : `ADM-WA-11` · `ADM-WA-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
