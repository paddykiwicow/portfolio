'use client';

import BackgroundImage from '@/components/BackgroundImage';
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { minimalProjects } from '@/data/minimalProjects';
import { translations } from '@/lib/i18n';
import { getTranslatedProject } from '@/lib/projectTranslations';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = minimalProjects.map(p => {
    const translated = getTranslatedProject(p, language);
    const featuredVisual = translated.visuals.find(v => v.featured);
    const firstImageVisual = translated.visuals.find(v => v.type === 'image');
    const featuredImage =
      featuredVisual?.data.src || firstImageVisual?.data.src;
    return {
      title: translated.title,
      description: translated.shortDescription,
      internalPath: `/projects/${translated.slug}`,
      image: featuredImage,
    };
  });
  return (
    <div className='relative'>
      <BackgroundImage />
      <div className='relative z-10 space-y-18'>
        <Header />

        <section className='space-y-4'>
          <h2 className='font-serif text-lg leading-tight font-medium tracking-tight text-stone-900 dark:text-stone-100'>
            {t.home.projects}
          </h2>
          <ul>
            {projects.map(p => (
              <li key={p.title}>
                <Link
                  href={p.internalPath ?? '/portfolio'}
                  className='group -mx-3 flex items-center gap-4 rounded-lg p-3 transition-all hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                >
                  {p.image && (
                    <div className='relative w-20 flex-shrink-0'>
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={0}
                        height={0}
                        sizes='80px'
                        className='h-auto w-full rounded-md'
                        style={{ objectFit: 'contain' }}
                        unoptimized
                      />
                    </div>
                  )}
                  <div className='min-w-0 flex-1'>
                    <h3 className='leading-tight font-medium text-stone-900 dark:text-stone-100'>
                      {p.title}
                    </h3>
                    <p className='mt-1 line-clamp-1 text-sm text-stone-500 dark:text-stone-400'>
                      {p.description}
                    </p>
                  </div>
                  <div className='flex-shrink-0'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200/50 transition-all group-hover:translate-x-1 group-hover:bg-stone-300/60 dark:bg-stone-800/50 dark:group-hover:bg-stone-700/60'>
                      <svg
                        className='h-4 w-4 text-stone-700 dark:text-stone-300'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
