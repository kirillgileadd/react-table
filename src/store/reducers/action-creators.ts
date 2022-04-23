import {UserActionCreators} from "./user/action-creators";
import {CurrentUserActionCreators} from "./userDetails/action-creators";
import {TodoActionCreators} from "./todo/action-creators";

export const allActionCreators = {
    ...UserActionCreators,
    ...CurrentUserActionCreators,
    ...TodoActionCreators
}