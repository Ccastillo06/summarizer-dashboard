import { Article, Author } from '@/db/schema';

export const mergeArticleAndAuthor = (article: Article, author: Author) => ({
  ...article,
  author: {
    ...author,
  },
});
