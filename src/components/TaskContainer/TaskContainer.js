import Task from "./Task/Task";
import TaskMenu from "../TaskMenu/TaskMenu";
import React from "react";
import {useSelector} from "react-redux";
import style from "./TaskContainer.module.css"

export default function () {
    const {todos} = useSelector((state) => state.todosReducer)
   return (<div className={style.taskContainer }>
       {
           todos.map((todo) =>
               <Task
                   todo={todo}
                   key={todo.id}
               />
           )
       }
       {
           todos.length > 0 &&
           <TaskMenu/>
       }
   </div>)
}