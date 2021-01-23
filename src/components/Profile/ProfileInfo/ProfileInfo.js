import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
    <div className = {styles.profile}>
        <div className = {styles.user_photo}>
            <img src = "../src/img/avatar.jpg"></img>
        </div>
        <div className = {styles.user_description}>
            <div>
                <h1>Name Surname</h1>
            </div>
            <div>City:</div>
            <div>Age:</div>
            <div>Education:</div>
            <div>Work:</div>
            <div>About myself:</div>
        </div>
    </div>
  );
};

export default ProfileInfo;
