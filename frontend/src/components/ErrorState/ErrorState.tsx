"use client";

import { DatabaseZap } from "lucide-react";

import Button from "@/components/shared/Button/Button";

import styles from "./ErrorState.module.css";

import { ErrorStateProps } from "./ErrorState.types";


export default function ErrorState({
  title = "Unable to load todos",
  message = "Check your connection and try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <section className={styles.wrapper}>

      <div className={styles.icon}>
        <DatabaseZap size={38} />
      </div>


      <h2 className={styles.title}>
        {title}
      </h2>


      <p className={styles.message}>
        {message}
      </p>


      {onRetry && (
        <Button
          onClick={onRetry}
        >
          Try again
        </Button>
      )}

    </section>
  );
}