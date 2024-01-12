import { GET_EMPLOYEES,GET_EMPLOYEE,DELETE_EMPLOYEE,CREATE_EMPLOYEE } from "../actions/type";
 
const intialState={
    employees:[],
    employee:{},
};

export default function employeeReducer(state = intialState, action){
    switch(action.type){
        case GET_EMPLOYEES:
            return {
                ...state,//... nje kopje e kesaj state
                employees:action.payload,
            }
        case GET_EMPLOYEE:
            return{
                ...state,
                employee:action.payload,
            };
        case CREATE_EMPLOYEE:
            return {
                ...state,
                employee:action.payload,
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees:state.employees.filter((employee) =>employee.id !==action.payload),
            };
            
            default:
                return state;
                
    }
}
