'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';

// Memoized component to prevent re-renders of intro2 when hover state changes
const IntroText2 = memo(function IntroText2({ content }: { content: string }) {
  return (
    <p
      className='text-stone-700 dark:text-stone-200'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
});

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [mailCopied, setMailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
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

  // Reset "Copied!" states when hovering over other buttons
  useEffect(() => {
    if (hoveredIcon && hoveredIcon !== 'mail' && hoveredIcon !== 'phone') {
      setMailCopied(false);
      setPhoneCopied(false);
    }
  }, [hoveredIcon]);

  const copyToClipboard = async (text: string, type: 'mail' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'mail') {
        setMailCopied(true);
        setTimeout(() => setMailCopied(false), 1000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 1000);
      }
    } catch (err) {
      // Fallback for older browsers or mobile
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        if (type === 'mail') {
          setMailCopied(true);
          setTimeout(() => setMailCopied(false), 1000);
        } else {
          setPhoneCopied(true);
          setTimeout(() => setPhoneCopied(false), 1000);
        }
      } catch {
        // Silently fail
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <header className='space-y-6'>
      {/* Avatar + Contact Icons + Language Switch */}
      <div className='flex items-center justify-between gap-4'>
        {/* Avatar */}
        <div className='relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-white dark:ring-stone-700'>
          <Image
            src='/images/avatar.webp'
            alt='Patrick Marx'
            width={48}
            height={48}
            className='h-full w-full object-cover'
            priority
            unoptimized
          />
        </div>
        <div className='flex items-center gap-2 overflow-visible'>
          {/* Contact Icons */}
          <div className='flex gap-2 overflow-visible'>
            <button
              type='button'
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                copyToClipboard('patrickmrx@icloud.com', 'mail');
              }}
              onMouseEnter={() => {
                if (supportsHover) setHoveredIcon('mail');
              }}
              onMouseLeave={() => {
                if (supportsHover) setHoveredIcon(null);
              }}
              className='relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-visible rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
              style={{ touchAction: 'manipulation' }}
              aria-label={t.header.mail}
            >
              <Icon
                icon='streamline-flex:mail-send-envelope-solid'
                className='h-4 w-4 text-stone-600 dark:text-stone-300'
              />
              <AnimatePresence mode='wait'>
                {((mailCopied &&
                  (hoveredIcon === 'mail' || hoveredIcon === null)) ||
                  (supportsHover && hoveredIcon === 'mail')) && (
                  <motion.span
                    key={mailCopied ? 'copied' : 'tooltip'}
                    initial={{
                      opacity: 0,
                      y: 4,
                      scale: 0.9,
                      filter: 'blur(4px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={`absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900 ${
                      mailCopied ? 'top-full mt-2 md:-top-8 md:mt-0' : '-top-8'
                    }`}
                  >
                    {mailCopied ? t.header.copied : t.header.tooltipMail}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button
              type='button'
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                copyToClipboard('+491785859301', 'phone');
              }}
              onMouseEnter={() => {
                if (supportsHover) setHoveredIcon('phone');
              }}
              onMouseLeave={() => {
                if (supportsHover) setHoveredIcon(null);
              }}
              className='relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-visible rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
              style={{ touchAction: 'manipulation' }}
              aria-label={t.header.telefon}
            >
              <Icon
                icon='streamline-flex:phone-solid'
                className='h-4 w-4 text-stone-600 dark:text-stone-300'
              />
              <AnimatePresence mode='wait'>
                {((phoneCopied &&
                  (hoveredIcon === 'phone' || hoveredIcon === null)) ||
                  (supportsHover && hoveredIcon === 'phone')) && (
                  <motion.span
                    key={phoneCopied ? 'copied' : 'tooltip'}
                    initial={{
                      opacity: 0,
                      y: 4,
                      scale: 0.9,
                      filter: 'blur(4px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={`absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900 ${
                      phoneCopied ? 'top-full mt-2 md:-top-8 md:mt-0' : '-top-8'
                    }`}
                  >
                    {phoneCopied ? t.header.copied : t.header.tooltipPhone}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <a
              href='/cv_patrick-marx.pdf'
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setHoveredIcon('cv')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative flex h-8 w-8 items-center justify-center rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
              aria-label='CV'
            >
              <Icon
                icon='streamline-flex:text-file-solid'
                className='h-4 w-4 text-stone-600 dark:text-stone-300'
              />
              <AnimatePresence>
                {supportsHover && hoveredIcon === 'cv' && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 4,
                      scale: 0.9,
                      filter: 'blur(4px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
                  >
                    {t.header.tooltipCV}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
            <a
              href='https://www.linkedin.com/in/patrickmrx/'
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative flex h-8 w-8 items-center justify-center rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
              aria-label='LinkedIn'
            >
              <svg
                height='800px'
                width='800px'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 382 382'
                className='h-4 w-4'
              >
                <rect
                  x='0'
                  y='0'
                  width='382'
                  height='382'
                  rx='16'
                  ry='16'
                  className='fill-stone-600 dark:fill-stone-700'
                />
                <path
                  fill='#FFFFFF'
                  d='M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z'
                />
              </svg>
              <AnimatePresence>
                {supportsHover && hoveredIcon === 'linkedin' && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 4,
                      scale: 0.9,
                      filter: 'blur(4px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
                  >
                    {t.header.tooltipLinkedIn}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </div>
          {/* Pipe Divider */}
          <div className='h-6 w-px bg-stone-300 dark:bg-stone-700' />
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
            onMouseEnter={() => setHoveredIcon('theme')}
            onMouseLeave={() => setHoveredIcon(null)}
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
            onMouseEnter={() => setHoveredIcon('language')}
            onMouseLeave={() => setHoveredIcon(null)}
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
                className='text-xs font-medium text-stone-700 dark:text-stone-300'
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

      {/* Name + Position */}
      <div>
        <h1 className='font-serif text-xl leading-tight font-medium tracking-tight text-stone-900 dark:text-stone-100'>
          Patrick Marx
        </h1>
        <p className='text-stone-500 dark:text-stone-400'>
          {t.header.position}
        </p>
      </div>

      {/* Intro Text */}
      <div className='space-y-3'>
        <p
          className='text-stone-700 dark:text-stone-200'
          dangerouslySetInnerHTML={{ __html: t.header.intro1 }}
        />
        <p
          className='text-stone-700 dark:text-stone-200'
          dangerouslySetInnerHTML={{ __html: t.header.intro2 }}
        />
        <p
          className='text-stone-700 dark:text-stone-200'
          dangerouslySetInnerHTML={{ __html: t.header.intro3 }}
        />
        <p
          className='text-stone-700 dark:text-stone-200'
          dangerouslySetInnerHTML={{ __html: t.header.intro4 }}
        />
      </div>
    </header>
  );
}
