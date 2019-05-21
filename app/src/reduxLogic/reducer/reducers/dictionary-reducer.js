const initState = {
    title: "Test",
    lang: 1,
    translang: 2,
    difficulty: 1,
    comment: "test",
    id: 1,
    slides: [],
    settings: {}
    
}

export function draftDictionary(state = initState, action)
{
    switch( action.type ){
        case "CREATE_DRAFT": return ( {
            ...action.draft,
            slides: [],
            id: state.id + 1,
            settings: {}
        });

        case "SAVE_DRAFT": return(
            {
                ...state,
                ...action.newDraft
            }
        )
        
        default: return state;
    }
}

const initState2 = [
]

export function dictionary(state = initState2, action)
{
    switch( action.type ){
        case "APPEND_DICTIONARY": return (
                [ ...state, 
                    action.dictionary
                ]
        )
        case "SAVE_DICTIONARY": return state.map(
            (val) => {
                if(val.id === action.data.id)
                    return {
                        ...val,
                        ...action.data.updatedParams

                    };
                else return val;
            }
        )
        case "DELETE_DICTIONARY": return state.filter(val => val.id !== action.dictionary.id)
        default: return state;
    }
}

export function dFilter(state = {}, action)
{
    switch( action.type ){
        case "BY_ID": return {
            filter:{
                id: action.filter.id
            } 
        }
        default: return state;
    }
}