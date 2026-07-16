import { Todo } from "@/types/todo";


export interface TodoListProps {

 todos: Todo[];

 onToggle: (
  id:number,
  completed:boolean
 ) => Promise<void>;


 onDelete: (
  id:number
 ) => Promise<void>;

}