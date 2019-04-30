import React, {useState} from "react";

const styles = {
    display: 'inline-block',
    margin: "5px",
    cursor: "pointer",
    fontSize: "12pt",
    transition: "color .3s"
}

export default function Apply(props)
{
    let [mouseOver, setMouseOver] = useState(false);

    let st;
    if(mouseOver)
        st = { ...styles, color: "rgb(255, 255, 255)"}
    else
        st = { ...styles, color: "rgb(200, 200, 200)"}

    return(
        <div style = { st } onMouseLeave = { () => setMouseOver(!mouseOver)  }  onMouseOver = {  () => { setMouseOver(!mouseOver) }  } onClick = {  props.bindFunction } >
            { props.label }
        </div>
        
    )
}