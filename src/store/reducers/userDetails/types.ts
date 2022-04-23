import {IUser} from "../../../models/IUser";

export interface CurrentUserState {
    user: null | IUser;
    loading: boolean;
    error: string;
}

export enum CurrentUserActionEmun {
    SET_CURRENT_USER_SUCCESS = "SET_USER_CURRENT_SUCCESS",
    SET_CURRENT_USER_ERROR = "SET_USER_CURRENT_ERROR",
    SET_CURRENT_USER = "SET_CURRENT_USER"
}

export interface SetCurrentUserAction {
    type: CurrentUserActionEmun.SET_CURRENT_USER
}

export interface SetCurrentUserSuccessAction {
    type: CurrentUserActionEmun.SET_CURRENT_USER_SUCCESS
    payload: IUser
}

export interface SetCurrentUserErrorAction {
    type: CurrentUserActionEmun.SET_CURRENT_USER_ERROR
    payload: string
}

export type CurretnUserAction = SetCurrentUserAction | SetCurrentUserSuccessAction | SetCurrentUserErrorAction