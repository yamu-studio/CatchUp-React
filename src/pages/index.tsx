import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const text1 = "Hello workd"
  return (
    <main className={styles.main}>
      <div>
        <h1>{text1}</h1>
      </div>
    </main>
  );
}
