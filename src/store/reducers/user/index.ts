import {UserAction, UserActionEnum, UserState} from "./types";

const initialState: UserState = {
    users: [],
    error: '',
    loading: false,
}

export default function userReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionEnum.SET_USER:
            return {...state, loading: true}
        case UserActionEnum.SET_USER_SUCCESS:
            return {...state, users: action.payload, loading: false}
        case UserActionEnum.SET_USER_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}