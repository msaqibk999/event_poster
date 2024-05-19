import React, { useEffect, useState, useRef } from "react";
import styles from "../moduleCSS/CardSlider.module.css";

function CardSlider({ state, images }) {
  const [translateX, setTranslateX] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const headerRef = useRef(null);
  const headerRef2 = useRef(null);
  const items = (
    <>
      <div className={styles.empty}></div>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.imageContainer} ${
            focusedIndex === index ? "focused" : ""
          }`}
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
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Location
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTranslateX((prev) => {
        const nextTranslateX = prev + 25 + 1.5;
        const newIndex =
          nextTranslateX > 80 ? 0 : Math.floor(nextTranslateX / 25);
        setFocusedIndex(newIndex);
        return nextTranslateX > 80 ? -1 : nextTranslateX;
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setTranslateX(0);
    setFocusedIndex(0);
  }, [images]);

  useEffect(() => {
    const header = headerRef.current;
    const header2 = headerRef2.current;
    if (header) {
      const focusedImage = document.querySelector(".focused");
      if (focusedImage) {
        const rect = focusedImage.getBoundingClientRect();
        if (rect.left > 0) {
          header.style.left = `${rect.left - 420}px`;
          header2.style.left = `${rect.left}px`;
        } else {
          header.style.left = "224px";
          header2.style.left = "645px";
        }

        if(focusedIndex === images.length - 1){
          console.log("here")
          header2.style.display = "none";
        }else{
          header2.style.display = "flex";
        }
      }
    }
  }, [focusedIndex]);

  return (
    <div className={styles.mainContainer}>
      {!state && (
        <>
          <div ref={headerRef} className={styles.header}>
            <strong>Lunar Palace:</strong>
            <span>(ft. Kanye West)</span>
          </div>
          <div ref={headerRef2} className={styles.header2}>
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
