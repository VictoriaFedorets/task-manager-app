import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      <h1 className={styles.title}>
      Task Manager
      </h1>

      <p className={styles.subtitle}>
      Organize your tasks, track progress and stay productive.
      </p>
    </header>
  );
}