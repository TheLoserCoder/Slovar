import React, {useState} from "react";


let inlinerStyle ={
    position: "absolute",
    height: "5px",
    transitionPropertys: "left, width",
    transitionDuration: ".2s",
    background: "rgb(0, 171, 111)",
    zIndex: 2,
    top: "100%"
};

export default function Input(props)
{

    let {  name, bindFunction, type } = props;

    let [ active, setActive ] = useState(false);

    function activeEvent()
    {
        setActive(!active)
    }
    const changedValues = (event) => {

        bindFunction(name, event.target.value)
    }
   
    let wl;
    if(active)
        wl = {width: "100%", left: "0%"}
    else{
        wl = {width: "0%", left: "50%"}
    }

    return(
        <>
            <input onBlur = { activeEvent }  onFocus = { activeEvent } style = { { position: "relative", width: "100%" } }  type =  { type || "text" }  onChange = {  changedValues } placeholder = { props.ph } />
            <div style = { { ...inlinerStyle, ...wl } }></div>
        </>
        
    )
}