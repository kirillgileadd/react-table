import {SetUserAction, SetUserErrorAction, SetUserSuccessAction, UserActionEnum} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const UserActionCreators = {
    setUser: (): SetUserAction => ({
        type: UserActionEnum.SET_USER,
    }),
    setUserSuccess: (users: IUser[]): SetUserSuccessAction => ({
        type: UserActionEnum.SET_USER_SUCCESS,
        payload: users
    }),
    setUserError: (error: string): SetUserErrorAction => ({
        type: UserActionEnum.SET_USER_ERROR,
        payload: error
    }),
    fetchUsers: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(UserActionCreators.setUser())
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            dispatch(UserActionCreators.setUserSuccess(response.data))
        } catch (e) {
            dispatch(UserActionCreators.setUserError('something Error'))
        }
    }
}