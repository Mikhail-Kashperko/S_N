import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import styles from "./App.module.css";
import SideBar from "../SideBar";
import Friends from "../Friends";
import News from "../News";
import MessengerContainer from "../Messenger/MessengerContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Header from "../Header/Header";
import Login from '../Auth/Login'
import Registration from '../Auth/Registration'
import Auth from '../Auth/Auth'
import EditProfile from "../EditProfile/EditProfile";

const AuthRout = (params) => {
    if(localStorage.getItem('user')){
        return params.route
    } 
    return <Redirect to = '/login'/>
}

const Container = (params) => {
    if(localStorage.getItem('user')){
        return (
            <div className={styles.wrapper}>
                    <Header forceUpdate = {params.forceUpdate} />
                    <SideBar />
                    <div className={styles.content_wrapper}>
                    {params.children}
                </div>
            </div>
        )
    }

    return (
        <Auth>
            {params.children}
        </Auth>
    )
} 

const App = () => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
     return (
    <BrowserRouter>
            <AuthRout route = {<Route path="/profile/:userId" render={() => <Container forceUpdate = {forceUpdate}> <ProfileContainer/></Container> } />}/>
            <AuthRout route = {<Route path="/edit_profile" render={() => <Container forceUpdate = {forceUpdate} ><EditProfile /></Container>} />} />
            <AuthRout route = {<Route path = '/' render = {() => <Redirect to = '/news'/>}/>}/>
            <AuthRout route = {<Route path="/messenger" render={() => <Container forceUpdate = {forceUpdate} ><MessengerContainer /></Container>} />} />
            <AuthRout route = {<Route path="/news" render={() => <Container forceUpdate = {forceUpdate}><News/></Container>} />} />
            <AuthRout route = {<Route path="/friends" render={() => <Container forceUpdate = {forceUpdate} ><Friends/></Container>} />} />
            <AuthRout route = {<Route path="/users" render={() => <Container forceUpdate = {forceUpdate}><UsersContainer/></Container>} />} />
            <Route path="/login" render={() => <Container forceUpdate = {forceUpdate}><Login forceUpdate={forceUpdate}/></Container>}/>
            <AuthRout route = {<Route path="/registration" render={() => <Container forceUpdate = {forceUpdate} ><Registration forceUpdate={forceUpdate}/></Container>} />}/>
    </BrowserRouter>
  );
};

export default App;
