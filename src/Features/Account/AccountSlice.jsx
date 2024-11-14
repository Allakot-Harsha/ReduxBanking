const initialStateAccount ={
    balance :0,
    loan:0,
    loanPurpose:""
}

//account reducers
export default function AccountReducer(state = initialStateAccount,action){
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

//action creators

export function deposit(amount,currency){
    if(currency ==="INR") return {type:"account/deposit",payload:amount};
    return async function(dispatch,getSate){
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`);
        const data = await res.json();
        console.log(data);
        
        const converted = data.rates.INR;
        dispatch({type:"account/deposit",payload:converted})
    }
}
export function withdraw(amount){
    return { type:"account/withdraw",payload:amount};
}

export function requestLoan(amount, purpose){
    return {
        type:"account/requestLoan",
        payload:{amount: amount,purpose:purpose},
    };
}

export function payLoan(amount){
    return{ type: "account/payloan", payload: amount};
}
