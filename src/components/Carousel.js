import React, {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "../moduleCSS/Carousel.module.css";

export default function Carousel({ children }) {
  const containerRef = useRef();
  const intervalRef = useRef();
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const slides = useMemo(() => {
    return Children.map(children, (child, index) => (
      <li key={index} className={styles.slide}>
        {child}
      </li>
    ));
  }, [children]);

  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, [current]);

  const actionHandler = useCallback(
    () => {
      containerRef.current.style.transitionDuration = "400ms";
        if (current < children.length - 1) {
          setTranslateX((containerRef.current.clientWidth * (current + 1))/2);
          setCurrent((prev) => prev + 1);
        } else {
          setTranslateX(0);
          setCurrent(0);
        }
    },
    [current, children.length]
  );

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      actionHandler();
    }, 2000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandler]);

  return (
    <div className={styles.carousel}>
      <div className={styles.mainContainer}>
        <ul
          className={styles.container}
          ref={containerRef}
          style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}
        >
          {slides}
        </ul>
      </div>
    </div>
  );
}
