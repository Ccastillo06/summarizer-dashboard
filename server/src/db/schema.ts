import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const authorTable = sqliteTable('author', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('title'),
});

export const articleTable = sqliteTable('article', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  author_id: integer('author_id')
    .notNull()
    .references(() => authorTable.id, {
      onDelete: 'cascade',
    }),
  views: integer('views').default(0),
  shares: integer('shares').default(0),
  summary: text('summary'),
  summary_date: integer({ mode: 'timestamp' }),
});

export type Article = typeof articleTable.$inferSelect;
export type Author = typeof authorTable.$inferSelect;
