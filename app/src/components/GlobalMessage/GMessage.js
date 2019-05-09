import React, { useState } from "react";
import { isAbsolute } from "path";

const blackScreenStyles = {
    position: isAbsolute,
    display: flex,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,.5)",
    zIndex: "99"
};

const wrapStyles = {
    background: "white"

}

export default function GMessage(props)
{
    let [message, setMessage] = useState(props.defaultMessage || null);

    return (
        <div style = { blackScreenStyles }  >
                <div style = { wrapStyles } >

                </div>
        </div>
    )
}