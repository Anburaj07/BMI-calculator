import { FAILURE, REGISTER_SUCCESS, REQUEST } from "./actionTypes"

const initState={
    isAuth:false,
    userName:''
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case REQUEST:{
            return{...state}
        }
        case REGISTER_SUCCESS:{
            return{...state,userName:payload.name,isAuth:true}
        }
        case FAILURE:{
            return{...state,isAuth:false}
        }
        default:{
            return state
        }
    }
}