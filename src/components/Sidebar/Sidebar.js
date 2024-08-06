import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { RiBarChartBoxLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      {/* Sidebar logo */}
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoImage} />
      </div>

      {/* Sidebar navigation icons */}
      <div className={styles.icons}>
        {/* Home icon */}
        <div
          className={styles.sidebarItem}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Home"
        >
          <AiFillHome />
        </div>
        {/* Activity icon */}
        <div
          className={styles.sidebarItem}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Activity"
        >
          <RiBarChartBoxLine />
        </div>
        {/* Tasks icon */}
        <div
          className={styles.sidebarItem}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Tasks"
        >
          <BiTask />
        </div>
        {/* Wallet icon */}
        <div
          className={styles.sidebarItem}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Wallet"
        >
          <CiWallet />
        </div>
        {/* Orders icon */}
        <div
          className={styles.sidebarItem}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Orders"
        >
          <BsBagCheck />
        </div>
      </div>

      {/* Logout icon */}
      <div
        className={styles.logout}
        data-toggle="tooltip"
        data-placement="bottom"
        title="Logout"
      >
        <div className={styles.sidebarItem}>
          <IoMdLogOut />
        </div>
      </div>
    </div>
  );
}
