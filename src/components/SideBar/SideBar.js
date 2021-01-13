import React from 'react'
import styles from './SideBar.module.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
    <section className = {styles.sideBar}>
        <div className = {styles.item}>
            <NavLink to = '/profile'>Profile</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to = '/messenger'>Messages</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to = '/friends'>Friends</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to = '/news'>News</NavLink>
        </div>
    </section>
    )
}

export default SideBar