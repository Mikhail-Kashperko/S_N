import React from 'react'
import ProfileInfo from './ProfileInfo'
import WallContainer from './Wall/WallContainer'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile = {props.profile} />
            <WallContainer />
        </div>
    )
}

export default Profile