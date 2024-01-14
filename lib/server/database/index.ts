import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres("postgres://admin:admin@127.0.0.1:5432/admin", {});
export const db = drizzle(queryClient);
