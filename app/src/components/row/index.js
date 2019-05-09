import React, {useContext} from "react";

const styles = {
    display: "flex",
    position: "relative",
    flexFlow: "row",
    width: "100%",
    alignItems: "center"
}

const RowSetterContext = React.createContext({});

export function RowSetter(props)
{

    return(
        <RowSetterContext.Provider value = { props.userStyles }>
            { props.children }
        </RowSetterContext.Provider>
    )
       
    
}

export default function Row(props)
{
    let userStyles2 = useContext(RowSetterContext);
    return(
        <div style = { { ...styles, ...userStyles2, ...props.userStyles, justifyContent: props.align || userStyles2.justifyContent  || "flex-start" }  }>
            { props.children }
        </div>
        
    )
}