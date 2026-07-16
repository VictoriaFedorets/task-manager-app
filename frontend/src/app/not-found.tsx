import Link from "next/link";

import {
  FileQuestion,
} from "lucide-react";

import styles from "./not-found.module.css";


export default function NotFound() {
  return (
    <main className={styles.page}>

      <section className={styles.card}>

        <div className={styles.icon}>
          <FileQuestion size={42} />
        </div>


        <h1 className={styles.title}>
          Page not found
        </h1>


        <p className={styles.text}>
          The page you are looking for
          does not exist or was moved.
        </p>


        <Link
          href="/"
          className={styles.button}
        >
          Back to home
        </Link>

      </section>

    </main>
  );
}