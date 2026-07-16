import {
  PropsWithChildren,
} from "react";

import styles from "./Card.module.css";

export default function Card({
  children,
}: PropsWithChildren) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}