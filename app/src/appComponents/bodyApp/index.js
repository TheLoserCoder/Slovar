import React from "react";
import ARForm from "../autorizationForm";
import StartPage from "../StartPage";
import {PageSwitcherSet, Page} from "../../components/pageSwitcher"
import CreatinDictonatyPage from "../creatingDictionaryPage"


const bodyAppStyles = {
    position: "relative",
    width: "100%",
    height: "100%"
}
export default  function Body(props)
{

    return(

        <div style = { bodyAppStyles } >
            <PageSwitcherSet default = "autorizationPage">
                <Page name = "autorizationPage">

                         <ARForm/>
     
                </Page>
                <Page name = "startPage">
             
                        <StartPage/>
      
                </Page>
                <Page name = "creatinDictonatyPage">
             
                    <CreatinDictonatyPage/>

                </Page>
            </PageSwitcherSet> 
        </div>

    )
}

