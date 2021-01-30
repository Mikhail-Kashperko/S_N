import React from "react";
import { NavLink, Router, BrowserRouter, Route } from "react-router-dom";
import styles from "./Auth.module.css";
import AuthNavbar from "./AuthNavbar";
import Login from "./Login";
import Registration from "./Registration";

const Auth = () => {
  return (
    <div className = {styles.auth_form}>
      <h1>Welcome to social network</h1>
      <BrowserRouter>
        <AuthNavbar />
        <Route path="/login" render={() => <Login/>} />
        <Route path="/registration" render={() => <Registration/>} />
      </BrowserRouter>
    </div>
  );
};

export default Auth;
