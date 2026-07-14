import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_MAX_AGE, createAdminSessionToken, getAdminCredentials } from '@/lib/adminAuth';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const { email, password } = await request.json().catch(() => ({ email: '', password: '' }));
  const adminCredentials = getAdminCredentials();

  if (!adminCredentials.email || !adminCredentials.password || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json({ message: 'Admin credentials are not configured on the server.' }, { status: 500 });
  }

  if (email !== adminCredentials.email || password !== adminCredentials.password) {
    return NextResponse.json({ message: 'Invalid admin email or password.' }, { status: 401 });
  }

  const response = NextResponse.json({ authenticated: true });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: createAdminSessionToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_MAX_AGE,
  });

  return response;
}
