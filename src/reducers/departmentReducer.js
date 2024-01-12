import { GET_DEPARTMENTS, CREATE_DEPARTMENT,GET_DEPARTMENT, DELETE_DEPARTMENT} from "../actions/type";

const intialState = {
    departments:[],
    department:{},
};

export default function departmentReducer(state = intialState, action){
    switch(action.type){
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments:action.payload,
            };
            case GET_DEPARTMENT:
                return { 
                    ...state,
                    department:action.payload,
                }
        case CREATE_DEPARTMENT:
            return{
                ...state,
                department:action.payload ,
                
            }; 

            case DELETE_DEPARTMENT:
                return{
                    ...state,
                    department:state.departments.filter((department) => department.id !== action.payload)
                }
        
            
        default :
            return state;    
    }
}