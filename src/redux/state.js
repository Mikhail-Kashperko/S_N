let ADD_POST = 'ADD-POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
        profilePage: {
            postData : [
                {id: 1, text: 'post1', likesCount: 3, key: 1},
                {id: 2, text: 'post2', likesCount: 7, key: 2}
            ],
            newPostText: 'bla'
        },
        messagesPage: {
            messagesData : [
                {id: 1, message: 'H1!'},
                {id: 2, message: 'Hello!'}],
            dialogsData : [
                {id: 1, name: 'Kolya'},
                {id: 2, name: 'Vanya'}],
            newMessageBody : ''
        }   
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('a')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likesCount: 1
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else  if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messagesData.push({id: 5, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export let addPostActionCreator = () => ({
    type: 'ADD-POST'
})

export let updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})

export let sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export let updateMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: text
})

export default store