import React from "react";
import Preloader from "../../Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import * as axios from 'axios'

class ProfileInfo extends React.Component {

    

    render() {

        let user = localStorage.user
        let parsedUser = JSON.parse(user)
        console.log(parsedUser)

        return (
            <div className = {styles.profile}>
                <div>
                    <img className = {styles.user_photo} src = {parsedUser.photo}/>
                </div>
                <div>
                    {parsedUser.name} <br/>
                    location: {parsedUser.location} <br/>
                    age: {parsedUser.age}
                </div>
            </div>
        ) 
    }

}
export default ProfileInfo;

console.log(localStorage.getItem('user'))
