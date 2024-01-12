import { GET_ERRORS } from "../actions/type";

const intialState = {
    errors: [],
} 

export default function errorReducer(state = intialState,action){
    switch(action.type){
        case GET_ERRORS:
            return action.payload;

        default:
            return state;    
    }
}