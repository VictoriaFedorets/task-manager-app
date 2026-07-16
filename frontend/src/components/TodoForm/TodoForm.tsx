"use client";

import { FormEvent, useState } from "react";

import Button from "@/components/shared/Button/Button";
import Input from "@/components/shared/Input/Input";

import styles from "./TodoForm.module.css";

import { TodoFormProps } from "./TodoForm.types";

export default function TodoForm({
  onSubmit,
}: TodoFormProps) {
  const [text, setText] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [formError, setFormError] =
    useState<string | null>(null);

  const handleSubmit = async (
    e: FormEvent,
  ) => {
    e.preventDefault();

    if (!text.trim()) {
      setFormError("Task text is required");
      return;
    }

    if (!category.trim()) {
      setFormError("Category is required");
      return;
    }

    if (text.length > 100) {
      setFormError(
        "Task must be shorter than 100 characters",
      );
      return;
    }

    try {
      setFormError(null);

      await onSubmit({
        text: text.trim(),
        category: category.trim(),
      });

      setText("");
      setCategory("");
    } catch {
      // Parent handles action errors.
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setFormError(null);
        }}
      />

      <Input
        placeholder="Category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setFormError(null);
        }}
      />

      {formError && (
        <p className={styles.error}>
          {formError}
        </p>
      )}

      <Button type="submit">
        Add Todo
      </Button>
    </form>
  );
}
