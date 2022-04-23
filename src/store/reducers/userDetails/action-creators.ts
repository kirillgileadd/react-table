import {
    CurrentUserActionEmun,
    SetCurrentUserAction,
    SetCurrentUserErrorAction,
    SetCurrentUserSuccessAction
} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const CurrentUserActionCreators = {
    setCurrentUser: (): SetCurrentUserAction => ({
        type: CurrentUserActionEmun.SET_CURRENT_USER,
    }),
    setCurrentUserSuccess: (user: IUser): SetCurrentUserSuccessAction => ({
        type: CurrentUserActionEmun.SET_CURRENT_USER_SUCCESS,
        payload: user
    }),
    setCurrentUserError: (error: string): SetCurrentUserErrorAction => ({
        type: CurrentUserActionEmun.SET_CURRENT_USER_ERROR,
        payload: error
    }),
    fetchCurrentUser: (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(CurrentUserActionCreators.setCurrentUser())
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch(CurrentUserActionCreators.setCurrentUserSuccess(response.data))
        } catch (e) {
            dispatch(CurrentUserActionCreators.setCurrentUserError('something Error'))
        }
    }
}