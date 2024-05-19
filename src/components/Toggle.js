import React from "react";
import styles from "../moduleCSS/Toggle.module.css";

function Toggle({ setState }) {
  // toggling the state
  const toggleState = (event) => {
    if (event.target.checked) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className={styles.event}>
      <input
        className={styles.event_input}
        type="checkbox"
        id="event-toggle"
        onChange={toggleState}
        defaultChecked
      />
      <label className={styles.event_label} htmlFor="event-toggle">
        <div className={styles.events}> Events </div>
        <div className={styles.collections}> Collections </div>
      </label>
    </div>
  );
}

export default Toggle;
