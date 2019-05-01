import React, {Component} from 'react'; 
import Body from './appComponents/bodyApp'


const AppStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "url(../public/bgimg/bgimg.jpg)",
    backgroundSize: "cover"

}
export default function App(props)
{
    return(
        <div style = {  AppStyles } > 
            <Body/>
        </div>
    )
}