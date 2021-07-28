import {ADD_TODO, DEL_COMPLETED, DEL_TODO, CHECK_TODO} from "./types";

export const AddTodo = (newTask) => ({type: ADD_TODO, todo: newTask})
export const DelTodo = (id) => ({type: DEL_TODO, id})
export const CheckTodo = (id) => ({type: CHECK_TODO, id})
export const DelCompleted = () => ({type:DEL_COMPLETED})