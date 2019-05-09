import React, {useContext} from "react";
import { PageSwitcherContext } from "../../pageSwitcher"


//функция связывает элементы формы и форму
export const FormContextBindFunction = React.createContext();
export const FormContextApply = React.createContext();

export default function Form(props)
{

    const changePage = useContext(PageSwitcherContext);

    let formsValues = new Map();

    const bindFunction = (name, value) => {
        formsValues.set(name, value);
    }

    const applyFunction = () => {

        let formDataObj = {};

        formsValues.forEach( (val, key) => {

            formDataObj[key] = val;

        } )

        if( props.apply( formDataObj  ) )
            if(props.to)
                changePage(props.to) //если aplly сработал перебрасывает нас на страницу указанную в пропсе to
        else{
            console.log("Произошла ошибка проверки")
        }
    }


    return (

        <div className = "form">
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