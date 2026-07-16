import { Dispatch, SetStateAction } from "react";

import { Todo } from "@/types/todo";

export interface UseTodosReturn {
  todos: Todo[];

  setTodos: Dispatch<SetStateAction<Todo[]>>;

  selectedCategory: string;

  loading: boolean;

  error: string | null;

  fetchTodos: (category?: string) => Promise<void>;

  handleCategoryChange: (
    category: string,
  ) => Promise<void>;
}