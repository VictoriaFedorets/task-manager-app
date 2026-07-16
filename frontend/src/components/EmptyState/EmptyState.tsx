import styles from "./EmptyState.module.css";

import { EmptyStateProps } from "./EmptyState.types";

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <section className={styles.empty}>
      <div className={styles.icon}>
        📋
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>

      <p className={styles.description}>
        {description}
      </p>
    </section>
  );
}