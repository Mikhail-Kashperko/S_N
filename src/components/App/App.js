import React from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header'
import SideBar from '../SideBar'
import Profile from '../Profile'
import Messenger from '../Messenger'
import Friends from '../Friends'
import News from '../News'

const App = (props) => {

        return (
            <BrowserRouter>
                <div className = {styles.wrapper}>
                    <Header/>
                    <SideBar/>
                    <div className = {styles.content_wrapper}>
                        <Route path = '/profile' render = { () => <Profile 
                            state = {props.state.profilePage}/>}/>
                        <Route path = '/messenger' render = { () => <Messenger
                            state = {props.state.messagesPage} />}/>
                        <Route path = '/news' render = { () => <News/>}/>
                        <Route path = '/friends' render = { () => <Friends/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
}

export default App;