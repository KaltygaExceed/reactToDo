import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import todosReducer from "./todosReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    todosReducer,
})

export  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

