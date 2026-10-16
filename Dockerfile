# syntax=docker/dockerfile:1.7
# ─── Stage 1 : build Vite (variables VITE_* injectées au BUILD, jamais au runtime) ───
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .
ARG VITE_API_URL=/api/v1
ARG VITE_ENV=production
ENV VITE_API_URL=$VITE_API_URL VITE_ENV=$VITE_ENV
RUN npm run build

# ─── Stage 2 : serveur statique nginx (non-root) ──────────────────────────────────────
FROM nginxinc/nginx-unprivileged:1.29-alpine AS production
COPY docker/nginx.conf /etc/nginx/templates/default.conf.template
COPY docker/security-headers.conf /etc/nginx/security-headers.conf
ENV API_UPSTREAM=api:5000
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1
