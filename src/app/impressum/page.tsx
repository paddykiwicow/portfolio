'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function ImpressumPage() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className='space-y-20'>
      <div className='flex items-start justify-between'>
        <Link
          href='/'
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 transition-all hover:-translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700'
          aria-label={t.impressum.backToHome}
        >
          <ArrowLeftIcon className='h-4 w-4 text-stone-900 dark:text-stone-100' />
        </Link>
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
