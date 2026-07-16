import { useCallback, useEffect } from "react";

import { useCategories } from "../hooks/useCategories";
import { useTodoActions } from "../hooks/useTodoActions";
import { useTodos } from "../hooks/useTodos";
import { useUndoTodo } from "../hooks/useUndoTodo";
import { CreateTodoDto } from "@/types/todo";

export const useTodoPage = () => {
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
      await createTodo(data);
  
      await fetchTodos(selectedCategory || undefined);
  
      await fetchCategories();
    },
    [
      createTodo,
      fetchTodos,
      fetchCategories,
      selectedCategory,
    ],
  );

  const handleRetry = () => {
    void fetchTodos(
      selectedCategory || undefined,
    );
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

      setTodos((prev) =>
        prev.filter(
          (item) => item.id !== id,
        ),
      );

      startUndo(
        todo,

        async () => {
          await removeTodo(id);
        
          await fetchTodos(
            selectedCategory || undefined,
          );
        
          await fetchCategories();
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

    selectedCategory,

    totalCount,
    completedCount,

    deletedTodo,

    addTodo,
    toggleTodo,
    undo,
    handleDelete,

    handleCategoryChange,
    handleRetry,
  };
};