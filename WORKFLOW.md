# Workflow: Wagner Bauelemente

## Auf einem neuen Rechner einrichten

1. Tools installieren:
   - VS Code → https://code.visualstudio.com
   - Node.js (LTS) → https://nodejs.org
   - Homebrew (Mac) → https://brew.sh

2. GitHub CLI installieren & anmelden:
   ```
   brew install gh
   gh auth login
   ```

3. Projekt herunterladen:
   ```
   mkdir -p ~/Sites
   cd ~/Sites
   gh repo clone dietmarklee/wagner-bauelemente
   ```

4. Claude Code installieren:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   Dann im Projektordner `claude` tippen und loslegen.

---

## Täglicher Workflow

Änderungen machen, dann ins Terminal:

```
cd ~/Sites/wagner-bauelemente
git add .
git commit -m "Kurze Beschreibung was geändert wurde"
git push
```

→ Netlify deployed automatisch innerhalb von Sekunden.

---

## Nützliche Befehle

| Befehl | Was er macht |
|--------|-------------|
| `git status` | Zeigt was geändert wurde |
| `git pull` | Holt die neuesten Änderungen vom Server |
| `git log --oneline -10` | Zeigt die letzten 10 Änderungen |
