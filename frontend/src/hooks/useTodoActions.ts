import { useCallback } from "react";

import {
  createTodo,
  deleteTodo,
  updateTodo,
} from "@/api/todo.api";

import {
  CreateTodoDto,
  Todo,
} from "@/types/todo";

interface UseTodoActionsProps {
  onCreate?: (todo: Todo) => void;
  onUpdate?: (todo: Todo) => void;
  onDelete?: (id: number) => void;
}

export const useTodoActions = ({
  onCreate,
  onUpdate,
  onDelete,
}: UseTodoActionsProps = {}) => {
  const addTodo = useCallback(
    async (dto: CreateTodoDto): Promise<void> => {
      const todo = await createTodo(dto);

      onCreate?.(todo);
    },
    [onCreate],
  );

  const toggleTodo = useCallback(
    async (
      id: number,
      completed: boolean,
    ): Promise<void> => {
      const todo = await updateTodo(id, {
        completed,
      });

      onUpdate?.(todo);
    },
    [onUpdate],
  );

  const removeTodo = useCallback(
    async (id: number): Promise<void> => {
      await deleteTodo(id);

      onDelete?.(id);
    },
    [onDelete],
  );

  return {
    addTodo,
    toggleTodo,
    removeTodo,
  };
};