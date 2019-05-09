import React from "react";
import Form from "../../components/formComponents/form"
import Input from "../../components/formComponents/input";
import Apply from "../../components/formComponents/buttons/apply";
import Row, { RowSetter } from "../../components/row";
import FButton from "../../components/formComponents/buttons/FButton";
import Checkox from "../../components/formComponents/checkbox";
import SwitcherSet, {Switch, Case} from "../../components/switcher";
import Wraper from "../../components/Wraper"

const ARFormStyles = {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const wraperStyles = {
    position: "relative",
    padding: "10px",
    width: "340px",
    transition: "height .3s"
  
};

export default function ARForm(props)
{

    function signInFunction(logData)
    {
        if(logData.login === "admin" && logData.password === "admin"){
            return true;
        }

        return false;

    };
    
    return(

        <div style = { ARFormStyles }>
            <div style = { wraperStyles } >
                <Wraper>
                    <SwitcherSet default = "signin" switchTo = "signup" >
                        <Case name = "signin">
                            <Form apply = {  (logData) =>  signInFunction(logData)  } to = "startPage">
                                <RowSetter userStyles = { {margin: "5px 0px"} } > 
                                
                                    <Row userStyles = { { marginBottom: "20px" } }><Input ph = "Логин" name = "login"/> </Row>
                                    <Row ><Input ph = "Пароль" type = "password" name = "password"/>  </Row>
                                    <Row>
                                        <Row>
                                            <Checkox name = "rememberme" label = "Запомнить меня" />
                                        </Row>
                                        <Row align = "flex-end">
                                        <Switch to = "sendpass"> <FButton>Забыли пароль?</FButton></Switch>
                                        </Row>
                                    </Row>
                                    <Row>
                                        <Row><Apply label = "Войти"/></Row>
                                        <Row align = "flex-end">
                                        <Switch to = "signup"> <FButton>Регистрация</FButton></Switch>
                                        
                                        </Row>
                                    </Row>
                                </RowSetter>
                            </Form>
                            
                        </Case>
                        <Case name = "signup">
                            <Form apply = {  () => {} } >
                                <RowSetter userStyles = { {margin: "20px 0px"} } > 
                                    <Row  userStyles = { {marginTop: "10px"} } ><Input ph = "Почта" name = "email"/> </Row>
                                    <Row ><Input ph = "Логин" name = "login"/>  </Row>
                                    <Row ><Input ph = "Пароль" name = "login"/>  </Row>
                                    <Row userStyles =  {  { marginBottom: "0px" } }>
                                        <RowSetter userStyles = { { margin: "0px 0px" } } >
                                            <Row><Apply label = "Регистрация"/></Row>
                                            <Row align = "flex-end"><Switch to = "signin"><FButton> Назад </FButton></Switch></Row>
                                        </RowSetter>
                                    </Row>
                                </RowSetter>
                            </Form>
                        </Case>
                        <Case name = "sendpass">
                            <Form apply = {  () => {  console.log(1, 2) } } >
                                <RowSetter userStyles = { {margin: "20px 0px"} } > 
                                    <Row userStyles = { {marginTop: "10px"} }  ><Input ph = "Почта" name = "email"/> </Row>
                                    <Row userStyles =  {  { marginBottom: "0px" } }>
                                        <RowSetter userStyles = { { margin: "0px 0px" } } >
                                            <Row><Apply label = "Восстановить"/></Row>
                                            <Row align = "flex-end"><Switch to = "signin"><FButton> Назад </FButton></Switch></Row>
                                        </RowSetter>
                                    </Row>
                                </RowSetter>
                            </Form>
                        </Case>
                    </SwitcherSet>
                </Wraper>
            </div>
            
        </div>

    )
}
