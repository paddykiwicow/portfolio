import { NextResponse } from 'next/server';

// Das Passwort sollte in einer Umgebungsvariable gespeichert werden
// Für jetzt setzen wir es hier - später kannst du es in .env.local verschieben
const CORRECT_PASSWORD = process.env.PORTFOLIO_PASSWORD || 'changeme';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password === CORRECT_PASSWORD) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
