'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ImpressumPage() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [supportsHover, setSupportsHover] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    // Sync theme state with DOM on mount
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Check if device supports hover (not a touch device)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(hover: hover)');
      setSupportsHover(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setSupportsHover(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <div className='space-y-20'>
      <div className='flex items-start justify-between'>
        <Link
          href='/'
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200/50 transition-all hover:-translate-x-1 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
          aria-label={t.impressum.backToHome}
        >
          <svg
            className='h-4 w-4 text-stone-600 dark:text-stone-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2.5}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </Link>
        <div className='flex items-center gap-2'>
          {/* Theme Switch */}
          <button
            onClick={() => {
              const isDark =
                document.documentElement.classList.contains('dark');
              if (isDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setTheme('light');
              } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
              }
            }}
            onMouseEnter={() => {
              if (supportsHover) setHoveredIcon('theme');
            }}
            onMouseLeave={() => {
              if (supportsHover) setHoveredIcon(null);
            }}
            className='relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
            aria-label={t.header.tooltipTheme}
          >
            <AnimatePresence mode='wait'>
              {theme === 'dark' ? (
                <motion.div
                  key='light'
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Icon
                    icon='streamline-flex:brightness-1-solid'
                    className='h-4 w-4 text-stone-600 dark:text-stone-300'
                  />
                </motion.div>
              ) : (
                <motion.div
                  key='dark'
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Icon
                    icon='streamline-flex:dark-dislay-mode-solid'
                    className='h-4 w-4 text-stone-600 dark:text-stone-300'
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {supportsHover && hoveredIcon === 'theme' && (
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 4,
                    scale: 0.9,
                    filter: 'blur(4px)',
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(4px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
                >
                  {t.header.tooltipTheme}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          {/* Language Switch */}
          <button
            onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
            onMouseEnter={() => {
              if (supportsHover) setHoveredIcon('language');
            }}
            onMouseLeave={() => {
              if (supportsHover) setHoveredIcon(null);
            }}
            className='relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
            aria-label={t.header.tooltipLanguage}
          >
            <AnimatePresence mode='wait'>
              <motion.span
                key={language}
                initial={{ opacity: 0, filter: 'blur(2px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(2px)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='text-xs font-medium text-stone-600 dark:text-stone-300'
              >
                {language === 'de' ? 'EN' : 'DE'}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence>
              {supportsHover && hoveredIcon === 'language' && (
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 4,
                    scale: 0.9,
                    filter: 'blur(4px)',
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(4px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
                >
                  {t.header.tooltipLanguage}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <section>
        <h1 className='text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100'>
          {t.impressum.title}
        </h1>
        <div className='mt-8 space-y-8'>
          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.impressum.tmgTitle}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>Patrick Marx</p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              Pöttcherwiesen 1
            </p>
            <p className='text-stone-900 dark:text-stone-100'>
              30938 Burgwedel
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.impressum.email}{' '}
              <a
                href='mailto:patrickmrx@icloud.com'
                className='underline hover:text-stone-900 dark:hover:text-stone-100'
              >
                patrickmrx@icloud.com
              </a>
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.impressum.responsibleTitle}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>Patrick Marx</p>
          </div>
        </div>
      </section>
    </div>
  );
}
