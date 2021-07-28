import style from './InputTask.module.css';
import React from "react";
import {useDispatch} from "react-redux";
import { AddTodo} from "../../redux/actions/types";

function InputTask (props) {
const dispatch = useDispatch()
    return (
        <div className={style.inputElem}>
            <input id={style.textInput} placeholder="Enter your task name here" type="text" value={props.inputValue}
                   onChange={(e) => props.setInputValue(e.target.value)}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter' && props.inputValue.trim() !== '') {
                           dispatch(AddTodo({text: props.inputValue, id: Date.now(), isCheck: false}))
                           e.target.value = ''

                       }
                   }}
            />
        </div>
    )
}

export default InputTask