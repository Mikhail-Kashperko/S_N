import React from 'react'
import styles from './Auth.module.css'
import * as axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }
    
    login = (e) => {
        e.preventDefault()
        axios
        .get(`http://localhost:3000/users?email=${this.emailRef.current.value}`)
        .then(response => {
            if(response.data.length === 0) {
                throw new Error('Email is not found')
            }
            if(response.data[0].password != this.passwordRef.current.value) {
                throw new Error('Wrong password')
            }
            localStorage.setItem('user', JSON.stringify(response.data[0]))
            this.props.forceUpdate();
            
        }).catch(alert)
    }

    render() {

        const parsedUser = JSON.parse(localStorage.getItem('user') || '{}');

        if(parsedUser.id) {
            return(
                <Redirect to={`/news`} />
            )
        }

        return (

            <form 
                className = {styles.login_form}
                onSubmit = {this.login}>
                <input 
                    type = 'email' 
                    placeholder = 'email'
                    ref = {this.emailRef} ></input> <br/>
                <input 
                    type = 'password' 
                    placeholder = 'password'
                    ref = {this.passwordRef} ></input> <br/>
                <button type = 'submit'>Go!</button>
            </form>
        )   
    }
}

export default Login