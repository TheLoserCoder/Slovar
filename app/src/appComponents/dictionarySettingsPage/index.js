import React, {useState, useEffect, useRef, useContext} from "react";
import Row, { RowSetter } from "../../components/row"
import MainMenu from "../mainMenu"
import { PageBlock, PageSwitcher, PageSwitcherContext } from "../../components/pageSwitcher"
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


import DB from "../../reduxLogic/db.js"; 



function Slide(props)
{

    return(

        <div onClick = { () => props.selectSlide( props.slideNum ) } className = "slide" style = { { 
            border: props.selected ? "5px solid rgba(46, 139, 87,1)" : "5px solid rgba(46, 139, 87,0)" 
            } }  > 
                   
                <div  style = {
                    {

                        color: "white",
                        width: "250px",
                        height: "200px"

                    }
                }>
                    <Wraper>
                        <div  style = {
                            {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                              
                                height: "100%"
                            }
                            }>
                                <div>{
                                      props.slideLabel
                                }
   
                                </div>
                                
                            </div>
                    </Wraper>
                </div>
            
   
            </div>
    )
}

function DitionarySetting( props )
{
    
    let [wortedDictionary, setWD] = useState(DB.getById( props.params ? props.params.id : 1 ));

    let [ selectedSlide, setSelectedSlide ] = useState(null);

    let [slideArr, setSlideArr] = useState(wortedDictionary.slides);

    let [moveMode, setMoveMode] = useState(0);

    let [arrNumber, setArrNumber] = useState(slideArr.length + 1);

    let [setting, setSetting] = useState( 1 );

    let [openSetting, setOpenSetting] = useState(0);

    let settingWrap = useRef(null);

    let changePage = useContext(PageSwitcherContext);


    useEffect(
        () => {

            setWD(DB.updateById(wortedDictionary.id, {slides: slideArr, setting: setting}));
        
        }
    , [slideArr, setting])

    const changeSetting = (data, errorfunction) => {

        for(let i in data){
            if(!data[i]) {
                errorfunction(["Все поля обязательны к заполнению"]);
                return false;
            }
        }
        setOpenSetting(0);

        setSetting(data);

        return true;
    }

    const onDeleteDictionary = () => {

        DB.remove(wortedDictionary.id);
        console.lo

        changePage("myDictionarysPage");


    }
    const appendSlide = () => {
        setArrNumber(arrNumber + 1)
        setSlideArr([ ...slideArr, {
            number: arrNumber,
            type: null,
            values: null
            
        }])
    }

    const onOpenSetting = () => {
        setOpenSetting(1)
    }

    const onCloseSetting = (e) => {

        if( settingWrap.current !== e.target ) return;

        setOpenSetting(0)
    }

    const onMoveMode = () =>{
        setMoveMode(!moveMode)
    }


    const deleteSlide = () => {
        let selectedSlideIndex = slideArr.indexOf(selectedSlide);
        setSlideArr(
            slideArr.filter( slide => slide.number !== selectedSlide.number )
        )
        setSelectedSlide(
            slideArr[selectedSlideIndex - 1] || slideArr[selectedSlideIndex + 1] || null
        )
        setMoveMode(0)
    }

    const deSelect = () => {
        setSelectedSlide(null)
        setMoveMode(0)
    }

    const selectSlide = (slideNum) => {
        if(!moveMode)
            setSelectedSlide(
                selectedSlide ?
                slideArr[slideNum].number === selectedSlide.number ? null : slideArr[slideNum]
                : slideArr[slideNum]
            );
        else{
            setSlideArr(
                
                slideArr.map( slide => {
                    if( slide.number === slideArr[slideNum].number ) return selectedSlide;
                    else if( slide.number === selectedSlide.number ) return slideArr[slideNum];
                    else return slide;
                } )
            );
            onMoveMode();
        }
    }


    return(
        <Row userStyles = { { width: "100%", height: "100%", position: "relative"} }>
                
                    <Row userStyles = { { width: "10px", height: "100%"}}>
                        
                            <MainMenu staticMode = ""/>
                            
                    </Row>

                {
                openSetting ? 
                
                <div ref = { settingWrap } style = {
                    {
                        background: "rgba(0,0,0,.5)",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "999",
                        width: "100%",
                        height: "100%",
                        left: "0px",
                        top: "0px",
            
                        animationName: "veiw-opacity",
                        animationDuration: ".3s",
                        animationFillMode: "forwards"
                    }
                } onClick = { onCloseSetting } >

      
                                    <div style = { { minWidth: "500px", background: "rgb(200,200,200)", display: "inline-flex", padding: "20px", flexFlow: "column"}  }>
                                        <div>
                                            <div>
                                                <h2>Настройки</h2>
                                            </div>
                                            <Sep/>
                                        </div>
                                        <div style = { { width: "auto", display: "flex"} }>
                                            <Form  apply = { changeSetting } >
                                                <RowSetter userStyles = { { margin: "10px 0px" } }>
                                                    <Row>
                                                        <Input default = { wortedDictionary.title } name = "title" ph = "Название" />
                                                    </Row>
                                                    <Row> 
                                                        <Select default = { wortedDictionary.lang }  name = "lang" ph = "Язык оригинала">
                                                            <Value value = "1">Английский</Value>
                                                            <Value value = "2">Русский</Value>
                                                            <Value value = "3">Французский</Value>
                                                            <Value value = "4">Немецкий</Value>
                                                        </Select>
                                                    </Row>
                                                    <div className = "row">
                                                        <div> 
                                                            <Select default = { wortedDictionary.translang }   name = "translang" ph = "Язык перевода">
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
                                                            <Select default = { wortedDictionary.difficulty } name = "difficulty" ph = "Сложность">
                                                                <Value value = "1">Базовый уровень</Value>
                                                                <Value value = "2">Средний уровень</Value>
                                                                <Value value = "3">Продвинутый уровень</Value>
                                                            </Select>
                                                    </Row>
                                                    <Row>
                                                        <Textbox default = { wortedDictionary.comment }  name = "comment" ph = "Описание" />
                                                    </Row>
                                                    <Row>
                                                        <Row>
                                                            <Apply> Сохранить </Apply>
                                                            <div style = {
                                                                {
                                                                    color: "white",
                                                                    cursor: "pointer",
                                                                    marginLeft: "30px"
                                                                }
                                                            } onClick = { () => { setOpenSetting(0) } } >
                                                                Отмена
                                                            </div>
                                                        </Row>
                                                        <Row align = "flex-end">
                                                            <div style = {
                                                            {
        
                                                                cursor: "pointer",
    
                                                                color: "rgb(100,100,100)"
                                                            }
                                                            } onClick = { onDeleteDictionary }>
                                                                Удалить словарь
                                                            </div>
                                                        </Row>
                                                    </Row>

                                                   
                                                </RowSetter>   
                                            </Form>
                                        </div>
                                    </div>
             


                </div>

                :

                null
                
                }
                
                <div style = {  { 
                        width: "100%", 
                        height: "100%",
                        display: "flex",
                        flexFlow: "column"
                        }
                        }>
                        <div style = {
                            {
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
                                height: "38px",
                                transition: "margin-top .2s",
                                transitionTimingFunction: "linear",
                                marginTop: selectedSlide ? "0px" : "-39px",
                            }
                        }>
                             <PageBlock  animationType = "top">
                                <div className = "slideTools" style = {
                                    {

                                        display: "inline-flex"
                                        
                                    }
                                }>
                        
                                        <PageSwitcher to = "slideSettingPage" params = { { id: wortedDictionary.id, number: selectedSlide ? selectedSlide.number : null } }>
                                            Управлять
                                        </PageSwitcher>
                    
                                    <div onClick = { onMoveMode }   
                                        style = { 
                                            { background: moveMode ? "rgba(255,255,255,0.2)" : "rgba(255,255,255, 0)"  } } >
                                        Переместить
                                    </div>
                                    <div onClick = { deSelect }>
                                        Отменить
                                    </div>
                                    <div onClick = { deleteSlide }  >
                                        Удалить
                                    </div>
                                </div>
                            </PageBlock>
                        </div>
                        

                        
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
                                            slideArr.map( (slide, slideNum) => {
                                                return (
                                                
                                                        <Slide 
                                                        key = {slideNum} 
                                                        slideNum = { slideNum } 
                                                        copy = {slide.copy}
                                            
                                                        slideLabel = { slide.values ? slide.values.word || "Слайд " + slide.number  : "Слайд " + slide.number  }  
                                                        selected  = { selectedSlide && selectedSlide.number === slide.number }
                                                        selectSlide = { selectSlide }/>

                                                )
                                            } )
                                        }
                                    </div> 
                                    
                            </div>
                            </PageBlock>   
                    </div>
                </div>
                <div style = { { width: "250px", height: "100%", overflow: "hidden" } } >
                    <PageBlock>
                        <PageBlock animationType = "right">
                            
                            <Menuwraper>
                                <div style = { { padding: "20px", fontSize: "13pt"} }> 
                               
                                    <div className = "menuList" >
                                        <div onClick = {  appendSlide }  >
                                            Добавить слайд
                                        </div>
                                        <PageSwitcher to = "playPage" params = { { draft: wortedDictionary, id: wortedDictionary.id } } >
                                            <div>
                                                Воспроизвести
                                            </div>
                                        </PageSwitcher>
                                        <div onClick = { onOpenSetting } >
                                            Настройки
                                        </div>
                                        <PageSwitcher to = "myDictionarysPage">
                                            <div>
                                                Закончить
                                            </div>
                                        </PageSwitcher>
                                        

                                    </div>
                                    </div>
                            </Menuwraper>
                        </PageBlock>
                    </PageBlock>
                  
                </div>
          
        </Row>
    )
}

export default connect(
    state => ({
        wortedDictionary: state.draftDictionary
    }),
    dispatch => ({
        onSave: ( id, newObj ) => {
            dispatch( {type: "SAVE_DICTIONARY", data: {
                id,
                updatedParams: {
                    ...newObj
                }
            }} )
        }
    })
)(DitionarySetting);