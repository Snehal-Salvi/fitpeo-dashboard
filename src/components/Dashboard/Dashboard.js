import React from "react";
import styles from "./Dashboard.module.css";
import Statistics from "../Statistics/Statistics";
import Profit from "../Profit/Profit";
import Options from "../Options/Options";
import Orders from "../Orders/Orders";
import Feedback from "../Feedback/Feedback";
import Activity from "../Activity/Activity";

export default function Dashboard() {
  return (
    <div>
      {/* Title */}
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          {/* Statistics component */}
          <div className={`${styles.card} ${styles.statasticsContainer}`}>
            <Statistics />
          </div>
          {/* Activity component */}
          <div className={`${styles.card} ${styles.activityContainer}`}>
            <Activity />
          </div>
          <div className={`${styles.card} ${styles.ordersContainer}`}>
            {/* Orders component */}
            <Orders />
          </div>
        </div>
        <div className={styles.rightContainer}>
          {/* Profit component */}
          <div className={`${styles.card} ${styles.profitContainer}`}>
            <Profit />
          </div>
          {/* Options component */}
          <div className={`${styles.card} ${styles.optionsContainer}`}>
            <Options />
          </div>
          {/* Feedback component */}
          <div className={`${styles.card} ${styles.feedbackContainer}`}>
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
}
