const fs = require('fs');
const path = require('path');

// Verwende einfach die aktuelle Zeit beim Build
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

// Schreibe in eine Datei im public-Verzeichnis
const outputPath = path.join(process.cwd(), 'public', 'build-info.json');
fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));

console.log('Build info generated:', buildInfo.lastCommitDateFormatted);
