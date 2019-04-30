import React from "react";

const styles = {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    position: "relative"
}

export default function Column(props)
{
    return(
        <div style = { {...styles, ...props.userStyles, justifyContent: props.align || "flex-start" } }>
            { props.children }
        </div>
        
    )
}