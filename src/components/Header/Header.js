import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <header className = {styles.header}>
            <img src = '../src/img/logo.png'></img>
            <div className = {styles.login_block}>
                <a onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem('user');
                    props.forceUpdate();
                }}>
                    logout
                </a>
            </div>
        </header>
    ) 
}

export default Header