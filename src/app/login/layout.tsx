import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login — Patrick Marx',
  robots: 'noindex, nofollow',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
