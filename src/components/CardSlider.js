import React, { useEffect, useState, useRef } from "react";
import styles from "../moduleCSS/CardSlider.module.css";
import { GrLocation } from "react-icons/gr";

function CardSlider({ state, images }) {
  const [translateX, setTranslateX] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [secondFocusedIndex, setSecondFocusedIndex] = useState(1);
  const headerRef = useRef(null);
  const headerRef2 = useRef(null);
  const sliderWidth = window.innerWidth > 1024 ? 80 : 60;
  const cardWidth = window.innerWidth > 1024 ? 25 : 18;

  // Initializing the items to display in carousel
  const items = (
    <>
      <div className={styles.empty}></div>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.imageContainer} ${
            index === focusedIndex ? "focused" : ""
          }
          ${index === secondFocusedIndex ? "second-focused" : ""}`}
        >
          <img src={img} alt="broken" className={styles.image} />
          <div
            className={`${styles.overImage} ${
              focusedIndex === index ? styles.hidden : ""
            }`}
          >
            {state && (
              <>
                <strong>Event Name</strong>
                <span>
                  <GrLocation /> &nbsp; Location
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );

  // useEffect to handle the carousel scroll and updating focused item
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTranslateX((prev) => {
        const maxIndex = images.length - 1;
        const nextTranslateX = prev + cardWidth + 1.5;
        const newIndex =
          nextTranslateX > sliderWidth
            ? 0
            : Math.floor(nextTranslateX / cardWidth);
        setFocusedIndex(newIndex);
        setSecondFocusedIndex(
          newIndex + 1 > maxIndex ? maxIndex : newIndex + 1
        );
        return nextTranslateX > sliderWidth ? -1 : nextTranslateX;
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, cardWidth, sliderWidth]);

  // useEffect to handle the changes due to toggling
  useEffect(() => {
    setTranslateX(0);
    setFocusedIndex(0);
    setSecondFocusedIndex(1);
  }, [images]);

  // useEffect to shift the headers to the top-left of focused and second-focused item
  useEffect(() => {
    const header = headerRef.current;
    const header2 = headerRef2.current;
    if (header) {
      const focusedImage = document?.querySelector(".focused");
      const focusedImage2 = document?.querySelector(".second-focused");
      if (focusedImage) {
        const rect1 = focusedImage?.getBoundingClientRect();
        const rect2 = focusedImage2?.getBoundingClientRect();
        if (rect1?.left > 0) {
          header.style.left = `${rect1?.left - 420}px`;
        } else {
          header.style.left = "240px";
        }
        if (rect2?.left > 0) {
          header2.style.left = `${rect2?.left - 420}px`;
        } else {
          header2.style.left = "700px";
        }

        if (focusedIndex === images.length - 1) {
          header2.classList.remove("showAnimation");
          header2.classList.add("hideAnimation");
        } else if (focusedIndex === 0 || rect2?.left > rect1?.left) {
          header2.classList.remove("hideAnimation");
          header2.classList.add("showAnimation");
        }
      }
    }
  }, [focusedIndex, images.length]);

  return (
    <div className={styles.mainContainer}>
      {!state && (
        <>
          <div ref={headerRef} className={`${styles.header} ${styles.header1}`}>
            <strong>Lunar Palace:</strong>
            <span>(ft. Kanye West)</span>
          </div>
          <div
            ref={headerRef2}
            className={`${styles.header} ${styles.header2}`}
          >
            <strong>Lunar Palace:</strong>
            <span>(ft. Kanye West)</span>
          </div>
        </>
      )}
      <div
        className={styles.carousel}
        style={{ transform: `translate3d(${-translateX}rem, 0, 0)` }}
      >
        {items}
      </div>
    </div>
  );
}

export default CardSlider;
