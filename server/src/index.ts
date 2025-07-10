import 'dotenv/config';
import 'tsconfig-paths/register';

import express from 'express';
import cors from 'cors';

import logger from '@/libs/logger';
import { CustomError, errorHandler } from '@/libs/error-handler';
import { injectRoutes } from '@/libs/router';

const port = process.env.NODE_PORT || 4100;
const app = express();

// This is a demo project with no fixed origin, so we allow all origins for testing purposes
app.use(cors());

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
