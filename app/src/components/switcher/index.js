import React, {useState, useContext} from "react";


const SwitchContext = React.createContext();



export function Switch(props)
{

    const switchFunction = useContext(SwitchContext);

    return(
       <div onClick = { () => switchFunction(props.to) }  >
        {
            props.children
        }
       </div>
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
    let [switchTo, setSwitchTo] = useState(props.default);
    let [veiwMode, setVeiwMode] = useState("switchVeiw");

    const switchFunction = (caseName) => {

        setVeiwMode( "switchHide" );
        setTimeout(() => {  setSwitchTo(caseName); setVeiwMode( "switchVeiw" ); }, 500  );
       
    }

    let casesMap = new Map();

    props.children.forEach( child => {

        casesMap.set(child.props.name, child)
    } );

    return(
        <SwitchContext.Provider value = { switchFunction }>
            <div  style = { 
                {  width: "100%"
            } }>
                <div className = "tapeWrap">
                    <div className = "switchTape">
                        <div style = { { animationName: veiwMode } }>
                            {
                                casesMap.get(switchTo) || cases[0]

                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </SwitchContext.Provider>
    )
}