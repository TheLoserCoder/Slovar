import {  combineReducers } from "redux";


import { signIn } from "./reducers/signin-reducer.js"
import { switcherPage } from "./reducers/switchpage-reducer"

export default combineReducers({
    signIn,
    switcherPage
})