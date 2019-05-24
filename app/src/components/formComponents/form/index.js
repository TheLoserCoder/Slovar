import React, {useContext, useState} from "react";
import { PageSwitcherContext } from "../../pageSwitcher"


//функция связывает элементы формы и форму
export const FormContextBindFunction = React.createContext();
export const FormContextApply = React.createContext();

export default function Form(props)
{

    const [errors, setErrors] = useState([])
    const changePage = useContext(PageSwitcherContext);

    let [formsValues, setNewFV] = useState(new Map());
   
    const applyFunction = () => {

        let formDataObj = {};

        formsValues.forEach( (val, key) => {

            formDataObj[key] = val;

        } )

        let params = props.apply( formDataObj, onError );

        if( params !== false ){
            if(props.to)
                changePage(props.to, params) //если aplly сработал перебрасывает нас на страницу указанную в пропсе to
        }
        else{
            console.log("Произошла ошибка проверки")
        }
    }

    const bindFunction = (name, value) => {
        formsValues.set(name, value);

        setNewFV(formsValues);

        if(props.hotMode){
            applyFunction()
        }
    }

    const onError = (errorArr) => {
        setErrors(errorArr)
    }


    return (

        <div className = "form">
            <ul style = { { background: "rgb(240, 128, 128)", color: "white" } }>
                {
                    errors.map((err, i) => <li style = {   {  padding: "5px" }  } key = { i }> { err } </li>)
                }
            </ul>
            <FormContextBindFunction.Provider value = { bindFunction }>
                <FormContextApply.Provider value = {applyFunction}>
                    {
                        props.children
                    }
                </FormContextApply.Provider>
            </FormContextBindFunction.Provider>
        </div>

    )
}