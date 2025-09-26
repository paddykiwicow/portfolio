/** @type {import('prettier').Config} */
const config = {
  // Basis-Konfiguration
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,

  // JSX-spezifische Einstellungen
  jsxSingleQuote: true,
  jsxBracketSameLine: false,

  // Andere nützliche Einstellungen
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  // Plugins für bessere Formatierung
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
