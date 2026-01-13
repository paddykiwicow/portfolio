import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Patrick Marx — Portfolio',
  description: 'Minimalistisches Portfolio mit Next.js und Tailwind',
  robots: 'noindex, nofollow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main className='mx-auto max-w-2xl px-4 py-10'>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
