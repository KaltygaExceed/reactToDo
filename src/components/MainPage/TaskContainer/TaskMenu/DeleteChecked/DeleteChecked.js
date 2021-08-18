import style from './DeleteChecked.module.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteCheckedDis} from "../../../../../redux/actions/todosActions";

function DeleteChecked() {
    const dispatch = useDispatch()
    const {todos} = useSelector((state) => state.todosReducer)
    return (
        <div className={style.delAllPlaceholder}>
            <div
                className={todos.some((todo) => todo.isCheck === true) ? style.clearAll : style.clearAll && style.clearAllNonActive}
                onClick={() => dispatch(deleteCheckedDis())}
            >
                Clear completed
            </div>
        </div>
    )
}

export default DeleteChecked