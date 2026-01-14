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
          <h1 className='text-xl leading-tight font-medium'>Patrick Marx</h1>
          <p className='text-stone-500 dark:text-stone-400'>
            Senior Product Designer
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className='space-y-3'>
        <p>
          Ich liebe es, vor komplexen, gewachsenen Systemen zu sitzen, alles zu
          durchdringen und aufzuräumen. Design Systems und Component Libraries
          sind mein Steckenpferd – je nerdiger, desto besser.
        </p>
        <p>
          Am meisten Energie gibt es mir, wenn ich nah mit Development
          zusammenarbeite.{' '}
          <span className='font-medium'>
            Ich designe gerne in Figma, bin aber genauso gerne am Code.
          </span>{' '}
          Tagelange Design-Sessions sind mir zu zäh – ich gehe lieber früher ins
          Prototyping und setze Ideen direkt in Production um.
        </p>
      </div>

      {/* Links as Pills */}
      <nav className='flex flex-wrap gap-2'>
        <button
          onClick={() => copyToClipboard('patrickmrx@icloud.com', 'mail')}
          className='relative inline-flex cursor-copy items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          <span>Mail</span>
          <ClipboardDocumentListIcon className='h-4 w-4 flex-shrink-0 text-stone-500 dark:text-stone-400' />
          <AnimatePresence>
            {mailCopied && (
              <motion.span
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
              >
                Kopiert!
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <button
          onClick={() => copyToClipboard('+491785859301', 'phone')}
          className='relative inline-flex cursor-copy items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          <span>Telefon</span>
          <ClipboardDocumentListIcon className='h-4 w-4 flex-shrink-0 text-stone-500 dark:text-stone-400' />
          <AnimatePresence>
            {phoneCopied && (
              <motion.span
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
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
          className='inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          <span>CV</span>
          <DocumentArrowDownIcon className='h-4 w-4 flex-shrink-0 text-stone-500 dark:text-stone-400' />
        </a>
        <a
          href='https://www.linkedin.com/in/patrickmrx/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        >
          <span>LinkedIn</span>
          <ArrowTopRightOnSquareIcon className='h-4 w-4 flex-shrink-0 text-stone-500 dark:text-stone-400' />
        </a>
      </nav>
    </header>
  );
}
