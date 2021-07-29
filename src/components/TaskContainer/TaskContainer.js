import Task from "./Task/Task";
import TaskMenu from "./TaskMenu/TaskMenu";
import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import style from "./TaskContainer.module.css"

export default function TaskContainer() {
    const {todos} = useSelector((state) => state.todosReducer)
    const {viewOptions} = useSelector((state) => state.todosReducer)

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