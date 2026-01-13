const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Hole die letzte Commit-Zeit
  const lastCommitDate = execSync('git log -1 --format=%ci', {
    encoding: 'utf-8',
  }).trim();

  // Konvertiere zu ISO-String für einfache Verwendung
  const commitDate = new Date(lastCommitDate);

  // Erstelle ein JSON-Objekt mit der Commit-Zeit
  const buildInfo = {
    lastCommitDate: commitDate.toISOString(),
    lastCommitDateFormatted: commitDate.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Berlin',
    }),
  };

  // Schreibe in eine Datei im public-Verzeichnis
  const outputPath = path.join(process.cwd(), 'public', 'build-info.json');
  fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));

  console.log('Build info generated:', buildInfo.lastCommitDateFormatted);
} catch (error) {
  console.warn(
    'Could not get git commit date, using current date:',
    error.message
  );
  // Fallback: Aktuelle Zeit verwenden
  const now = new Date();
  const buildInfo = {
    lastCommitDate: now.toISOString(),
    lastCommitDateFormatted: now.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Berlin',
    }),
  };
  const outputPath = path.join(process.cwd(), 'public', 'build-info.json');
  fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));
}
