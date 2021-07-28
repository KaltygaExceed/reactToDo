import {ADD_TODO, DEL_TODO, CHECK_TODO, DEL_COMPLETED} from "../actions/types";


const defaultState = {
    todos: [],
}

export default function todosReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }

        case DEL_TODO :
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }

        case CHECK_TODO :
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        todo.isCheck = !todo.isCheck
                    }
                    return todo
                })
            }

        case DEL_COMPLETED :
            return {
                ...state,
                todos: state.todos.filter(todo => todo.isCheck === false)
            }


        default:
            return state
    }
}
