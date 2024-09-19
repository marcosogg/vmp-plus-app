import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { profile } from '@/db/schema/profiles-schema';
import { withAuth } from '@/middleware/auth';
import { eq } from 'drizzle-orm';

export const GET = withAuth(async (req, userId) => {
  try {
    const userProfile = await db.select().from(profile).where(eq(profile.userId, userId)).limit(1);
    if (userProfile.length === 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }
    return NextResponse.json(userProfile[0]);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});

export const POST = withAuth(async (request: Request, userId) => {
  try {
    const body = await request.json();
    const existingProfile = await db.select().from(profile).where(eq(profile.userId, userId)).limit(1);
    if (existingProfile.length > 0) {
      return NextResponse.json({ error: 'Profile already exists' }, { status: 400 });
    }
    const newProfile = await db.insert(profile).values({ ...body, userId }).returning();
    return NextResponse.json(newProfile[0], { status: 201 });
  } catch (error) {
    console.error('Error creating profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});