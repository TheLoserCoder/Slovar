import React, {useState, useCallback, useContext} from "react";
import Row from "../../row"
import { FormContextBindFunction } from "../form"

const wrapStyle = {

    minWidth: "21px",
    height: "21px",
    background: "white",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"

},
 pointerStyle = {
     position: "absolute",
     background: "rgb(46, 139, 87)",
     animationDuration: ".5s",
     
     animationFillMode: "forwards",
     animationTimimgFunction: "lenear"
 }

export default function Checkbox(props)
{   

    let { name, DefaultActive = 0 } = props;

    let [active, setActive] = useState(DefaultActive || null);

    let animationName = null

    let bindFunction = useContext(FormContextBindFunction)
    
    bindFunction(name, active || false)


    if(active === false)
        animationName = { animationName: "hideCheckbox"}
    else if(active === true){
        animationName = { animationName: "viewCheckbox"}
    }

    
    return(

        <Row align = "space-between">
            <div style = {  wrapStyle } onClick = { () => { useCallback( setActive(!active), []) } } >
            {
                <div  style = { {...pointerStyle, ...animationName} }  ></div>

            }
                
            </div>
            <div onClick = { () => { setActive(!active) } } style = { { color: "white", cursor: "pointer" } } >
                { props.label }
            </div>
        </Row>

    )
    
}