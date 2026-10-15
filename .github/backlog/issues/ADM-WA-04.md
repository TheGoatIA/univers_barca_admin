> **ADM-WA-04** · Écran · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

WA-02 montre l'état d'erreur de la connexion : bandeau « Identifiants incorrects » avec « Il te reste 2 tentatives avant un blocage temporaire de 15 minutes. ». C'est le seul retour d'information avant le blocage de WA-03.

## ✅ Objectif

Afficher une erreur générique non révélatrice (jamais « e-mail inconnu ») accompagnée du nombre de tentatives restantes.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-02` — Connexion — erreur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_light.webp?raw=true' width='330' alt='WA-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_dark.webp?raw=true' width='330' alt='WA-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_light.webp?raw=true' width='330' alt='WA-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_dark.webp?raw=true' width='330' alt='WA-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « Identifiants incorrects » · « Il te reste 2 tentatives avant un blocage temporaire de 15 minutes. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••• » · « Se connecter »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22)

## 📐 Règles de gestion

- Message unique `Identifiants incorrects` que l'e-mail existe ou non (anti-énumération, cf. `generic` dans admin-auth.service.ts).
- Tentatives restantes = 5 − échecs consécutifs ; texte au singulier à 1 (« Il te reste 1 tentative ... ») et au pluriel sinon.
- Les deux champs passent en état invalide (bordure `border-error`) ; le champ mot de passe est vidé, l'e-mail conservé.
- À 0 tentative restante l'écran bascule sur WA-03 (blocage 15 minutes).

## 🔄 Comportement et états

- Bandeau d'erreur rouge sous le sous-titre, `role="alert"`, apparition en fondu 150 ms.
- Le focus retourne sur le champ mot de passe.
- Un nouvel essai réussi efface le bandeau ; un essai en cours le masque le temps de la requête.
- Si `remainingAttempts` est absent de la réponse, seul « Identifiants incorrects » est affiché.

## 🛠️ Tâches

- [ ] Créer `src/components/auth/LoginErrorBanner.tsx` (props : `remainingAttempts?: number`).
- [ ] Brancher `onError` de `useLogin` : `AuthError.code === 'BAD_CREDENTIALS'` → état local `loginError`.
- [ ] Appliquer `invalid` aux deux `Input` et vider `password` via `resetField`.
- [ ] Ajouter la pluralisation dans `src/lib/messages.ts` (`attemptsLeft(n)`).
- [ ] Coordonner avec l'API : renvoyer `details.remainingAttempts` (issue API correspondante) ; en attendant, fallback sans compteur.
- [ ] Supprimer le toast d'erreur générique pour ce code (ne plus doublonner).
- [ ] Test Playwright avec 3 échecs consécutifs sur compte de test.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 échecs, quand le 3ᵉ échec est renvoyé avec remainingAttempts=2, alors le bandeau affiche « Il te reste 2 tentatives avant un blocage temporaire de 15 minutes. ».
- [ ] Étant donné remainingAttempts=1, quand le bandeau s'affiche, alors le mot « tentative » est au singulier.
- [ ] Étant donné un e-mail inexistant, quand je soumets, alors le message est strictement identique à celui d'un mauvais mot de passe.
- [ ] Étant donné l'erreur affichée, quand je corrige et soumets avec succès, alors le bandeau disparaît.

## 🧪 Tests à écrire

- [ ] LoginErrorBanner.test.tsx : singulier/pluriel
- [ ] LoginPage.test.tsx : champs invalides et mot de passe vidé après BAD_CREDENTIALS
- [ ] LoginPage.test.tsx : bascule WA-03 quand ACCOUNT_LOCKED

## ♿ Accessibilité et i18n

- role=alert, aria-live assertive
- Couleur d'erreur doublée par une icône (pas de couleur seule)

## 🔗 Dépendances

À réaliser après : `ADM-WA-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
