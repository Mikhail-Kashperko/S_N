import React from 'react'
import Wall from './Wall'
import ProfileInfo from './ProfileInfo'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Wall postData = {props.state.postData}/>
        </div>
    )
}

export default Profile