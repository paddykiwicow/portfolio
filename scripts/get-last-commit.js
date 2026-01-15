const fs = require('fs');
const path = require('path');

// Verwende einfach die aktuelle Zeit beim Build
const now = new Date();

// Formatiere für DE
const formattedDE = now.toLocaleString('de-DE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Berlin',
});

// Formatiere für EN
const dateEN = now.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Europe/Berlin',
});
const timeEN = now.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Europe/Berlin',
});
const formattedEN = `${dateEN} at ${timeEN}`;

const buildInfo = {
  lastCommitDate: now.toISOString(),
  // Speichere beide Formate für DE und EN
  lastCommitDateFormattedDE: formattedDE,
  lastCommitDateFormattedEN: formattedEN,
};

// Schreibe in eine Datei im public-Verzeichnis
const outputPath = path.join(process.cwd(), 'public', 'build-info.json');
fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));

console.log('Build info generated:', buildInfo.lastCommitDateFormattedDE);
