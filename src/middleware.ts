import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Prüfe, ob der Benutzer bereits authentifiziert ist
  const isAuthenticated =
    request.cookies.get('portfolio-auth')?.value === 'true';

  // Wenn nicht authentifiziert, zeige Login-Seite
  if (!isAuthenticated) {
    // Prüfe, ob es bereits ein Login-Versuch ist
    const url = request.nextUrl.clone();
    if (url.pathname === '/login' || url.pathname.startsWith('/api/auth')) {
      return NextResponse.next();
    }

    // Leite zur Login-Seite um
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (login page)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|login).*)',
  ],
};
