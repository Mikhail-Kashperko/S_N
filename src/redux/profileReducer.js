const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postData : [
        {id: 1, text: 'post1', likesCount: 3, key: 1},
        {id: 2, text: 'post2', likesCount: 7, key: 2}
    ],
    newPostText: 'bla'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 1
            }
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        } 
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.postData = [state.postData]
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export let addPostActionCreator = () => ({
    type: 'ADD-POST'
})

export let updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})

export default profileReducer