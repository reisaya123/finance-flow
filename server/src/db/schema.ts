import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  income: integer().notNull().default(0),
  createdAt: timestamp({ withTimezone: true })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp({ withTimezone: true })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

// Separate users table and account table to support multiple auth providers as well as improve security.
export const accountsTable = pgTable("accounts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .notNull()
    .references(() => usersTable.id),
  provider: varchar({ length: 255 }).notNull(),
  hashedPassword: varchar({ length: 255 }).notNull(),
  createdAt: timestamp({ withTimezone: true })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp({ withTimezone: true })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const transactionsTable = pgTable("transactions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .notNull()
    .references(() => usersTable.id),
  title: varchar({ length: 255 }).notNull(),
  amount: integer().notNull(),
  description: text(),
  date: timestamp({ withTimezone: true }).notNull(),
  createdAt: timestamp({ withTimezone: true })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp({ withTimezone: true })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});
