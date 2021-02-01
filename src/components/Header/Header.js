import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className = {styles.header}>
            <img src = '../src/img/logo.png'></img>
            <div className = {styles.login_block}>
                <NavLink to = '/login'>
                    Login
                </NavLink>
            </div>
        </header>
    ) 
}

export default Header