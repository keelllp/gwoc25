"use client";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.oven}>
        <div className={styles.tray}></div>
        <div className={styles.cupcake}>
          <div className={styles.cake}></div>
          <div className={styles.frosting}></div>
          <div className={styles.sprinkles}></div>
          <div className={styles.candle}>
            <div className={styles.flame}></div>
          </div>
        </div>
      </div>
      <p className={styles.loadingText}>Baking something sweet for you... 🍰</p>
    </div>
  );
}
