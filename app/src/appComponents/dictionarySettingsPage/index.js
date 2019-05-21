import React, {useState, useEffect} from "react";
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
    
    let  { wortedDictionary } = props;

    let [ selectedSlide, setSelectedSlide ] = useState(null);

    let [slideArr, setSlideArr] = useState(wortedDictionary.slides);

    let [moveMode, setMoveMode] = useState(0);

    let [arrNumber, setArrNumber] = useState(slideArr.length + 1)

    useEffect(
        () => {
        props.onSaveDraft({
                ...wortedDictionary,
                slides: slideArr
            })
        }
    , [slideArr])

    const appendSlide = () => {
        setArrNumber(arrNumber + 1)
        setSlideArr([ ...slideArr, {
            number: arrNumber,
            type: null,
            values: null
            
        }])
    }


    const saveDictionary = () => {
        props.onSave( wortedDictionary.id, { 
            slides: [...slideArr]
        } )
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
                                    <div>
                                        <PageSwitcher to = "slideSettingPage" params = { { number: selectedSlide ? selectedSlide.number : null } }>
                                            Управлять
                                        </PageSwitcher>
                                    </div>
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
                                        <div>
                                            Настройки
                                        </div>
                                        <div onClick = { saveDictionary } >
                                            Сохранить
                                        </div>
                                        <div>
                                            Закончить
                                        </div>
                                        

                                    </div>
                                    <Sep/>

                                    <FButton> Удалить </FButton>
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
        onSaveDraft: (newDraft) => {
            dispatch({type: "SAVE_DRAFT", newDraft})
        },
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