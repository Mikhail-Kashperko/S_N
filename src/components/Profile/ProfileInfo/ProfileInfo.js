import React from "react";
import Preloader from "../../Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
    <div className = {styles.profile}>
        <div className = {styles.user_photo}>
            <img src = "../src/img/avatar.jpg"></img>
        </div>
        <div className = {styles.user_description}>
            <div>
                <h1>{props.profile.name}</h1>
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
