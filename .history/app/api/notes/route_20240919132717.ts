import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { note } from '@/db/schema/notes-schema';
import { withAuth } from '@/middleware/auth';

export const GET = withAuth(async () => {
  try {
    const notes = await db.select().from(note);
    return NextResponse.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});

export const POST = withAuth(async (request: Request) => {
  try {
    const body = await request.json();
    const newNote = await db.insert(note).values(body).returning();
    return NextResponse.json(newNote[0], { status: 201 });
  } catch (error) {
    console.error('Error creating note:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});