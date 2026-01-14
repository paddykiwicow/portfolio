'use client';

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
        <div className='overflow-hidden rounded-xl bg-white'>
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

  const firstVisual = project.visuals[0];
  const remainingVisuals = project.visuals.slice(1);

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
      <div>
        <Link
          href='/'
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 transition-all hover:-translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700'
          aria-label='Back home'
        >
          <ArrowLeftIcon className='h-4 w-4' />
        </Link>
      </div>

      <section>
        <div>
          <h1 className='text-3xl font-medium tracking-tight'>
            {project.title}
          </h1>
          {project.shortDescription && (
            <p className='mt-3 text-stone-500 dark:text-stone-400'>
              {project.shortDescription}
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
        {project.context && (
          <div className='mt-8 max-w-2xl'>
            <h2 className='mb-2 font-serif text-lg font-medium tracking-tight text-violet-600 italic dark:text-violet-400'>
              Kontext
            </h2>
            {Array.isArray(project.context) ? (
              <div className='space-y-4 text-stone-900 dark:text-stone-100'>
                {project.context.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className='text-stone-900 dark:text-stone-100'>
                {project.context}
              </p>
            )}
            {project.goal && (
              <p className='mt-4 text-stone-900 dark:text-stone-100'>
                <span className='font-medium text-stone-900 dark:text-stone-100'>
                  Das Ziel:
                </span>{' '}
                {project.goal}
              </p>
            )}
          </div>
        )}
        {project.role && (
          <div className='mt-8 max-w-2xl'>
            <h2 className='mb-2 font-serif text-lg font-medium tracking-tight text-violet-600 italic dark:text-violet-400'>
              Rolle
            </h2>
            {Array.isArray(project.role) ? (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                {project.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                <li>{project.role}</li>
              </ul>
            )}
          </div>
        )}
        {project.outcome && (
          <div className='mt-8 max-w-2xl'>
            <h2 className='mb-3 font-serif text-lg font-medium tracking-tight text-violet-600 italic dark:text-violet-400'>
              Outcome
            </h2>
            {Array.isArray(project.outcome) ? (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                {project.outcome.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul className='list-disc space-y-1 pl-6 text-stone-900 dark:text-stone-100'>
                <li>{project.outcome}</li>
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
            <span>Vorheriges Projekt</span>
          </Link>
        ) : (
          <div></div>
        )}
        {nextProjectSlug && (
          <Link
            href={`/projects/${nextProjectSlug}`}
            className='flex items-center gap-2 rounded-full bg-stone-200 px-4 py-2 font-medium text-stone-900 transition-all hover:translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
          >
            <span>Nächstes Projekt</span>
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
