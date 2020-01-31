export default function (state = {}, action) {
    switch(action.type) {
        case "SEARCH_ARTIST": 
            return {
                searchArtist: action.payload
            }
        default:
            return state
    }
}