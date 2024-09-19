// db/schema/risk.ts
import { integer, serial, varchar, pgTable } from 'drizzle-orm/pg-core';
import { vendors } from './vendor';

export const risk = pgTable('risk', {
  id: serial('id').primaryKey(),
  risk_level: varchar('risk_level', { length: 50 }),
  total_score: integer('total_score'),
  payment_terms_score: integer('payment_terms_score'),
  spend_score: integer('spend_score'),
  average_discount_score: integer('average_discount_score'),
  contract_score: integer('contract_score'),
  relationship_type_score: integer('relationship_type_score'),
  vendor_id: integer('vendor_id')
    .unique()
    .references(() => vendors.id, { onDelete: 'cascade' })
    .notNull(),
});

export type Risk = typeof risk.$inferSelect;
export type NewRisk = typeof risk.$inferInsert;