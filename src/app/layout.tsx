import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Patrick Marx — Portfolio',
  description: 'Minimalistisches Portfolio mit Next.js und Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <main className='mx-auto max-w-prose px-4 py-12 sm:px-6'>
          {children}
        </main>
      </body>
    </html>
  );
}
