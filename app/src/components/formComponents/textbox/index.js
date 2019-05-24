import {FormContextBindFunction} from "../form"
import React, {useState, useContext, useRef, useEffect} from "react";


export default function Textbox(props)
{

    let bindFunction = useContext(FormContextBindFunction);
    let [value, setValue] = useState(props.default || "")
    let text = useRef(null)
    
    const changeValues = (e) => {
        
        setValue(e.target.value || "");

      
       
    }

    useEffect(
        () => {
            console.log(value)
            bindFunction(props.name, value)

        }, [value]
    )

    return(
        <textarea value = {value}  ref = { text }  onChange = { changeValues } key = {props.name}  placeholder = { props.ph  } />

    )
}