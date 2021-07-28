import style from './TaskCounter.module.css';
import React from "react";
import {useSelector} from "react-redux";

function TaskCounter (props) {
    const {todos} = useSelector((state) => state.todosReducer)
    const checkedFilter = () => {
        return todos.filter(todo => todo.isCheck === false).length
    }
    return (
        <div className={style.tasksLeft}>  {checkedFilter()} tasks left</div>
    )
}

export default TaskCounter