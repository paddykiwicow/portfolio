'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const [lastCommitDate, setLastCommitDate] = useState<string>('');

  useEffect(() => {
    // Lade Build-Info vom Client
    fetch('/build-info.json')
      .then(res => res.json())
      .then(data => {
        // Verwende das richtige Format basierend auf der Sprache
        const formattedDate =
          language === 'de'
            ? data.lastCommitDateFormattedDE || data.lastCommitDateFormatted
            : data.lastCommitDateFormattedEN || data.lastCommitDateFormatted;
        setLastCommitDate(formattedDate);
      })
      .catch(() => {
        // Fallback
        setLastCommitDate(
          new Date().toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Berlin',
          })
        );
      });
  }, [language]);

  return (
    <footer className='mt-20 space-y-4 border-t border-stone-200 pt-8 text-sm dark:border-stone-800'>
      <div className='space-y-4'>
        <nav className='flex gap-4'>
          <Link
            href='/impressum'
            className='text-stone-600 underline hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
          >
            {t.footer.impressum}
          </Link>
          <Link
            href='/datenschutz'
            className='text-stone-600 underline hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
          >
            {t.footer.datenschutz}
          </Link>
        </nav>

        <div className='space-y-2 text-xs text-stone-500 dark:text-stone-500'>
          <p>
            {t.footer.builtWith}{' '}
            <a
              href='https://nextjs.org'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-900 dark:hover:text-stone-100'
            >
              Next.js
            </a>
            ,{' '}
            <a
              href='https://www.typescriptlang.org'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-900 dark:hover:text-stone-100'
            >
              TypeScript
            </a>{' '}
            {t.footer.and}{' '}
            <a
              href='https://tailwindcss.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-900 dark:hover:text-stone-100'
            >
              Tailwind CSS
            </a>
            . {t.footer.typeface.split(':')[0]}:{' '}
            <a
              href='https://fonts.google.com/specimen/Instrument+Sans'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-900 dark:hover:text-stone-100'
            >
              Instrument
            </a>
            .
          </p>
          <p>
            {t.footer.designedIn}{' '}
            <a
              href='https://figma.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-900 dark:hover:text-stone-100'
            >
              Figma
            </a>
            . {t.footer.developedWith}{' '}
            <a
              href='https://cursor.sh'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-900 dark:hover:text-stone-100'
            >
              Cursor
            </a>
            . {t.footer.hostedOn}{' '}
            <a
              href='https://vercel.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-900 dark:hover:text-stone-100'
            >
              Vercel
            </a>
            .
          </p>
          <p>{t.footer.noCookies}</p>
        </div>
        <div className='font-mono text-xs text-stone-500 dark:text-stone-400'>
          <p>
            {t.footer.lastChange} {lastCommitDate}.
          </p>
        </div>
      </div>
    </footer>
  );
}
