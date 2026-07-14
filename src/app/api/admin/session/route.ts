import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from '@/lib/adminAuth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return NextResponse.json({ authenticated: verifyAdminSessionToken(token) });
}
