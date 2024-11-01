import {combineReducers, createStore} from "redux"

const initialState ={
    balance :0,
    loan:0,
    loanPurpose:""
}

const initialStateCustomer={
    fullName :"",
    nationalId:"",
    createdAt:"",
}

function AccountReducer(state = initialState,action){
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

function customerReducer(state = initialStateCustomer,action){
    switch(action.type){
        case "customer/createCustomer" :    return{
            ...state,
            fullName:action.payload.fullName,
            nationalId: action.payload.nationalId,
            createdAt:action.payload.createdAt,
        }
        case "customer/updateCustomer" :    return{
            ...state,
            fullName:action.payload
        };
        default:    
        return state;
    }
}

const store = createStore(AccountReducer)
// store.dispatch({type:"accounts/deposit", payload:2000});
// console.log(store.getState());
// store.dispatch({type:"accounts/withdraw", payload:200});
// console.log(store.getState());
// store.dispatch({type:"accounts/requestLoan", payload:{amount:2000,purpose:"Buy a house"}})
// console.log(store.getState());
// store.dispatch({type:"accounts/payloan", payload:2000})

// console.log(store.getState());
function deposit(amount){
    return {type:"account/deposit",payload:amount};
}
function withdraw(amount){
    return { type:"account/withdraw",payload:amount};
}

function requestLoan(amount, purpose){
    return {
        type:"account/requestLoan",
        payload:{amount: amount,purpose:purpose},
    };
}

function payLoan(amount){
    return{ type: "account/payloan", payload: amount};
}


//customer action creators
function createCustomer(fullName,nationalId,createdAt){
    return{
        type:"customer/createCustomer",
        payload:{
            fullName: fullName,
            nationalId:nationalId,
            createdAt: new Date().toISOString, //yyyy.mm.dd.hh
        }
    }
}
function updateCustomer(fullName){
    return{
        type:"custometr/updateName",
        payload: fullName
    }
}

const rootReducer =  combineReducers({
    account: AccountReducer,
    customer: customerReducer,
})
store.dispatch(deposit(200))
store.dispatch(withdraw(100))
console.log(store.getState());

