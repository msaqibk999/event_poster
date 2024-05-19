import React from 'react'
import styles from '../moduleCSS/Toggle.module.css'

function Toggle({setState}) {

    const toggleState = (event) => {
        if (event.target.checked) {
          setState(true);
        } else {
          setState(false);
        }
      };

  return (
    <div className={styles.dark_mode}>
        <input
              className={styles.dark_mode_input}
              type="checkbox"
              id="darkmode-toggle"
              onChange={toggleState}
              defaultChecked
            />
            <label className={styles.dark_mode_label} htmlFor="darkmode-toggle">
              <div className={styles.events} > Events </div>
              <div className={styles.collections} > Collections </div>
            </label>
    </div>
  )
}

export default Toggle