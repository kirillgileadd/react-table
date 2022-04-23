import {UserAction, UserActionEmun, UserState} from "./types";

const initialState: UserState = {
    users: [],
    error: '',
    loading: false,
}

export default function userReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionEmun.SET_USER:
            return {...state, loading: true}
        case UserActionEmun.SET_USER_SUCCESS:
            return {...state, users: action.payload, loading: false}
        case UserActionEmun.SET_USER_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}