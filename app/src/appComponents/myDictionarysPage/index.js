import React, {useState, useEffect, useCallback} from "react";
import Row, { RowSetter } from "../../components/row"
import MainMenu from "../mainMenu"
import { PageBlock, PageSwitcher } from "../../components/pageSwitcher"
import Wraper from "../../components/Wraper";
import Sep from "../../components/Separacot";
import Form from "../../components/formComponents/form"
import Input from "../../components/formComponents/input"
import Select, {Value} from "../../components/formComponents/Selector"
import Textbox from "../../components/formComponents/textbox"
import Apply from "../../components/formComponents/buttons/apply"
import { connect } from "react-redux"
import Menuwraper from "../../components/menuWraper"
import FButton from "../../components/formComponents/buttons/FButton";
import Selector, {Values} from "../../components/formComponents/Selector";
import Onetoone from "../../components/slideComponents/Onetoone";
import Onetomany from "../../components/slideComponents/Onetomany/";


import DB from "../../reduxLogic/db"

const lang = [
    "Английский",
    "Русский",
    "Французский",
    "Немецкий"
]

const difficulty = [
    "Базовый уровень",
    "Средний уровень",
    "Продвинутый уровень"
]

function Dictionary(props)
{

    let {dict} = props;

    return(

        <div onClick = { () => {} } className = "dictionary" style = {
            {
                margin: "30px",
                background: "rgb(66, 159, 107)",
                opacity: "0",
                animationName: "veiw-opacity",
                animationDuration: ".5s",
                animationDelay: 0.3 + props.delay + "s",
                animationFillMode: "forwards"
            }
        }> 
                <div style = {
                    {
                        padding: "10px",
                        display: "flex"
                    }
                }>   
                    <div>
                        <div style = {
                            {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                width: "200px",
                                height: "200px",
                                background: "rgb(46, 139, 87)" 
                            }
                        }>
                            {
                                dict.title
                            }

                        </div>
                    </div>
                    <div style = {
                        {
                            marginLeft: "20px"
                        }
                    } className = "dictDecription">
                            <div style  ={ 
                                {
                                    color:"rgb(16, 109, 57)" 
                                }
                            }>
                                Язык: <span style = { { color: "white" } }>{
                                    lang[dict.lang - 1]
                                } </span>
                            </div>
                            <div style  ={ 
                                {
                                    color:"rgb(16, 109, 57)" 
                                }
                            }>
                                Язык перевода: <span style = { { color: "white" } }>{
                                    lang[dict.translang - 1]
                                } </span>
                            </div>
                            <div style  ={ 
                                {
                                    color:"rgb(16, 109, 57)" 
                                }
                            }>
                                Сложность: <span style = { { color: "white" } }>{
                                    difficulty[dict.difficulty - 1]
                                } </span>
                            </div>
                            <div style  ={ 
                                {
                                    color:"rgb(16, 109, 57)",
                                    wordBreak: "break-all"
                                }
                            }>
                                Комментарий: <span style = { { color: "white" } }>{
                                    dict.comment
                                } </span>
                            </div>

                    </div>
                </div>
                <div style = { {padding: "10px", background: "rgb(46, 139, 87)", display: "flex", justifyContent: "flex-end" } }>
                                <PageSwitcher to = "dictionarySetting" params =  { { id: dict.id } } >
                                    <div style = {
                                        {
                                            background: "rgb(26, 119, 67)",
                                            color: "white",
                                            padding: "10px",
                                            cursor: "pointer"
                                        }
                                    }>
                                        К словарю
                                   </div>
                                </PageSwitcher>
                </div>
            </div>
    )
}


export default function MyDictionarys( props )
{
   
    let [dictionarys, setDictionarys] = useState(DB.dictionarys || null);
 

    const onFilter = (data) => {

        setDictionarys(DB.filter(data));
        
        return true;
    } 
    
    return(
        <Row userStyles = { { width: "100%", height: "100%", position: "relative"} }>
                
                    <Row userStyles = { { width: "10px", height: "100%"}}>
                        
                            <MainMenu staticMode = ""/>
                            
                    </Row>
                
                    <div style = {  { 
                        width: "100%", 
                        height: "100%",
                        display: "flex",
                        flexFlow: "column"
                        }
                        }>
                                         
                    <div style = {  { 
                        width: "100%", 
                        overflowX: "auto",
                        height: "100%"
                        }
                        }>
                        <PageBlock>
                            <div style = { {  height: "100%"} }>
                                
                                    <div style = { 
                                        {    
                                            display: "flex", 
                                            padding: "20px", 
                                            position: "relative", 
                                            flexWrap: "wrap" } } > 
                                        {
                                            dictionarys.map( (dict, i) => {
                                                return (
                                                    <Dictionary delay = {  i/10 }  dict = {dict} key = {i} />

                                                )
                                            } )
                                        }
                                    </div> 
                                    
                            </div>
                            </PageBlock>   
                    </div>
                </div>
                
                <div style = { { width: "300px", height: "100%", overflow: "hidden" } } >
                    <PageBlock>
                        <PageBlock animationType = "right">
                            
                            <Menuwraper>
                                <div style = { { display: "flex", flexFlow: "column", padding: "20px", fontSize: "13pt"} }> 
                                    <Form hotMode = {true} apply = { onFilter }  >
                                        <RowSetter userStyles = { { margin: "20px 0px" } } >
                                            <Row>
                                                <Select name = "lang" ph = "Язык оригинала">
                                                    <Value value = "1">Английский</Value>
                                                    <Value value = "2">Русский</Value>
                                                    <Value value = "3">Французский</Value>
                                                    <Value value = "4">Немецкий</Value>
                                                </Select>
                                            </Row>
                                            <Row>
                                                <Select name = "translang" ph = "Язык перевода">
                                                    <Value value = "1">Английский</Value>
                                                    <Value value = "2">Русский</Value>
                                                    <Value value = "3">Французский</Value>
                                                    <Value value = "4">Немецкий</Value>
                                                </Select>
                                            </Row>
                                            <Row>
                                                <Select name = "difficulty" ph = "Сложность">
                                                    <Value value = "1">Базовый уровень</Value>
                                                    <Value value = "2">Средний уровень</Value>
                                                    <Value value = "3">Продвинутый уровень</Value>
                                                </Select>
                                            </Row>
                                        </RowSetter>
                                     </Form>
                                 </div>
                                    
                            </Menuwraper>
                        </PageBlock>
                    </PageBlock>                
                </div>         
        </Row>
    )
}
