'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, displayLanguage } = useLanguage();
  const t = translations[displayLanguage];
  const [mailCopied, setMailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = async (text: string, type: 'mail' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'mail') {
        setMailCopied(true);
        setTimeout(() => setMailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch {
      // Silently fail if clipboard API is not available
    }
  };

  return (
    <header className='space-y-6'>
      {/* Avatar + Name + Position + Language Switch */}
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center gap-4'>
          {/* Avatar - currently hidden, remove 'hidden' class to show */}
          <div className='relative hidden h-16 w-16 flex-shrink-0 overflow-hidden rounded-full'>
            <Image
              src='/images/avatar.webp'
              alt='Patrick Marx'
              width={56}
              height={56}
              className='h-full w-full object-cover'
              priority
              unoptimized
            />
          </div>
          <div>
            <h1 className='text-xl leading-tight font-medium text-stone-900 dark:text-stone-100'>
              Patrick Marx
            </h1>
            <p className='text-stone-900/60 dark:text-stone-100/60'>
              {t.header.position}
            </p>
          </div>
        </div>
        <div className='flex gap-1'>
          <button
            onClick={() => setLanguage('de')}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
              language === 'de'
                ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
                : 'bg-stone-200 text-stone-900 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
            }`}
          >
            DE
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
              language === 'en'
                ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
                : 'bg-stone-200 text-stone-900 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Intro Text */}
      <div className='space-y-3'>
        <p className='text-stone-900 dark:text-stone-100'>{t.header.intro1}</p>
        <p
          className='text-stone-900 dark:text-stone-100'
          dangerouslySetInnerHTML={{ __html: t.header.intro2 }}
        />
      </div>

      {/* Links as Pills */}
      <nav className='flex flex-wrap gap-2'>
        <button
          onClick={() => copyToClipboard('patrickmrx@icloud.com', 'mail')}
          className='relative inline-flex cursor-copy items-center justify-center rounded-full bg-stone-200 px-4 py-2 text-[15px] font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          {t.header.mail}
          <AnimatePresence>
            {mailCopied && (
              <motion.span
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
              >
                {t.header.copied}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <button
          onClick={() => copyToClipboard('+491785859301', 'phone')}
          className='relative inline-flex cursor-copy items-center justify-center rounded-full bg-stone-200 px-4 py-2 text-[15px] font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          {t.header.telefon}
          <AnimatePresence>
            {phoneCopied && (
              <motion.span
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
              >
                {t.header.copied}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <a
          href='/cv_patrick-marx.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center rounded-full bg-stone-200 px-4 py-2 text-[15px] font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          CV
        </a>
        <a
          href='https://www.linkedin.com/in/patrickmrx/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center rounded-full bg-stone-200 px-4 py-2 text-[15px] font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
