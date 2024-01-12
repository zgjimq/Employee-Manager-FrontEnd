import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import departmentReducer from "./departmentReducer";
import employeeReducer from "./employeeReducer";
import taskReducer from "./taskReducer";
const rootReducer = combineReducers({
    errorReducerContent : errorReducer,
    departmentReducerContent: departmentReducer,
    employeeReducerContent : employeeReducer,
    taskReducerContent : taskReducer,
});

export default rootReducer;