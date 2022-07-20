import Header from "@components/ui/Header";
import styles from "@styles/modules/Home.module.scss";

export default function Home() {
  return (
    <div className={styles["app-home"]}>
      <Header />
      <div className={styles["app-home__content"]}>
        <h1>Nice to see you, friend!</h1>
        <h2>
          However, this website is just being built. If you want to, you can
          come back in a couple of weeks?
        </h2>
        <h2>
          Until then, please checkout my{" "}
          <a href="https://github.com/carnageous" rel="noopener">
            Github profile
          </a>{" "}
          :)
        </h2>
      </div>
    </div>
  );
}
