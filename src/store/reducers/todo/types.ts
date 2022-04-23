import {ITodo} from "../../../models/ITodo";

export interface TodoState {
    todos: ITodo[];
    loading: boolean;
    error: string;
    page: number;
    limit: number;
    sort: null | string;
    filter: null | string;
    search: null | string;
    totalCount: null | number;
}

export enum TodoActionEnum {
    SET_TODO = "SET_TODO",
    SET_TODO_SUCCESS = "SET_TODO_SUCCESS",
    SET_TODO_TOTAL_COUNT = "SET_TODO_TOTAL_COUNT",
    SET_TODO_ERROR = "SET_TODO_ERROR",
}

export interface SetTodoAction {
    type: TodoActionEnum.SET_TODO
}

export interface SetTodoSuccessAction {
    type: TodoActionEnum.SET_TODO_SUCCESS,
    payload: ITodo[]
}

export interface SetTodoTotalCount {
    type: TodoActionEnum.SET_TODO_TOTAL_COUNT,
    payload: number
}

export interface SetTodoErrorAction {
    type: TodoActionEnum.SET_TODO_ERROR
    payload: string
}

export type TodoAction =
    SetTodoAction
    | SetTodoSuccessAction
    | SetTodoErrorAction
    | SetTodoTotalCount