import { boolean, numeric, pgTable, serial, text } from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    job: text("job"),
    rate: numeric("rate", { precision: 10, scale: 2 }),
    isactive: boolean("isactive").default(true).notNull()
})
