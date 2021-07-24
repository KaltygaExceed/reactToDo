import style from './TaskCounter.module.css';
import React from "react";

function TaskCounter (props) {
    return (
        <div className={style.tasksLeft}>  {props.checkedFilter()} tasks left</div>
    )

}

export default TaskCounter