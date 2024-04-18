import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.error("Cannot Find Database URL");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrateDB = async () => {
  try {
    console.log("Migrating Client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Successfully Migrated Client");
  } catch (error: any) {
    console.error("Error Migrating Client");
    console.error(error.message);
  }
};
// migrateDB();
export default db;
