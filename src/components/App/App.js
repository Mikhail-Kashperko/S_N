import React from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header'
import SideBar from '../SideBar'
import Friends from '../Friends'
import News from '../News'
import MessengerContainer from "../Messenger/MessengerContainer"
import UsersContainer from "../Users/UsersContainer"
import ProfileContainer from "../Profile/ProfileContainer"

const App = () => {

        return (
            <BrowserRouter>
                <div className = {styles.wrapper}>
                    <Header/>
                    <SideBar/>
                    <div className = {styles.content_wrapper}>
                        <Route path = '/profile' render = { () => <ProfileContainer/>}/>
                        <Route path = '/messenger' render = { () => <MessengerContainer/>}/>
                        <Route path = '/news' render = { () => <News/>}/>
                        <Route path = '/friends' render = { () => <Friends/>}/>
                        <Route path = '/users' render = { () => <UsersContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
}

export default App;