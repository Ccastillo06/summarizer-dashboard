import { asc, desc, eq } from 'drizzle-orm';
import { db } from '@/db';
import { articleTable, authorTable } from '@/db/schema';

export type ArticleSortOrder = 'asc' | 'desc';

export const getArticlesFromDb = async ({
  sharedSort,
  viewedSort,
  authorFilter,
}: {
  sharedSort?: ArticleSortOrder;
  viewedSort?: ArticleSortOrder;
  authorFilter?: string;
}) => {
  const viewedOrderBy = viewedSort === 'asc' ? asc(articleTable.views) : desc(articleTable.views);
  const sharedOrderBy = sharedSort === 'asc' ? asc(articleTable.shares) : desc(articleTable.shares);
  const authorFilterQuery = Number.isNaN(Number(authorFilter))
    ? undefined
    : eq(articleTable.author_id, Number(authorFilter));

  const articles = await db
    .select()
    .from(articleTable)
    .innerJoin(authorTable, eq(articleTable.author_id, authorTable.id))
    .where(authorFilterQuery)
    .orderBy(...[...(viewedSort ? [viewedOrderBy] : []), ...(sharedSort ? [sharedOrderBy] : [])]);

  return articles;
};

export const getHighlightedArticlesFromDb = async ({ authorFilter }: { authorFilter?: string }) => {
  const authorFilterQuery = Number.isNaN(Number(authorFilter))
    ? undefined
    : eq(articleTable.author_id, Number(authorFilter));

  const [[mostViewed], [mostShared]] = await Promise.all([
    db
      .select()
      .from(articleTable)
      .innerJoin(authorTable, eq(articleTable.author_id, authorTable.id))
      .where(authorFilterQuery)
      .orderBy(desc(articleTable.views))
      .limit(1),
    db
      .select()
      .from(articleTable)
      .innerJoin(authorTable, eq(articleTable.author_id, authorTable.id))
      .orderBy(desc(articleTable.shares))
      .where(authorFilterQuery)
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

export const getArticleAuthorsFromDb = async () => {
  const authors = await db.select().from(authorTable);
  return authors;
};
