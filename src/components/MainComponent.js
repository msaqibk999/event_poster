import React, { useEffect, useState } from "react";
import img1 from "../media/1.png";
import img2 from "../media/2.png";
import img3 from "../media/3.png";
import img4 from "../media/4.png";
import imgb1 from "../media/b1.png";
import imgb3 from "../media/b3.png";
import logo from "../media/logo.png";
import Toggle from "./Toggle";
import CardSlider from "./CardSlider";
import styles from "../moduleCSS/MainComponent.module.css";

function MainComponent() {
  const [state, setState] = useState(true);
  const [images, setImages] = useState([img1, img2, img3]);

  useEffect(() => {
    if (state === false) {
      setImages([imgb1, img2, imgb3, img4]);
    } else {
      setImages([img1, img2, img3, img4]);
    }
  }, [state]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" className={styles.logo} /> <span>Astrix.</span>
      </div>
      <section className={styles.sliderContainer}>
        <CardSlider state={state} images={images} />
      </section>
      <div>
        <Toggle setState={setState} />
      </div>
      <div className={styles.background}>
        ASTR IX
        <br />
        <br />
        {state ? "EVE NTS" : "COLL ECTI BLE"}
      </div>
    </div>
  );
}

export default MainComponent;
