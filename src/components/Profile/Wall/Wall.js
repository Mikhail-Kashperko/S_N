import React from 'react'
import styles from './Wall.module.css'
import Post from './PostItem'

const Wall = (props) => {

    let postsElements = props.postData
        .map( post => <Post text = {post.text} id = {post.id} likesCount = {post.likesCount} key = {post.key}/>)

   return (
    <div>
        <div className = {styles.post_add_form} >
            <textarea></textarea>
            <button onClick = { () => {alert('hey')}} >Add post</button>
        </div>
        {postsElements}
    </div>
   ) 
}

export default Wall