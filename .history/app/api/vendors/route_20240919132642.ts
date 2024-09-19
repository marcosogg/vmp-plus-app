import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { vendor } from '@/db/schema/vendor';
import { withAuth } from '@/middleware/auth';

export const GET = withAuth(async () => {
  try {
    const vendors = await db.select().from(vendor);
    return NextResponse.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});

export const POST = withAuth(async (request: Request) => {
  try {
    const body = await request.json();
    const newVendor = await db.insert(vendor).values(body).returning();
    return NextResponse.json(newVendor[0], { status: 201 });
  } catch (error) {
    console.error('Error creating vendor:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
});