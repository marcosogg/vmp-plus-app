import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { profile } from '@/db/schema/profiles-schema';

export async function GET() {
  try {
    const profiles = await db.select().from(profile);
    return NextResponse.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProfile = await db.insert(profile).values(body).returning();
    return NextResponse.json(newProfile[0], { status: 201 });
  } catch (error) {
    console.error('Error creating profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}