import {createStore, combineReducers} from 'redux'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

window.store = store


export default store