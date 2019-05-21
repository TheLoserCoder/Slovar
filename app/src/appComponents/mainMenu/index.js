import React, {useState, useCallback} from "react";
import MenuWraper from "../../components/menuWraper";
import { PageSwitcher } from "../../components/pageSwitcher"
import FButton from "../../components/formComponents/buttons/FButton"
import Sep from "../../components/Separacot"
import { PageBlock } from "../../components/pageSwitcher"

const menuStyles = {
    height: "100%",
    transition: "left .3s",
    overflow: "hidden",
    position: "absolute",
    transitionTimingFunction:"ease-out",
    zIndex: "100",
    left: "-230px"
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
    
    let menuWidth = mode === "hide" ? "-230px" : "0px";

    return(
        <div style = { { ...menuStyles, left: menuWidth } }  onMouseOver = { openMenu } onMouseLeave = { closeMenu }   >
            <PageBlock>
                <PageBlock animationType = "width">
                    <MenuWraper>
                    <div >
                            <div style = { { position: "relative", width: "200px", padding: "0px 20px", fontSize: "13pt"} }>
                                        <div style = { { padding: "10px 0px", textAlign: "center" } }>
                                                <div style = { { 
                                                    display: "inline-block",
                                                    position: "reative",
                                                    background: "url(./bgimg/bgimg.jpg)",
                                                    backgroundSize: "cover",
                                                    borderRadius: "50%", 
                                                    height: "130px",
                                                    width: "130px",
                                                    border: "3px solid  rgba(255,255,255,1)",
                                                } } >
                                                </div>
                                                
                                        </div>
                                    <div  className = "menuList">
                                            <PageSwitcher to = "creatinDictonatyPage">
                                                Создать словарь
                                            </PageSwitcher>
                                            <PageSwitcher to = "creatinDictonatyPage">
                                                Поиск словарей
                                            </PageSwitcher>
                                            <PageSwitcher to = "creatinDictonatyPage">
                                                Мои словари
                                            </PageSwitcher>
                                            <PageSwitcher to = "startPage">
                                                Начальная
                                            </PageSwitcher>
                                            <PageSwitcher to = "creatinDictonatyPage">
                                                Сообщения
                                            </PageSwitcher>
                                            <PageSwitcher to = "creatinDictonatyPage">
                                                Уведомления
                                            </PageSwitcher>
                                            <PageSwitcher to = "creatinDictonatyPage">
                                                Вопросы
                                            </PageSwitcher>
                                            
                                    </div>
                                    <Sep/>
                                    <FButton>
                                        <PageSwitcher to = "autorizationPage">
                                                    Выход
                                        </PageSwitcher>
                                    </FButton>
                                    
                            </div>
                    </div>
                    </MenuWraper>
                </PageBlock>  
            </PageBlock>  
        </div>
    )

}