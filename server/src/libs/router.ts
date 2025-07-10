import { Application } from 'express';
import { articleRouter } from '@/modules/articles/routes';

export const injectRoutes = (app: Application) => {
  app.use('/api/health', (_req, res) => {
    res.status(200).send('OK');
  });

  app.use('/api/articles', articleRouter);
};
