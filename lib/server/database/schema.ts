import { sql } from "drizzle-orm";
import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  content: text("string").notNull(),
  done: boolean("done").default(false),
  doneAt: timestamp("done_at"),
  updatedAt: timestamp("updated_at"),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
