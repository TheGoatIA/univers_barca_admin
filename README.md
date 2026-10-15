# Univers Barça — Back-office d'administration

SPA React pour gérer le contenu (joueurs, matchs, quiz, éditorial), la modération communautaire, la supervision technique et les comptes.
Stack : **React 18 · Vite · TypeScript strict · Tailwind (tokens du design system) · TanStack Query/Table · Zustand · React Hook Form + Zod · Axios**.

> Dépôts frères : [`univers_barca_api`](https://github.com/TheGoatIA/univers_barca_api) · [`univers_barca_mobile`](https://github.com/TheGoatIA/univers_barca_mobile)

## Démarrage rapide

```bash
# Prérequis : Node 22+, API démarrée sur http://localhost:5000 (voir le dépôt API)
cp .env.example .env
npm ci
npm run dev        # http://localhost:5173 — /api est proxifié vers l'API
```

Connexion : le compte super-administrateur est créé par `npm run seed` côté API (`ADMIN_BOOTSTRAP_*`).

## Scripts

| Commande                                | Description                                |
| --------------------------------------- | ------------------------------------------ |
| `npm run dev` / `build` / `preview`     | Développement, build de production, aperçu |
| `npm run lint` · `format` · `typecheck` | ESLint 9, Prettier, `tsc --noEmit`         |
| `npm test` · `test:coverage`            | Vitest + Testing Library                   |
| `npm run test:e2e`                      | Playwright (parcours de fumée)             |

## Rôles et sections

| Rôle              | Accès                                                   |
| ----------------- | ------------------------------------------------------- |
| `content-manager` | Joueurs, matchs, contenu éditorial, quiz, notifications |
| `moderator`       | Modération, utilisateurs                                |
| `super-admin`     | Tout, dont supervision et comptes admin                 |

Le cloisonnement est appliqué côté client (`ProtectedRoute allowedRoles`) **et** côté API (RBAC).

## Environnements et déploiement

| Branche | Environnement | Pipeline                                                                                               |
| ------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| `dev`   | staging       | `admin-deploy.yml` → image `ghcr.io/thegoatia/univers_barca_admin:staging-AAAAMMJJ.N`, déploiement SSH |
| `main`  | production    | idem `prod-AAAAMMJJ.N` + tag `vAAAAMMJJ.N`                                                             |

Les variables `VITE_*` sont injectées **au build** (SPA statique). Voir [Déploiement](docs/DEPLOYMENT.md) · [Architecture](docs/ARCHITECTURE.md) · [ADR](docs/adr/) · [Contribuer](CONTRIBUTING.md).

## Licence

Logiciel propriétaire — voir [`LICENSE`](LICENSE) et [`NOTICE.md`](NOTICE.md).
