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
            <img src = {props.profile.photo}></img>
        </div>
        <div className = {styles.user_description}>
            <div>
                <h1>{props.profile.name}</h1>
            </div>
            <div>location : {props.profile.location}:</div>
            <div>Age: {props.profile.age}</div>
        </div>
    </div>
  );
};

export default ProfileInfo;
