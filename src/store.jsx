import {applyMiddleware, combineReducers, createStore} from "redux"
import AccountReducer from "./Features/Account/AccountSlice"
import customerReducer from "./Features/Customer/CustomerSlice"

const rootReducer =  combineReducers({
    account: AccountReducer,
    customer: customerReducer,
})


const store = createStore(rootReducer);
export default store;

