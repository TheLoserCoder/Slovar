const initState = ""

export function switcherPage(state = initState, action)
{
    switch( action.type ){
        case "CHANGE_PAGE": return { pageName: action.pageName };
        default: return state;
    }
}
