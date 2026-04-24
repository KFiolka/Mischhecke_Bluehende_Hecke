# Deployment Guide (Vercel)

Dieses Dokument beschreibt die Schritte, um die Projekt-Website auf Vercel zu veröffentlichen.

## Voraussetzungen
1. Ein Account bei [Vercel](https://vercel.com).
2. Ein GitHub-, GitLab- oder Bitbucket-Repository, in dem dein Code liegt (empfohlen für automatische Deployments).
3. Alternativ: Die [Vercel CLI](https://vercel.com/download) auf deinem Rechner installiert.

## Vorbereitung: Code zu GitHub pushen (Initial)

Bevor du die GitHub-Integration in Vercel nutzen kannst, muss dein Code in einem Repository liegen. Hier sind die Schritte für den ersten Push:

1. **GitHub Repository erstellen:**
   - Gehe auf [github.com/new](https://github.com/new).
   - Gib dem Repository einen Namen (z.B. `mischhecke-2026`).
   - Wähle "Public" oder "Private" (Vercel funktioniert mit beidem).
   - **Wichtig:** Initialisiere das Repository **nicht** mit README, .gitignore oder Lizenz (das haben wir schon lokal).

2. **Terminal im Projekt-Hauptordner öffnen:**
   Stelle sicher, dass du dich im Ordner `Mischhecke_Bluehende_Hecke` befindest (nicht im Unterordner `website`).

3. **Git Befehle ausführen:**
   ```bash
   # Git initialisieren
   git init

   # Alle Dateien hinzufügen
   git add .

   # Ersten Commit erstellen
   git commit -m "Initialer Commit: Mischhecke Website Projekt"

   # Main-Branch festlegen
   git branch -M main

   # Remote-URL hinzufügen (Ersetze den Link mit DEINEM Repository-Link)
   git remote add origin https://github.com/DEIN_USERNAME/DEIN_REPO_NAME.git

   # Code pushen
   git push -u origin main
   ```

## Option A: GitHub Integration (Empfohlen)

1. **Code pushen:** Lade deinen aktuellen Code in ein GitHub-Repository hoch.
2. **Vercel Dashboard:** Gehe auf `vercel.com/new`.
3. **Repository importieren:** Wähle dein Repository aus.
4. **Konfiguration:**
   - **Framework Preset:** Vite (sollte automatisch erkannt werden).
   - **Root Directory:** `./website` (Wichtig: Da die Website im Unterordner `website` liegt).
   - **Build Command:** `npm run build`.
   - **Output Directory:** `dist`.
5. **Environment Variables:** Falls du API-Keys nutzt (siehe `.env.example`), trage diese im Bereich "Environment Variables" ein.
6. **Deploy:** Klicke auf "Deploy". Vercel wird nun bei jedem Push in dein Repository die Website automatisch aktualisieren.

## Option B: Vercel CLI (Manuell)

1. Öffne ein Terminal im Ordner `website`.
2. Installiere die CLI (falls noch nicht geschehen): `npm i -g vercel`.
3. Logge dich ein: `vercel login`.
4. Starte das Deployment: `vercel`.
5. Folge den Anweisungen im Terminal:
   - "Set up and deploy?" -> `Y`
   - "Which scope?" -> Wähle deinen User.
   - "Link to existing project?" -> `N`
   - "Project name?" -> `mischhecke-projekt` (oder ähnlich).
   - "In which directory is your code located?" -> `./` (da du bereits im `website` Ordner bist).
   - "Want to modify settings?" -> `N` (Standardeinstellungen für Vite passen meist).
6. Nach dem erfolgreichen Preview-Deployment kannst du mit `vercel --prod` die Website live schalten.

## Wichtige Hinweise für dieses Projekt
- **Unterordner:** Achte darauf, dass Vercel weiß, dass der ausführbare Code im Verzeichnis `/website` liegt.
- **Node.js Version:** Vercel nutzt standardmäßig eine aktuelle Node.js Version (18.x oder 20.x), was mit React 19 perfekt harmoniert.
- **Build-Check:** Du kannst vorab lokal prüfen, ob der Build fehlerfrei durchläuft:
  ```bash
  cd website
  npm run build
  ```
