import { Router } from 'express';
import { getArticles, getHighlightedArticles } from '@/modules/articles/controllers';

const router = Router();

router.get('/', getArticles);
router.get('/highlighted', getHighlightedArticles);

export const articleRouter = router;
