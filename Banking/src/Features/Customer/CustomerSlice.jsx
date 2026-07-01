import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer={
    fullName:"",
    nationalId:"",
    createdAt:"",
}

const customerSlice = createSlice({
    name: "customer",
    initialState: initialStateCustomer,
    reducers:{
        createCustomer:{
            prepare(fullName,nationalId,createdAt){
                return { payload: {fullName,nationalId,createdAt},
            };
            },
            reducer(state,action){
                state.fullName =  action.payload.fullName,
                state.nationalId =  action.payload.nationalId,
                state.createdAt= action.payload.createdAt
    
            },
        },
        updateCustomer(state, action){
            state.fullName = action.payload
        }
    }
})


//action creators
export const{createCustomer,updateCustomer}= customerSlice.actions;
console.log(createCustomer("harsha","123","123"));
//reducers
export default customerSlice.reducer;
