import React, {useContext} from "react";
import { FormContextApply } from "../../form"

const styles = {
    background: "rgb(46, 139, 87)",
    color: "white",
    padding: "10px",
    display: 'inline-block',
    cursor: "pointer",
    fontSize: "14pt"
}

export default function Apply(props)
{

    const apply = useContext(FormContextApply);

    return(
        <div style = { styles } onClick = {  apply } >
            { props.children }
        </div>
        
    )
}