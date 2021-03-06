import React from "react";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <section className={styles.sideBar}>
      <div className={styles.item}>
        <NavLink to="/profile/1">Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="edit_profile">Edit profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/messenger">Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={styles.item}>
        <div className={styles.friends}>
          <NavLink to="/friends">Friends</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
