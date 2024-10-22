import {createStore} from "redux"

const initialState ={
    balance :0,
    loan:0,
    loanPurpose:""
}

function reducer(state = initialState,action){
    switch(action.type){
        case "accounts/deposit":    return{...state,balance:state.balance+action.payload};
        case "accounts/withdraw":   return{...state,balance:state.balance - action.payload};
        case "accounts/requestLoan": if(state.loan>0) return state;
                                     return{
                                        ...state,loan:action.payload.amount, loanPurpose:action.payload.purpose, balance :state.balance+action.payload.amount,
                                     }
        case "accounts/payloan":    return{
                                        ...state,loan:0, balance : state.balance - action.payload, loanPurpose:""
        }
        default:                    return state
    }
}

const store = createStore(reducer)
store.dispatch({type:"accounts/deposit", payload:2000});
console.log(store.getState());
store.dispatch({type:"accounts/withdraw", payload:200});
console.log(store.getState());
store.dispatch({type:"accounts/requestLoan", payload:{amount:2000,purpose:"Buy a house"}})
console.log(store.getState());
store.dispatch({type:"accounts/payloan", payload:2000})

console.log(store.getState());
