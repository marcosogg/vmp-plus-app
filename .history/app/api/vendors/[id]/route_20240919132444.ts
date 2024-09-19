import { NextResponse } from 'next/server';
import { db } from '@/db/db';
import { vendor } from '@/db/schema/vendor';
import { eq } from 'drizzle-orm';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const vendorData = await db.select().from(vendor).where(eq(vendor.id, parseInt(params.id))).limit(1);
    if (vendorData.length === 0) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 });
    }
    return NextResponse.json(vendorData[0]);
  } catch (error) {
    console.error('Error fetching vendor:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const updatedVendor = await db.update(vendor)
      .set(body)
      .where(eq(vendor.id, parseInt(params.id)))
      .returning();
    if (updatedVendor.length === 0) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 });
    }
    return NextResponse.json(updatedVendor[0]);
  } catch (error) {
    console.error('Error updating vendor:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const deletedVendor = await db.delete(vendor)
      .where(eq(vendor.id, parseInt(params.id)))
      .returning();
    if (deletedVendor.length === 0) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}