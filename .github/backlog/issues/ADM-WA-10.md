> **ADM-WA-10** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Les super-admins doivent activer le TOTP. WA-06 « Active la double authentification » affiche un QR code, la clé en clair groupée (JBSW Y3DP EHPK 3PXP) avec « Copier la clé », un champ de vérification et l'avertissement sur les 8 codes de secours « qui ne seront plus affichés ».

## ✅ Objectif

Guider l'activation du 2FA (setup → vérification → affichage unique des codes de secours) en s'appuyant sur `/admin/auth/2fa/setup` et `/2fa/confirm`.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-06` — Configuration du 2FA — QR code
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_light.webp?raw=true' width='330' alt='WA-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__desktop_dark.webp?raw=true' width='330' alt='WA-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_light.webp?raw=true' width='330' alt='WA-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-06_configuration-du-2fa-qr-code__tablet_dark.webp?raw=true' width='330' alt='WA-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Active la double authentification » · « Scanne le QR code avec Google Authenticator, 1Password ou Authy. » · « Impossible de scanner ? » · « JBSW Y3DP EHPK 3PXP » · « Copier la clé » · « Code de vérification » · « 482 1 » · « Activer le 2FA » · « Conserve tes 8 codes de secours dans un endroit sûr : ils ne seront plus affichés. »

**Composants repérés** : `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-06%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-34%5D%22) · [API-AUTH-36](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-36%5D%22)

## 📐 Règles de gestion

- Étape 1 : appel `POST /admin/auth/2fa/setup` à l'arrivée ; réponse `{ otpauthUrl, qrDataUrl, secret }`. QR de ≈ 150 px à gauche, à droite « Impossible de scanner ? » + clé en monospace (groupes de 4) + bouton « Copier la clé » (confirmation « Clé copiée » 2 s).
- Étape 2 : champ « Code de vérification » (préfixe #, 6 chiffres) + bouton « Activer le 2FA » → `POST /2fa/confirm { code }`.
- Étape 3 : l'API renvoie 8 codes de secours ; ils sont affichés UNE seule fois dans une grille 2×4 avec « Copier tout » et « Télécharger .txt » ; case à cocher « J'ai conservé mes codes » obligatoire avant « Terminer ».
- Encart jaune permanent : « Conserve tes 8 codes de secours dans un endroit sûr : ils ne seront plus affichés. ».
- Application recommandée dans le texte : Google Authenticator, 1Password ou Authy.

## 🔄 Comportement et états

- Le secret n'est conservé qu'en mémoire du composant ; il n'est ni mis en cache TanStack Query (`gcTime: 0`) ni écrit dans le storage ; l'écran est exclu des captures de session replay.
- Un rechargement avant confirmation relance un nouveau setup (l'ancien secret non confirmé est invalidé côté API).
- Code invalide : « Code incorrect, vérifie l'heure de ton téléphone. » sans quitter l'étape 2.
- Une fois le 2FA activé, la route `/2fa/configuration` redirige vers `/` pour ce compte.
- Accessible depuis un menu Profil pour un super-admin déjà connecté sans 2FA (bandeau de rappel).

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/auth/2fa/setup` | Génère un secret TOTP non confirmé | — | { success:true, data:{ otpauthUrl, qrDataUrl, secret } } |
| `POST` | `/api/v1/admin/auth/2fa/confirm` | Confirme le code, active le TOTP | { code } | { success:true, data:{ backupCodes: string[8] } } |

## 🗄️ Données

- AdminUser.totpSecret (select:false), totpEnabled
- Codes de secours : 8 hachés (Argon2id) stockés côté API

## 🛠️ Tâches

- [ ] Créer `src/pages/auth/Setup2faPage.tsx` et la route `/2fa/configuration` protégée (session requise).
- [ ] Générer l'image QR côté serveur (`qrcode` déjà utilisé par l'API) et l'afficher en `<img alt="QR code d'activation">` ; ne pas ajouter de lib QR côté client.
- [ ] Créer `CopyButton` (navigator.clipboard + repli `execCommand`).
- [ ] Créer `BackupCodesPanel` (grille, copie, téléchargement `univers-barca-codes-secours.txt` via Blob).
- [ ] Compléter `POST /2fa/confirm` côté contrat pour renvoyer `backupCodes: string[8]` (issue API associée).
- [ ] Ajouter `authStore.totpEnabled` et mise à jour du profil après confirmation.
- [ ] Bandeau de rappel pour super-admin sans 2FA dans `MainLayout`.
- [ ] Tests unitaires avec MSW et E2E (otplib).

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin sans 2FA, quand j'ouvre la page, alors QR, clé « JBSW Y3DP EHPK 3PXP » et champ de vérification sont visibles.
- [ ] Étant donné la clé affichée, quand je clique sur « Copier la clé », alors le presse-papiers contient la clé sans espaces et « Clé copiée » apparaît.
- [ ] Étant donné un code valide, quand je clique sur « Activer le 2FA », alors 8 codes de secours sont affichés une seule fois.
- [ ] Étant donné les codes affichés, quand je n'ai pas coché « J'ai conservé mes codes », alors « Terminer » est désactivé.
- [ ] Étant donné un code invalide, quand je soumets, alors l'erreur est affichée et le QR reste inchangé.

## 🧪 Tests à écrire

- [ ] Setup2faPage.test.tsx : affichage QR + clé groupée
- [ ] Setup2faPage.test.tsx : copie de la clé
- [ ] BackupCodesPanel.test.tsx : 8 codes, téléchargement Blob
- [ ] Setup2faPage.test.tsx : erreur de code
- [ ] Playwright setup2fa.spec.ts : activation complète

## ♿ Accessibilité et i18n

- Clé lisible lettre par lettre (`aria-label` avec espaces)
- Annonce « Clé copiée » via aria-live

## 🔗 Dépendances

À réaliser après : `ADM-WA-06` · `ADM-WA-01` · `ADM-WA-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Admin §3.3
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
