import React, { useEffect } from "react";
import style from "../moduleCSS/Astrix.module.css";
import AstrixLogo from "../media/Astrix.png";
import Astrix1 from "../media/Astrix1.png";
import Astrix2 from "../media/Astrix2.png";
import Astrix3 from "../media/Astrix3.png";
import Astrix4 from "../media/Astrix4.png";
import Astrix5 from "../media/Astrix5.png";
import Astrix6 from "../media/Astrix6.png";
import Astrix7 from "../media/Astrix7.png";
import Astrix8 from "../media/Astrix8.png";

export default function Astrix() {
  // useEffect for targetting and pushing animation classes
  useEffect(() => {
    const ele = document.querySelector(".target-div")
    setTimeout(() => {
      ele?.classList.add("move-up")
    }, 3500);
  },[])
  return (
    <div className={`${style.mainContainer} target-div`}>
      <img src={AstrixLogo} alt="" className={style.astrixLogo} />
      <section className={style.contentContainer}>
        <strong>
          {" "}
          WE{" "}
          <div className={`${style.animate1} ${style.animate}`}>
            <img src={Astrix1} alt="" className={`${style.image}`} />
          </div>{" "}
          ORGANIZE THE
        </strong>
        <strong>
          CONNECTION{" "}
          <div className={`${style.animate2} ${style.animate}`}>
            <img src={Astrix2} alt="" className={`${style.image}`} />
          </div>
        </strong>
        <strong>
          <div className={`${style.animate3} ${style.animate}`}>
            <img src={Astrix3} alt="" className={`${style.image}`} />
          </div>
          BETWEEN
          <div className={`${style.animate} ${style.margins}`}>
            <img src={Astrix4} alt="" className={`${style.image}`} />
          </div>
          MUSIC
        </strong>
        <strong>
          ARTIST{" "}
          <div className={`${style.animate4} ${style.animate}`}>
            <img src={Astrix5} alt="" className={`${style.image}`} />
          </div>
          CULTURE{" "}
          <div className={`${style.animate5} ${style.animate}`}>
            <img src={Astrix6} alt="" className={`${style.image}`} />
          </div>
        </strong>
        <strong>
          <div className={`${style.animate6} ${style.animate}`}>
            <img src={Astrix7} alt="" className={`${style.image}`} />
          </div>
          ART
          <div className={`${style.animate} ${style.margins}`}>
            <img src={Astrix8} alt="" className={`${style.image}`} />
          </div>{" "}
          & COLLECTIONS
        </strong>
      </section>
    </div>
  );
}
