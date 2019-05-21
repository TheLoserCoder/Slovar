import React from "react";
import Wraper from "../Wraper"


export default function MenuWrap(props)
{
    return(
        <Wraper background =  "rgb(46, 139, 87)">
            {
                props.children
            }
        </Wraper>
    )
}