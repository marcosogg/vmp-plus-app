// db/schema/spend.ts
import { integer, serial, varchar, pgTable } from 'drizzle-orm/pg-core';
import { vendors } from './vendor';

export const spends = pgTable('spends', {
  id: serial('id').primaryKey(),
  year: integer('year').notNull(),
  usd_amount: integer('usd_amount').notNull(),
  relationship_type: varchar('relationship_type', { length: 100 }),
  rank: integer('rank'),
  vendor_id: integer('vendor_id')
    .references(() => vendors.id, { onDelete: 'cascade' })
    .notNull(),
});

export type Spend = typeof spends.$inferSelect;
export type NewSpend = typeof spends.$inferInsert;