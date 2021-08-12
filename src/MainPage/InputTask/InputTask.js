import style from './InputTask.module.css';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AddTodoDis} from "../../redux/actions/todosActions";


function InputTask() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    return (
        <div className={style.inputElem}>
            <input id={style.textInput} placeholder="Enter your task name here" type="text" value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter' && inputValue.trim() !== '') {
                           dispatch(AddTodoDis({text: inputValue, isCheck: false}))
                           setInputValue('')
                           e.target.value = ''
                       }
                   }}
            />
        </div>
    )
}

export default InputTask