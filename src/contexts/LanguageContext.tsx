'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import type { Language } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de');

  useEffect(() => {
    // Load from localStorage on mount
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('language') as Language | null;
        if (saved && (saved === 'de' || saved === 'en')) {
          setLanguageState(saved);
        }
      }
    } catch (e) {
      // Silently fail if localStorage is not available (e.g., private mode on iOS)
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', lang);
      }
    } catch (e) {
      // Silently fail if localStorage is not available (e.g., private mode on iOS)
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
