import React from "react";

const styles = {
    background: "#00AB6F",
    color: "white",
    padding: "10px",
    display: 'inline-block',
    cursor: "pointer",
    fontSize: "14pt"
}

export default function Apply(props)
{

    return(
        <div style = { styles } onClick = {  props.bindFunction } >
            { props.label }
        </div>
        
    )
}