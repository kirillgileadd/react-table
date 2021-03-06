import {
    setCurrentPageAction,
    SetTodoAction,
    SetTodoErrorAction,
    SetTodoSuccessAction,
    SetTodoTotalCount,
    TodoActionEnum
} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";
import {ITodo} from "../../../models/ITodo";

export const TodoActionCreators = {
    setTodo: (): SetTodoAction => ({
        type: TodoActionEnum.SET_TODO,
    }),
    setTodoSuccess: (todos: ITodo[]): SetTodoSuccessAction => ({
        type: TodoActionEnum.SET_TODO_SUCCESS,
        payload: todos
    }),
    setTodoTotalCount: (total: number): SetTodoTotalCount => ({
        type: TodoActionEnum.SET_TODO_TOTAL_COUNT,
        payload: total
    }),
    setCurrentPage: (page: number): setCurrentPageAction => ({
        type: TodoActionEnum.SET_CURRENT_PAGE,
        payload: page
    }),
    setTodoError: (error: string): SetTodoErrorAction => ({
        type: TodoActionEnum.SET_TODO_ERROR,
        payload: error
    }),
    fetchTodos: (page = 1, limit = 10) => async (dispatch: AppDispatch) => {
        try {
            dispatch(TodoActionCreators.setTodo())
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
            dispatch(TodoActionCreators.setTodoTotalCount(Number(response.headers['x-total-count'])))
            dispatch(TodoActionCreators.setTodoSuccess(response.data))
        } catch (e) {
            dispatch(TodoActionCreators.setTodoError('something Error'))
        }
    }
}