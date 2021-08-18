import './MainPage.css';
import Header from "../Header/Header";
import InputTask from "./InputTask/InputTask";
import TaskContainer from "./TaskContainer/TaskContainer"
import {Link} from "react-router-dom";


function MainPage() {


    return (
        <div>
            <Link class="aboutLink" to="/about"> About </Link>
            <Header
                value="Your todo list"
            />
            <div className='workspace'>
                <InputTask/>
                <TaskContainer/>
            </div>
        </div>
    )
}

export default MainPage