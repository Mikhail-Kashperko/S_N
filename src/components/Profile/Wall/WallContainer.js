import React from 'react'
import {updateNewPostTextActionCreator, addPostActionCreator} from './../../../redux/profileReducer'
import Wall from './Wall'
import { connect } from 'react-redux'   

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator()) 
        } 
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)

export default WallContainer