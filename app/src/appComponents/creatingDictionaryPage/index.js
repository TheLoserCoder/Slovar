import React, {useState, useEffect} from "react";
import Row, { RowSetter } from "../../components/row"
import MainMenu from "../mainMenu"
import { PageBlock } from "../../components/pageSwitcher"
import Wraper from "../../components/Wraper";
import Sep from "../../components/Separacot";
import Form from "../../components/formComponents/form"
import Input from "../../components/formComponents/input"
import Select, {Value} from "../../components/formComponents/Selector"
import Textbox from "../../components/formComponents/textbox"
import Apply from "../../components/formComponents/buttons/apply"
import { connect } from "react-redux"


import DB from "../../reduxLogic/db"

function CreatingDictonaryPage(props)
{

    useEffect(
        () => {
            return (
                () => {
                    props.onAppend(props.draftDictionary)
                }
            )
        }
    )
    const creatingDictionaty = (dictionaryTemplateData, errorfunction) =>
    {
        for(let i in dictionaryTemplateData){
            if(dictionaryTemplateData[i] === "") {
                errorfunction(["Все поля обязательны к заполнению"]);
                return false;
            }
        }
        
        return { id: DB.push(dictionaryTemplateData) };
    }
    return(
        <Row userStyles = { { width: "100%", height: "100%", position: "relative"} }>
                
                    <Row userStyles = { { width: "20px", height: "100%"}}>
                        
                            <MainMenu staticMode = ""/>
                            
                    </Row>
                
                   
                <div style = {  { 
                    width: "100%", 
                    height: "100%", 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                    }
                    }>
                   
                        <div style = { { width: "550px", height: "auto", position: "relative" } }>
                            <PageBlock animationType = "top">
                                <Wraper>    
                                    <div style = { { display: "flex", padding: "20px", flexFlow: "column"}  }>
                                        <div>
                                            <div>
                                                <h2>Создание словаря</h2>
                                            </div>
                                            <Sep/>
                                        </div>
                                        <div style = { { width: "auto", display: "flex"} }>
                                            <Form  apply = { creatingDictionaty } to = "dictionarySetting" >
                                                <RowSetter userStyles = { { margin: "10px 0px" } }>
                                                    <Row>
                                                        <Input  name = "title" ph = "Название" />
                                                    </Row>
                                                    <Row> 
                                                        <Select name = "lang" ph = "Язык оригинала">
                                                            <Value value = "1">Английский</Value>
                                                            <Value value = "2">Русский</Value>
                                                            <Value value = "3">Французский</Value>
                                                            <Value value = "4">Немецкий</Value>
                                                        </Select>
                                                    </Row>
                                                    <div className = "row">
                                                        <div> 
                                                            <Select name = "translang" ph = "Язык перевода">
                                                                <Value value = "1">Английский</Value>
                                                                <Value value = "2">Русский</Value>
                                                                <Value value = "3">Французский</Value>
                                                                <Value value = "4">Немецкий</Value>
                                                            </Select>
                                                        </div>
                                                        <div> 
                                                           
                                                        </div>
                                                    </div>
                                                    <Row>
                                                            <Select name = "difficulty" ph = "Сложность">
                                                                <Value value = "1">Базовый уровень</Value>
                                                                <Value value = "2">Средний уровень</Value>
                                                                <Value value = "3">Продвинутый уровень</Value>
                                                            </Select>
                                                    </Row>
                                                    <Row>
                                                        <Textbox name = "comment" ph = "Описание" />
                                                    </Row>
                                                    <Row>
                                                        <Apply> Создать </Apply>
                                                    </Row>
                                                </RowSetter>   
                                            </Form>
                                        </div>
                                    </div>
                                </Wraper>
                                </PageBlock>
                        </div>              
                </div>
          
        </Row>
    )
}

export default connect(
    state => ({
        draft: state.draftDictionary
    }),
    dispatch => ({
        onAppend: (data) => {
            dispatch( { type: "APPEND_DICTIONARY", dictionary: data} )
        },
        onDraft: (draft) => {
            dispatch( { type: "CREATE_DRAFT", draft} )
        }
    })
)(CreatingDictonaryPage);