import React, {useState, useContext} from "react";
import { FormContextBindFunction } from "../../formComponents/form/index"

export default function Onetomanyplay(props)
{
    let word = props.value.word;
    let translate = props.value.translate;

    let bindFuntion = useContext(FormContextBindFunction);

    let [ inputValue, setInputValue ] = useState("");


    let inputOnChange = (e) => {
        bindFuntion(props.name, e.target.value.toLowerCase() === translate.toLowerCase());
        setInputValue(e.target.value);

    }

    return (
        <div 
            style = {
                {
                    display: "block"
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
                    <span style = { {
                          fontSize: "30pt",
                          color:"white",
                          padding: "10px",
                          borderBottom: "3px solid white"
                    } }>
                    {
                        word
                    }
                    </span>
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
                <input
                    onChange = { inputOnChange }
                />

            </div>
        </div>
    )

}