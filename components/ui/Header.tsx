import HeaderStars from "@components/three/HeaderStars";
import globals from "@config/globals";
import styles from "@styles/modules/Header.module.scss";
import { HeaderBackground } from "./HeaderBackground";

export default function Header() {
  return (
    <header className={styles["app-header"]}>
      <h1 className={styles["app-header__title"]}>{globals.APP_TITLE}</h1>
      <HeaderStars />
      <HeaderBackground />
    </header>
  );
}
