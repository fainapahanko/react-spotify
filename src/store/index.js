import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    searchArtist: "",
    selectedSong: null,
    loading: true,
    like:[]
}

export default function configureStore() {
    return createStore(
        rootReducer, 
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
