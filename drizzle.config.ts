import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/server/database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: "127.0.0.1",
    port: 5432,
    database: "admin",
    user: "admin",
    password: "admin",
  },
} satisfies Config;
