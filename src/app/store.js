import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import accountReducer from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
