import style from './InputTask.module.css';
import React from "react";

function InputTask (props) {
    return (
        <div className={style.inputElem}>
            <input id={style.textInput} placeholder="Enter your task name here" type="text" value={props.inputValue}
                   onChange={(e) => props.setInputValue(e.target.value)}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter' && props.inputValue.trim() !== '') {
                           props.onTodo()
                       }
                   }}
            />
        </div>
    )
}

export default InputTask