import React, {useState} from "react";

const styles = {
    display: 'inline-block',
    margin: "5px",
    cursor: "pointer",
    transition: "color .3s",
    whiteSpace: "nowrap"
}

export default function FButton(props)
{

    let [mouseOver, setMouseOver] = useState(false);
    let st;
    if(mouseOver)
        st = { ...styles, color: "rgb(255,255,255"}
    else
        st = { ...styles, color: "rgb(235, 235, 235)"}

    return(
        <div style = { st } onMouseLeave = { () => setMouseOver(!mouseOver)  }  onMouseOver = {  () => { setMouseOver(!mouseOver) }  } onClick = {  props.bindFunction } >
            { props.children }
        </div>
        
    )
}