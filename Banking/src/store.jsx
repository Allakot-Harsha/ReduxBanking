
import AccountReducer from "./Features/Account/AccountSlice";
import CustomerReducer from "./Features/Customer/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist"
const persistConfig = {
    key: "root",
    storage,
};
const persistedAccountReducer = persistReducer(persistConfig,AccountReducer);
const persistedCustomerReducer = persistReducer(persistConfig, CustomerReducer);
const store = configureStore({
    reducer:{
        account: persistedAccountReducer,
        customer: persistedCustomerReducer,
    }}
);

const persistor = persistStore(store);
export  {store,persistor};