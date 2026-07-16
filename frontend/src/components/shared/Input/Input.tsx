import {
  InputHTMLAttributes,
} from "react";

import styles from "./Input.module.css";

type Props =
  InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
}