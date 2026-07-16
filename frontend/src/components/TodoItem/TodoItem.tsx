"use client";

import Button from "@/components/shared/Button/Button";
import Checkbox from "@/components/shared/Checkbox/Checkbox";

import styles from "./TodoItem.module.css";

import { TodoItemProps } from "./TodoItem.types";

import { Trash2 } from "lucide-react";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <article className={styles.item}>
     <Checkbox
    checked={todo.completed}
    onChange={() =>
        onToggle(
            todo.id,
            !todo.completed,
        )
    }
/>

      <div className={styles.content}>
        <h3
          className={`${styles.text} ${
            todo.completed
              ? styles.completed
              : ""
          }`}
        >
          {todo.text}
        </h3>

        <span className={styles.category}>
          {todo.category || "General"}
        </span>
      </div>

      <div className={styles.actions}>
      <button
    className={styles.delete}
    onClick={() => onDelete(todo.id)}
    aria-label="Delete todo"
>
    <Trash2 size={18}/>
</button>
      </div>
    </article>
  );
}