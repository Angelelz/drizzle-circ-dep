import { char, pgTable } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { profile } from "./profile.schema";
import { email } from "./email.schema";
import { account } from "./account.schema";

export const user = pgTable("user", {
  id: char("id", { length: 16 }).primaryKey(),
});

export const userRelations = relations(user, ({ many, one }) => ({
  profile: many(profile),
  email: many(email),
  account: many(account),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const profileRelations = relations(profile, ({ one }) => ({
  user: one(user, {
    fields: [profile.userId],
    references: [user.id],
  }),
}));

export const emailRelations = relations(email, ({ one }) => ({
  user: one(user, {
    fields: [email.userId],
    references: [user.id],
  }),
}));
