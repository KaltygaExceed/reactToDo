import './App.css';

import React, {useState} from "react";


function App() {
    let [todos, setTodo] = useState([])
    let [inputValue, setInputValue] = useState('')

    const onTodo = () => {
        setTodo((todos) => ([
            ...todos,
            {text: inputValue, id: Date.now(), isCheck: false}
        ]))
        setInputValue('')
    }

    const delTodo = (id) => {
        setTodo((todos) => ([
            ...todos.filter(todos => todos.id !== id)
        ]))
    }


    return (
        <div>
            <header> Your todo list</header>
            <div className='workspace'>
                <div className='inputElem'>
                    <input id="textInput" placeholder="Enter your task name here" type="text" value={inputValue}
                           onChange={(e) => setInputValue(inputValue = e.target.value)}
                           onKeyDown={(e) => {
                               if (e.key === 'Enter') {
                                   onTodo()
                               }
                           }}
                    />
                </div>
                <div className='task-container'>
                    {
                        todos.map(todo => (
                            <div className='tasks' key={todo.id}>
                                <div className='checkbox'><input type="checkbox"/></div>
                                {todo.text}
                                <div className='containerWithButtons'><input
                                    type="button" className='delete Button' value='Delete'
                                    onClick={() => {
                                        delTodo(todo.id)
                                    }}/></div>
                            </div>
                        ))
                    }
                    {
                        todos.length > 0 &&
                        <div className='taskMenu'> {todos.length} tasks left <div className='containerWithMenuButtons'>
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
