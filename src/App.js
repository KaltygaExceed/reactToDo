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
            <div className='workspace'>
                <div className='inputElem'>
                    <input id="textInput" placeholder="Enter your task name here" type="text" value={inputValue}
                           onChange={(e) => setInputValue(inputValue = e.target.value)}
                    />

                    <button className='add Button' onClick={onTodo}>
                        Add
                    </button>

                </div>
                <div className='task-container'>
                    {
                        todos.map(todo => (
                            <div className='tasks' key={todo.id}>{todo.text}
                                <div className='containerWithButtons'><input
                                    type="button" className='delete Button' value='Delete'/></div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default App
