import React, { useContext } from "react";

const styles = {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    width: "100%",
    position: "relative"
}

const ColumnSetContext = React.createContext({});

export function ColumnSet(props)
{
    return(
        <ColumnSetContext.Provider value = { props.userStyles } >
        {
            props.children
        }
        </ColumnSetContext.Provider>
    )
}
export default function Column(props)
{
    let userStyles2 = useContext(ColumnSetContext);

    return(
        <div style = { {...styles, ...userStyles2, ...props.userStyles, justifyContent: props.align || "flex-start" } }>
            { props.children }
        </div>
        
    )
}