import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { vendor } from '@/db/schema/vendor';

export async function GET() {
  try {
    const vendors = await db.select().from(vendor);
    return NextResponse.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newVendor = await db.insert(vendor).values(body).returning();
    return NextResponse.json(newVendor[0], { status: 201 });
  } catch (error) {
    console.error('Error creating vendor:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}