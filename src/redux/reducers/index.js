import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart";
import directoryReducer from "./directory";
import shopReducer from "./shop";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default reducer;
