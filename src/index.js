import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

let renderEntireTree = (state) => {
    ReactDOM.render(

        <App 
            state = {state} 
            dispatch = {store.dispatch.bind(store)} 
            store = {store} />,
        document.getElementById("root")
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)