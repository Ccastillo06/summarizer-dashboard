import { Response, Request, NextFunction } from 'express';
import {
  ArticleSortOrder,
  getArticleAuthorsFromDb,
  getArticleByIdFromDb,
  getArticlesFromDb,
  getHighlightedArticlesFromDb,
  saveArticleSummaryToDb,
} from '@/modules/articles/services';
import logger from '@/libs/logger';
import { mergeArticleAndAuthor } from './dto';
import { getArticleSummaryFromAI } from '../ai/services';

export const getArticles = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const articlesFromDb = await getArticlesFromDb({
      viewedSort: req.query.viewed as ArticleSortOrder,
      sharedSort: req.query.shared as ArticleSortOrder,
      authorFilter: req.query.author as string,
    });

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
    const { mostShared, mostViewed } = await getHighlightedArticlesFromDb({
      authorFilter: req.query.author as string,
    });

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

export const getArticleSummary = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    if (!req.params.id) return res.status(400).json({ message: 'Missing article id' });

    const parsedId = Number(req.params.id);
    if (isNaN(parsedId)) return res.status(400).json({ message: 'Invalid article id' });

    const articleById = await getArticleByIdFromDb(parsedId);
    const { content, title, summary } = articleById.article;

    // Summary has already been generated beforehand so we can return it
    if (summary) return res.status(200).json(summary);

    const newSummary = await getArticleSummaryFromAI(title, content);
    if (!newSummary) return res.status(400).json({ message: 'Error generating summary' });

    await saveArticleSummaryToDb(parsedId, newSummary);
    res.status(200).json(newSummary);
  } catch (error) {
    logger.error('Error fetching article summary:', error);
    res.status(500).json({ message: 'Error fetching article summary' });
  }
};

export const getArticleAuthors = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const authors = await getArticleAuthorsFromDb();
    res.status(200).json(authors);
  } catch (error) {
    logger.error('Error fetching article authors:', error);
    res.status(500).json({ message: 'Error fetching article authors' });
  }
};
