import { desc, eq } from 'drizzle-orm';
import { db } from '@/db';
import { articleTable, authorTable } from '@/db/schema';

export const getArticlesFromDb = async () => {
  const articles = await db
    .select()
    .from(articleTable)
    .innerJoin(authorTable, eq(articleTable.author_id, authorTable.id));

  return articles;
};

export const getHighlightedArticlesFromDb = async () => {
  const [[mostViewed], [mostShared]] = await Promise.all([
    db
      .select()
      .from(articleTable)
      .innerJoin(authorTable, eq(articleTable.author_id, authorTable.id))
      .orderBy(desc(articleTable.views))
      .limit(1),
    db
      .select()
      .from(articleTable)
      .innerJoin(authorTable, eq(articleTable.author_id, authorTable.id))
      .orderBy(desc(articleTable.shares))
      .limit(1),
  ]);

  return {
    mostViewed,
    mostShared,
  };
};

export const getArticleByIdFromDb = async (id: number) => {
  const article = await db
    .select()
    .from(articleTable)
    .where(eq(articleTable.id, id))
    .innerJoin(authorTable, eq(articleTable.author_id, authorTable.id))
    .limit(1);

  return article?.[0];
};

export const saveArticleSummaryToDb = async (articleId: number, summary: string) => {
  await db
    .update(articleTable)
    .set({ summary, summary_date: new Date() })
    .where(eq(articleTable.id, articleId));
};
