import styles from "./TodoStats.module.css";

import { TodoStatsProps } from "./TodoStats.types";

export default function TodoStats({
  total,
  completed,
}: TodoStatsProps) {
  const active =
    total - completed;

  const stats = [
    {
      title: "Total",
      value: total,
    },
    {
      title: "Active",
      value: active,
    },
    {
      title: "Completed",
      value: completed,
    },
  ];

  return (
    <section className={styles.stats}>
      {stats.map((stat) => (
        <article
          key={stat.title}
          className={styles.card}
        >
          <span className={styles.label}>
            {stat.title}
          </span>

          <strong className={styles.value}>
            {stat.value}
          </strong>
        </article>
      ))}
    </section>
  );
}