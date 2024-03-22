import { useLayoutEffect, useState } from "react";

export function useCalculateHeight() {
  const [windowHeight, setWindowHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      setWindowHeight(vh);
    };

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return windowHeight;
}
