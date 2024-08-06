import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Profit.module.css";

export default function CircularProgressBar() {
  return (
    <>
      {/* Circular progress bar showing completion percentage */}
      <div className={styles.circularProgressBar}>
        <CircularProgressbarWithChildren
          value={70} // Progress value
          styles={buildStyles({
            textSize: "20px", // Text size in the progress bar
            trailColor: "#2a3464", // Color of the background trail
          })}
          strokeWidth={15} // Width of the progress stroke
          transition={{ duration: 1 }} // Animation duration
        >
          {/* Display percentage inside the progress bar */}
          <div className={styles.percentage}>70%</div>
          {/* Text below the percentage */}
          <span className={styles.innerText}>
            Goal <br /> Completed
          </span>
        </CircularProgressbarWithChildren>
      </div>

      {/* Note about the value rounding */}
      <div className={styles.note}>*The values here have been rounded off.</div>
    </>
  );
}
