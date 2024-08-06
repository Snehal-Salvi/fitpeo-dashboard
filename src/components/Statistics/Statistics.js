import React from "react";
import styles from "./Statistics.module.css";
import { TbBasketCheck, TbBasketPlus, TbBasketX } from "react-icons/tb";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { PiCurrencyDollarFill } from "react-icons/pi";

export default function Statistics() {
  return (
    <>
      {/* Card for total orders (added) */}
      <div className={styles.card}>
        <div className={`${styles.iconContainer} ${styles.basketPlusIcon}`}>
          <TbBasketPlus />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>Total Orders</div>
          <div className={styles.stats}>
            <div className={styles.value}>75</div>
            <div className={`${styles.percentage} ${styles.arrowUpIcon}`}>
              <RiArrowUpSFill /> 3%
            </div>
          </div>
        </div>
      </div>
      
      {/* Card for total orders (completed) */}
      <div className={styles.card}>
        <div className={`${styles.iconContainer} ${styles.basketCheckIcon}`}>
          <TbBasketCheck />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>Total Orders</div>
          <div className={styles.stats}>
            <div className={styles.value}>70</div>
            <div className={`${styles.percentage} ${styles.arrowDownIcon}`}>
              <RiArrowDownSFill /> 3%
            </div>
          </div>
        </div>
      </div>
      
      {/* Card for total orders (cancelled) */}
      <div className={styles.card}>
        <div className={`${styles.iconContainer} ${styles.basketXIcon}`}>
          <TbBasketX />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>Total Orders</div>
          <div className={styles.stats}>
            <div className={styles.value}>05</div>
            <div className={`${styles.percentage} ${styles.arrowUpIcon}`}>
              <RiArrowUpSFill /> 3%
            </div>
          </div>
        </div>
      </div>
      
      {/* Card for total revenue */}
      <div className={styles.card}>
        <div className={`${styles.iconContainer} ${styles.dollarIcon}`}>
          <PiCurrencyDollarFill />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>Total Orders</div>
          <div className={styles.stats}>
            <div className={styles.value}>$12k</div>
            <div className={`${styles.percentage} ${styles.arrowDownIcon}`}>
              <RiArrowDownSFill /> 3%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
