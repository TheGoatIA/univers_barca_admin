# Journal des changements

Format [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Versions de déploiement : `AAAAMMJJ.N`.

## [Non publié]

### Ajouté

- Socle React + Vite + TypeScript strict, design system (tokens clair/sombre), layout, navigation par rôle.
- Authentification back-office : connexion, 2FA TOTP, refresh automatique sans condition de course.
- Pages tableau de bord (santé de l'API) et joueurs (recherche, pagination), pages d'erreur 403/404.
- Tests Vitest et Playwright, CI, CD (staging sur `dev`, production sur `main`), image Docker nginx.
