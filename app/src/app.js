import React, {Component} from 'react'; 
import Body from './appComponents/bodyApp';

const AppStyles = {
    position: "absolute",
    width: "100%",
    height: "100%"

}

function App(props)
{

    return(
        <div style = {  AppStyles } > 
            <Body/>
        </div>
    )
}

export default App;