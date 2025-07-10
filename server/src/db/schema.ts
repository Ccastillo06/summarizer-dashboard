import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const authorTable = sqliteTable("author", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("title"),
});

export const articleTable = sqliteTable("article", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title"),
  content: text("content"),
  author_id: integer("author_id")
    .notNull()
    .references(() => authorTable.id, {
      onDelete: "cascade",
    }),
  views: integer("views"),
  shares: integer("shares"),
});
