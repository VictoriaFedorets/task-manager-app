import { Router } from 'express';

import todoRoutes from './todo.routes';
import categoryRoutes from './category.routes';

const router = Router();

router.use('/todos', todoRoutes);

router.use('/categories', categoryRoutes);

export default router;