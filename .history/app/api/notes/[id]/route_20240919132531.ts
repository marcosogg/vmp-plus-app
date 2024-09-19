import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { note } from '@/db/schema/notes-schema';
import { eq } from 'drizzle-orm';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const noteData = await db.select().from(note).where(eq(note.id, parseInt(params.id))).limit(1);
    if (noteData.length === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }
    return NextResponse.json(noteData[0]);
  } catch (error) {
    console.error('Error fetching note:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const updatedNote = await db.update(note)
      .set(body)
      .where(eq(note.id, parseInt(params.id)))
      .returning();
    if (updatedNote.length === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }
    return NextResponse.json(updatedNote[0]);
  } catch (error) {
    console.error('Error updating note:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const deletedNote = await db.delete(note)
      .where(eq(note.id, parseInt(params.id)))
      .returning();
    if (deletedNote.length === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Error deleting note:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}