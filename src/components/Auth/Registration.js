import React from 'react'
import styles from './Auth.module.css'

const Registration = () => {
    return (
        <form className = {styles.registration_form}>
            <input type = 'text' placeholder = 'email'></input> <br/>
            <input type = 'password' placeholder = 'password'></input> <br/>
            <button type = 'submit' >Go!</button>
        </form>
    )
}

export default Registration