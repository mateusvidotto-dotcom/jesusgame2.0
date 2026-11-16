#!/usr/bin/env bash
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  (sleep 1; if command -v xdg-open >/dev/null 2>&1; then xdg-open http://localhost:8000; elif command -v open >/dev/null 2>&1; then open http://localhost:8000; fi) &
  python3 -m http.server 8000
else
  echo "Python 3 não encontrado. Abra index.html diretamente no navegador."
fi
