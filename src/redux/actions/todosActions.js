import {
    ADD_TODO,
    DEL_COMPLETED,
    DEL_TODO,
    CHECK_TODO,
    CHECK_ALL,
    VIEW_ALL,
    VIEW_CHECKED,
    VIEW_UNCHECKED
} from "./types";

export const AddTodo = (newTask) => ({type:ADD_TODO, todo: newTask})
export const DelTodo = (id) => ({type:DEL_TODO, id})
export const CheckTodo = (id) => ({type:CHECK_TODO, id})
export const DelCompleted = () => ({type:DEL_COMPLETED})
export const CheckAll = () => ({type:CHECK_ALL})

export const ViewAll = () => ({type:VIEW_ALL})
export const ViewChecked = () => ({type:VIEW_CHECKED})
export const ViewUnchecked = () => ({type:VIEW_UNCHECKED})