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

function TypeBlock({type, values})
{
    if(type === 1){
        return (
            <PageBlock key = { type } >
                <Onetoone name = "onetoone" values = { values } />
            </PageBlock>
        )
    }
    else if(type === 2)
        return(
            <PageBlock key = { type }>
                <Onetomany name = "onetomany" values = { values } />
            </PageBlock>
        )
    else return (
        <PageBlock key = { type }>
            <div style = { { color: "rgb(160,160,160)" } }>Пустой слайд</div>
        </PageBlock>
    )
}
function SlideSetting( props )
{
   
 
    let [wortedDictionary, setWD] = useState(DB.getById(props.params.id));

    let [slide, setSlide] = useState(wortedDictionary.slides.filter( slide => slide.number === props.params.number )[0])

    let [swipe, setSwipe] = useState(1);

    useEffect(
        () => {

            setWD( DB.updateById(props.params.id,{
                ...wortedDictionary,
                slides: wortedDictionary.slides.map(s => {
                    return s.number === slide.number ? slide : s;
                })
            } ) );
        
        
        }    
        , [slide, swipe]);

    const onValues = (data) => {
       
        if(slide.type === 1){
            setSlide(
                {
                    ...slide,
                    values:  { ...data.onetoone }
                }
            )
        }
        else if(slide.type === 2){
            setSlide(
                {
                    ...slide,
                    values: { ...data.onetomany }
                }
            )
        }
            
        
    };

    const onType = (data) => {
        setSlide(
            {
                ...slide,
                type: data.type
            }
        )
    };

    const nextSlide = () => {
        if( wortedDictionary.slides.length === wortedDictionary.slides.indexOf(slide) + 1) return;
        setSwipe(0);
        setTimeout(
            () => {
                setSlide(
                    wortedDictionary.slides[wortedDictionary.slides.indexOf(slide) + 1]   
                );
                setSwipe(1)
            }, 300
        )
       
    };

    const prevSlide = () => {
        if(wortedDictionary.slides.indexOf(slide) === 0 ) return;
        setSwipe(0)

        setTimeout(
            () => {
                setSlide(
                    wortedDictionary.slides[wortedDictionary.slides.indexOf(slide) - 1]   
                )
                setSwipe(1)
            }, 300
        )

        
    };

    return(
        <Row userStyles = { { width: "100%", height: "100%", position: "relative"} }>
                
                    <Row userStyles = { { width: "10px", height: "100%"}}>
                        
                            <MainMenu staticMode = ""/>
                            
                    </Row>
                
                <div style = {  { 
                        width: "100%", 
                        height: "100%",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                        alignItems: "center"
                        }
                        }>
                       <div>

                            <Form  hotMode = {true}  apply = { onValues } >
                                    <div className = "slideSwipe" style = {{
                                        animationName: swipe ? "swipe-veiw" : "swipe-hide"
                                    }}>
                                        <TypeBlock key = { slide.number }  type = { slide.type } values = { slide.values } />
                                    </div>
                                    
                                </Form>
         
                        </div>
                     
                </div>
                <div style = { { width: "300px", height: "100%", overflow: "hidden" } } >
                    <PageBlock>
                        <PageBlock animationType = "right">
                            
                            <Menuwraper>
                                <div style = { { display: "flex", flexFlow: "column", padding: "20px", fontSize: "13pt"} }> 
                                    <Form hotMode = {true} apply = { onType }  >
                                        <Selector key  =  {slide.number} default ={ slide.type } ph  = "Тип" name ="type">
                                                <Value value = { 1 } >Один-Один</Value>
                                                <Value value = { 2 } >Один-Много</Value>
                                        </Selector>
     
                                            <Sep/>
                                        <div className = "menuList">
                                            <div  onClick = { nextSlide }
                                            
                                                    style = {
                                                        {
                                                            display:  wortedDictionary.slides.length === wortedDictionary.slides.indexOf(wortedDictionary.slides.filter(s => slide.number === s.number)[0]) + 1 ? "none" : "block"
                                                        }
                                                    }
                                            >
                                                    Следующий 
                                                </div>

                                            <div  onClick = { prevSlide }
                                                style = {
                                                    {
                                                        display: wortedDictionary.slides.indexOf(wortedDictionary.slides.filter(s => slide.number === s.number)[0]) === 0  ? "none" : "block"
                                                    }
                                                }
                                            >   Предыдущий </div>
  
                                        </div>
                                        <Sep/>
                                            <div>
                                                <PageSwitcher to = "dictionarySetting" ><FButton>Закончить</FButton></PageSwitcher>
                                            </div>
                                     </Form>
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
)(SlideSetting);