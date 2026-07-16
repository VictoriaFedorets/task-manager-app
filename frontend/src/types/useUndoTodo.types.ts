import { Todo } from "@/types/todo";

export interface UseUndoTodoReturn {
  deletedTodo: Todo | null;

  isUndoActive: boolean;

  startUndo: (
    todo: Todo,
    onDelete: () => Promise<void>,
    onRestore: () => void,
  ) => void;

  undo: () => void;

  clearUndo: () => void;
}