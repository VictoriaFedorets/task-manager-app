"use client";

import { useForm } from "react-hook-form";

import Button from "@/components/shared/Button/Button";
import Input from "@/components/shared/Input/Input";

import styles from "./TodoForm.module.css";

import { TodoFormProps } from "./TodoForm.types";

interface TodoFormValues {
  text: string;
  category: string;
}

export default function TodoForm({
  onSubmit,
}: TodoFormProps) {

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: {
      errors,
    },
  } = useForm<TodoFormValues>({
    defaultValues: {
      text: "",
      category: "",
    },
  });


  const submitHandler = async (
    data: TodoFormValues,
  ) => {
    try {
      await onSubmit({
        text: data.text.trim(),
        category: data.category.trim(),
      });

      reset();

    } catch {
      // Parent handles action errors.
    }
  };


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(submitHandler)}
    >

      <Input
        placeholder="What needs to be done?"
        {...register("text", {
          required: "Task text is required",
          maxLength: {
            value: 100,
            message:
              "Task must be shorter than 100 characters",
          },
        })}
        onChange={() => {
          clearErrors("text");
        }}
      />


      <Input
        placeholder="Category"
        {...register("category", {
          required: "Category is required",
        })}
        onChange={() => {
          clearErrors("category");
        }}
      />


      {(errors.text || errors.category) && (
        <p className={styles.error}>
          {errors.text?.message ||
            errors.category?.message}
        </p>
      )}


      <Button type="submit">
        Add Todo
      </Button>

    </form>
  );
}