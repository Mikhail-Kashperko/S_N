import React from 'react'
import styles from './Auth.module.css'

const Login = () => {
    return (
        <form className = {styles.login_form}>
            <input type = 'text' placeholder = 'email'></input> <br/>
            <input type = 'password' placeholder = 'password'></input> <br/>
            <button type = 'submit' >Go!</button>
        </form>
    )
}

export default Login