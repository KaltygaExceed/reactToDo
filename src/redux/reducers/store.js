import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from "redux";
import reposReducer from "./reposReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    reposReducer,
})

export  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

