import {
    ADD_TODO,
    DEL_COMPLETED,
    DEL_TODO,
    CHECK_TODO,
    CHECK_ALL,
    VIEW_ALL,
    VIEW_CHECKED,
    VIEW_UNCHECKED,
    LOGIN,
    LOADER_START,
    LOADER_END
} from "./types";
import axios from "axios";

export const getUsersTasks = () => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            const response = await axios.get('http://localhost:8000/getAll',
                {
                    headers: {"authorization": localStorage.getItem('token')}
                })
            let tasksArr = response.data.data
            tasksArr.forEach(task => {
                let id = task._id
                let text = task.text
                let isCheck = task.isCheck
                dispatch(AddTodo(text, isCheck, id))
            })
        } catch (error) {
            localStorage.removeItem('token')
            window.location = window.location
            console.log(error)
        } finally {
            dispatch(EndLoading())
        }
    }

}

export const LoginDis = (username, password) => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            const response = await axios.post('http://localhost:8000/login',
                {
                    username,
                    password
                })
            alert(response.data.message)
            localStorage.setItem('token', response.data.token)
            dispatch(LoginAction())
        } catch (error) {
            alert(error.message)
        } finally {
            dispatch(EndLoading())
        }
    }
}

export const RegistrationDis = (username, password) => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            const response = await axios.post('http://localhost:8000/registration',
                {
                    username,
                    password
                })
            alert(response.data.message)
            dispatch(LoginDis(username, password))
        } catch (error) {
            alert(error.message)
        } finally {
            dispatch(EndLoading())
        }
    }
}

export const AddTodoDis = ({text, isCheck}) => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            const response = await axios.post('http://localhost:8000/createTask',
                {
                    text,
                    isCheck
                }, {
                    headers: {"authorization": localStorage.getItem('token')}
                })
            let id = response.data.taskID
            dispatch(AddTodo(text, isCheck, id))
        } catch (error) {
            alert(error.message)
            window.location = window.location
            localStorage.removeItem('token')
        } finally {
            dispatch(EndLoading())
        }
    }
}

export const deleteTodoDis = (id) => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            await axios.delete(`http://localhost:8000/deleteTask?id=${id}`,
                {
                    headers: {"authorization": localStorage.getItem('token')}
                })
            dispatch(DelTodo(id))
        } catch (error) {
            alert(error.message)
            localStorage.removeItem('token')
            window.location = window.location
        } finally {
            dispatch(EndLoading())
        }
    }
}

export const checkTodoDis = (id, isCheck) => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            await axios.patch('http://localhost:8000/checkTask',
                {
                    id,
                    isCheck: !isCheck
                }, {
                    headers: {"authorization": localStorage.getItem('token')}
                })
            dispatch(CheckTodo(id))
        } catch (error) {
            console.log(error.data)
            window.location = window.location
            localStorage.removeItem('token')
        } finally {
            dispatch(EndLoading())
        }
    }
}

export const checkAllDis = () => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            await axios.patch('http://localhost:8000/checkAllTasks',
                {}, {
                    headers: {"authorization": localStorage.getItem('token')}
                })
            dispatch(CheckAll())
        } catch (error) {
            alert(error.message)
            localStorage.removeItem('token')
            window.location = window.location
        } finally {
            dispatch(EndLoading())
        }
    }
}

export const deleteCheckedDis = () => {
    return async (dispatch) => {
        dispatch(StartLoading())
        try {
            await axios.delete('http://localhost:8000/deleteChecked',
                {
                    headers: {"authorization": localStorage.getItem('token')}
                })
            dispatch(DelCompleted())
        } catch (error) {
            alert(error.message)
            localStorage.removeItem('token')
            window.location = window.location
        } finally {
            dispatch(EndLoading())
        }
    }
}

export const LoginAction = () => ({type: LOGIN})

export const AddTodo = (text, isCheck, id) => ({type: ADD_TODO, todo: {text, isCheck, id}})
export const DelTodo = (id) => ({type: DEL_TODO, id})
export const CheckTodo = (id) => ({type: CHECK_TODO, id})
export const DelCompleted = () => ({type: DEL_COMPLETED})
export const CheckAll = () => ({type: CHECK_ALL})

export const ViewAll = () => ({type: VIEW_ALL})
export const ViewChecked = () => ({type: VIEW_CHECKED})
export const ViewUnchecked = () => ({type: VIEW_UNCHECKED})

export const StartLoading = () => ({type: LOADER_START})
export const EndLoading = () => ({type: LOADER_END})