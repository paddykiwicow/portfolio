'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [lastCommitDate, setLastCommitDate] = useState<string>('');

  useEffect(() => {
    // Lade Build-Info vom Client
    fetch('/build-info.json')
      .then(res => res.json())
      .then(data => setLastCommitDate(data.lastCommitDateFormatted))
      .catch(() => {
        // Fallback
        setLastCommitDate(
          new Date().toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Berlin',
          })
        );
      });
  }, []);

  return (
    <footer className='mt-20 space-y-4 border-t border-stone-200 pt-8 text-sm dark:border-stone-800'>
      <div className='space-y-4'>
        <nav className='flex gap-4'>
          <Link
            href='/impressum'
            className='text-stone-600 underline dark:text-stone-400'
          >
            Impressum
          </Link>
          <Link
            href='/datenschutz'
            className='text-stone-600 underline dark:text-stone-400'
          >
            Datenschutz
          </Link>
        </nav>

        <div className='space-y-2 text-xs text-stone-500 dark:text-stone-500'>
          <p>
            Gebaut mit{' '}
            <a
              href='https://nextjs.org'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-700 dark:hover:text-stone-300'
            >
              Next.js
            </a>
            ,{' '}
            <a
              href='https://www.typescriptlang.org'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-700 dark:hover:text-stone-300'
            >
              TypeScript
            </a>
            {' und '}
            <a
              href='https://tailwindcss.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-700 dark:hover:text-stone-300'
            >
              Tailwind CSS
            </a>
            . Typeface: Instrument.
          </p>
          <p>
            Designed in{' '}
            <a
              href='https://figma.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-700 dark:hover:text-stone-300'
            >
              Figma
            </a>
            . Entwickelt mit{' '}
            <a
              href='https://cursor.sh'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-700 dark:hover:text-stone-300'
            >
              Cursor
            </a>
            . Gehosted auf{' '}
            <a
              href='https://vercel.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-stone-700 dark:hover:text-stone-300'
            >
              Vercel
            </a>
            .
          </p>
          <p>Keine Cookies oder Tracking-Tools verwendet :)</p>
        </div>
        <div className='font-mono text-xs text-stone-500 dark:text-stone-400'>
          <p>Letzte Änderung: {lastCommitDate}.</p>
        </div>
      </div>
    </footer>
  );
}
