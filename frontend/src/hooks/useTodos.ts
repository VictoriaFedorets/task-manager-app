import {
    useCallback,
    useState,
  } from "react";
  
  import { getTodos } from "@/api/todo.api";
  
  import { Todo } from "@/types/todo";
  
  import { UseTodosReturn } from "@/types/useTodos.types";
  
  export const useTodos = (): UseTodosReturn => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const [selectedCategory, setSelectedCategory] =
      useState("");
  
    const [loading, setLoading] =
      useState(false);
  
    const [error, setError] =
      useState<string | null>(null);
  
    const fetchTodos = useCallback(
      async (category?: string) => {
        try {
          setLoading(true);
          setError(null);
  
          const data = await getTodos(category);
  
          setTodos(data);
        } catch {
          setError("Failed to load todos");
        } finally {
          setLoading(false);
        }
      },
      [],
    );
  
    const handleCategoryChange = async (
      category: string,
    ) => {
      setSelectedCategory(category);
  
      await fetchTodos(
        category || undefined,
      );
    };
  
    return {
      todos,
      setTodos,
      selectedCategory,
      loading,
      error,
      fetchTodos,
      handleCategoryChange,
    };
  };