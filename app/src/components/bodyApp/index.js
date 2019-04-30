import React from "react";
import ARForm from "../autorizationForm"

const bodyAppStyles = {
    position: "relative",
    width: "100%",
    height: "100%"
}
export default function Body(props)
{
    return(

        <div style = { bodyAppStyles } >
            <ARForm/>
        </div>

    )
}