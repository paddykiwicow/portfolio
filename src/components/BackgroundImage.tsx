'use client';

import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div
      className='pointer-events-none fixed top-0 left-1/2 z-0 block h-[250px] w-full max-w-4xl -translate-x-1/2 overflow-hidden dark:hidden'
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className='relative h-full w-full'>
        <Image
          src='/images/background.jpg'
          alt=''
          fill
          className='object-cover'
          style={{
            opacity: 1,
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 5%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0.8) 95%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0) 40%)',
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 5%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0.8) 95%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0) 40%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
