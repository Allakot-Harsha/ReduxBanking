import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    balance :0,
    loan:0,
    loanPurpose:"",
} 

const accountSlice = createSlice({
    name: "account", //name is a keyword
    initialState: initialState, //key initialState is a keyword
    reducers:{
        deposit(state, action){
            state.balance += action.payload;
        },
        withdraw(state, action){
            state.balance -= action.payload;
        },
        requestLoan:{
            prepare(amount, purpose){
                return{
                    payload:{ amount, purpose},
                };
            },
            reducer(state, action){
                if(state.loan>0) return
                state.balance += action.payload.amount,
                state.loan += action.payload.amount,
                state.loanPurpose = action.payload.loanPurpose
            },

        },
        payloan(state,action){
            state.balance -=state.loan,
            state.loan=0,
            state.loanPurpose = ""
        }
    }

});


//action creators
export const{withdraw,requestLoan,payloan} = accountSlice.actions; //actions are provided by accountSlice, and its the same deposit,withdraw..
console.log(requestLoan(1000,"buy"));
//reducer
export default accountSlice.reducer;
export function deposit(amount, currency){
    if(currency ==="INR")
    return {type:"account/deposit", payload: amount};
    return async function(dispatch, getState){
        const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
        );
        const data = await res.json();
        console.log(data);
        const converted = data.rates.INR;           
        dispatch({type:"account/deposit",payload:converted})
    }
}