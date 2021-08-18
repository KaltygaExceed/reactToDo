import {BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";

import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import AboutPage from "./components/AboutPage/AboutPage"
import MainPage from "./components/MainPage/MainPage";
import './App.css';
import {LoginAction} from "./redux/actions/todosActions";
import {useDispatch, useSelector} from "react-redux";
import PrivateRoute from "./privateRouter";
import {useEffect} from "react";



function App() {
    const dispatch = useDispatch()
    const {isToken} = useSelector(state=>state.todosReducer)
    const {isLoading} = useSelector(state=>state.todosReducer)

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            dispatch(LoginAction())
        }
    }, [])

    const logout = () => {
        localStorage.clear()
        window.location = window.location
    }

    return (
        <Router>
            {isToken && (<Link className="logout" onClick={() =>logout()}> Logout </Link>)}
            {isLoading && (<div className="loaderContainer"><div className="lds-hourglass" /></div>)}

            <Switch>
                <Route exact path={'/'} ><Redirect to="/main" /></Route>
                <Route exact path={'/about'} component={AboutPage}/>
                <PrivateRoute exact path={'/login'} component={Login} auth={!isToken} to={'/main'} />
                <PrivateRoute exact path={'/registration'} component={Registration} auth={!isToken} to={'/main'} />
                <PrivateRoute exact path={'/main'} component={MainPage} auth={isToken} to={'/login'} />
            </Switch>

        </Router>
    )
}

export default App
