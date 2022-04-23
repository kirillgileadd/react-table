import {IUser} from "../../../models/IUser";

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: string;
}

export enum UserActionEnum {
    SET_USER = "SET_USER",
    SET_USER_SUCCESS = "SET_USER_SUCCESS",
    SET_USER_ERROR = "SET_USER_ERROR",
}

export interface SetUserAction {
    type: UserActionEnum.SET_USER
}

export interface SetUserSuccessAction {
    type: UserActionEnum.SET_USER_SUCCESS,
    payload: IUser[]
}

export interface SetUserErrorAction {
    type: UserActionEnum.SET_USER_ERROR
    payload: string
}

export type UserAction = SetUserAction | SetUserSuccessAction | SetUserErrorAction