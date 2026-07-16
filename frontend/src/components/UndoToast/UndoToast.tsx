"use client";

import Button from "@/components/shared/Button/Button";

import styles from "./UndoToast.module.css";

import { UndoToastProps } from "./UndoToast.types";

export default function UndoToast({
  open,
  text,
  onUndo,
}: UndoToastProps) {
  return (
    <aside
      className={`${styles.toast} ${
        open ? styles.open : ""
      }`}
    >
      <div className={styles.content}>
        <span className={styles.icon}>
          🗑️
        </span>

        <div className={styles.info}>
          <p className={styles.title}>
            Todo deleted
          </p>

          <span className={styles.text}>
            {text}
          </span>
        </div>
      </div>

      <Button onClick={onUndo}>
        Undo
      </Button>
    </aside>
  );
}