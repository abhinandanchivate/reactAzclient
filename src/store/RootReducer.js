import { combineReducers } from "redux";
import authReducer from "../auth/redux/reducers/authReducer";
import profileReducer from "../profile/redux/reducers/profileReducer";
const rootReducer = combineReducers({
  authReducer,
  profileReducer,
});
export default rootReducer;
