import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/reducers/store'
import {Provider} from "react-redux";
import Login from "./Login/Login";

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>

        {/*<App/>*/}
        <Login/>

    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

