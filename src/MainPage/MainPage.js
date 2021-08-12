import './MainPage.css';
import Header from "../components/Header/Header";
import InputTask from "./InputTask/InputTask";
import TaskContainer from "./TaskContainer/TaskContainer"


function MainPage() {


    return (
        <div>
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