import './App.css';
import React, {useState} from "react";
import Task from "./Task/Task";
import Header from "./Header/Header";
import FilterButtons from "./FilterButtons/FilterButtons";
import InputTask from "./InputTask/InputTask";
import TaskCounter from "./TaskCounter/TaskCounter";
import DeleteChecked from "./DeleteChecked/DeleteChecked"

function App() {
    const [todos, setTodo] = useState([])
    const [inputValue, setInputValue] = useState('')

    const onTodo = () => {
        setTodo((todos) => ([
            ...todos,
            {text: inputValue, id: Date.now(), isCheck: false}
        ]))
        setInputValue('')
    }

    const delTodo = (id) => {
        setTodo((todos) => (
            todos.filter(todos => todos.id !== id)
        ))
    }

    const delCompleted = () => {
        setTodo((todos) => (
            todos.filter(todos => todos.isCheck === false)
        ))
    }

    const check = (id) => {
        setTodo(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.isCheck = !todo.isCheck
                }
                return todo
            })
        )
    }

    const checkedFilter = () => {
        return todos.filter(todo => todo.isCheck === false).length
    }

    return (
        <div>
            <Header/>
            <div className='workspace'>
               <InputTask
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onTodo={onTodo}
                />
                <div className='task-container'>
                    {
                        todos.map((todo) => {
                            return <Task
                                id={todo.id}
                                isCheck={todo.isCheck}
                                check={check}
                                delTodo={delTodo}
                                text={todo.text}
                                key={todo.id}
                            />
                        })
                    }
                    {
                        todos.length > 0 &&
                        <div className='taskMenu'>
                            <TaskCounter
                            checkedFilter = {checkedFilter}/>
                            <FilterButtons/>
                           <DeleteChecked
                           todos = {todos}
                           delCompleted = {delCompleted}
                           />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default App
