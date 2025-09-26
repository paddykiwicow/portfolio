# Portfolio Development Setup

## 🚀 Was wurde eingerichtet

### Code Quality Tools

- **Prettier**: Automatische Code-Formatierung
- **ESLint**: Erweiterte Linting-Regeln für TypeScript und React
- **Husky**: Git Hooks für automatische Code-Qualitätsprüfungen
- **lint-staged**: Führt Linting nur auf geänderte Dateien aus

### NPM Scripts

```bash
npm run lint          # Linting für alle Dateien
npm run lint:fix      # Linting mit automatischen Fixes
npm run format        # Code-Formatierung mit Prettier
npm run format:check  # Prüft Formatierung ohne Änderungen
npm run type-check    # TypeScript-Typenprüfung
npm run check-all     # Alle Checks auf einmal
```

### VS Code Extensions (empfohlen)

Die wichtigsten Extensions sind in `.vscode/extensions.json` aufgelistet:

- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag
- Path Intellisense

### Automatische Features

- **Format on Save**: Code wird automatisch formatiert beim Speichern
- **Auto Import**: TypeScript-Imports werden automatisch hinzugefügt
- **Pre-commit Hooks**: Code wird automatisch gelintet und formatiert vor jedem Commit
- **Tailwind CSS**: Automatische Klassen-Sortierung und IntelliSense

## 🎯 Nächste Schritte

1. **VS Code Extensions installieren**: Öffne VS Code und installiere die empfohlenen Extensions
2. **Ersten Commit machen**: `git add . && git commit -m "Initial setup with dev tools"`
3. **Code formatieren**: `npm run format` für alle bestehenden Dateien

## 💡 Tipps

- Verwende `Ctrl/Cmd + Shift + P` → "Format Document" für manuelle Formatierung
- ESLint-Fehler werden automatisch in VS Code angezeigt
- Tailwind-Klassen werden automatisch sortiert und vervollständigt
- TypeScript-Imports werden automatisch hinzugefügt beim Tippen
