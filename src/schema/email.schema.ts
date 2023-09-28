import {
  char,
  index,
  pgTable,
  timestamp,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./user.schema.ts";
export const email = pgTable(
  "email",
  {
    address: varchar("address", { length: 128 }).primaryKey(),
    userId: char("user_id", { length: 16 })
      .notNull()
      .references(() => user.id),
  },
  (table) => ({
    emailUserIdIdx: index("email_user_id_idx").on(table.userId),
  })
);
