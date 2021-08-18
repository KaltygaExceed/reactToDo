import style from './FilterButtons.module.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ViewAll} from "../../../../../redux/actions/todosActions";
import {ViewChecked} from "../../../../../redux/actions/todosActions";
import {ViewUnchecked} from "../../../../../redux/actions/todosActions";

function FilterButtons() {
    const {viewOptions} = useSelector((state) => state.todosReducer)
    const dispatch = useDispatch()
    return (
        <div
            className={style.containerWithMenuButtons}>
            <button className={
                (viewOptions === 'all') ? style.menuButton && style.usedButton : style.menuButton
            } onClick={() => dispatch(ViewAll())}>All
            </button>
            <button className={
                (viewOptions === 'unchecked') ? style.menuButton && style.usedButton : style.menuButton
            } onClick={() => dispatch(ViewUnchecked())}>ToDo
            </button>
            <button className={
                (viewOptions === 'checked') ? style.menuButton && style.usedButton : style.menuButton
            } onClick={() => dispatch(ViewChecked())}>Completed
            </button>
        </div>
    )
}

export default FilterButtons