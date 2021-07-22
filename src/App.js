import './App.css';

import React, {useState} from "react";

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
            <header> Your todo list</header>
            <div className='workspace'>
                <div className='inputElem'>
                    <input id="textInput" placeholder="Enter your task name here" type="text" value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           onKeyUp={(e) => {
                               if (e.key === 'Enter') {
                                   onTodo()
                               }
                           }}
                    />
                </div>
                <div className='task-container'>
                    {
                        todos.map((todo) => {
                            return (<div className='tasks' key={todo.id}>
                                <div className='checkbox'>
                                    <input type="checkbox" onChange={() => check(todo.id)}
                                           defaultChecked={todo.isCheck}/>
                                </div>
                                <p className={todo.isCheck ? 'task-text done-text' : 'task-text'}>{todo.text}</p>
                                <div className='deleteContainer'><input
                                    type="button" className='delete Button' value='Delete'
                                    onClick={() => {
                                        delTodo(todo.id)
                                    }}/></div>
                            </div>)
                        })
                    }
                    {
                        todos.length > 0 &&
                        <div className='taskMenu'> {checkedFilter()} tasks left <div className='containerWithMenuButtons'>
                            <button className='menuButton'>All</button>
                            <button className='menuButton'>ToDo</button>
                            <button className='menuButton'>Completed</button>
                        </div> Clear completed</div>
                    }

                </div>
            </div>
        </div>
    )
}

export default App
