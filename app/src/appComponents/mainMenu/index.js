import React, {useState, useCallback} from "react";
import MenuWraper from "../../components/menuWraper";
import { PageSwitcher } from "../../components/pageSwitcher"
import FButton from "../../components/formComponents/buttons/FButton"
import Sep from "../../components/Separacot"
import { PageBlock } from "../../components/pageSwitcher"

const menuStyles = {
    height: "100%",
    transition: "max-width .3s",
    overflow: "hidden",
    position: "absolute",
    transitionTimingFunction:"linear",
    zIndex: "100"

}



export default function MainMenu(props)
{
    let [mode, setMode] = useState(props.staticMode || "hide");

    const openMenu = useCallback(
        () => {
            setMode( props.staticMode || "veiw" )
        }, [mode]
    );

    const closeMenu = useCallback(
        () => {
            setMode( props.staticMode || "hide" )
        }, [mode]
    );
    
    let menuWidth = mode === "hide" ? "10px" : "220px";

    return(
        <div style = { { ...menuStyles, maxWidth: menuWidth } }  onMouseOver = { openMenu } onMouseLeave = { closeMenu }   >
            <PageBlock>
                <PageBlock animationType = "width">
                    <MenuWraper>
                    <div  >
                            <div style = { { position: "relative", width: "150px", padding: "0px 20px", fontSize: "14pt"} }>
                                        <div style = { { padding: "10px 0px", textAlign: "center" } }>
                                                <div style = { { 
                                                    display: "inline-block",
                                                    position: "reative",
                                                    background: "url(./bgimg/bgimg.jpg)",
                                                    backgroundSize: "cover",
                                                    borderRadius: "50%", 
                                                    height: "100px",
                                                    width: "100px",
                                                    border: "2px solid #00AB6F",
                                                } } >
                                                </div>
                                                
                                        </div>

                                        <div>
                                            <PageSwitcher to = "creatinDictonatyPage">
                                                <FButton> Создать словарь</FButton>
                                            </PageSwitcher>
                                        </div>
                                        <div>
                                            <PageSwitcher to = "createDictionary">
                                                <FButton> Мои словари</FButton>
                                            </PageSwitcher>
                                        </div>
                                        <div>
                                            <PageSwitcher to = "createDictionary">
                                                <FButton>  Поиск словарей</FButton>
                                            </PageSwitcher>
                                        </div>
                                        <Sep/>
                                        <div>
                                            <PageSwitcher to = "startPage">
                                                <FButton> Начальная </FButton>
                                            </PageSwitcher>
                                        </div>
                                        <div>
                                            <PageSwitcher to = "createDictionary">
                                                <FButton>  Сообщения </FButton>
                                            </PageSwitcher>
                                        </div>
                                        <div>
                                            <PageSwitcher to = "createDictionary">
                                                <FButton>  Уведомления </FButton>
                                            </PageSwitcher>
                                        </div>
                                        <div>
                                            <PageSwitcher to = "createDictionary">
                                                <FButton>  Вопросы</FButton>
                                            </PageSwitcher>
                                        </div>
                                        <Sep/>
                                        <div>
                                            <PageSwitcher to = "autorizationPage">
                                                <FButton>  Выйти</FButton>
                                            </PageSwitcher>
                                        </div>
                                        
                                
                            </div>
                    </div>
                    </MenuWraper>
                </PageBlock>  
            </PageBlock>  
        </div>
    )

}