import type { Config } from "drizzle-kit";
export default {
  driver: "pg",
  schema: "./src/schema/**/*.schema.ts",
  dbCredentials: {
    connectionString: "postgresql://localhost:5432/test",
  },
} satisfies Config;
