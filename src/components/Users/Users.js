import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className = {styles.users}>
                <div>
                    {pages.map (p => {
                        
                        return <span 
                            className = {props.currentPage === p && styles.selectedPage}
                            onClick = { (e) => {props.onPageChanged(p)} } >{p}</span>
                    })}
                </div>
                {props.users.map (u => 
                    <div key = {u.id} className = {styles.user}>
                        <div>{<img  className = {styles.avatar} src = {u.photo} />}</div>
                        <div>
                            <div>{u.name}</div>
                            <div>location: {u.location}</div>
                            <div>
                                {u.followed 
                                    ? <button onClick = { () => {props.unfollow(u.id)}} >unfollow</button> 
                                    : <button onClick = { () => {props.follow(u.id)}} >follow</button> }
                            </div>
                        </div>
                    </div>)
                }
            </div>
}

export default Users