import { char, index, pgTable } from "drizzle-orm/pg-core";

import { user } from "./user.schema.ts";
export const profile = pgTable(
  "profile",
  {
    id: char("id", { length: 16 }).primaryKey(),
    userId: char("user_id", { length: 16 })
      .notNull()
      .references(() => user.id),
  },
  (table) => ({
    profileUserIdIdx: index("profile_user_id_idx").on(table.userId),
  })
);
