import React, {useState, useContext, useEffect} from "react";
import { FormContextBindFunction } from "../../formComponents/form";



export default function Onetoomany(props)
{
    const bindFunction = useContext(FormContextBindFunction);

    let [word, setWord] = useState( props.values ? props.values.word : "");
    let [variantArray, setVarianArray] = useState( props.values && props.values.variants ? props.values.variants
                                                    : [
                                                        {
                                                            translate: true,
                                                            value: null,
                                                        },
                                                        {
                                                            translate: false,
                                                            value: null,
                                                        }
                                                    ]);

    let [selectMode, setSelectMode] = useState(0);

    const onWord = (e) => {
        setWord(e.target.value || null)
    };

    const onTranslate = (e, index) => {
        setVarianArray(
            variantArray.map(
                (variant, i) => {
                    if(index === i) return { ...variant, value: e.target.value === "" ? null : e.target.value};
                    else return variant;
                }
            )
        )
    };

    const onSelectTranslate = (index) => {
        setVarianArray(
            variantArray.map(
                (variant, i) =>{
                    if(i === index) return {...variant, translate: true};
                    else return {...variant, translate: false};
                }
            )
        );
        setSelectMode(0);
    };

    const onDeleteVariant = (index) => {
        let newVariant = variantArray.filter(
                    (variant, i) => {
                        return i !== index;
                    }
                );
        if(variantArray[index].translate)
            newVariant[0].translate = true;
        setVarianArray(
            newVariant
        )

    }

    const onNewVariant = () => {
        setVarianArray(
            [...variantArray, { translate: false, value: null }]
        )
    }
    
   useEffect(
       () => {
        bindFunction(props.name, {  word: word, variants: variantArray });
       }
   , [word, variantArray]);

    return(
        <div style = {  {display: "flex", position: "relative" } }>
            <div style = {
                {
                    display: "flex",
                    justifyContent: "center",
                    flexFlow: "column"

                }
            }>
                <input style = {
                    {
                        borderRight: "6px solid rgb(26, 119, 67)"
                    }
                } onChange = { onWord } placeholder = "Слово" value = { word || "" }/>
                <div
                            onClick = { () => {setSelectMode(1)}  }
                            style = {
                            {
                                marginTop: "10px",
                                color: "rgb(46, 139, 87)",
                                textAlign: "center",
                                cursor: "pointer"
                            }
                        }>
                                Выбрать перевод
                        </div>
            </div>

            <div style = {
                {
                    height: "auto",
                    marginLeft: "50px"


                } }>
                    {
                        variantArray.map( (variant, i) => {
                            return (
                                <div key = { i } style = { { 
                                    borderLeft: "6px solid transparent",
                                    transition: "border-color .3s",
                                    borderLeftColor: variant.translate ? "rgb(26, 119, 67)" : "transparent",
                                    
                                    display: "flex", 
                                    animationName: "veiw-opacity",
                                    animationDuration: ".5s",
                                    animationFillMode: "forward",
                                    alignItems: "center" } }>
                                    <input    
                                        onClick = {
                                            selectMode ? () => onSelectTranslate(i) : null
                                        }
                                        className = "translateFild" 
                                        onChange = { (e) => onTranslate(e, i) } 
                                        placeholder = "Вариант перевода" 
                                        style = { {
                                            background: "rgb(46, 139, 87)",
                                            cursor: selectMode ? "pointer" : "text",
                                            color: "white" 
                                            }}  
                                            value = { variant.value || "" } />
                                    {
                                        variantArray.length > 2 ? 
                                        <div 

                                            onClick = { () => {  onDeleteVariant(i) } }
                                            style = {
                                                {
                                                    marginLeft: "10px",
                                                    color: "rgb(150,150,150)",
                                                    cursor: "pointer"
                                                }
                                            } >
                                                Удалить
                                        </div>
                                        : null
                                    }
                                    
                                </div>
                            )
                        } )
                    }
                    {
                        variantArray.length === 5 ? 
                        null
                        :
                        <div
                            onClick = { onNewVariant }
                            style = {
                            {
                                marginTop: "10px",
                                color: "rgb(46, 139, 87)",
                                textAlign: "center",
                                cursor: "pointer"
                            }
                        }>
                                Добавить
                        </div>
                    }
            </div>
            
        </div>
    )
}