import './App.css';
import Header from "./components/Header/Header";
import InputTask from "./components/InputTask/InputTask";
import TaskContainer from "./components/TaskContainer/TaskContainer"


function App() {


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

export default App
