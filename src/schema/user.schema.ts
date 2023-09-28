import { char, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: char("id", { length: 16 }).primaryKey(),
});

