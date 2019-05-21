import React from "react";
import Column, {ColumnSet} from "../../components/column"
import Row, { RowSetter } from "../../components/row"
import MainMenu from "../mainMenu"
import { PageBlock } from "../../components/pageSwitcher"
import Wraper from "../../components/Wraper";
import Sep from "../../components/Separacot";

function StartPage()
{
    return(
        <Row userStyles = { { width: "100%", maxHeight: "100%", maxWidth: "100%", height: "100%", position: "relative"} }>
                
                    <Row userStyles = { { width: "300px", height: "100%"}}>
                         <MainMenu staticMode = "veiw"/>
                    </Row>
                
                   
                <div style = {  { 
                    width: "100%", 
                    height: "100%", 
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    overflow: "hidden"
                    }
                    }>
                   
                        <div style = { { width: "45%", height: "90%", minHeight: "500px" } }>
                            <PageBlock animationType = "bottom" >
                                    <Wraper >   
                                        <div style = { { height: "100%", padding: "20px", display: "flex", flexFlow: "column"}  }> 
                                            <div >
                                                <div>
                                                    <h2>Просмотренное</h2>
                                                </div>
                                                <Sep/>

                                                
                                            </div>

                                            <div style = { { 
                                                    display: "flex", 
                                                    height: "100%",
                                                    justifyContent: "center", 
                                                    alignItems: "center",
                                                    color: "white" } } >
                                                    Здесь могла бы быть ваша реклама
                                                </div>
                                        </div>
                                    </Wraper>
                                </PageBlock>
                        </div>
                       
                        <div style = { { width: "45%", height: "90%" } }>
                            <PageBlock animationType = "top" >
                                <Wraper >   
                                        <div style = { { height: "100%", padding: "20px", display: "flex", flexFlow: "column"}  }> 
                                            <div >
                                                <div>
                                                    <h2>Рекомендации</h2>
                                                </div>
                                                <Sep/>

                                                
                                            </div>

                                            <div style = { { 
                                                    display: "flex", 
                                                    height: "100%",
                                                    justifyContent: "center", 
                                                    alignItems: "center",
                                                    color: "white" } } >
                                                    Здесь тоже
                                                </div>
                                        </div>
                                    </Wraper>
                            </PageBlock>
                        </div>
                    
                </div>
          
        </Row>
    )
}

export default StartPage;