import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});
