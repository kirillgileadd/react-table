import {IUser} from "../../../models/IUser";

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: string;
}

export enum UserActionEmun {
    SET_USER = "SET_USER",
    SET_USER_SUCCESS = "SET_USER_SUCCESS",
    SET_USER_ERROR = "SET_USER_ERROR"
}

export interface SetUserAction {
    type: UserActionEmun.SET_USER
}

export interface SetUserActionSuccess {
    type: UserActionEmun.SET_USER_SUCCESS,
    payload: IUser[]
}
export interface SetUserActionError {
    type: UserActionEmun.SET_USER_ERROR
    payload: string
}

export type UserAction = SetUserAction | SetUserActionSuccess | SetUserActionError