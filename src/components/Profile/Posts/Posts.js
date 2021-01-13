import React from 'react'
import styles from './Posts.module.css'
import Post from './PostItem'

const Posts = (props) => {

    let postsElements = props.postData
        .map( post => <Post text = {post.text} id = {post.id} likesCount = {post.likesCount} key = {post.key}/>)
    console.log (postsElements)

   return (
    <div>
        <div className = {styles.post_add_form} >
            <textarea></textarea>
            <button>Add post</button>
        </div>
        {postsElements}
    </div>
   ) 
}

export default Posts