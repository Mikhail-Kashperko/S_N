import mesagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

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
        },
        sidebar: {}   
    },


    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = mesagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export default store