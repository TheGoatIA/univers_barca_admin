# Déploiement

| Push sur | Environnement | Image                                                                           | Port local VPS | Tag git              |
| -------- | ------------- | ------------------------------------------------------------------------------- | -------------- | -------------------- |
| `dev`    | staging       | `ghcr.io/thegoatia/univers_barca_admin:staging-AAAAMMJJ.N` (+ `staging-latest`) | 8082           | `staging-AAAAMMJJ.N` |
| `main`   | production    | `…:prod-AAAAMMJJ.N` (+ `prod-latest`)                                           | 8081           | `vAAAAMMJJ.N`        |

## Pipeline (`admin-deploy.yml`)

1. **build-check** : lint, types, tests, build.
2. **docker** : calcul de version `AAAAMMJJ.N`, build multi-stage (Vite → nginx non-root), push GHCR, scan Trivy, tag staging.
3. **deploy** : SSH → pull de l'image → `docker compose up -d --force-recreate admin` → health check `/healthz` (12×5 s) → **rollback** vers l'image précédente en cas d'échec. Sans secret `VPS_HOST`, l'étape est ignorée (pipeline vert, image publiée).
4. **release-tag** (production) puis **notify** (Slack optionnel).

## Secrets GitHub (par environnement `staging` / `production`)

`VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_PORT` (optionnel), `SLACK_WEBHOOK_URL` (optionnel).

## VPS

```bash
git clone https://github.com/TheGoatIA/univers_barca_admin.git /var/www/univers-barca/admin
```

Prérequis : l'API tourne via son propre `docker compose` (réseau `univers-barca-<env>_public`). Le conteneur nginx proxifie `/api/` vers `ub-<env>-api:5000` (variable `API_UPSTREAM`) : l'admin et l'API partagent ainsi **la même origine** (cookies `SameSite=Strict`). Reverse proxy TLS : `admin.univers-barca.app → 127.0.0.1:8081`, `admin-staging… → 127.0.0.1:8082`.

## Variables de build

`VITE_API_URL` (défaut `/api/v1`), `VITE_ENV` — injectées via `--build-arg`, visibles dans le bundle (aucun secret).
