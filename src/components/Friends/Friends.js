import React from 'react'
import styles from './Friends.module.css'

const Friends = () => {
    return (

        <div>
            <div className = {styles.item}>
                Friend1
            </div>
            <div className = {styles.item}>
                Friend2
            </div>
        </div>
        
    )
}

export default Friends