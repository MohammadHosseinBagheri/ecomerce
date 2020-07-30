import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default reducer;
