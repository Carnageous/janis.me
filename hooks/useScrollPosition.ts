import { debounce } from "@utils/index";
import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
  };

  const scrollListener = debounce(updatePosition, 10);

  useEffect(() => {
    updatePosition();
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
