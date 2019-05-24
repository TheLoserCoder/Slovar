import {  combineReducers } from "redux";


import { signIn } from "./reducers/signin-reducer";
import { switcherPage } from "./reducers/switchpage-reducer";
import { draftDictionary, dictionary } from "./reducers/dictionary-reducer";



export default combineReducers({
    signIn,
    switcherPage,
    draftDictionary,
    dictionary
})