// db/schema/part.ts
import { integer, serial, varchar, pgTable } from 'drizzle-orm/pg-core';
import { vendors } from './vendor';

export const parts = pgTable('parts', {
  id: serial('id').primaryKey(),
  part_number: varchar('part_number', { length: 100 }).notNull(),
  buyer: varchar('buyer', { length: 255 }).notNull(),
  discount: integer('discount'),
  vendor_id: integer('vendor_id')
    .references(() => vendors.id, { onDelete: 'cascade' })
    .notNull(),
});

export type Part = typeof parts.$inferSelect;
export type NewPart = typeof parts.$inferInsert;