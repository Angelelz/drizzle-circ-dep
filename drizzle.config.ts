import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  schema: "./src/schema/**/*.schema.ts",
  dbCredentials: {
    port: 5433,
    host: "localhost",
    database: "test",
    user: "postgres",
    password: "p0stgr3s",
  },
} satisfies Config;

