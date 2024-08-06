import React from "react";
import styles from "./Activity.module.css";
import { RiArrowDownSFill } from "react-icons/ri";
import ActivityChart from "./ActivityChart";

export default function Activity() {
  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.title}>Activity</div>
        <div className={styles.dropdown}>
          Weekly <RiArrowDownSFill />
        </div>
      </div>

      {/* Activity Chart */}
      <ActivityChart />
    </>
  );
}
