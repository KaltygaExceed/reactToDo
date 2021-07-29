import style from './FilterButtons.module.css';
import React from "react";
import {useDispatch} from "react-redux";
import {ViewAll} from "../../../../redux/actions/todosActions";
import {ViewChecked} from "../../../../redux/actions/todosActions";
import {ViewUnchecked} from "../../../../redux/actions/todosActions";

function FilterButtons() {
    const dispatch = useDispatch()
    return (
        <div
            className={style.containerWithMenuButtons}>
            <button className={style.menuButton} onClick={() => dispatch(ViewAll())}>All</button>
            <button className={style.menuButton} onClick={() => dispatch(ViewUnchecked())}>ToDo</button>
            <button className={style.menuButton} onClick={() => dispatch(ViewChecked())}>Completed</button>
        </div>
    )
}

export default FilterButtons