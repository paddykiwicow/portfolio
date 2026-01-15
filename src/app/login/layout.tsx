import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patrick Marx — Portfolio',
  description:
    'Senior Product Designer. Design Systems, Component Libraries und enge Zusammenarbeit mit Development.',
  robots: 'noindex, nofollow',
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

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
