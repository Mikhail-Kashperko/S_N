import React from 'react'
import styles from './Auth.module.css'
import * as axios from 'axios'

class Login extends React.Component {
    
    componentDidMount() {
        axios
        .get(`http://localhost:3000/users`)
        .then(response => {

            const usersPasswordData = response.data.map(function(users){
                return users.password
            })
            console.log(usersPasswordData)

            const usersEmailData = response.data.map(function(users){
                return users.email
            })

            console.log(usersEmailData)

        }).catch(console.log)

    }

    render() {

        return (
            <form 
                className = {styles.login_form}>
                <input type = 'text' placeholder = 'email'></input> <br/>
                <input type = 'password' placeholder = 'password'></input> <br/>
                <button type = 'submit'>Go!</button>
            </form>
        )
    }
}

export default Login