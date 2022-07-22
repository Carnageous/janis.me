import HeaderStars from "@components/three/HeaderStars";
import globals from "@config/globals";
import useScrollPosition from "@hooks/useScrollPosition";
import styles from "@styles/modules/Header.module.scss";
import { useEffect, useState } from "react";
import { HeaderBackground } from "./HeaderBackground";

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [scrollVariable, setScrollVariable] = useState({
    "--scrollPosition": scrollPosition,
  } as React.CSSProperties);

  useEffect(() => {
    setScrollVariable({
      "--scrollPosition": scrollPosition < 30 ? 30 : scrollPosition,
      display: scrollPosition > 500 ? "none" : "block",
    } as React.CSSProperties);
  }, [scrollPosition]);

  return (
    <header className={styles["app-header"]}>
      <h1 className={styles["app-header__title"]} style={scrollVariable}>
        {globals.APP_TITLE}
      </h1>
      <HeaderStars />
      <HeaderBackground />
    </header>
  );
}
