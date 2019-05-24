import React from "react";
import ARForm from "../autorizationForm";
import StartPage from "../StartPage";
import {PageSwitcherSet, Page} from "../../components/pageSwitcher"
import CreatinDictonatyPage from "../creatingDictionaryPage"
import DictionarySetting from "../dictionarySettingsPage"
import SlideSettingPage from "../slideSettingPage"
import PlayPage from "../PlayPage";
import MyDictionarysPage from "../myDictionarysPage"

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
                <Page name = "dictionarySetting">
             
                    <DictionarySetting/>

                </Page>
                <Page name = "slideSettingPage">        
                    <SlideSettingPage/>
                </Page>
                <Page name = "playPage">
                    <PlayPage/>
                </Page>
                <Page name = "myDictionarysPage">
                    <MyDictionarysPage/>
                </Page>
            </PageSwitcherSet> 
        </div>

    )
}

