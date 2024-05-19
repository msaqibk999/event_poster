import React from "react";
import styles from "../moduleCSS/SideComponent.module.css";
import collectibles from "../media/collectibles.png";

function Collectibles() {
  return (
    <div className={styles.collectiblesContainer}>
      {Array.from({ length: 3 }).map((_, index) => 
        <img key={index} src={collectibles} alt="" className={styles.collectiblesImg}/>
      )}
    </div>
  );
}

export default Collectibles;
