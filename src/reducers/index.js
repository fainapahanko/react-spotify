export default function (state = {}, action) {
    switch(action.type) {
        case "SEARCH_ARTIST": 
            return {
                ...state,
                searchArtist: action.payload
            };
        case "SELECT_SONG":
            return {
                ...state,
                selectedSong: action.payload
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
        case "ADD_LIKE" :
        return{
            ...state,
            like: state.like.concat(action.payload)
        }
        case "REMOVE_LIKE":
            return {
                ...state,
                like: state.like.filter(l => l !== action.payload)
            }
        default:
            return state
        }
    }
        
    