import React from "react";
import Wraper from "../Wraper"


export default function MenuWrap(props)
{
    return(
        <Wraper>
            {
                props.children
            }
        </Wraper>
    )
}