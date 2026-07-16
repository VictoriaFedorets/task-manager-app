import { useCallback, useEffect, useState } from "react";

import { useCategories } from "../hooks/useCategories";
import { useTodoActions } from "../hooks/useTodoActions";
import { useTodos } from "../hooks/useTodos";
import { useUndoTodo } from "../hooks/useUndoTodo";
import { CreateTodoDto } from "@/types/todo";
import { getErrorMessage } from "@/utils/errors";

export const useTodoPage = () => {
  const [actionError, setActionError] =
    useState<string | null>(null);

  const {
    todos,
    setTodos,
    selectedCategory,
    loading,
    error,
    fetchTodos,
    handleCategoryChange,
  } = useTodos();

  const {
    categories,
    error: categoriesError,
    fetchCategories,
  } = useCategories();

  const {
    deletedTodo,
    isUndoActive,
    startUndo,
    undo,
  } = useUndoTodo();

  const {
    addTodo: createTodo,
    toggleTodo,
    removeTodo,
  } = useTodoActions({
    onUpdate: (updatedTodo) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === updatedTodo.id
            ? updatedTodo
            : todo,
        ),
      );
    },
  });

  const addTodo = useCallback(
    async (data: CreateTodoDto) => {
      try {
        setActionError(null);

        await createTodo(data);

        await fetchTodos(
          selectedCategory || undefined,
        );

        await fetchCategories();
      } catch (error) {
        const message = getErrorMessage(
          error,
          "Failed to create todo",
        );

        setActionError(message);
        throw error;
      }
    },
    [
      createTodo,
      fetchTodos,
      fetchCategories,
      selectedCategory,
    ],
  );

  const handleToggle = useCallback(
    async (
      id: number,
      completed: boolean,
    ) => {
      try {
        setActionError(null);

        await toggleTodo(id, completed);
      } catch (error) {
        setActionError(
          getErrorMessage(
            error,
            "Failed to update todo",
          ),
        );
      }
    },
    [toggleTodo],
  );

  const handleRetry = () => {
    void fetchTodos(
      selectedCategory || undefined,
    );
  };

  const handleCategoriesRetry = () => {
    void fetchCategories();
  };

  useEffect(() => {
    void fetchTodos();
    void fetchCategories();
  }, [
    fetchTodos,
    fetchCategories,
  ]);

  const handleDelete = useCallback(
    async (id: number) => {
      if (isUndoActive) {
        return;
      }

      const todo = todos.find(
        (item) => item.id === id,
      );

      if (!todo) {
        return;
      }

      setActionError(null);

      setTodos((prev) =>
        prev.filter(
          (item) => item.id !== id,
        ),
      );

      startUndo(
        todo,

        async () => {
          try {
            await removeTodo(id);

            await fetchTodos(
              selectedCategory ||
                undefined,
            );

            await fetchCategories();
          } catch (error) {
            setTodos((prev) => [
              todo,
              ...prev,
            ]);

            setActionError(
              getErrorMessage(
                error,
                "Failed to delete todo",
              ),
            );
          }
        },

        () => {
          setTodos((prev) => [
            todo,
            ...prev,
          ]);
        },
      );
    },
    [
      todos,
      setTodos,
      isUndoActive,
      startUndo,
      removeTodo,
      fetchTodos,
      fetchCategories,
      selectedCategory,
    ],
  );

  const completedCount =
    todos.filter(
      (todo) => todo.completed,
    ).length;

  const totalCount =
    todos.length;

  return {
    todos,
    categories,

    loading,
    error,
    categoriesError,
    actionError,

    selectedCategory,

    totalCount,
    completedCount,

    deletedTodo,

    addTodo,
    toggleTodo: handleToggle,
    undo,
    handleDelete,

    handleCategoryChange,
    handleRetry,
    handleCategoriesRetry,
  };
};
