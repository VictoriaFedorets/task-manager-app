import {
    useCallback,
    useEffect,
    useRef,
    useState,
  } from "react";
  
  import { Todo } from "@/types/todo";
  
  import { UseUndoTodoReturn } from "@/types/useUndoTodo.types";
  
  const UNDO_TIMEOUT = 5000;
  
  export const useUndoTodo =
    (): UseUndoTodoReturn => {
      const [deletedTodo, setDeletedTodo] =
        useState<Todo | null>(null);
  
      const timerRef =
        useRef<ReturnType<typeof setTimeout> | null>(
          null,
        );
  
      const restoreRef =
        useRef<(() => void) | null>(null);
  
      const isUndoActive =
        deletedTodo !== null;
  
      const startUndo = useCallback(
        (
          todo: Todo,
          onDelete: () => Promise<void>,
          onRestore: () => void,
        ) => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
  
          setDeletedTodo(todo);
  
          restoreRef.current = onRestore;
  
          timerRef.current = setTimeout(
            async () => {
              await onDelete();
  
              restoreRef.current = null;
              timerRef.current = null;
  
              setDeletedTodo(null);
            },
            UNDO_TIMEOUT,
          );
        },
        [],
      );
  
      const undo = useCallback(() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
  
        restoreRef.current?.();
  
        restoreRef.current = null;
        timerRef.current = null;
  
        setDeletedTodo(null);
      }, []);
  
      const clearUndo = useCallback(() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
  
        restoreRef.current = null;
        timerRef.current = null;
  
        setDeletedTodo(null);
      }, []);
  
      useEffect(() => {
        return () => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        };
      }, []);
  
      return {
        deletedTodo,
        isUndoActive,
        startUndo,
        undo,
        clearUndo,
      };
    };