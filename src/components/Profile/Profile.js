import React from 'react'
import Wall from './Wall'
import ProfileInfo from './ProfileInfo'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Wall 
                dispatch = {props.dispatch}
                newPostText = {props.profilePage.newPostText}
                postData = {props.profilePage.postData}
            />
        </div>
    )
}

export default Profile