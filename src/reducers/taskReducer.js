import { GET_TASK,GET_TASKS,CREATE_TASK,DELETE_TASK } from "../actions/type";

const intialState={
    tasks:[],
    task:{},
};

export default function taskReducer(state = intialState, action){
    switch(action.type){
        case GET_TASKS:
            return {
               ...state,//... nje kopje e kesaj state
                tasks:action.payload,
            }
        case GET_TASK:
            return{
               ...state,
                task:action.payload,
            };
        case CREATE_TASK:
            return {
               ...state,
                task:action.payload,
            };
        case DELETE_TASK:
            return {
               ...state,
                tasks:state.tasks.filter((task) =>task.id!==action.payload),
            };
            
            default:
                return state;
                
    }
}