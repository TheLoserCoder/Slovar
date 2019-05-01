import React from "react";

const styles = {
    display: "flex",
    position: "relative",
    flexFlow: "row",
    width: "100%",
    alignItems: "center"
}

function setRowsParams(children, userStyles)
{
   return React.Children.map(
    children, child => {
        if(!child.type) return;

        let updatedChildren = setRowsParams(child.props.children, userStyles);

        let childName = child.type.name;

        if(childName === "Row")
            return React.cloneElement(child, { userStyles2: userStyles }, updatedChildren  )
        else if(childName === "RowSetter")
            return child;
        else {
            return React.cloneElement(child, {},  updatedChildren )
        }
    }
   )
}


export function RowSetter(props)
{

    let children = setRowsParams( props.children, props.userStyles );

    return(
        <>
            { children }
        </>
    )
       
    
}

export default function Row(props)
{

    return(
        <div style = { { ...styles, ...props.userStyles2, ...props.userStyles, justifyContent: props.align || "flex-start" }  }>
            { props.children }
        </div>
        
    )
}