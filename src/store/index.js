import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    searchArtist: "",
    selectedSong: undefined
    loading: true
}

export default function configureStore() {
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }
