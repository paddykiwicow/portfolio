'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    // Funktion zum Setzen des Themes basierend auf System-Präferenzen
    const setTheme = () => {
      try {
        if (typeof window !== 'undefined' && window.matchMedia) {
          const isDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches;
          if (isDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      } catch (e) {
        // Silently fail if matchMedia is not available
      }
    };

    // Initial setzen
    setTheme();

    // Listener für Änderungen der System-Präferenzen
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', setTheme);

        return () => {
          mediaQuery.removeEventListener('change', setTheme);
        };
      }
    } catch (e) {
      // Silently fail if matchMedia is not available
    }
  }, []);

  return null;
}
