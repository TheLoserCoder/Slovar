import {FormContextBindFunction} from "../form"
import React, {useContext, useRef} from "react";


export default function Textbox(props)
{

    let bindFunction = useContext(FormContextBindFunction);
    let text = useRef(null)
    
    const changeValues = () => {
        bindFunction(props.name, text.current.innerText || "")
    }

    return(
        <div ref = { text }  onInput = { changeValues } key = {props.name} contentEditable = "true" placeholder = { props.ph }>

        </div>
    )
}