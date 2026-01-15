'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { getTranslatedProject } from '@/lib/projectTranslations';
import { getNextProjectSlug, getPreviousProjectSlug } from '@/lib/projects';
import type { MinimalProjectTemplate, TemplateVisual } from '@/types/project';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Lightbox from './Lightbox';

interface ProjectTemplateProps {
  project: MinimalProjectTemplate;
  currentSlug: string;
}

interface VisualRendererProps {
  visual: TemplateVisual;
  showSubtitle?: boolean;
  onClick?: () => void;
  isHeader?: boolean;
}

function VisualRenderer({
  visual,
  showSubtitle = true,
  onClick,
  isHeader = false,
}: VisualRendererProps) {
  const subtitle = visual.subtitle || 'Bildunterschrift Platzhalter';

  let visualElement;
  switch (visual.type) {
    case 'image':
      visualElement = (
        <Image
          src={visual.data.src}
          alt={visual.data.alt}
          width={0}
          height={0}
          sizes='(max-width: 768px) 100vw, 768px'
          className={`h-auto w-full ${isHeader ? 'md:rounded-xl' : 'rounded-xl'}`}
          unoptimized
        />
      );
      break;

    case 'video':
      visualElement = (
        <div className='overflow-hidden rounded-xl bg-white dark:bg-stone-900'>
          <video
            src={visual.data.src}
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            poster={visual.data.poster}
            className='mx-auto h-auto max-h-[600px] w-auto object-contain'
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
      break;

    default:
      return null;
  }

  return (
    <div className='w-full'>
      <div
        onClick={visual.type === 'image' && !isHeader ? onClick : undefined}
        className={`${
          visual.type === 'image' && !isHeader
            ? 'cursor-zoom-in transition-opacity hover:opacity-90 md:cursor-zoom-in'
            : ''
        }`}
      >
        {visualElement}
      </div>
      {showSubtitle && (
        <p className='mt-2 text-center text-sm text-stone-500 dark:text-stone-400'>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function ProjectTemplate({
  project,
  currentSlug,
}: ProjectTemplateProps) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const translatedProject = getTranslatedProject(project, language);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const nextProjectSlug = getNextProjectSlug(currentSlug);
  const previousProjectSlug = getPreviousProjectSlug(currentSlug);

  const firstVisual = translatedProject.visuals[0];
  const remainingVisuals = translatedProject.visuals.slice(1);

  const openLightbox = (index: number) => {
    if (!isDesktop) return;
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex(prev => (prev + 1) % remainingVisuals.length);
  };

  const previousImage = () => {
    setLightboxIndex(
      prev => (prev - 1 + remainingVisuals.length) % remainingVisuals.length
    );
  };

  return (
    <article className='space-y-20'>
      <div className='flex items-start justify-between'>
        <Link
          href='/'
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 transition-all hover:-translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700'
          aria-label={t.project.backHome}
        >
          <ArrowLeftIcon className='h-4 w-4 text-stone-900 dark:text-stone-100' />
        </Link>
        <div className='flex gap-1'>
          <button
            onClick={() => setLanguage('de')}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
              language === 'de'
                ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
                : 'bg-stone-200 text-stone-600 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'
            }`}
          >
            DE
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
              language === 'en'
                ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
                : 'bg-stone-200 text-stone-600 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <section>
        <div>
          <h1 className='text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100'>
            {translatedProject.title}
          </h1>
          {translatedProject.shortDescription && (
            <p className='mt-3 text-stone-500 dark:text-stone-400'>
              {translatedProject.shortDescription}
            </p>
          )}
        </div>
        {firstVisual && (
          <div className='-mx-4 mt-6 sm:-mx-8 md:-mx-12 lg:-mx-16'>
            <VisualRenderer
              visual={firstVisual}
              showSubtitle={false}
              isHeader={true}
            />
          </div>
        )}
        {translatedProject.context && (
          <div className='mt-8 max-w-2xl'>
            <h2 className='mb-2 font-serif text-lg font-medium tracking-tight text-violet-600 italic dark:text-violet-400'>
              {t.project.context}
            </h2>
            {Array.isArray(translatedProject.context) ? (
              <div className='space-y-4 text-stone-900 dark:text-stone-100'>
                {translatedProject.context.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className='text-stone-900 dark:text-stone-100'>
                {translatedProject.context}
              </p>
            )}
            {translatedProject.goal && (
              <p className='mt-4 text-stone-900 dark:text-stone-100'>
                <span className='font-medium text-stone-900 dark:text-stone-100'>
                  {t.project.goal}
                </span>{' '}
                {translatedProject.goal}
              </p>
            )}
          </div>
        )}
        {translatedProject.role && (
          <div className='mt-8 max-w-2xl'>
            <h2 className='mb-2 font-serif text-lg font-medium tracking-tight text-violet-600 italic dark:text-violet-400'>
              {t.project.role}
            </h2>
            {Array.isArray(translatedProject.role) ? (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                {translatedProject.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                <li>{translatedProject.role}</li>
              </ul>
            )}
          </div>
        )}
        {translatedProject.outcome && (
          <div className='mt-8 max-w-2xl'>
            <h2 className='mb-3 font-serif text-lg font-medium tracking-tight text-violet-600 italic dark:text-violet-400'>
              {t.project.outcome}
            </h2>
            {Array.isArray(translatedProject.outcome) ? (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                {translatedProject.outcome.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                <li>{translatedProject.outcome}</li>
              </ul>
            )}
          </div>
        )}
      </section>

      {remainingVisuals.length > 0 && (
        <section>
          <div className='space-y-12'>
            {remainingVisuals.map((visual, index) => (
              <VisualRenderer
                key={index + 1}
                visual={visual}
                onClick={
                  visual.type === 'image'
                    ? () => openLightbox(index)
                    : undefined
                }
              />
            ))}
          </div>
        </section>
      )}

      <section className='flex items-center justify-between gap-4'>
        {previousProjectSlug ? (
          <Link
            href={`/projects/${previousProjectSlug}`}
            className='flex items-center gap-2 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:-translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
          >
            <ArrowLeftIcon className='h-4 w-4' />
            <span>{t.project.previousProject}</span>
          </Link>
        ) : (
          <div></div>
        )}
        {nextProjectSlug && (
          <Link
            href={`/projects/${nextProjectSlug}`}
            className='flex items-center gap-2 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
          >
            <span>{t.project.nextProject}</span>
            <ArrowRightIcon className='h-4 w-4' />
          </Link>
        )}
      </section>

      {isDesktop && remainingVisuals.length > 0 && (
        <Lightbox
          visuals={remainingVisuals}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </article>
  );
}
