'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    // Funktion zum Setzen des Themes basierend auf System-Präferenzen
    const setTheme = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Initial setzen
    setTheme();

    // Listener für Änderungen der System-Präferenzen
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', setTheme);

    return () => {
      mediaQuery.removeEventListener('change', setTheme);
    };
  }, []);

  return null;
}
