import React from 'react'; 
import { render } from 'react-dom'; 
import { Provider } from "react-redux";
import store from "./reduxLogic/store.js"

import App from './app.js';


window.onload = () => {
    render(
        <Provider store = { store}>
            <App/>
        </Provider>
    , document.getElementById('app'))
}
