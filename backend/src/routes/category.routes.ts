import { Router } from 'express';

import { getCategoriesController } from '../controllers/category.controller';

const router = Router();

router.get('/', getCategoriesController);

export default router;