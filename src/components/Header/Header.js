import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className = {styles.header}>
            <img src = '../src/img/logo.png'></img>
        </header>
    ) 
}

export default Header