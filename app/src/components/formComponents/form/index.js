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
            return React.cloneElement(child, { bindFunction: bindFunction }, updatedChildren ? updatedChildren : null )
        else if(childName === "Apply") 
            return React.cloneElement(child, { bindFunction: applyFunction }, updatedChildren ? updatedChildren : null )
        else if(childName === "Checkbox")
            return React.cloneElement(child, { bindFunction: bindFunction }, updatedChildren ? updatedChildren : null )
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


    let newChildren = throwFormMapToFormContent(props.children, bindFunction, props.apply);

    return (

        <div className = "form">
            {
                newChildren
            }
        
        </div>

    )
}