import Header from '@/components/Header';
import { getAllProjects } from '@/lib/projects';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = getAllProjects();
  return (
    <div className='space-y-18'>
      <Header />

      <section className='space-y-4'>
        <h2 className='leading-tight font-medium'>Projekte</h2>
        <ul>
          {projects.map(p => (
            <li key={p.title}>
              <Link
                href={p.internalPath ?? '/portfolio'}
                className='group -mx-3 flex items-center gap-4 rounded-lg p-3 transition-all hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
              >
                {p.image && (
                  <div className='relative w-28 flex-shrink-0'>
                    {/* Bildgröße anpassen: w-24 = 96px, w-28 = 112px, w-32 = 128px, w-36 = 144px */}
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={0}
                      height={0}
                      sizes='112px'
                      className='h-auto w-full rounded-md'
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>
                )}
                <div className='min-w-0 flex-1'>
                  <h3 className='leading-tight font-medium'>{p.title}</h3>
                  <p className='mt-1 text-sm text-stone-500 dark:text-stone-400'>
                    {p.description}
                  </p>
                </div>
                <div className='flex-shrink-0'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 transition-all group-hover:translate-x-1 group-hover:bg-stone-300 dark:bg-stone-800 dark:group-hover:bg-stone-700'>
                    <ArrowRightIcon className='h-4 w-4' />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
