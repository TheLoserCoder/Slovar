import React, {useState, useCallback, useContext, useEffect} from "react";
import { FormContextBindFunction } from "../form"

let inlinerStyle ={
    position: "absolute",
    height: "4px",
    transitionPropertys: "left, width",
    transitionDuration: ".2s",
    background: "rgb(46, 139, 87)",
    zIndex: 2,
    top: "100%"
};

export default function Input(props)
{

    let {  name, type } = props;

    let [ value, setValue ]  = useState(props.default || "")

    let [ active, setActive ] = useState(false);

    const activeEvent = useCallback(() =>
    {
        setActive(!active)
    }, [active])

    let bindFunction = useContext(FormContextBindFunction)
    
    useEffect(
        () => { bindFunction(name, value) }
    , [value])
   

    const changedValues = useCallback( event => {
        setValue(event.target.value);
    }, [value])
    
    let wl;
    if(active)
        wl = {width: "100%", left: "0%"}
    else{
        wl = {width: "0%", left: "50%"}
    }

    return(
        <>
            <input value = { value }  key = { props.name } onBlur = { activeEvent }  onFocus = { activeEvent } style = { { position: "relative", width: "100%" } }  type =  { type || "text" }  onChange = {  changedValues } placeholder = { props.ph } />
            <div style = { { ...inlinerStyle, ...wl } }></div>
        </>
        
    )
}