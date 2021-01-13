import React from 'react'
import styles from './../Messenger.module.css'
import {Link} from 'react-router-dom'

const Dialog = (props) => {
    let path = '/messenger/' + props.id

    return (
    <div className = {styles.dialog}>
        <Link to = {path}>{props.name}</Link>
    </div>
    )
}

export default Dialog