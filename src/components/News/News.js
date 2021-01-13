import React from 'react'
import styles from './News.module.css'

const News = (props) => {
    return (
        <div>
            <div className = {styles.item}>
                Some news here
            </div>
            <div className = {styles.item}>
                And here
            </div>
        </div>
    )
}

export default News