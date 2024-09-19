import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { profile } from '@/db/schema/profiles-schema';
import { eq } from 'drizzle-orm';
import { withAuth } from '@/middleware/auth';

export const GET = withAuth(async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const profileData = await db.select().from(profile).where(eq(profile.id, parseInt(params.id))).limit(1);
    if (profileData.length === 0) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }
    return NextResponse.json(profileData[0]);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});

export const PUT = withAuth(async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const body = await request.json();
    const updatedProfile = await db.update(profile)
      .set(body)
      .where(eq(profile.id, parseInt(params.id)))
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

export const DELETE = withAuth(async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const deletedProfile = await db.delete(profile)
      .where(eq(profile.id, parseInt(params.id)))
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