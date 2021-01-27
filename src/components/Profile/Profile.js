import React from 'react'
import ProfileInfo from './ProfileInfo'
import WallContainer from './Wall/WallContainer'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile = {props.props} />
            <WallContainer />
        </div>
    )
}

export default Profile