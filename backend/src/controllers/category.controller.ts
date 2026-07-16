import { Request, Response } from 'express';

import { asyncHandler } from '../utils/async-handler';

import { getCategories } from '../services/category.service';


export const getCategoriesController = asyncHandler(
  async (_req: Request, res: Response) => {
    const categories = await getCategories();

    res.json(categories);
  },
);