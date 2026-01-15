import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import LanguageSwitch from '@/components/LanguageSwitch';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Patrick Marx — Portfolio',
  description:
    'Senior Product Designer. Design Systems, Component Libraries und enge Zusammenarbeit mit Development.',
  robots: 'noindex, nofollow',
  icons: {
    icon: '/images/avatar.webp',
    apple: '/images/avatar.webp',
    shortcut: '/images/avatar.webp',
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
  openGraph: {
    title: 'Patrick Marx — Portfolio',
    description:
      'Senior Product Designer. Design Systems, Component Libraries und enge Zusammenarbeit mit Development.',
    url: 'https://patrickmarx.design',
    siteName: 'Patrick Marx',
    images: [
      {
        url: '/images/avatar.webp',
        width: 1200,
        height: 630,
        alt: 'Patrick Marx',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Marx — Portfolio',
    description:
      'Senior Product Designer. Design Systems, Component Libraries und enge Zusammenarbeit mit Development.',
    images: ['/images/avatar.webp'],
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
        <link rel='icon' href='/images/avatar.webp' type='image/webp' />
        <link rel='apple-touch-icon' href='/images/avatar.webp' />
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
        <LanguageProvider>
          <main className='mx-auto max-w-2xl px-4 py-10'>
            {children}
            <Footer />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
