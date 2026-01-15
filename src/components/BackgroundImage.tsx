'use client';

import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div
      className='pointer-events-none fixed inset-x-0 z-0 block h-[250px] overflow-hidden dark:hidden'
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
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0) 60%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0) 60%)',
          }}
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
