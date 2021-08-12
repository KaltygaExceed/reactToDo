import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import MainPage from "./MainPage/MainPage";
import './App.css';
import {getUsersTasks, LoginAction} from "./redux/actions/todosActions";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch()

    //сделать useEffect на получение тасок
    if (localStorage.getItem('token')) {
        dispatch(LoginAction()) && dispatch(getUsersTasks())
    }

    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/main' component={MainPage}/>
                <Route exact path='/'>
                    {(localStorage.getItem('token')) ? <Redirect to='/main'/> : <Redirect to='/login'/> } }
                </Route>
            </Switch>

        </Router>
    )
}

export default App
