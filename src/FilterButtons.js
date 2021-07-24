import style from './FilterButtons.module.css';
import React from "react";

function FilterButtons() {
    return (
        <div
            className={style.containerWithMenuButtons}>
            <button className={style.menuButton}>All</button>
            <button className={style.menuButton}>ToDo</button>
            <button className={style.menuButton}>Completed</button>
        </div>
    )
}

export default FilterButtons