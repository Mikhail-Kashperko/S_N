import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Auth.module.css";

const AuthNavbar = () => {
  return (
    <div className={styles.links}>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </div>
  );
};

export default AuthNavbar;
