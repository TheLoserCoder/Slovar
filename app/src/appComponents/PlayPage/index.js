import React, {useEffect, useState} from "react";
import Onetooneplay from "../../components/slideComponents/Onetoone/playversion"
import Onetomanyplay from "../../components/slideComponents/Onetomany/playversion"
import Form from "../../components/formComponents/form"
import Apply from "../../components/formComponents/buttons/apply"
import {PageSwitcher, PageBlock} from "../../components/pageSwitcher"
import { connect } from "react-redux";
import Row from "../../components/row";

 function TypeBlock(props)
 {
     if(props.type === 1)
      return <Onetooneplay name = "answer" value = { props.value } />
    else if(props.type === 2)
        return <Onetomanyplay name = "answer" value = { props.value } />
    else return <div style = { {color: "white"} }> Пустой слайд </div>
 } 

 function PlayPage(props)
{
   
    let dictionary = props.params.draft || props.dictionarys.filter(dict => dict.id === props.params.id)[0];

    let slides =  dictionary.slides.filter(
            slide => slide.values && slide.values.word && (slide.values.translate || slide.values.variants)
        );
    


    let [slideNum, setSlideNum] = useState(0);
    
    let [answer, setAnswer ] = useState(null);

    let slide = slides[slideNum] || {type: -1, value: null};
    
    let [trueAnswerCounter, setTrueAnswer] = useState(0);

    let [animation, setAnimation] = useState(1);

    const nextSlide = () =>{
        setAnimation(0)
        setAnswer(null)
        setTimeout(
            () => {
                setSlideNum(slideNum + 1);
                setAnimation(1);
            }, 300
        )
       
    };


    if(slide.type === -1 && slideNum < slides.length ) nextSlide();

    const checkAnswer = (data) => {
        if(data.answer && answer === null) setTrueAnswer(trueAnswerCounter + 1);
        setAnswer(data.answer)
    }

    return(
        <div
            style = {
                {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    background: "rgb(46, 139, 87)",
                    overflow: "hidden"
                }
            }
        > 
        <PageBlock animationType = "top">
        {
            slides.length  == slideNum || !slides.length ? 
                <PageBlock>
                    <div 
                        style = {
                            {
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                flexFlow: "column",
                            
                            }
                        }
                    >
                        <div style = { { fontSize: "30pt", color: "white" } }>
                            <span> Вар результат: { parseInt(trueAnswerCounter/slides.length * 100)|| 0 } <span style = {  { color:"rgb(16, 109, 57)"  } } >%</span> </span>
                        </div>

                        <PageSwitcher to = { props.prevPage }  params =  { { ...props.params }  }>
                            <div style = { {cursor: "pointer", background: "rgb(46, 139, 87)", color: "white", padding: "10px"} }>
                                    Закончить
                            </div>
                        </PageSwitcher>

                    </div>
                </PageBlock>
                :
                <div 
                    style = {
                        {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }
                    }
                >
                        <div
                            style = {
                                {
                                    display: "flex",
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    animationDuration: ".3s",
                                    animationFillMode: "forward",
                                    animationName: !slideNum ? null : animation ? "swipe-left-veiw" : "swipe-left-hide"
                                }
                            }
                        >
                                <div>
                                    <Form apply = { checkAnswer } key = {slideNum} >
                                        <TypeBlock type = { slide.type  } value = { slide.values } />

                                      
                                           <Row align = "center" userStyles = { {
                                               visibility: answer === null ? "visable" : "hidden"
                                           } }>
                                                <Apply>Ответить</Apply>
                                            </Row>
                                
                                        
                                        
                                    </Form>

                                </div>
                        </div>
                        <div>
                            <div
                                style = {
                                    {
                                        zIndex: "99",
                                        position: "absolute",
                                        bottom: answer === null  ? "-100%" : "0%",
                                        width: "100%",
                                        left: "0px",
                                        transition: "bottom .3s"
                                    }
                                }
                            >
                                <div
                                    style = {
                                        {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            color: "white",
                                            fontSize: "14pt",
                                            padding: "10px 30px"
                                        }
                                    }
                                >
                                    {
        
                                        <div>
                                            Ответ: { slide.values.translate || slide.values.variants.filter(v => v.translate)[0].value }
                                        </div>
            
                                    }
                                
                                    <div  style = { {cursor: "pointer"} }  onClick = { nextSlide }  >
                                        Дальше
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            }
            </PageBlock>
        </div>
    )
}

export default connect(
    state => ({
        dictionarys: state.dictionary
    })
    
)(PlayPage);