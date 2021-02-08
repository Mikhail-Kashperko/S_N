import React from "react";
import styles from "./Auth.module.css";
import AuthNavbar from "./AuthNavbar";

class Auth extends React.Component {

  render () {
    return (
      <div className = {styles.auth_form}>
        <h1>Welcome to social network</h1>
        <AuthNavbar />
        {this.props.children}
      </div>
    );
  }
};

export default Auth;
