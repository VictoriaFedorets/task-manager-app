"use client";

import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import Skeleton from "@/components/Skeleton/Skeleton";
import TodoForm from "@/components/TodoForm/TodoForm";
import TodoList from "@/components/TodoList/TodoList";
import TodoStats from "@/components/TodoStats/TodoStats";
import UndoToast from "@/components/UndoToast/UndoToast";

import Container from "@/components/layout/Container/Container";
import Header from "@/components/layout/Header/Header";

import { useTodoPage } from "@/view-models/useTodoPage";

import styles from "./TodoPage.module.css";
import ErrorState from "../ErrorState/ErrorState";

export default function TodoPage() {
  const {
    todos,
    categories,

    loading,
    error,
    categoriesError,
    actionError,

    selectedCategory,

    totalCount,
    completedCount,

    deletedTodo,

    addTodo,
    toggleTodo,
    handleDelete,
    undo,

    handleCategoryChange,
    handleRetry,
    handleCategoriesRetry,
  } = useTodoPage();

  return (
    <Container>
      <div className={styles.wrapper}>
        <Header />

        <TodoStats
          total={totalCount}
          completed={completedCount}
        />

        <TodoForm
          onSubmit={addTodo}
        />

        {actionError && (
          <p className={styles.error}>
            {actionError}
          </p>
        )}

        <div className={styles.toolbar}>
          <CategoryFilter
            categories={categories}
            value={selectedCategory}
            onChange={
              handleCategoryChange
            }
          />
        </div>

        {categoriesError && (
          <ErrorState
            title="Unable to load categories"
            message={categoriesError}
            onRetry={handleCategoriesRetry}
          />
        )}

        {loading ? (
          <Skeleton rows={6} />
        ) : (
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={handleDelete}
          />
        )}

        {error && (
          <ErrorState
            message={error}
            onRetry={handleRetry}
          />
        )}

        <UndoToast
          open={!!deletedTodo}
          text={deletedTodo?.text ?? ""}
          onUndo={undo}
        />
      </div>
    </Container>
  );
}
