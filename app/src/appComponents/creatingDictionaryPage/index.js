import React from "react";
import Column, {ColumnSet} from "../../components/column"
import Row, { RowSetter } from "../../components/row"
import MainMenu from "../mainMenu"
import { PageBlock } from "../../components/pageSwitcher"
import Wraper from "../../components/Wraper";
import Sep from "../../components/Separacot";

function CreatinDictonatyPage()
{
    return(
        <Row userStyles = { { width: "100%", maxHeight: "100%", maxWidth: "100%", height: "100%", position: "relative"} }>
                
                    <Row userStyles = { { width: "20px", height: "100%"}}>
                        
                            <MainMenu staticMode = ""/>
                            
                    </Row>
                
                   
                <div style = {  { 
                    width: "100%", 
                    height: "100%", 
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                    }
                    }>
                   
                        <div style = { { width: "90%", height: "90%" } }>
                            <PageBlock>
                                <Wraper>    
                                    <div style = { { padding: "20px"}  }>
                                        <div>
                                            <h2>Просмотренное</h2>
                                        </div>
                                        <Sep/>
                                    </div>
                                </Wraper>
                            </PageBlock>
                        </div>              
                </div>
          
        </Row>
    )
}

export default CreatinDictonatyPage;