import React from 'react'
import {connect} from 'react-redux'
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader'

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true)

        axios
            .get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data)
                this.props.toggleIsFetching(false)


                let userCount = Number(response.headers["x-total-count"]) 

                this.props.setTotalUsersCount(userCount)
        }).catch(console.log)
    }

    onPageChanged = (pageNumber) => {
        
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        axios.get(`http://localhost:3000/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data)
                this.props.toggleIsFetching(false) 
        }).catch(console.log)
    }

    render() {
        return <>
            {this.props.isFetching 
                ? <Preloader/>
                : null } 
            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow} 
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching    
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch (followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch (unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch (setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer)