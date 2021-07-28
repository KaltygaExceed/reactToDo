import style from './Task.module.css';
import check from '../../../assets/check.svg'
import {DelTodo} from "../../../redux/actions/todosActions";
import {CheckTodo} from "../../../redux/actions/todosActions";
import {useDispatch} from "react-redux";
import Delete from "../../UI/Delete";

function Task({todo}) {
    const dispatch = useDispatch()

    return (<div className={style.tasks}>
        <label>
            <div className={style.checkbox}>
                <input className={style.fakeButton}
                       type="checkbox"
                       onChange={() => dispatch(CheckTodo(todo.id))}
                       defaultChecked={todo.isCheck}
                />
                <img src={check} alt="Check"
                     className={todo.isCheck ? style.checkSvg : style.checkSvg && style.checkDone}/>
            </div>
        </label>
        <p className={todo.isCheck ? style.taskText && style.doneText : style.taskText}>{todo.text}</p>
        <label className={style.deleteContainer}>
            <input
                type="button" className={style.fakeButton} value='Delete'
                onClick={() => {
                    dispatch(DelTodo(todo.id))
                }}/>
            <Delete
            className={style.deleteButton}
            />
        </label>
    </div>)
}

export default Task