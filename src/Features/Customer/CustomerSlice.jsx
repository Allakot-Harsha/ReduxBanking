const initialStateCustomer={
    fullName :"",
    nationalId:"",
    createdAt:"",
}

//customer reducer

export default function customerReducer(state = initialStateCustomer,action){
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
//action creators
export  function createCustomer(fullName,nationalId,createdAt){
    return{
        type:"customer/createCustomer",
        payload:{
            fullName: fullName,
            nationalId:nationalId,
            createdAt: new Date().toISOString, //yyyy.mm.dd.hh
        }
    }
}
export  function updateCustomer(fullName){
    return{
        type:"customer/updateName",
        payload: fullName
    }
}
