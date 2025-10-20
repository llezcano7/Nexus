import { useEffect, useRef, useState } from "react";
import "./scroll.css";

export default function Scroll({ children, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // se activa solo una vez
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Mapeamos la dirección a una clase CSS
  const directionClass =
    direction === "left"
      ? "slide-from-left"
      : direction === "right"
      ? "slide-from-right"
      : "slide-up";

  return (
    <div ref={ref} className={`${directionClass} ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}


