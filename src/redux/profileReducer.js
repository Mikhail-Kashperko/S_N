const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData : [
        {id: 1, text: 'post1', likesCount: 3, key: 1},
        {id: 2, text: 'post2', likesCount: 7, key: 2}
    ],
    newPostText: 'bla',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 1
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        } 

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {...state, 
                profile: action.profile}
        }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
})

export const updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export default profileReducer