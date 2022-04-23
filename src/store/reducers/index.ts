import userReducer from "./user";
import currentUserReducer from "./userDetails";
import todoReducer from "./todo";

export default {
    user: userReducer,
    currentUser: currentUserReducer,
    todo: todoReducer,
}