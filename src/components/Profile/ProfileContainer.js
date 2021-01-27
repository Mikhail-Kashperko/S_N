import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import setUserProfile from '../../redux/profileReducer'

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`http://localhost:3000/users/1`)
            .then(response => {
                this.props.setUserProfile(response.data)
        }).catch(console.log)
    }

    render () {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)