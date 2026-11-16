@echo off
cd /d "%~dp0"
where python >nul 2>nul
if %errorlevel%==0 (
  start "THE WITNESS" http://localhost:8000
  python -m http.server 8000
) else (
  echo Python 3 nao encontrado. Abra index.html diretamente no navegador.
  pause
)
