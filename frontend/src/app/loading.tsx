import styles from "./loading.module.css";


export default function Loading() {
  return (
    <main className={styles.page}>

      <section className={styles.card}>

        <div className={styles.logo}>
          <span />
        </div>


        <h1 className={styles.title}>
          Loading todos
        </h1>


        <p className={styles.text}>
          Preparing your workspace...
        </p>


        <div className={styles.loader}>
          <span />
          <span />
          <span />
        </div>

      </section>

    </main>
  );
}