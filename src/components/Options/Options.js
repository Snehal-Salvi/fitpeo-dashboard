import React from "react";
import styles from "./Options.module.css";
import { PiHamburgerBold } from "react-icons/pi";
import { BiDish, BiTargetLock } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";

export default function Options() {
  return (
    <>
      {/* Options section for Goals */}
      <div className={styles.container}>
        <div className={`${styles.icon} ${styles.targetIcon}`}>
          <BiTargetLock />
        </div>
        <div className={styles.heading}>Goals</div>
        <div className={styles.button}>
          <MdNavigateNext className={styles.moreButtonIcon} />
        </div>
      </div>

      {/* Options section for Popular Dishes */}
      <div className={styles.container}>
        <div className={`${styles.icon} ${styles.burgerIcon}`}>
          <PiHamburgerBold />
        </div>
        <div className={styles.heading}>Popular Dishes</div>
        <div className={styles.button}>
          <MdNavigateNext className={styles.moreButtonIcon} />
        </div>
      </div>

      {/* Options section for Menus */}
      <div className={styles.container}>
        <div className={`${styles.icon} ${styles.menuIcon}`}>
          <BiDish />
        </div>
        <div className={styles.heading}>Menus</div>
        <div className={styles.button}>
          <MdNavigateNext className={styles.moreButtonIcon} />
        </div>
      </div>
    </>
  );
}
