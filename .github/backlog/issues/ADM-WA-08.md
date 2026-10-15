> **ADM-WA-08** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

WA-05 affiche, sous « Nouveau mot de passe », une jauge de 4 segments verts et deux critères (« 12 caractères minimum », « Majuscule, chiffre et symbole ») cochés en direct, puis un champ « Confirmation » avec coche de validation.

## ✅ Objectif

Fournir `PasswordField` + `PasswordStrengthMeter` + `PasswordRules` réutilisables (invitation, et plus tard changement de mot de passe).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-05` — Première connexion — définir le mot de passe
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_light.webp?raw=true' width='330' alt='WA-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__desktop_dark.webp?raw=true' width='330' alt='WA-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_light.webp?raw=true' width='330' alt='WA-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-05_premiere-connexion-definir-le-mot-de-passe__tablet_dark.webp?raw=true' width='330' alt='WA-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Bienvenue dans l’équipe » · « Léa, définis ton mot de passe pour activer ton compte Content-manager. » · « Lien d’invitation à usage unique · valable 48 h » · « Nouveau mot de passe » · « •••••••••••••• » · « Confirmation » · « 12 caractères minimum » · « Majuscule, chiffre et symbole » · « Activer mon compte »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-09%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-01%5D%22) · [API-AUTH-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-03%5D%22) · [API-AUTH-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-06%5D%22) · [API-AUTH-35](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-35%5D%22) · [API-AUTH-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-36%5D%22) · [API-AUTH-40](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-40%5D%22)

## 📐 Règles de gestion

- Score 0-4 : +1 longueur ≥ 12, +1 majuscule, +1 chiffre, +1 symbole ; 4 segments colorés (rouge, orange, jaune, vert) ; un mot de passe n'est valide que s'il atteint 4/4.
- Critères listés avec icône `CheckCircle2` verte quand satisfaits, `Circle` grise sinon ; ils ne deviennent rouges qu'après la première soumission.
- Champ Confirmation : bordure verte et coche tant qu'il est identique au premier ; sinon message « Les mots de passe ne correspondent pas ».
- Aucune estimation par bibliothèque externe (pas de zxcvbn) : règles du CDC uniquement.

## 🔄 Comportement et états

- Le calcul se fait localement ; le mot de passe n'est jamais envoyé avant soumission.
- Coller est autorisé (gestionnaires de mots de passe).
- Œil afficher/masquer indépendant sur chaque champ.

## 🛠️ Tâches

- [ ] Créer `src/lib/passwordPolicy.ts` : `evaluatePassword(pw) → { score, rules: {length, upper, digit, symbol} }`.
- [ ] Créer `src/components/auth/PasswordStrengthMeter.tsx` (4 segments, `role="meter"` aria-valuenow).
- [ ] Créer `src/components/auth/PasswordRules.tsx`.
- [ ] Réutiliser `PasswordInput` de l'issue ui-login.
- [ ] Aligner `passwordPolicySchema` sur `evaluatePassword` (une seule source de vérité).
- [ ] Ajouter `aria-live="polite"` sur la liste des critères.
- [ ] Tests unitaires de la politique.

## ✔️ Critères d'acceptation

- [ ] Étant donné « Barca2026! », quand je saisis, alors 2 critères sur 3 listés restent à vérifier (longueur 10 < 12) et la jauge indique 3/4.
- [ ] Étant donné « Univers!Barca2026 », quand je saisis, alors la jauge est pleine et les deux critères sont cochés.
- [ ] Étant donné une confirmation différente, quand je quitte le champ, alors l'erreur apparaît.
- [ ] Étant donné un mot de passe faible, quand je soumets, alors le bouton reste inactif ou la soumission est refusée avec focus sur le champ.

## 🧪 Tests à écrire

- [ ] passwordPolicy.test.ts : 12 combinaisons de règles
- [ ] PasswordStrengthMeter.test.tsx : aria-valuenow
- [ ] PasswordRules.test.tsx : icônes selon le statut
- [ ] PasswordField : confirmation synchronisée

## ♿ Accessibilité et i18n

- role=meter avec aria-valuetext « Robustesse : forte »
- Libellés « 12 caractères minimum », « Majuscule, chiffre et symbole »

## 🔗 Dépendances

À réaliser après : `ADM-WA-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Admin §3.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
