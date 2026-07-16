import styles from "./Skeleton.module.css";

import { SkeletonProps } from "./Skeleton.types";

export default function Skeleton({
  rows = 5,
}: SkeletonProps) {
  return (
    <div className={styles.list}>
      {Array.from({
        length: rows,
      }).map((_, index) => (
        <div
          key={index}
          className={styles.card}
        >
          <div className={styles.checkbox} />

          <div className={styles.content}>
            <div
              className={styles.title}
            />

            <div
              className={styles.subtitle}
            />
          </div>

          <div className={styles.button} />
        </div>
      ))}
    </div>
  );
}