import React, {useState} from "react";


export function Switch(props)
{
    return(
       <div onClick = { () => props.switchFunction(props.to) }  >
        {
            props.children
        }
       </div>
    )
}

function setSwitches(children, sF)
{
   return React.Children.map(
    children, child => {
        if(!child.type) return;
        let childName = child.type.name;
        if(childName === "Switch")
            return React.cloneElement(child, { switchFunction: sF })
        else {
            let updated = setSwitches(child.props.children, sF);
            return React.cloneElement(child, {}, updated)
        }
    }
   )
}

export function Case(props)
{
    return(
        <>
            {props.children}
        </>
    )
}

export default function SwitcherSet(props)
{
    let [switchTo, setSwitchTo] = useState(props.initSwitch);
   
    let [maxHeight, setMH] = useState(1000);

    let cases = props.children;

    const switchFunction = (caseName) => {
        setMH(100);
        setTimeout(() => { setMH(500); setSwitchTo(caseName) }, 500  );
    }

    cases = setSwitches(props.children, switchFunction);

    let casesMap = new Map();

    cases.forEach( child => {

        casesMap.set(child.props.name, child)
    } )
    
    return(
        <div  style = { 
            {  
        } }>
            <div style = { {...{
                position: "relative", 
                overflow: "hidden",
                perspective: "500px" } } } className = "tapeWrap">
                <div className = "switccTape">
                     <div style = { {opacity: maxHeight == 100 ? 0 : 1} }>
                        {
                             casesMap.get(switchTo) || cases[0]

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}