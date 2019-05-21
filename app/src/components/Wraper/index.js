import React from "react";

const wraperStyles = {
    width: "100%",
    height: "100%"
}


export default function Wraper({ children, background })
{
    return(
        <div style = { { ...wraperStyles, background: background||  "rgb(200,200,200)" } } >
            {
                children
            }
        </div>
    )
}