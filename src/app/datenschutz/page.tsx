'use client';

import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

export default function DatenschutzPage() {
  const { language, setLanguage, displayLanguage } = useLanguage();
  const t = translations[displayLanguage];

  return (
    <div className='space-y-20'>
      <div className='flex items-start justify-between'>
        <Link
          href='/'
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 transition-all hover:-translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700'
          aria-label={t.datenschutz.backToHome}
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
          {t.datenschutz.title}
        </h1>
        <div className='mt-8 space-y-8'>
          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section1Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section1Text1}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section1Text2}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section1Text3}
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section2Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section2Text}
            </p>
            <div className='mt-2'>
              <p className='text-stone-900 dark:text-stone-100'>Patrick Marx</p>
              <p className='mt-2 text-stone-900 dark:text-stone-100'>
                {t.impressum.email}{' '}
                <a
                  href='mailto:patrickmrx@icloud.com'
                  className='underline hover:text-stone-900 dark:hover:text-stone-100'
                >
                  patrickmrx@icloud.com
                </a>
              </p>
              <p className='mt-2 text-stone-900 dark:text-stone-100'>
                {t.datenschutz.section2MoreInfo}{' '}
                <Link
                  href='/impressum'
                  className='underline hover:text-stone-900 dark:hover:text-stone-100'
                >
                  {t.footer.impressum}
                </Link>
                .
              </p>
            </div>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section3Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section3Text1}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section3Text2}
            </p>
            <ul className='mt-2 ml-4 list-disc space-y-1 text-stone-900 dark:text-stone-100'>
              <li>{t.datenschutz.section3List1}</li>
              <li>{t.datenschutz.section3List2}</li>
              <li>{t.datenschutz.section3List3}</li>
              <li>{t.datenschutz.section3List4}</li>
              <li>{t.datenschutz.section3List5}</li>
            </ul>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section3Text3}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section3Text4}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section3Text5}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section3Text6}{' '}
              <a
                href='https://vercel.com/legal/privacy-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-stone-900 dark:hover:text-stone-100'
              >
                {t.datenschutz.section3Link}
              </a>
              .
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section4Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section4Text1}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section4Text2}
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section5Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section5Text1}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section5Text2}
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section6Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section6Text1}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section6Text2}
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section7Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section7Text1}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section7Text2}
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section8Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section8Text1}
            </p>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section8Text2}
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section9Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section9Text1}
            </p>
            <ul className='mt-2 ml-4 list-disc space-y-1 text-stone-900 dark:text-stone-100'>
              <li>{t.datenschutz.section9List1}</li>
              <li>{t.datenschutz.section9List2}</li>
              <li>{t.datenschutz.section9List3}</li>
              <li>{t.datenschutz.section9List4}</li>
              <li>{t.datenschutz.section9List5}</li>
              <li>{t.datenschutz.section9List6}</li>
            </ul>
            <p className='mt-2 text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section9Text2}
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section10Title}
            </h2>
            <p className='text-stone-900 dark:text-stone-100'>
              {t.datenschutz.section10Text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
