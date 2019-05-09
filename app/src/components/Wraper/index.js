import React from "react";

const wraperStyles = {
    background: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%"
}


export default function Wraper(props)
{
    return(
        <div style = { wraperStyles } >
            {
                props.children
            }
        </div>
    )
}