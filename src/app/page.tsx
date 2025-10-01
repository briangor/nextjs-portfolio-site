import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h2>
          Portfolio site coming soon...
        </h2>
      </main>
    </div>
  );
}
