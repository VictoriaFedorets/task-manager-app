import { Todo } from "@/types/todo";


export interface TodoItemProps {
  todo: Todo;

  onToggle: (
    id:number,
    completed:boolean
  ) => Promise<void>;

  onDelete: (
    id:number
  ) => Promise<void>;
}