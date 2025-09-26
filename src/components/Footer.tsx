import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-foreground/10 mt-16 border-t py-8'>
      <div className='text-foreground/60 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8'>
        <p>© {new Date().getFullYear()} Patrick Marx. All rights reserved.</p>
        <div className='flex items-center gap-4'>
          <Link
            href='https://github.com'
            target='_blank'
            className='hover:text-foreground/80'
          >
            GitHub
          </Link>
          <Link
            href='https://www.linkedin.com'
            target='_blank'
            className='hover:text-foreground/80'
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
