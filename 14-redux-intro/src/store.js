/** @format */
import { applyMiddleware, combineReducers, createStore } from "redux";
// Depricated way
import thunk from "redux-thunk";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
