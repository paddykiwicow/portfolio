import { NextResponse } from 'next/server';

const CORRECT_PASSWORD = process.env.PORTFOLIO_PASSWORD || 'changeme';

// Einfacher In-Memory Store für Rate Limiting
// In Production könnte man Redis verwenden, für ein Portfolio reicht das
const rateLimitStore = new Map<string, number[]>();

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 Minuten

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const attempts = rateLimitStore.get(ip) || [];

  // Entferne alte Versuche außerhalb des Zeitfensters
  const recentAttempts = attempts.filter(
    timestamp => now - timestamp < WINDOW_MS
  );

  if (recentAttempts.length >= MAX_ATTEMPTS) {
    return false; // Rate limit überschritten
  }

  // Füge aktuellen Versuch hinzu
  recentAttempts.push(now);
  rateLimitStore.set(ip, recentAttempts);

  // Cleanup: Entferne alte Einträge (alle 100 Requests)
  if (Math.random() < 0.01) {
    for (const [key, timestamps] of rateLimitStore.entries()) {
      const filtered = timestamps.filter(t => now - t < WINDOW_MS);
      if (filtered.length === 0) {
        rateLimitStore.delete(key);
      } else {
        rateLimitStore.set(key, filtered);
      }
    }
  }

  return true; // Rate limit OK
}

export async function POST(request: Request) {
  try {
    const ip = getClientIP(request);

    // Rate Limiting prüfen
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Zu viele Versuche. Bitte versuchen Sie es später erneut.',
        },
        { status: 429 }
      );
    }

    const { password } = await request.json();

    if (password === CORRECT_PASSWORD) {
      // Cookie serverseitig setzen mit Sicherheits-Flags
      const response = NextResponse.json({ success: true });
      response.cookies.set('portfolio-auth', 'true', {
        httpOnly: true, // Nicht per JavaScript erreichbar
        secure: process.env.NODE_ENV === 'production', // Nur über HTTPS in Production
        sameSite: 'strict', // CSRF-Schutz
        maxAge: 86400, // 24 Stunden
        path: '/',
      });
      return response;
    } else {
      return NextResponse.json(
        { success: false, error: 'Falsches Passwort' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}
