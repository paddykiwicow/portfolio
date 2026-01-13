import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  // Cookie löschen
  response.cookies.delete('portfolio-auth');
  return response;
}
