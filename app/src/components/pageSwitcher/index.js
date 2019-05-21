import React, {useState, useCallback, useContext} from "react"

export const PageSwitcherContext = React.createContext(); //передает функцию свитча
export const PageModeContext = React.createContext(); //передает состояние блок(скрыться или показаться)

export function PageSwitcher(props)
{
    const changePage = useContext(PageSwitcherContext);

    const switchPage = () => {
        changePage( props.to, props.params )
    }
    return(
        <div  onClick = { switchPage } >
            { 
                props.children
            }
        </div>
    )
}

let BlockStyles = {
    animationFillMode: "forwards",
    animationDuration: ".5s",
    animationTimingFunction: "cubic-bezier(0.1, 0, 0.3, 1)",
    width: "100%",
    height:  "100%",
    position: "relative"

}

export  function PageBlock(props)
{
    const mode = useContext(PageModeContext);



    const { animationType = "opacity" } = props;

    let animationMode = mode === 1 ? "veiw" : "hide";

    const animationName =  animationMode + "-" + animationType;

    return(
        <div style = {  { ...BlockStyles, animationName } }>
            {
                props.children
            }
        </div>
    )

}

export function Page(props)
{
    return(
        <>
            {
                React.cloneElement(props.children, { params: props.params, prevPage: props.prevPage }  )
            }
        </>
    )
}
 
export function PageSwitcherSet(props)
{

    let [currentPageName, setPage] = useState( props.pageName || props.default || props.children[0].name );
    let [mode, setMode] = useState(1)
    let [params, setParams] = useState(null)
    let [pagesMap] = useState( new Map( props.children.map( child => [child.props.name, child] )  )  );

    let [prevPage, setPrevPgae] = useState(null);

    const changePage = useCallback( (pageName, newParams) => {
        setPrevPgae(currentPageName);
        setMode(0);
        setTimeout( () => {
            if(newParams) setParams(newParams)
            setPage(pagesMap.get(pageName) ? pageName : currentPageName);
            setMode(1);

        } ,300)
       
    }, []);


    return(
        <PageSwitcherContext.Provider value = { changePage  }>
            <PageModeContext.Provider value = { mode } >
                {
                    React.cloneElement(pagesMap.get(currentPageName), {
                        params,
                        prevPage: prevPage
                    })
                }
            </PageModeContext.Provider>
        </PageSwitcherContext.Provider>  
    )
};
