import TaskCounter from "./TaskCounter/TaskCounter";
import FilterButtons from "./FilterButtons/FilterButtons";
import DeleteChecked from "./DeleteChecked/DeleteChecked";
import style from "./TaskMenu.module.css"

export default function TaskMenu() {
    return (
        <div className={style.taskMenu}>
            <TaskCounter/>
            <FilterButtons/>
            <DeleteChecked/>
        </div>
    )
}