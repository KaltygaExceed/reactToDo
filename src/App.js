import './App.css';
import React, {useState} from "react";
import Task from "./components/Task/Task";
import Header from "./components/Header/Header";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import InputTask from "./components/InputTask/InputTask";
import TaskCounter from "./components/TaskCounter/TaskCounter";
import DeleteChecked from "./components/DeleteChecked/DeleteChecked"
import {useSelector} from "react-redux";


function App() {
     const [todo, setTodo] = useState([])
    const [inputValue, setInputValue] = useState('')

  const {todos} =  useSelector((state) => state.reposReducer)

    // const onTodo = () => {
    //     setTodo((todos) => ([
    //         ...todos,
    //         {text: inputValue, id: Date.now(), isCheck: false}
    //     ]))
    //     setInputValue('')
    //
    // }

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
            <Header
                value = "Your todo list"
            />
            <div className='workspace'>
               <InputTask
                    inputValue={inputValue}
                    setInputValue={setInputValue}
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
