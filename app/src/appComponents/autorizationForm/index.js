import React from "react";
import Form from "../../components/formComponents/form"
import Input from "../../components/formComponents/input";
import Apply from "../../components/formComponents/buttons/apply";
import Row, { RowSetter } from "../../components/row";
import FButton from "../../components/formComponents/buttons/FButton";
import Checkox from "../../components/formComponents/checkbox";
import SwitcherSet, {Switch, Case} from "../../components/switcher";

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
    width: "320px"
  
};

export default function ARForm(props)
{

    
    return(

        <div style = { ARFormStyles }>
            <div style = { wraperStyles } >
            <SwitcherSet startPointer = {0} >
                <Case name = "signin">
                    <Form apply = {  () => {  console.log(1, 2) } } >
                        <RowSetter userStyles = { {margin: "5px 0px"} } > 
                        
                            <Row userStyles = { { marginBottom: "20px" } }><Input ph = "Логин" name = "login"/> </Row>
                            <Row ><Input ph = "Пароль" type = "password" name = "password"/>  </Row>
                            <Row>
                                <Row>
                                    <Checkox name = "rememberme" label = "Запомнить меня" />
                                </Row>
                                <Row align = "flex-end">
                                   <Switch to = "sendpass"> <FButton label = "Забыли пароль?"/></Switch>
                                </Row>
                            </Row>
                            <Row>
                                <Row><Apply label = "Войти"/></Row>
                                <Row align = "flex-end"><Switch to = "signup"><FButton label = "Регистрация"/></Switch></Row>
                            </Row>
                        </RowSetter>
                    </Form>
                </Case>
                <Case name = "signup">
                    <Form apply = {  () => {  console.log(1, 2) } } >
                        <RowSetter userStyles = { {margin: "20px 0px"} } > 
                            <Row ><Input ph = "Почта" name = "email"/> </Row>
                            <Row ><Input ph = "Логин" name = "login"/>  </Row>
                            <Row ><Input ph = "Пароль" name = "login"/>  </Row>
                            <Row userStyles =  {  { marginBottom: "0px" } }>
                                <RowSetter userStyles = { { margin: "0px 0px" } } >
                                    <Row><Apply label = "Регистрация"/></Row>
                                    <Row align = "flex-end"><Switch to = "signin"><FButton label = "Назад"/></Switch></Row>
                                </RowSetter>
                            </Row>
                        </RowSetter>
                    </Form>
                </Case>
                <Case name = "sendpass">
                    <Form apply = {  () => {  console.log(1, 2) } } >
                        <RowSetter userStyles = { {margin: "20px 0px"} } > 
                            <Row ><Input ph = "Почта" name = "email"/> </Row>
                            <Row userStyles =  {  { marginBottom: "0px" } }>
                                <RowSetter userStyles = { { margin: "0px 0px" } } >
                                    <Row><Apply label = "Восстановить"/></Row>
                                    <Row align = "flex-end"><Switch to = "signin"><FButton label = "Назад"/></Switch></Row>
                                </RowSetter>
                            </Row>
                        </RowSetter>
                    </Form>
                </Case>
            </SwitcherSet>
                
            </div>
            
        </div>

    )
}