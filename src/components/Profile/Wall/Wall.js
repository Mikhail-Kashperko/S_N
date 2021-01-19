import React from 'react'
import styles from './Wall.module.css'
import Post from './PostItem'
import {updateNewPostTextActionCreator, addPostActionCreator} from './../../../redux/state'


const Wall = (props) => {

    let postsElements = props.postData
        .map( post => <Post text = {post.text} id = {post.id} likesCount = {post.likesCount} key = {post.key}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator() )
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch (action)
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
                onClick = {addPost}>
                Add post
            </button>
        </div>
        {postsElements}
    </div>
   ) 
}

export default Wall