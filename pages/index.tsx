import Header from "@components/ui/Header";
import styles from "@styles/modules/Home.module.scss";

export default function Home() {
  return (
    <div className={styles["app-home"]}>
      <Header />
      <div className={styles["app-home__content"]}></div>
    </div>
  );
}
