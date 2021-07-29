import style from './TaskCounter.module.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CheckAll} from "../../../../redux/actions/todosActions";

function TaskCounter () {
    const dispatch = useDispatch()
    const {todos} = useSelector((state) => state.todosReducer)

    const checkedFilter = () => {
        return todos.filter(todo => todo.isCheck === false).length
    }

    return (
        <div className={style.tasksLeft} onClick={() => dispatch(CheckAll())}>  {checkedFilter()} tasks left</div>
    )
}

export default TaskCounter