import {UserActionCreators} from "./user/action-creators";
import {CurrentUserActionCreators} from "./userDetails/action-creators";

export const allActionCreators = {
    ...UserActionCreators,
    ...CurrentUserActionCreators
}