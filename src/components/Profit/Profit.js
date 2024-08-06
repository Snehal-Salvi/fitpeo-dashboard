import React from "react";
import styles from "./Profit.module.css";
import { RiArrowUpSFill } from "react-icons/ri";
import CircularProgressBar from "./CircularProgressBar";

export default function Profit() {
  return (
    <>
      {/* Container for profit information */}
      <div className={styles.profitInfo}>
        {/* Title of the profit section */}
        <div className={styles.title}>Net Profit</div>
        {/* Display of the profit value */}
        <div className={styles.value}>$6759.25</div>
        {/* Growth percentage with an arrow icon */}
        <div className={styles.growth}>
          <RiArrowUpSFill />
          3%
        </div>
      </div>
       
      {/* Progress bar indicating profit performance */}
      <div className={styles.progressBar}>
        <CircularProgressBar/> 
      </div>
    </>
  );
}
