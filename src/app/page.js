import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Dream Cosmetics</h2>
      </div>
    </main>
  );
}