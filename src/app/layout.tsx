import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Patrick Marx — Portfolio',
  description: 'Minimalistisches Portfolio mit Next.js und Tailwind',
  robots: 'noindex, nofollow',
  icons: {
    apple: '/images/avatar.webp',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider />
        <main className='mx-auto max-w-2xl px-4 py-10'>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
