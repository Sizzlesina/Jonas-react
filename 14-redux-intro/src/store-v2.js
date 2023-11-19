/** @format */
import { applyMiddleware, combineReducers, createStore } from "redux";
// Depricated way => createStore
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
