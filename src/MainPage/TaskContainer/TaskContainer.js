import Task from "./Task/Task";
import TaskMenu from "./TaskMenu/TaskMenu";
import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./TaskContainer.module.css"
import {getUsersTasks} from "../../redux/actions/todosActions";

export default function TaskContainer() {
    const dispatch = useDispatch()

    const {todos} = useSelector((state) => state.todosReducer)
    const {viewOptions} = useSelector((state) => state.todosReducer)

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            dispatch(getUsersTasks())
        }
    }, [])

    const filteredTasks = useMemo(() => {
        switch (viewOptions) {
            case "all":
                return todos;
            case "checked":
                return todos.filter((todo) => todo.isCheck === true);
            case "unchecked":
                return todos.filter((todo) => todo.isCheck === false);
            default:
                return
        }
    },[viewOptions, todos])

   return (<div className={style.taskContainer }>
       {
           filteredTasks.map((todo) =>
               (<Task
                       todo={todo}
                       key={todo.id}
               />))
       }
       {
           todos.length > 0 &&
           <TaskMenu/>
       }
   </div>)
}