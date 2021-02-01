import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import setAuthUserData from '../../redux/authReducer'


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
        .get(`http://localhost:3000/user` )
        .then(response => {
            console.log(response)
    }).catch(console.log)
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)