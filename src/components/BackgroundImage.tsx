'use client';

import Image from 'next/image';

const maskStyle = {
  opacity: 1,
  maskImage:
    'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 5%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0.8) 95%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0) 40%)',
  WebkitMaskImage:
    'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 5%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0.8) 95%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0) 40%)',
  maskComposite: 'intersect' as const,
  WebkitMaskComposite: 'source-in' as const,
};

const darkMaskStyle = {
  ...maskStyle,
  opacity: 0.4,
};

export default function BackgroundImage() {
  return (
    <>
      {/* Light Mode Background - Currently hidden, remove 'hidden' class to re-enable */}
      <div
        className='pointer-events-none fixed top-0 left-1/2 z-0 hidden h-[250px] w-full max-w-4xl -translate-x-1/2 overflow-hidden dark:hidden'
        style={{ top: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className='relative h-full w-full'>
          <Image
            src='/images/background.jpg'
            alt=''
            fill
            className='object-cover'
            style={maskStyle}
            unoptimized
            priority
          />
        </div>
      </div>
      {/* Dark Mode Background - Currently hidden, remove 'hidden' class to re-enable */}
      <div
        className='pointer-events-none fixed top-0 left-1/2 z-0 hidden h-[250px] w-full max-w-4xl -translate-x-1/2 overflow-hidden dark:hidden'
        style={{ top: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className='relative h-full w-full'>
          <Image
            src='/images/background-dark.jpg'
            alt=''
            fill
            className='object-cover'
            style={darkMaskStyle}
            unoptimized
            priority
          />
        </div>
      </div>
    </>
  );
}
