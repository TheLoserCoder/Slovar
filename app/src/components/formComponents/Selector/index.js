import React, {useState, useContext, useCallback, useEffect, useRef} from "react";
import { FormContextBindFunction } from "../form";
import { isNull } from "util";
import Sep from "../../Separacot"

export function Value(props)
{
    return(
       <>
        {
            props.children
        }
       </>
    )
}

export default function Select(props)
{
    let [value, setValue] = useState(props.default || null);
    let bindFuncion = useContext(FormContextBindFunction);
    let def = props.default ? props.children.filter( child => child.props.value === props.default )[0].props.children : ""
    let [isOpen, setOpen] = useState(0);
    let [inputvalue, setInputValue] = useState( def );
    let [searchString, setSearchString] = useState("");
    let [animation, setAnimation] = useState("list-open")
    let [mount, setMount] = useState(true)
    let selectRef = useRef(isNull); 

    const closeList = () => {
                setAnimation("list-hide")
                setTimeout( () => setOpen(0), 300);
    }
    const openList = useCallback(
        (e) => {
            if( selectRef.current.contains(e.target) && e.target.className !== "value"){
                setAnimation("list-open")
                setOpen(1);
            } else{
                closeList()
            }     
        },
        [isOpen]
    )

    const changeValue = (val, ival) => {
        setValue(val);
        setInputValue(ival);
        setSearchString("");
        closeList()
    };

    const updateList = useCallback((e) => {
        setInputValue(e.target.value);
        setSearchString(e.target.value);
    }, [searchString])

    useEffect(
     () => {
           bindFuncion(props.name, value);
    
     }, [value]
    )
    
    
    return(
        <div ref = { selectRef }  style = { { background: "white", position: "relative", border: "5px solid white"  } } >
            <div style = { {display: "flex", alignItems: "center"} }>
                <input onBlur = { closeList } placeholder = { props.ph } onChange = { updateList } 
                 
                 onFocus = { openList } 
                 placeholder = { props.ph }  
                 value = {inputvalue}
                 style = { {padding: "5px", color: "rgb(46, 139, 87)", width: "100%" }} 
                 />

                <div style = {{ color: "rgb(46, 139, 87)" } }  >⚫</div>
            </div>
            <div  className = "selectList" style = { { 
                                        display: isOpen ? "block" : "none" ,
                                        animationName: animation
                                        } } >
                <div className = "value"  onClick = { () => changeValue(null, "") }>{ props.ph }</div>
                {
                    props.children.map( (child, key) => {
                        if( child.props.children.toLowerCase().includes( searchString.toLowerCase() ) )
                            return (
                                <div key = { key } className = "value" onClick = { () => { 
                                    changeValue(child.props.value, child.props.children)
                                 } }>
                                    {
                                        child.props.children
                                    }
                                </div>
                            )
                    } )
                }
            </div>
        </div>
    )
}