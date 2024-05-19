import React from 'react'
import styles from '../moduleCSS/SideComponent.module.css'
import { GrLocation } from "react-icons/gr";
import { MdOutlineAccessAlarm } from "react-icons/md";
import people from "../media/people.png"
import events from "../media/events.png"
import barcode from "../media/barcode.png"
import Collectibles from './Collectibles';

function SideComponent({state}) {
  return (
    <div className={styles.mainContainer}>
      <h3>Explore Your First <br />{state ? "Event":"Collectible"}</h3>
      <h1 className={`${state ? styles.extraMargin: styles.noMargin}`}>{state ? "Event Name":<>Meta <br /> Lives</>}</h1>
      <h4>{state ? <><GrLocation/> &nbsp; Venue &nbsp; <>&nbsp;</> <MdOutlineAccessAlarm/> &nbsp; 04/03/2024 @ 19:00</>:"Live in Astrix"}</h4>
      <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</div>
      <h3>{state ? "Artist Lineup":<><img className={styles.people} src={people} alt=""/><span>22k people interested</span></>}</h3>
      {state ? <img src={events} alt='' className={styles.events} />:<></>}
      <br />
      {state ? <img src={barcode} alt=''className={styles.barcode}/>:<><p>Collectibles</p> <br /><Collectibles /></>}
      <button className={styles.joinBtn}> Join Waitlist </button>
    </div>
  )
}

export default SideComponent