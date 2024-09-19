import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';

export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async function (req: NextRequest) {
    const { userId } = getAuth(req);

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }

    return handler(req);
  };
}