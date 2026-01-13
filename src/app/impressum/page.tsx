import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export const metadata = {
  title: 'Impressum — Patrick Marx',
};

export default function ImpressumPage() {
  return (
    <div className='space-y-20'>
      <div>
        <Link
          href='/'
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 transition-all hover:-translate-x-1 hover:bg-stone-300'
          aria-label='Zurück zur Startseite'
        >
          <ArrowLeftIcon className='h-4 w-4' />
        </Link>
      </div>

      <section>
        <h1 className='text-3xl font-medium tracking-tight'>Impressum</h1>
        <div className='mt-8 space-y-8'>
          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900'>
              Angaben gemäß § 5 TMG
            </h2>
            <p className='text-stone-500'>Patrick Marx</p>
            <p className='mt-2 text-stone-500'>Pöttcherwiesen 1</p>
            <p className='text-stone-500'>30938 Burgwedel</p>
            <p className='mt-2 text-stone-500'>
              E-Mail:{' '}
              <a
                href='mailto:patrickmrx@icloud.com'
                className='underline hover:text-stone-900'
              >
                patrickmrx@icloud.com
              </a>
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900'>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className='text-stone-500'>Patrick Marx</p>
          </div>
        </div>
      </section>
    </div>
  );
}
