> **ADM-WA-03** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La page de connexion existe mais n'a ni le gabarit, ni les icônes, ni « Rester connecté 8 h », ni « Mot de passe oublié ? », ni l'encart 2FA de la maquette WA-01.

## ✅ Objectif

Refondre `LoginPage` pour qu'elle reproduise WA-01 et redirige vers la double authentification quand l'API demande un TOTP.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-01` — Connexion administrateur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_light.webp?raw=true' width='330' alt='WA-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__desktop_dark.webp?raw=true' width='330' alt='WA-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_light.webp?raw=true' width='330' alt='WA-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-01_connexion-administrateur__tablet_dark.webp?raw=true' width='330' alt='WA-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••••••• » · « Rester connecté 8 h » · « Mot de passe oublié ? » · « Se connecter » · « Authentification à deux facteurs requise pour les super-admins. »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22) · [API-AUTH-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-45%5D%22)

## 📐 Règles de gestion

- Titre « Connexion », sous-titre « Accède à ton espace d'administration. ».
- Champ « E-mail professionnel » (icône enveloppe, placeholder `camille.durand@univers-barca.app`, `autoComplete="username"`) et « Mot de passe » (icône cadenas, bouton œil pour afficher/masquer, `autoComplete="current-password"`).
- Case « Rester connecté 8 h » cochée par défaut ; décochée, le cookie de refresh devient un cookie de session de navigateur. Lien « Mot de passe oublié ? » (bleu secondaire) à droite.
- Bouton primaire pleine largeur « Se connecter » (dégradé grenat, état chargement avec spinner et libellé conservé).
- Encart info bleu : « Authentification à deux facteurs requise pour les super-admins. » (cohérence CDC : TOTP « fortement recommandée » ; maquette = obligatoire pour super-admin).

## 🔄 Comportement et états

- Validation à la soumission (RHF + Zod `loginSchema`) puis à la volée après la première erreur (`mode: 'onSubmit', reValidateMode: 'onChange'`).
- Succès sans 2FA : `setSession`, redirection vers `location.state.from` ou `/`. Réponse `TOTP_REQUIRED` : navigation vers `/login/2fa` en conservant e-mail/mot de passe en mémoire (jamais en storage).
- Réponse `BAD_CREDENTIALS` : voir WA-02 ; `ACCOUNT_LOCKED` : voir WA-03.
- Déjà connecté : `<Navigate to="/" replace />`. Touche Entrée soumet le formulaire.
- Pendant l'envoi les champs sont `readOnly` et le bouton `aria-busy`.

## 🛠️ Tâches

- [ ] Remplacer le contenu de `src/pages/auth/LoginPage.tsx` par la version AuthLayout (retirer le champ TOTP inline).
- [ ] Créer `src/components/auth/PasswordInput.tsx` (toggle `aria-pressed`, libellés « Afficher le mot de passe » / « Masquer le mot de passe »).
- [ ] Créer `src/components/ui/input.tsx` variante `leadingIcon` (lucide `Mail`, `Lock`).
- [ ] Ajouter `rememberMe` au payload login et au store (`authStore.rememberMe`).
- [ ] Créer `src/pages/auth/ForgotPasswordPage.tsx` minimal (champ e-mail, réponse neutre « Si un compte existe, un e-mail a été envoyé »).
- [ ] Ajouter l'encart info via `AuthNotice variant="info"`.
- [ ] Mettre à jour `LoginPage.test.tsx` (cas 2FA, cas erreur, cas remember me).

## ✔️ Critères d'acceptation

- [ ] Étant donné un e-mail et un mot de passe valides sans 2FA, quand je clique sur « Se connecter », alors je suis redirigé vers le tableau de bord.
- [ ] Étant donné un compte avec 2FA, quand l'API répond TOTP_REQUIRED, alors j'arrive sur `/login/2fa`.
- [ ] Étant donné un e-mail invalide « camille@ », quand je soumets, alors « Email invalide » s'affiche sous le champ et le focus va sur ce champ.
- [ ] Étant donné le champ mot de passe masqué, quand je clique sur l'œil, alors le texte est visible et le bouton annonce « Masquer le mot de passe ».
- [ ] Étant donné « Rester connecté 8 h » décoché, quand je me connecte, alors `rememberMe=false` est envoyé.

## 🧪 Tests à écrire

- [ ] LoginPage.test.tsx : affiche tous les libellés de la maquette
- [ ] LoginPage.test.tsx : validation e-mail et mot de passe requis
- [ ] LoginPage.test.tsx : redirection vers /login/2fa sur TOTP_REQUIRED
- [ ] PasswordInput.test.tsx : bascule afficher/masquer
- [ ] Playwright login.spec.ts : connexion super-admin de démonstration

## ♿ Accessibilité et i18n

- Libellés : « E-mail professionnel », « Mot de passe », « Rester connecté 8 h », « Mot de passe oublié ? »
- Bouton œil : aria-label dynamique

## 🔗 Dépendances

À réaliser après : `ADM-WA-01` · `ADM-WA-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
