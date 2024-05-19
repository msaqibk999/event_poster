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
import MiddleStrip from "./MiddleStrip";

function MainComponent({state, setState}) {
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
        <CardSlider state={state} images={images} />
        <Toggle setState={setState} />
        <MiddleStrip />
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
