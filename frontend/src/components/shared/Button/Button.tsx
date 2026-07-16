import {
  ButtonHTMLAttributes,
} from "react";

import styles from "./Button.module.css";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}