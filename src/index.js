import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import {Provider} from 'react-redux'
import Auth from "./components/Auth"

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,

    document.getElementById("root")
);