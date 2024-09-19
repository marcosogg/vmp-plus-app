CREATE TABLE IF NOT EXISTS "vendors" (
	"id" serial PRIMARY KEY NOT NULL,
	"vendor_name" varchar(255) NOT NULL,
	"vendor_id" varchar(100) NOT NULL,
	"payment_terms" varchar(100),
	"country" varchar(100),
	"average_discount" integer,
	"contract_type" varchar(100),
	"rating" integer,
	"credit_limit" integer,
	"contract_year" integer,
	"relationship_type" varchar(100),
	CONSTRAINT "vendors_vendor_id_unique" UNIQUE("vendor_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "parts" (
	"id" serial PRIMARY KEY NOT NULL,
	"part_number" varchar(100) NOT NULL,
	"buyer" varchar(255) NOT NULL,
	"discount" integer,
	"vendor_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "spends" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" integer NOT NULL,
	"usd_amount" integer NOT NULL,
	"relationship_type" varchar(100),
	"rank" integer,
	"vendor_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "risk" (
	"id" serial PRIMARY KEY NOT NULL,
	"risk_level" varchar(50),
	"total_score" integer,
	"payment_terms_score" integer,
	"spend_score" integer,
	"average_discount_score" integer,
	"contract_score" integer,
	"relationship_type_score" integer,
	"vendor_id" integer NOT NULL,
	CONSTRAINT "risk_vendor_id_unique" UNIQUE("vendor_id")
);
--> statement-breakpoint
DROP TABLE "notes";--> statement-breakpoint
DROP TABLE "profiles";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "parts" ADD CONSTRAINT "parts_vendor_id_vendors_id_fk" FOREIGN KEY ("vendor_id") REFERENCES "public"."vendors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "spends" ADD CONSTRAINT "spends_vendor_id_vendors_id_fk" FOREIGN KEY ("vendor_id") REFERENCES "public"."vendors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "risk" ADD CONSTRAINT "risk_vendor_id_vendors_id_fk" FOREIGN KEY ("vendor_id") REFERENCES "public"."vendors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
