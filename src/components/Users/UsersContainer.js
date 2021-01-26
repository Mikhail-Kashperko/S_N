import React from 'react'
import {connect} from 'react-redux'
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUsersTotalCountAC } from '../../redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'

class UsersContainer extends React.Component {

    componentDidMount() {

        axios.get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data)

                let userCount = Number(response.headers["x-total-count"]) 

                this.props.setTotalUsersCount(userCount)
        }).catch(console.log)
    }

    onPageChanged = (pageNumber) => {
        
        this.props.setCurrentPage(pageNumber)

        axios.get(`http://localhost:3000/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data) 
        }).catch(console.log)
    }

    render() {
        return <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.props.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage    
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch (followAC(userId))
        },
        unfollow: (userId) => {
            dispatch (unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch (setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)