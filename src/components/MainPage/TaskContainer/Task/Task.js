import style from './Task.module.css';
import check from '../../../../assets/check.svg'
import {deleteTodoDis} from "../../../../redux/actions/todosActions";
import {checkTodoDis} from "../../../../redux/actions/todosActions";
import {useDispatch} from "react-redux";
import Delete from "../../../UI/Delete";

function Task({todo}) {
    const dispatch = useDispatch()

    return (<div className={style.tasks}>
        <label>
            <div className={style.checkbox}>
                <input className={style.fakeButton}
                       type="checkbox"
                       onChange={() => dispatch(checkTodoDis(todo.id, todo.isCheck))}
                       defaultChecked={todo.isCheck}
                />
                <img src={check} alt="Check"
                     className={todo.isCheck ? style.checkSvg : style.checkSvg && style.checkDone}/>
            </div>
        </label>
        <div className={style.textContainer}>
            <p className={todo.isCheck ? style.taskText && style.doneText : style.taskText}>{todo.text}</p>
        </div>

        <label className={style.deleteContainer}>
            <input
                type="button" className={style.fakeButton} value='Delete'
                onClick={() => {
                    dispatch(deleteTodoDis(todo.id))
                }}/>
            <Delete
                className={style.deleteButton}
            />
        </label>
    </div>)
}

export default Task