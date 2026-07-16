import {
  forwardRef,
  InputHTMLAttributes,
} from "react";

import styles from "./Input.module.css";

type Props =
  InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<
  HTMLInputElement,
  Props
>(
  (
    {
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        className={`${styles.input} ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;