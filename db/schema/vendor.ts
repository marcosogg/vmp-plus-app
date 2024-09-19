// db/schema/vendor.ts
import { integer, serial, varchar, text, pgTable } from 'drizzle-orm/pg-core';

export const vendors = pgTable('vendors', {
  id: serial('id').primaryKey(),
  vendor_name: varchar('vendor_name', { length: 255 }).notNull(),
  vendor_id: varchar('vendor_id', { length: 100 }).unique().notNull(),
  payment_terms: varchar('payment_terms', { length: 100 }),
  country: varchar('country', { length: 100 }),
  average_discount: integer('average_discount'),
  contract_type: varchar('contract_type', { length: 100 }),
  rating: integer('rating'),
  credit_limit: integer('credit_limit'),
  contract_year: integer('contract_year'),
  relationship_type: varchar('relationship_type', { length: 100 }),
});

export type Vendor = typeof vendors.$inferSelect;
export type NewVendor = typeof vendors.$inferInsert;