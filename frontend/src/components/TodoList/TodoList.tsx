import TodoItem from "@/components/TodoItem/TodoItem";
import EmptyState from "@/components/EmptyState/EmptyState";

import styles from "./TodoList.module.css";

import { TodoListProps } from "./TodoList.types";


export default function TodoList({
 todos,
 onToggle,
 onDelete,
}: TodoListProps) {


  if (!todos.length) {
    return (
      <EmptyState
        title="No tasks yet"
        description="Create your first task and start organizing your day."
      />
    );
  }


 return (

  <div className={styles.list}>

    {todos.map((todo)=>(

      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
      />

    ))}

  </div>

 );

}