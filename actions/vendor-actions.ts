import { db } from '@/db/db';
import { vendors } from '@/db/schema/vendor';
import { eq } from 'drizzle-orm';

export async function getVendors() {
  try {
    const allVendors = await db.select().from(vendors);
    return { success: true, data: allVendors };
  } catch (error) {
    console.error('Failed to fetch vendors:', error);
    return { success: false, error: 'Failed to fetch vendors' };
  }
}

export async function getVendorById(id: string) {
  try {
    const vendor = await db.select().from(vendors).where(eq(vendors.id, id)).limit(1);
    return { success: true, data: vendor[0] };
  } catch (error) {
    console.error(`Failed to fetch vendor with id ${id}:`, error);
    return { success: false, error: 'Failed to fetch vendor' };
  }
}

export async function createVendor(vendorData: Omit<typeof vendors.$inferInsert, 'id'>) {
  try {
    const newVendor = await db.insert(vendors).values(vendorData).returning();
    return { success: true, data: newVendor[0] };
  } catch (error) {
    console.error('Failed to create vendor:', error);
    return { success: false, error: 'Failed to create vendor' };
  }
}

export async function updateVendor(id: string, vendorData: Partial<typeof vendors.$inferInsert>) {
  try {
    const updatedVendor = await db
      .update(vendors)
      .set(vendorData)
      .where(eq(vendors.id, id))
      .returning();
    return { success: true, data: updatedVendor[0] };
  } catch (error) {
    console.error(`Failed to update vendor with id ${id}:`, error);
    return { success: false, error: 'Failed to update vendor' };
  }
}

export async function deleteVendor(id: string) {
  try {
    await db.delete(vendors).where(eq(vendors.id, id));
    return { success: true };
  } catch (error) {
    console.error(`Failed to delete vendor with id ${id}:`, error);
    return { success: false, error: 'Failed to delete vendor' };
  }
}