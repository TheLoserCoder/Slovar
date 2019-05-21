import React, {useState, useContext} from "react";
import { FormContextBindFunction } from "../../formComponents/form/index"

export default function Onetomanyplay(props){
    let word = props.value.word;
    let variants = props.value.variants;
    let [ selectedVariant, setVariant] = useState(-1);
    let bindFunction = useContext(FormContextBindFunction);

    const selectVariant = (index) => {
        setVariant(index);
        bindFunction(props.name, variants[index].translate);
        
    }

    return (
        <div 
            style = {
                {
                    display: "flex",
                    flexFlow: "column"
                }
        }>
            <div
                style = {
                    {
                        display: "flex",
                        justifyContent: "center",
                        
                    }
                }
                >
                    <div  style = { 
                        {
                            fontSize: "30pt",
                            color:"white",
                            padding: "10px",
                            borderBottom: "3px solid white"
                        }
                    }>
                        {
                            word
                        }
                    </div>
            </div>
            <div
                style = {
                    {
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px"
                    }
                }
            >
                {
                    variants.map( (variant, i) => {
                        return (
                            
                            <div key = { i }
                                onClick = {
                                    () => selectVariant(i)
                                }
                                style = {
                                    {
                                        cursor: "pointer",
                                        padding: "10px",
                                        background: "rgb(26, 119, 67)",
                                        margin: "10px",
                                        fonSize: "14pt",
                                        color: "white",
                                        borderTop: "3px solid",
                                        borderTopColor: i === selectedVariant ? "white" : "transparent"
                                    }
                                }
                            >
                                {
                                    variant.value
                                }
                            </div>
                        )
                    } )
                }

            </div>
        </div>
    )

}