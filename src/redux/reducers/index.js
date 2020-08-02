import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart";
import directoryReducer from "./directory";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default reducer;
