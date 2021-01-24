import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'

let Users = (props) => {

    if( props.users.length === 0) {

        axios.get('http://localhost:3000/users').then(response => {
            props.setUsers(response.data)
        })
    }

    return (
        <div>
            {props.users.map(u => 
                <div key = {u.id}>
                    <span>
                        <div>
                            <img src = {u.photoURL} className = {styles.userPhoto}></img>
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick = { () => {props.unfollow(u.id)} }>unfollow</button> 
                                : <button onClick = { () => {props.follow(u.id)} } >follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    )
}

export default Users