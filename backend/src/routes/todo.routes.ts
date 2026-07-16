import { Router } from 'express';

import {
  getTodosController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
} from '../controllers/todo.controller';

const router = Router();

router.get('/', getTodosController);

router.post('/', createTodoController);

router.patch('/:id', updateTodoController);

router.delete('/:id', deleteTodoController);

export default router;