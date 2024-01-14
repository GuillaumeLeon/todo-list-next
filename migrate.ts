import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const migrateToLatest = async () => {
  const migrationClient = postgres(
    "postgres://admin:admin@127.0.0.1:5432/admin",
    {
      max: 1,
    }
  );
  migrate(drizzle(migrationClient), {
    migrationsFolder: "./drizzle",
  });
};

migrateToLatest().then(() => console.log("Migration done"));
