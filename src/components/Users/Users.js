import React from 'react'
import * as axios from 'axios'
import styles from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data)
        }).catch(console.log)
    }
    

    onPageChanged = (pageNumber) => {
        
        {this.props.setCurrentPage(pageNumber)}
        
        axios.get(`http://localhost:3000/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data) 
        }).catch(console.log)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) 
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        
        return <div className = {styles.users}>
            <div>
                {pages.map (p => {
                    return <span 
                        className = {this.props.currentPage === p && styles.selectedPage}
                        onClick = { (e) => {this.onPageChanged(p)} } >{p}</span>
                })}
            </div>
            {this.props.users.map (u => 
                <div key = {u.id} className = {styles.user}>
                    <div>{<img  className = {styles.avatar} src = {u.photo} />}</div>
                    <div>
                        <div>{u.name}</div>
                        <div>location: {u.location}</div>
                        <div>
                            {u.followed 
                                ? <button onClick = { () => {this.props.unfollow(u.id)}} >unfollow</button> 
                                : <button onClick = { () => {this.props.follow(u.id)}} >follow</button> }
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default Users


