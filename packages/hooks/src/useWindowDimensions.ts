import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [landscape, setLandscape] = useState(
    window.innerWidth > window.innerHeight,
  );
  const [portrait, setPortrait] = useState(
    window.innerWidth < window.innerHeight,
  );

  const updateDimensions = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setLandscape(window.innerWidth > window.innerHeight);
    setPortrait(window.innerWidth < window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return { height, width, landscape, portrait };
}
