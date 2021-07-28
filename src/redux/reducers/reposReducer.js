import {ADD_TODO} from "../actions/types";

const defaultState = {
    todos: [],
    id: null
}

export default function reposReducer(state = defaultState, action) {
switch (action.type) {
    case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    default:
        return state
}
}
