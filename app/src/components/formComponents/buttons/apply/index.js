import React, {useContext} from "react";
import { FormContextApply } from "../../form"

const styles = {
    background: "#00AB6F",
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
            { props.label }
        </div>
        
    )
}