
import axios from "axios";
import { GET_TASK,GET_TASKS,CREATE_TASK,DELETE_TASK,GET_ERRORS } from "./type";

export const getTasks=(department_id,employeeId)=> async(dispatch)=>{
    const response = await axios.get(`http://localhost:8095/api/tasks/${department_id}/${employeeId}`);
    dispatch({
        type:GET_TASKS,
        payload:response.data,
    });
};

export const getTask=(department_id,employeeId,taskId)=> async(dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:8095/api/tasks/get/${department_id}/${employeeId}/${taskId}`);
    dispatch({
        type:GET_TASK,
        payload:response.data,
    });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data,
        }); 
    }
    
};
export const createTask = (department_id,employeeId, task) => async(dispatch)=>{
    try {
        const response = await axios.post(`http://localhost:8095/api/tasks/${department_id}/${employeeId}`,task);
        window.location.href=`/taskList/${department_id}/${employeeId}`;
    dispatch({
        type: CREATE_TASK,
        payload: response.data,
    });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data,
        });
    }
        
}
export const deleteTask = (department_id,employeeId,taskId) => async(dispatch)=>{
    if(window.confirm("Are you sure u want to delete this!")){
    const response = await axios.delete(`http://localhost:8095/api/tasks/delete/${department_id}/${employeeId}/${taskId}`);
    window.location.href=`/taskList/${department_id}/${employeeId}`;
    dispatch({
        type: DELETE_TASK,
        payload: response.data,
      })};
};