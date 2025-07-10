import { Router } from 'express';
import {
  getArticles,
  getHighlightedArticles,
  getArticleSummary,
} from '@/modules/articles/controllers';

const router = Router();

router.get('/', getArticles);
router.get('/highlighted', getHighlightedArticles);
router.get('/:id/summary', getArticleSummary);

export const articleRouter = router;
