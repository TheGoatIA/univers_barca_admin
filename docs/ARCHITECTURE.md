# Architecture du back-office

```mermaid
flowchart LR
  U[Administrateur] --> SPA[SPA React - nginx]
  SPA -->|/api/v1 - cookie httpOnly + Bearer| API[(API Express)]
  SPA --> RQ[TanStack Query]
  SPA --> ZS[Zustand: auth, thème]
```

## Couches

```mermaid
flowchart TB
  Pages[pages/*Page - lazy] --> Hooks[hooks]
  Pages --> Shared[components/shared + ui]
  Pages --> Api[api/*.api.ts]
  Api --> Axios[lib/axios - intercepteurs]
  Hooks --> Stores[store/*]
  Axios --> Stores
```

## Authentification

```mermaid
sequenceDiagram
  participant A as Admin
  participant S as SPA
  participant API
  A->>S: email + mot de passe (+ code 2FA)
  S->>API: POST /admin/auth/login
  API-->>S: accessToken (mémoire) + cookie httpOnly (refresh)
  S->>API: requêtes Bearer
  API-->>S: 401 (jeton expiré)
  S->>API: POST /admin/auth/refresh (cookie) — une seule fois pour toutes les requêtes en attente
  API-->>S: nouvel accessToken
  S->>API: rejeu des requêtes
```

- Le jeton d'accès n'est **jamais persisté** (mémoire uniquement) ; seul le profil l'est (affichage immédiat).
- Échec du refresh → session purgée, redirection `/login`.

## Routage et rôles

`createBrowserRouter` : `/login`, `/403`, puis `ProtectedRoute` (session) → `MainLayout` → `ProtectedRoute allowedRoles` par section (`lib/navigation.ts` est la source unique : menu + routes). Les modules non implémentés affichent `ModulePage` avec la liste des écrans prévus.

## Design system

Tokens CSS (`src/index.css`) identiques à l'application mobile ; Tailwind les expose (`bg-surface`, `text-primary`…). Mode sombre via `[data-theme="dark"]`, préférence persistée (`uiStore`). Polices : Barlow Condensed (titres) et Inter (texte), auto-hébergées (`@fontsource`).

## Données serveur

Format constant `{ success, data }` / pagination `{ items, total, page, totalPages, hasMore }`. Clés de requête : `['players', { q, page }]`. `staleTime` 30 s ; pas de nouvel essai sur les erreurs 4xx.
