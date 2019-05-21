import React, {useState, useContext, useEffect} from "react";
import { FormContextBindFunction } from "../../formComponents/form";

export default function Onetoone(props)
{
    const bindFunction = useContext(FormContextBindFunction);

    let [word, setWord] = useState( props.values ? props.values.word : "");
    let [translate, setTranslate] = useState( props.values ? props.values.translate : "");

    const onWord = (e) => {
        setWord(e.target.value)
    };

    const onTranslate = (e) => {
        setTranslate(e.target.value)
    };

    
   useEffect(
       () => {
        bindFunction(props.name, {  word: word, translate: translate });
       }
   , [word, translate]) 

    return(
        <div style = {  {display: "flex" } }>
            <input onChange = { onWord } placeholder = "Слово" value = { word }/>
            <input className = "translateFild" onChange = { onTranslate } placeholder = "Перевод" style = { {
                background: "rgb(46, 139, 87)",
                color: "white"
            }} value = { translate } />
        </div>
    )
}