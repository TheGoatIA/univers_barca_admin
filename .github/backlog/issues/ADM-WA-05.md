> **ADM-WA-05** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Après 5 échecs consécutifs l'API verrouille le compte 15 minutes (`lockedUntil`). WA-03 présente l'état « Trop de tentatives » avec un compte à rebours « Réessaie dans 14:32 » et un bouton « Se connecter » désactivé.

## ✅ Objectif

Informer l'administrateur de la durée restante du blocage, empêcher les soumissions inutiles et proposer de contacter un super-admin.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-03` — Compte temporairement bloqué
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__desktop_light.webp?raw=true' width='330' alt='WA-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__desktop_dark.webp?raw=true' width='330' alt='WA-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__tablet_light.webp?raw=true' width='330' alt='WA-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-03_compte-temporairement-bloque__tablet_dark.webp?raw=true' width='330' alt='WA-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Trop de tentatives » · « Par sécurité, la connexion est suspendue. » · « Réessaie dans 14:32 » · « Après 5 échecs consécutifs, le compte est bloqué 15 minutes. Un super-admin peut le débloquer. » · « Se connecter » · « Contacter un super-admin »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-41%5D%22)

## 📐 Règles de gestion

- Titre « Trop de tentatives », sous-titre « Par sécurité, la connexion est suspendue. ».
- Encart jaune avec cadenas : « Réessaie dans MM:SS » (gras) puis « Après 5 échecs consécutifs, le compte est bloqué 15 minutes. Un super-admin peut le débloquer. ».
- Bouton « Se connecter » désactivé (`disabled`, `aria-disabled`) tant que le compte à rebours > 0 ; lien « Contacter un super-admin » (icône enveloppe) → `mailto:` configurable via `VITE_ADMIN_CONTACT_EMAIL`.
- À 00:00 le bouton redevient actif et l'écran retourne au formulaire WA-01 sans rechargement.

## 🔄 Comportement et états

- Le temps restant est calculé à partir de `lockedUntil` (horloge serveur) moins `Date.now()` corrigé par l'écart `Date` de la réponse, pour éviter une dérive d'horloge locale.
- Mise à jour chaque seconde (setInterval nettoyé au démontage), affichage `mm:ss` à largeur fixe (chiffres tabulaires).
- Un rechargement de page conserve l'état : un nouvel essai de login renvoie ACCOUNT_LOCKED avec `retryAfterSeconds`.
- `aria-live="polite"` annonce uniquement les minutes entières (pas chaque seconde).

## 🛠️ Tâches

- [ ] Créer `src/pages/auth/AccountLockedPage.tsx` (ou état du LoginPage piloté par `lockedUntil` dans l'état de navigation).
- [ ] Créer le hook `src/hooks/useCountdown.ts` (`useCountdown(targetMs)` retourne `{remaining, formatted, done}`).
- [ ] Utiliser `formatMmSs` dans `src/lib/utils.ts`.
- [ ] Gérer le cas `retryAfterSeconds` absent : fallback 15 min.
- [ ] Mettre `VITE_ADMIN_CONTACT_EMAIL` dans `.env.example` et `src/vite-env.d.ts`.
- [ ] Ajouter un test Playwright avec horloge simulée (`page.clock`).
- [ ] Capture clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné lockedUntil dans 872 s, quand l'écran s'affiche, alors « Réessaie dans 14:32 » est visible.
- [ ] Étant donné le compte à rebours à 00:01, quand une seconde s'écoule, alors le bouton est activé et le formulaire réapparaît.
- [ ] Étant donné le bouton désactivé, quand j'appuie sur Entrée, alors aucune requête n'est envoyée.
- [ ] Étant donné l'horloge locale décalée de 5 min, quand l'écran s'affiche, alors le temps restant reste correct grâce à l'en-tête Date serveur.

## 🧪 Tests à écrire

- [ ] useCountdown.test.ts : décompte, fin, nettoyage de l'intervalle (fake timers)
- [ ] AccountLockedPage.test.tsx : bouton désactivé puis activé
- [ ] formatMmSs : 872 → « 14:32 », 59 → « 00:59 », 0 → « 00:00 »
- [ ] Playwright : 5 échecs → écran de blocage

## ♿ Accessibilité et i18n

- Libellé « Réessaie dans 14:32 »
- aria-live polite par minute

## 🔗 Dépendances

À réaliser après : `ADM-WA-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Backend §3.11
- CDC Backend §5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
