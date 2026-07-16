"use client";

import styles from "./Checkbox.module.css";

import { CheckboxProps } from "./Checkbox.types";

export default function Checkbox({
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <button
      type="button"
      className={`${styles.checkbox} ${
        checked ? styles.checked : ""
      }`}
      onClick={onChange}
      aria-pressed={checked}
    >
      <span className={styles.tick}>
        ✓
      </span>
    </button>
  );
}