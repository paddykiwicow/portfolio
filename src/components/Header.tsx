'use client';

import {
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentListIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/16/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
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
      {/* Avatar + Name + Position */}
      <div className='flex items-center gap-4'>
        <div className='relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full'>
          <Image
            src='/images/avatar.webp'
            alt='Patrick Marx'
            width={56}
            height={56}
            className='h-full w-full object-cover'
            priority
          />
        </div>
        <div>
          <h1 className='text-xl leading-tight font-medium'>Patrick Marx</h1>
          <p className='text-stone-500'>Senior Product Designer</p>
        </div>
      </div>

      {/* Intro Text */}
      <div className='space-y-3'>
        <p>
          Ich arbeite als Product Designer an digitalen Produkten, die über Zeit
          wachsen und genutzt werden. Mich interessieren vor allem{' '}
          <span className='font-medium'>Struktur</span>,{' '}
          <span className='font-medium'>Verständlichkeit</span> und der Umgang
          mit <span className='font-medium'>komplexen Systemen</span> im Alltag.
        </p>
        <p>
          Am liebsten arbeite ich{' '}
          <span className='font-medium'>nah an der Entwicklung</span>. Ich
          gestalte nicht nur Screens, sondern arbeite gemeinsam mit
          Entwickler:innen an UI-Details und konkreten Lösungen.
        </p>
      </div>

      {/* Links as Pills */}
      <nav className='flex flex-wrap gap-2'>
        <button
          onClick={() => copyToClipboard('patrickmrx@icloud.com', 'mail')}
          className='relative inline-flex cursor-copy items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300'
        >
          <span>Mail</span>
          <ClipboardDocumentListIcon className='h-4 w-4 flex-shrink-0 text-stone-500' />
          <AnimatePresence>
            {mailCopied && (
              <motion.span
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100'
              >
                Kopiert!
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <button
          onClick={() => copyToClipboard('+491785859301', 'phone')}
          className='relative inline-flex cursor-copy items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300'
        >
          <span>Telefon</span>
          <ClipboardDocumentListIcon className='h-4 w-4 flex-shrink-0 text-stone-500' />
          <AnimatePresence>
            {phoneCopied && (
              <motion.span
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100'
              >
                Kopiert!
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <a
          href='/cv_patrick-marx.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300'
        >
          <span>CV</span>
          <DocumentArrowDownIcon className='h-4 w-4 flex-shrink-0 text-stone-500' />
        </a>
        <a
          href='https://www.linkedin.com/in/patrickmrx/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300'
        >
          <span>LinkedIn</span>
          <ArrowTopRightOnSquareIcon className='h-4 w-4 flex-shrink-0 text-stone-500' />
        </a>
      </nav>
    </header>
  );
}
