import {
    PropsWithChildren,
  } from "react";
  
  import styles from "./Container.module.css";
  
  export default function Container({
    children,
  }: PropsWithChildren) {
    return (
      <main className={styles.container}>
        {children}
      </main>
    );
  }