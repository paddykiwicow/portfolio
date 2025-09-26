'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className='supports-[backdrop-filter]:bg-background/60 border-foreground/10 sticky top-0 z-40 border-b backdrop-blur'>
      <nav className='mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link href='/' className='font-medium tracking-tight'>
          PM
        </Link>
        <ul className='flex items-center gap-6 text-sm'>
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    'hover:text-foreground/80 transition-colors ' +
                    (isActive ? 'text-foreground' : 'text-foreground/60')
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
