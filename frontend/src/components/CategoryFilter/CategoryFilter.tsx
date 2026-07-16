"use client";

import { useEffect, useRef, useState } from "react";

import {
  Check,
  ChevronDown,
  FolderOpen,
} from "lucide-react";

import styles from "./CategoryFilter.module.css";

import { CategoryFilterProps } from "./CategoryFilter.types";

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: CategoryFilterProps) {
  const [open, setOpen] =
    useState(false);

  const ref =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (
      e: MouseEvent,
    ) => {
      if (
        ref.current &&
        !ref.current.contains(
          e.target as Node,
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClick,
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick,
      );
  }, []);

  const selectCategory = (
    category: string,
  ) => {
    onChange(category);

    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={styles.dropdown}
    >
   <button
  className={styles.trigger}
  onClick={() => setOpen(!open)}
  type="button"
>
  <span className={styles.left}>
    <FolderOpen size={18} />

    <span className={styles.value}>
      {value || "All categories"}
    </span>
  </span>

  <ChevronDown
    size={18}
    className={`${styles.arrow} ${
      open ? styles.rotate : ""
    }`}
  />
</button>

      {open && (
        <div className={styles.menu}>
  <button
  className={`${styles.item} ${
    value === ""
      ? styles.active
      : ""
  }`}
  onClick={() => selectCategory("")}
>
  <span className={styles.itemContent}>
    <FolderOpen size={16} />

    <span className={styles.itemText}>
      All categories
    </span>
  </span>

  {value === "" && (
    <Check size={16} className={styles.check} />
  )}
</button>

{categories
  .filter(Boolean)
  .map((category) => (
  <button
    key={category}
    className={`${styles.item} ${
      value === category
        ? styles.active
        : ""
    }`}
    onClick={() =>
      selectCategory(category)
    }
  >
    <span className={styles.itemContent}>
      <FolderOpen size={16} />

      <span className={styles.itemText}>
        {category}
      </span>
    </span>

    {value === category && (
      <Check size={16} />
    )}
  </button>
))}
</div>
      )}
    </div>
  );
}