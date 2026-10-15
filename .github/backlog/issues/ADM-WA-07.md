> **ADM-WA-07** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Quand le compte a le TOTP activé, l'API répond TOTP_REQUIRED. WA-04 « Vérification en deux étapes » demande le code à 6 chiffres de l'application d'authentification, avec compte à rebours « Expire dans 00:21 » et lien « Code de secours ».

## ✅ Objectif

Permettre la validation du second facteur, avec compte à rebours de la fenêtre TOTP et repli par code de secours.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-04` — Double authentification (TOTP)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_light.webp?raw=true' width='330' alt='WA-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__desktop_dark.webp?raw=true' width='330' alt='WA-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_light.webp?raw=true' width='330' alt='WA-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-04_double-authentification-totp__tablet_dark.webp?raw=true' width='330' alt='WA-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Vérification en deux étapes » · « Saisis le code à 6 chiffres de ton application d’authentification. » · « Vérifier » · « Code de secours » · « Expire dans 00:21 »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-06%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22)

## 📐 Règles de gestion

- Icône bouclier cochée sur pastille rosée, titre « Vérification en deux étapes », texte « Saisis le code à 6 chiffres de ton application d'authentification. ».
- `OtpInput` 6 cases + bouton « Vérifier » (désactivé tant que < 6 chiffres).
- Pied : lien « Code de secours » à gauche, « Expire dans 00:SS » à droite = temps restant dans la fenêtre TOTP de 30 s (SS = 30 − (epoch mod 30)).
- Tolérance serveur ±1 fenêtre (`window: 1` dans speakeasy) : le compte à rebours est indicatif et n'empêche pas la soumission.
- Après 5 codes invalides consécutifs, le compteur global de blocage du compte (WA-03) s'applique.

## 🔄 Comportement et états

- Arrivée sans état de login en mémoire (rafraîchissement de page) → redirection `/login`.
- Code invalide (`TOTP_INVALID`) : cases en erreur + message « Code invalide ou expiré. » ; focus sur la 1ʳᵉ case.
- « Code de secours » remplace les cases par un champ texte (10 caractères) et un lien « Utiliser le code de l'application » ; un code de secours est à usage unique.
- Succès : `setSession`, redirection vers la destination initiale ; si le compte super-admin n'a pas de 2FA → `/2fa/configuration` (WA-06).
- Bouton « Retour » discret vers `/login` (efface l'état en mémoire).

## 🛠️ Tâches

- [ ] Créer `src/pages/auth/TotpPage.tsx` (route `/login/2fa`) lisant l'état `pendingLogin` du `authStore` (non persisté).
- [ ] Ajouter `pendingLogin` au store (`email`, `password`) avec effacement au démontage et après 2 min.
- [ ] Créer `src/hooks/useTotpWindow.ts` (secondes restantes de la fenêtre de 30 s).
- [ ] Brancher `useLogin` avec `totp` ou `useVerifyBackupCode`.
- [ ] Créer le sous-composant `BackupCodeForm`.
- [ ] Gérer `TOTP_INVALID`, `ACCOUNT_LOCKED`, erreur réseau.
- [ ] Tests unitaires + Playwright (secret de test TOTP calculé avec `otplib`).

## ✔️ Critères d'acceptation

- [ ] Étant donné les 6 chiffres saisis, quand je clique sur « Vérifier », alors la requête login est rejouée avec `totp`.
- [ ] Étant donné un code erroné, quand l'API répond TOTP_INVALID, alors « Code invalide ou expiré. » est annoncé et les cases sont vidées.
- [ ] Étant donné 21 s restantes dans la fenêtre, quand l'écran s'affiche, alors « Expire dans 00:21 » est visible et se décrémente chaque seconde.
- [ ] Étant donné un code de secours valide, quand je le soumets, alors la connexion aboutit et le code ne fonctionne plus au 2ᵉ essai.
- [ ] Étant donné un rechargement de page, quand `pendingLogin` est vide, alors je suis redirigé vers `/login`.

## 🧪 Tests à écrire

- [ ] TotpPage.test.tsx : bouton Vérifier désactivé < 6 chiffres
- [ ] TotpPage.test.tsx : erreur TOTP_INVALID
- [ ] useTotpWindow.test.ts : calcul de la fenêtre de 30 s
- [ ] TotpPage.test.tsx : bascule code de secours
- [ ] Playwright totp.spec.ts : connexion super-admin avec 2FA

## ♿ Accessibilité et i18n

- « Vérification en deux étapes » en H1
- Compte à rebours en `aria-hidden` ; annonce « Le code expire bientôt » à 5 s

## 🔗 Dépendances

À réaliser après : `ADM-WA-06` · `ADM-WA-03` · `ADM-WA-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
