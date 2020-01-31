export default function (state = {}, action) {
    switch(action.type) {
        case "SEARCH_ARTIST": 
            return {
                ...state,
                searchArtist: action.payload
            };
        
        case "LOAD_SPINNER": 
            return {
                ...state,
                loading: true
            };
            
        case "UNLOAD_SPINNER": 
            return {
                ...state,
                loading: false
            };
            default:
            return state
        }
    }
        
    