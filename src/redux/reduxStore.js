import {createStore, combineReducers} from 'redux'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store = store


export default store