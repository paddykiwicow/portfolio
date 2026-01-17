'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { getTranslatedProject } from '@/lib/projectTranslations';
import { getNextProjectSlug, getPreviousProjectSlug } from '@/lib/projects';
import type { MinimalProjectTemplate, TemplateVisual } from '@/types/project';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
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
          className={`h-auto w-full ${
            isHeader
              ? 'md:rounded-2xl md:shadow-md md:ring-2 md:ring-white md:dark:ring-stone-700'
              : 'rounded-xl shadow-xs ring-1 ring-stone-200 md:rounded-2xl dark:ring-stone-700'
          }`}
          unoptimized
        />
      );
      break;

    case 'video':
      visualElement = (
        <div
          className={`overflow-hidden bg-white ${
            isHeader
              ? 'md:rounded-2xl md:shadow-md md:ring-2 md:ring-white md:dark:ring-stone-700'
              : 'rounded-xl shadow-xs ring-1 ring-stone-200 md:rounded-2xl dark:ring-stone-700'
          }`}
        >
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
        onClick={
          !isHeader && (visual.type === 'image' || visual.type === 'video')
            ? onClick
            : undefined
        }
        className={`${
          !isHeader && (visual.type === 'image' || visual.type === 'video')
            ? 'cursor-pointer transition-opacity hover:opacity-90'
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
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [supportsHover, setSupportsHover] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    // Sync theme state with DOM on mount
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Check if device supports hover (not a touch device)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(hover: hover)');
      setSupportsHover(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setSupportsHover(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
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
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200/50 transition-all hover:-translate-x-1 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
          aria-label={t.project.backHome}
        >
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
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </Link>
        <div className='flex items-center gap-2'>
          {/* Theme Switch */}
          <button
            onClick={() => {
              const isDark =
                document.documentElement.classList.contains('dark');
              if (isDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setTheme('light');
              } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
              }
            }}
            onMouseEnter={() => {
              if (supportsHover) setHoveredIcon('theme');
            }}
            onMouseLeave={() => {
              if (supportsHover) setHoveredIcon(null);
            }}
            className='relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
            aria-label={t.header.tooltipTheme}
          >
            <AnimatePresence mode='wait'>
              {theme === 'dark' ? (
                <motion.div
                  key='light'
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Icon
                    icon='streamline-flex:brightness-1-solid'
                    className='h-4 w-4 text-stone-700 dark:text-stone-300'
                  />
                </motion.div>
              ) : (
                <motion.div
                  key='dark'
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Icon
                    icon='streamline-flex:dark-dislay-mode-solid'
                    className='h-4 w-4 text-stone-700 dark:text-stone-300'
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {supportsHover && hoveredIcon === 'theme' && (
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 4,
                    scale: 0.9,
                    filter: 'blur(2px)',
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(2px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
                >
                  {t.header.tooltipTheme}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          {/* Language Switch */}
          <button
            onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
            onMouseEnter={() => {
              if (supportsHover) setHoveredIcon('language');
            }}
            onMouseLeave={() => {
              if (supportsHover) setHoveredIcon(null);
            }}
            className='relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-stone-200/50 transition-all hover:scale-105 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:hover:bg-stone-700/60'
            aria-label={t.header.tooltipLanguage}
          >
            <AnimatePresence mode='wait'>
              <motion.span
                key={language}
                initial={{ opacity: 0, filter: 'blur(2px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(2px)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='text-xs font-medium text-stone-700 dark:text-stone-300'
              >
                {language === 'de' ? 'EN' : 'DE'}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence>
              {supportsHover && hoveredIcon === 'language' && (
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 4,
                    scale: 0.9,
                    filter: 'blur(2px)',
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 4, scale: 0.9, filter: 'blur(2px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className='absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-stone-800 px-2 py-1 text-xs whitespace-nowrap text-stone-100 dark:bg-stone-200 dark:text-stone-900'
                >
                  {t.header.tooltipLanguage}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <section>
        <div>
          <h1 className='text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100'>
            {translatedProject.title}
          </h1>
          {translatedProject.shortDescription && (
            <p className='mt-2 text-stone-500 dark:text-stone-400'>
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
          <div className='mt-10 max-w-2xl'>
            <h2 className='mb-2 font-serif text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.project.context}
            </h2>
            {Array.isArray(translatedProject.context) ? (
              <div className='space-y-4 text-stone-700 dark:text-stone-200'>
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
              <p className='mt-4 text-stone-700 dark:text-stone-200'>
                <span className='font-medium text-stone-900 dark:text-stone-100'>
                  {t.project.goal}
                </span>{' '}
                {translatedProject.goal}
              </p>
            )}
          </div>
        )}
        {translatedProject.role && (
          <div className='mt-10 max-w-2xl'>
            <h2 className='mb-2 font-serif text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.project.role}
            </h2>
            {Array.isArray(translatedProject.role) ? (
              <ul className='list-disc space-y-0 pl-5 text-stone-700 marker:text-stone-500 dark:text-stone-200 dark:marker:text-stone-400'>
                {translatedProject.role.map((item, index) => {
                  const roleArray = translatedProject.role as string[];
                  return (
                    <li
                      key={index}
                      className={`pb-2 ${index === 0 ? 'pt-2' : 'pt-0'}`}
                    >
                      {item}
                      {index < roleArray.length - 1 && (
                        <div className='mt-2 border-t border-stone-200 dark:border-stone-800' />
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className='list-disc space-y-0 pl-5 text-stone-900 marker:text-stone-500 dark:text-stone-100 dark:marker:text-stone-400'>
                <li className='py-2'>{translatedProject.role}</li>
              </ul>
            )}
          </div>
        )}
        {translatedProject.outcome && (
          <div className='mt-10 max-w-2xl'>
            <h2 className='mb-3 font-serif text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              {t.project.outcome}
            </h2>
            {Array.isArray(translatedProject.outcome) ? (
              <ul className='list-disc space-y-0 pl-5 text-stone-700 marker:text-stone-500 dark:text-stone-200 dark:marker:text-stone-400'>
                {translatedProject.outcome.map((item, index) => {
                  const outcomeArray = translatedProject.outcome as string[];
                  return (
                    <li
                      key={index}
                      className={`pb-2 ${index === 0 ? 'pt-2' : 'pt-0'}`}
                    >
                      {item}
                      {index < outcomeArray.length - 1 && (
                        <div className='mt-2 border-t border-stone-200 dark:border-stone-800' />
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className='list-disc space-y-0 pl-5 text-stone-900 marker:text-stone-500 dark:text-stone-100 dark:marker:text-stone-400'>
                <li className='py-2'>{translatedProject.outcome}</li>
              </ul>
            )}
          </div>
        )}
      </section>

      {remainingVisuals.length > 0 && (
        <section>
          <div className='space-y-12'>
            {remainingVisuals.map((visual, index) => (
              <div key={index + 1} className='md:-mx-12 lg:-mx-16'>
                <VisualRenderer
                  visual={visual}
                  onClick={
                    visual.type === 'image' || visual.type === 'video'
                      ? () => openLightbox(index)
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className='flex items-center justify-between gap-4'>
        {previousProjectSlug ? (
          <Link
            href={`/projects/${previousProjectSlug}`}
            className='flex items-center gap-2 rounded-full bg-stone-200/50 px-4 py-2 font-medium text-stone-900 transition-all hover:-translate-x-1 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:text-stone-100 dark:hover:bg-stone-700/60'
          >
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
                d='M15 19l-7-7 7-7'
              />
            </svg>
            <span>{t.project.previousProject}</span>
          </Link>
        ) : (
          <div></div>
        )}
        {nextProjectSlug && (
          <Link
            href={`/projects/${nextProjectSlug}`}
            className='flex items-center gap-2 rounded-full bg-stone-200/50 px-4 py-2 font-medium text-stone-900 transition-all hover:translate-x-1 hover:bg-stone-300/60 active:scale-[0.97] dark:bg-stone-800/50 dark:text-stone-100 dark:hover:bg-stone-700/60'
          >
            <span>{t.project.nextProject}</span>
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
