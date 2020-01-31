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
            }
        default:
            return state
    }
}