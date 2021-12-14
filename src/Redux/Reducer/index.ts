import { combineReducers } from "redux";
import userReducer from "./gitReducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
