'use client';

import { usePathname } from 'next/navigation';
import FooterContent from './FooterContent';

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Footer nicht auf Login-Seite anzeigen
  if (pathname === '/login') {
    return null;
  }

  return <FooterContent />;
}
