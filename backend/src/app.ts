import express from 'express';
import cors from 'cors';

import routes from './routes';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

app.use(
  cors({
    origin: '*',
  }),
);

app.use(express.json());

app.use('/api', routes);

app.use(errorMiddleware);

export default app;