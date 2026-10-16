#!/usr/bin/env bash
# Remplace l'écusson officiel par le logo de substitution (favicon, logo de l'interface, documentation).
set -euo pipefail
cd "$(dirname "$0")/.."
S=docs/assets/logo-alt
cp $S/logo.png docs/assets/logo.png
cp $S/logo_256.png public/logo.png
cp $S/apple-touch-icon.png public/apple-touch-icon.png
cp $S/favicon-32.png public/favicon-32.png
cp $S/favicon.ico public/favicon.ico
echo "Logo de substitution appliqué. Pensez à mettre à jour NOTICE.md."
