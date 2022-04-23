import {CurrentUserActionEmun, CurrentUserState, CurretnUserAction} from "./types";

const initialState: CurrentUserState = {
    user: null,
    error: '',
    loading: false,
}

export default function currentUserReducer(state = initialState, action: CurretnUserAction): CurrentUserState {
    switch (action.type) {
        case CurrentUserActionEmun.SET_CURRENT_USER:
            return {...state, loading: true}
        case CurrentUserActionEmun.SET_CURRENT_USER_SUCCESS:
            return {...state, user: action.payload, loading: false}
        case CurrentUserActionEmun.SET_CURRENT_USER_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}