import {
    ADD_TODO,
    DEL_TODO,
    CHECK_TODO,
    DEL_COMPLETED,
    CHECK_ALL,
    VIEW_ALL,
    VIEW_CHECKED,
    VIEW_UNCHECKED
} from "../actions/types";


const defaultState = {
    todos: [],
    viewOptions: 'all'
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

        case CHECK_ALL:
            return {
                ...state,
                todos: state.todos.map(todo => ({...todo, isCheck: true}))
            }

        case VIEW_ALL:
            return {
                ...state,
                viewOptions: 'all'
            }

        case VIEW_CHECKED:
            return {
                ...state,
                viewOptions: 'checked'
            }

        case VIEW_UNCHECKED:
            return {
                ...state,
                viewOptions: 'unchecked'
            }


        default:
            return state
    }
}
