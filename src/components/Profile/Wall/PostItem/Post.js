import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className = {styles.item}>
            <div className = {styles.description}>
                <img src = '../src/img/avatar.jpg'></img>
                {props.text}
            </div>
            <div className = {styles.likes}>
                {props.likesCount} people like that
            </div>
        </div>
    )
}

export default Post