import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import setUserProfile from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2;
        }

        axios
            .get(`http://localhost:3000/users/` + userId)
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

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile}) (WithURLDataContainerComponent )