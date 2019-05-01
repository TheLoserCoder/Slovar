import React from "react";

//функция прокидывает связывает элементы формы и форму
function throwFormMapToFormContent(children, bindFunction, applyFunction = () => {})
{
   return React.Children.map(
    children, child => {
        if(!child.type) return;

        let updatedChildren = throwFormMapToFormContent(child.props.children, bindFunction, applyFunction);

        let childName = child.type.name;


        if(childName === "Input")
            return React.cloneElement(child, { bindFunction: bindFunction }, updatedChildren )
        else if(childName === "Apply") 
            return React.cloneElement(child, { bindFunction: applyFunction }, updatedChildren  )
        else if(childName === "Checkbox")
            return React.cloneElement(child, { bindFunction: bindFunction }, updatedChildren  )
        else {
            return React.cloneElement(child, {},  updatedChildren )
        }
    }
   )
}



export default function Form(props)
{

    let formsValues = new Map();

    const bindFunction = (name, value) => {
        formsValues.set(name, value);

    }

    const applyFunction = () => {

        let formDataObj = {};

        formsValues.forEach( (val, key) => {

            formDataObj[key] = val;

        } )

        props.apply( formDataObj  )
    }

    let newChildren = throwFormMapToFormContent(props.children, bindFunction, applyFunction);

    return (

        <div className = "form">
            {
                newChildren
            }
        
        </div>

    )
}