import { Response, Request, NextFunction } from 'express';
import { getArticlesFromDb, getHighlightedArticlesFromDb } from '@/modules/articles/services';
import logger from '@/libs/logger';
import { mergeArticleAndAuthor } from './dto';

export const getArticles = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const articlesFromDb = await getArticlesFromDb();
    const articles = articlesFromDb.map(({ article, author }) =>
      mergeArticleAndAuthor(article, author),
    );

    res.status(200).json(articles);
  } catch (error) {
    logger.error('Error fetching articles list:', error);
    res.status(500).json({ message: 'Error fetching articles list' });
  }
};

export const getHighlightedArticles = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { mostShared, mostViewed } = await getHighlightedArticlesFromDb();

    const response = {
      mostViewed: mergeArticleAndAuthor(mostViewed.article, mostViewed.author),
      mostShared: mergeArticleAndAuthor(mostShared.article, mostShared.author),
    };

    res.status(200).json(response);
  } catch (error) {
    logger.error('Error fetching highlighted articles:', error);
    res.status(500).json({ message: 'Error fetching highlighted articles' });
  }
};
