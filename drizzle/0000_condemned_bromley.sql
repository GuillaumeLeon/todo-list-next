CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"string" text NOT NULL,
	"done" boolean DEFAULT false,
	"done_at" timestamp,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
