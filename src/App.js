import './App.css';

import React, {useState} from "react";


function App() {
    let [todos, setTodo] = useState([])
    let [inputValue, setInputValue] = useState('')

    const onTodo = () => {
        setTodo((todos) => ([
            ...todos,
            {text: inputValue, id: Date.now()}
        ]))
        setInputValue('')

    }
    console.log(inputValue)
    return (
        <div>
            <header> My ToDo's</header>

            <div className='inputElem'>
                <input id="add-task" placeholder="Add new item" type="text" value={inputValue}
                       onChange={(e) => setInputValue(inputValue = e.target.value)}
                />

                <button id='addButton' onClick={onTodo}>
                    add
                </button>
            </div>
            <div className='task-container'>
                {
                    todos.map(todo => (
                        <div className='tasks' key={todo.id}>{todo.text}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default App
