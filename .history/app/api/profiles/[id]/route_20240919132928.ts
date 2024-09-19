import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { profile } from '@/db/schema/profiles-schema';
import { eq, and } from 'drizzle-orm';
import { withAuth } from '@/middleware/auth';

export const GET = withAuth(async (request: Request, userId: string, { params }: { params: { id: string } }) => {
  try {
    if (params.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    const profileData = await db.select().from(profile).where(eq(profile.userId, userId)).limit(1);
    if (profileData.length === 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }
    return NextResponse.json(profileData[0]);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});

export const PUT = withAuth(async (request: Request, userId: string, { params }: { params: { id: string } }) => {
  try {
    if (params.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    const body = await request.json();
    const updatedProfile = await db.update(profile)
      .set(body)
      .where(eq(profile.userId, userId))
      .returning();
    if (updatedProfile.length === 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }
    return NextResponse.json(updatedProfile[0]);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});

export const DELETE = withAuth(async (request: Request, userId: string, { params }: { params: { id: string } }) => {
  try {
    if (params.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    const deletedProfile = await db.delete(profile)
      .where(eq(profile.userId, userId))
      .returning();
    if (deletedProfile.length === 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});