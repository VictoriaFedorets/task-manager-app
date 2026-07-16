import { api } from "./axios";

import {
  CreateTodoDto,
  Todo,
  UpdateTodoDto,
} from "@/types/todo";

const TODOS_ENDPOINT = "/todos";

export const getTodos = async (
  category?: string,
): Promise<Todo[]> => {
  const { data } = await api.get<Todo[]>(
    TODOS_ENDPOINT,
    {
      params: category
        ? { category }
        : undefined,
    },
  );

  return data;
};

export const createTodo = async (
  dto: CreateTodoDto,
): Promise<Todo> => {
  const { data } = await api.post<Todo>(
    TODOS_ENDPOINT,
    dto,
  );

  return data;
};

export const updateTodo = async (
  id: number,
  dto: UpdateTodoDto,
): Promise<Todo> => {
  const { data } = await api.patch<Todo>(
    `${TODOS_ENDPOINT}/${id}`,
    dto,
  );

  return data;
};

export const deleteTodo = async (
  id: number,
): Promise<void> => {
  await api.delete(
    `${TODOS_ENDPOINT}/${id}`,
  );
};