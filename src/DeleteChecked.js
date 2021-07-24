import style from './DeleteChecked.module.css';
import React from "react";

function DeleteChecked(props) {
    return (
        <div className={style.delAllPlaceholder}>
            <div
                className={props.todos.some((todo) => todo.isCheck === true) ? style.clearAll : style.clearAll && style.clearAllNonActive}
                onClick={props.delCompleted}>Clear
                completed
            </div>
        </div>
    )
}

export default DeleteChecked