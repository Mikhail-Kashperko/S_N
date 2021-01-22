import React from 'react'
import styles from './Wall.module.css'
import Post from './PostItem'


const Wall = (props) => {

    let postsElements = props.postData
        .map( post => <Post text = {post.text} id = {post.id} likesCount = {post.likesCount} key = {post.key}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    
   return (
    <div>
        <div className = {styles.post_add_form} >
            <textarea
                value = {props.newPostText}
                onChange = {onPostChange}
                ref = {newPostElement}></textarea>
            <button
                type = 'button' 
                onClick = {onAddPost}>
                Add post
            </button>
        </div>
        {postsElements}
    </div>
   ) 
}

export default Wall