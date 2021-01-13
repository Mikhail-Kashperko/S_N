import React from 'react'
import Posts from './Posts'
import ProfileInfo from './ProfileInfo'

const Profile = () => {

    let postData = [
        {id: 1, text: 'post', likesCount: 3, key: 1},
        {id: 2, text: 'post2', likesCount: 7, key: 2}
    ]

    return (
        <div>
            <ProfileInfo/>
            <Posts postData = {postData}/>
        </div>
    )
}

export default Profile