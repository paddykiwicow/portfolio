import ConditionalFooter from '@/components/ConditionalFooter';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Patrick Marx — Portfolio',
  description: 'Minimalistisches Portfolio mit Next.js und Tailwind',
  robots: 'noindex, nofollow',
  icons: {
    apple: '/images/avatar.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body>
        <main className='mx-auto max-w-2xl px-4 py-10'>
          {children}
          <ConditionalFooter />
        </main>
      </body>
    </html>
  );
}
