import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <div className='space-y-16'>
      <section>
        <h1 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          Patrick Marx
        </h1>
        <p className='text-foreground/70 mt-2'>
          Designer-developer hybrid. Focused on clean, resilient interfaces and
          systems.
        </p>
      </section>

      <section>
        <h2 className='text-foreground/50 text-sm tracking-widest uppercase'>
          About
        </h2>
        <p className='text-foreground/80 mt-2'>
          Ich baue minimalistische, zugängliche Web-Erlebnisse mit Next.js,
          TypeScript und Tailwind. Interesse an Design-Systemen, Tokens und
          Developer Experience.
        </p>
        <div className='mt-3'>
          <Link
            href='/about'
            className='text-sm underline underline-offset-4 hover:opacity-80'
          >
            Mehr über mich
          </Link>
        </div>
      </section>

      <section>
        <h2 className='text-foreground/50 text-sm tracking-widest uppercase'>
          Works
        </h2>
        <ul className='divide-foreground/10 mt-2 divide-y'>
          {featured.map(p => (
            <li key={p.title} className='py-3'>
              <Link
                href={p.internalPath ?? '/portfolio'}
                className='flex items-baseline justify-between gap-6 hover:opacity-90'
              >
                <span className='font-medium'>{p.title}</span>
                <span className='text-foreground/60 hidden text-sm sm:inline'>
                  {p.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='mt-3'>
          <Link
            href='/portfolio'
            className='text-sm underline underline-offset-4 hover:opacity-80'
          >
            Alle Projekte ansehen
          </Link>
        </div>
      </section>
    </div>
  );
}
