import {TodoAction, TodoActionEnum, TodoState} from "./types";

const initialState: TodoState = {
    todos: [],
    error: '',
    loading: false,
    page: 1,
    limit: 8,
    sort: null,
    filter: null,
    search: null,
    totalCount: 0
}

export default function todoReducer(state = initialState, action: TodoAction): TodoState {
    switch (action.type) {
        case TodoActionEnum.SET_TODO:
            return {...state, loading: true}
        case TodoActionEnum.SET_TODO_SUCCESS:
            return {...state, todos: action.payload, loading: false}
        case TodoActionEnum.SET_TODO_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case TodoActionEnum.SET_CURRENT_PAGE:
            return {...state, page: action.payload}
        case TodoActionEnum.SET_TODO_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}