'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FooterContent() {
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
          })
        );
      });
  }, []);

  return (
    <footer className='mt-20 space-y-4 border-t border-stone-200 pt-8 text-sm'>
      <div className='space-y-4'>
        <nav className='flex gap-4'>
          <Link href='/impressum' className='text-stone-600 underline'>
            Impressum
          </Link>
          <Link href='/datenschutz' className='text-stone-600 underline'>
            Datenschutz
          </Link>
        </nav>

        <div className='space-y-2 text-stone-600'>
          <p>
            Gebaut mit{' '}
            <a
              href='https://nextjs.org'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Next.js
            </a>
            ,{' '}
            <a
              href='https://www.typescriptlang.org'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              TypeScript
            </a>
            {' und '}
            <a
              href='https://tailwindcss.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Tailwind CSS
            </a>
            . Schrift: Instrument Sans.
          </p>
          <p>
            Entwickelt mit{' '}
            <a
              href='https://cursor.sh'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Cursor
            </a>
            . Designed in{' '}
            <a
              href='https://figma.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Figma
            </a>
            . Gehostet auf{' '}
            <a
              href='https://vercel.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Vercel
            </a>
            .
          </p>
          <p>Letzter Build: {lastCommitDate}.</p>
        </div>
      </div>
    </footer>
  );
}
