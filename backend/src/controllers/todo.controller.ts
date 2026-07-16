import { Request, Response } from 'express';

import { asyncHandler } from '../utils/async-handler';
import { parseId } from '../utils/parse-id';

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../services/todo.service';


export const getTodosController = asyncHandler(
  async (req: Request, res: Response) => {
    const { category } = req.query;

    const todos = await getTodos(
      typeof category === 'string' ? category : undefined,
    );

    res.json(todos);
  },
);


export const createTodoController = asyncHandler(
  async (req: Request, res: Response) => {
    const todo = await createTodo(req.body);

    res.status(201).json(todo);
  },
);


export const updateTodoController = asyncHandler(
  async (req: Request, res: Response) => {
    const id = parseId(String(req.params.id));

    const todo = await updateTodo(
      id,
      req.body,
    );

    res.json(todo);
  },
);


export const deleteTodoController = asyncHandler(
  async (req: Request, res: Response) => {
    const id = parseId(String(req.params.id));

    await deleteTodo(id);

    res.status(204).send();
  },
);