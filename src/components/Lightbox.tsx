'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { TemplateVisual } from '@/types/project';

interface LightboxProps {
  visuals: TemplateVisual[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({
  visuals,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  const currentVisual = visuals[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !currentVisual) return null;

  const renderVisual = () => {
    switch (currentVisual.type) {
      case 'image':
        return (
          <Image
            src={currentVisual.data.src}
            alt={currentVisual.data.alt}
            width={0}
            height={0}
            sizes='100vw'
            className='h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-xl object-contain'
            priority
            unoptimized
          />
        );
      case 'video':
        return (
          <video
            src={currentVisual.data.src}
            autoPlay
            loop
            muted
            playsInline
            className='h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain'
            controls
          >
            Your browser does not support the video tag.
          </video>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 hidden items-center justify-center bg-black/90 backdrop-blur-sm md:flex'
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className='absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
        aria-label='Close lightbox'
      >
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>

      {visuals.length > 1 && (
        <>
          <button
            onClick={e => {
              e.stopPropagation();
              onPrevious();
            }}
            className='absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20'
            aria-label='Previous image'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              onNext();
            }}
            className='absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20'
            aria-label='Next image'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </>
      )}

      <div
        className='relative flex flex-col items-center justify-center'
        onClick={e => e.stopPropagation()}
      >
        {renderVisual()}
        {currentVisual.subtitle && (
          <p className='mt-4 text-center text-sm text-white'>
            {currentVisual.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
