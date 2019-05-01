import React from "react";
import Form from "../../components/formComponents/form"
import Input from "../../components/formComponents/input";
import Apply from "../../components/formComponents/buttons/apply";
import Row, { RowSetter } from "../../components/row";
import FButton from "../../components/formComponents/buttons/FButton";
import Checkox from "../../components/formComponents/checkbox";

const ARFormStyles = {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const wraperStyles = {
    position: "relative",
    background: "rgba(0, 0, 0, 0.6)",
    padding: "10px",
    minWidth: "320px"
  
};

export default function ARForm(props)
{

    
    return(

        <div style = { ARFormStyles }>
            <div style = { wraperStyles } >
                <Form apply = {  () => {  console.log(1, 2) } } >
                    <RowSetter userStyles = { {margin: "5px 0px"} } > 
                    
                        <Row userStyles = { { marginBottom: "20px" } }><Input ph = "Логин" name = "login"/> </Row>
                        <Row ><Input ph = "Пароль" type = "password" name = "password"/>  </Row>
                        <Row>
                            <Row>
                                <Checkox name = "rememberme" label = "Запомнить меня" />
                            </Row>
                            <Row align = "flex-end">
                                <FButton label = "Забыли пароль?"/>
                            </Row>
                        </Row>
                        <Row>
                            <Row><Apply label = "Войти"/></Row>
                            <Row align = "flex-end"><FButton label = "Регистрация"/></Row>
                            
                        </Row>
                    </RowSetter>
                    
                </Form>
                
            </div>
            
        </div>

    )
}