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

  const handleSubmit = async (
    e: FormEvent,
  ) => {
    e.preventDefault();

    if (!text.trim()) return;

    await onSubmit({
      text: text.trim(),
      category: category.trim(),
    });

    setText("");
    setCategory("");
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <Input
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <Button type="submit">
        Add Todo
      </Button>
    </form>
  );
}