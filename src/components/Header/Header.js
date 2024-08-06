import React from "react";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { CiMail, CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "../../assets/profile.png";

export default function Header() {
  return (
    <>
      {/* Navigation bar */}
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.header}`}>
        <div className="container-fluid">
          {/* Search input */}
          <div className={`navbar-brand ${styles.searchContainer}`}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search"
            />
          </div>
          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navigation items */}
          <div className={`collapse navbar-collapse ${styles.customCollapse}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Mail icon */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  <div className={styles.navItem} data-toggle="tooltip" data-placement="bottom" title="Mail">
                    <CiMail />
                  </div>
                </a>
              </li>
              {/* Settings icon */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  <div className={styles.navItem} data-toggle="tooltip" data-placement="bottom" title="Settings">
                    <CiSettings />
                  </div>
                </a>
              </li>
              {/* Notifications icon */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  <div className={styles.navItem} data-toggle="tooltip" data-placement="bottom" title="Notifications">
                    <IoMdNotificationsOutline />
                  </div>
                </a>
              </li>
              {/* Profile image */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  <div className={styles.navItem}>
                    <img
                      src={profile}
                      alt="profile"
                      className={styles.profileImage}
                      data-toggle="tooltip" data-placement="bottom" title="Profile"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
