@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1 || (echo Node.js ontbreekt. Installeer Node.js LTS.& pause & exit /b 1)
if not exist node_modules call npm install
start "" http://127.0.0.1:4173
call npm run dev
