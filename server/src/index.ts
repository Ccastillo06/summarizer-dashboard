import 'dotenv/config';
import 'tsconfig-paths/register';

import express from 'express';

import logger from '@/libs/logger';
import { CustomError, errorHandler } from '@/libs/error-handler';
import { injectRoutes } from '@/libs/router';

const port = process.env.PORT || 4200;
const app = express();

app.use(express.json());
injectRoutes(app);

app.use((_req, _res, next) => {
  const error = new Error('Not Found') as CustomError;
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
