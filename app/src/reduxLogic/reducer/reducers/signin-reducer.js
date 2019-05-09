const initState = false

export function signIn(state = initState, action)
{
    switch( action.type ){
        case "SIGN_IN": return { userData: action.userData };
        default: return state;
    }
}
