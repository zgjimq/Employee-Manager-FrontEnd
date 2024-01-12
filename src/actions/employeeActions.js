import { GET_EMPLOYEES,GET_EMPLOYEE,DELETE_EMPLOYEE,CREATE_EMPLOYEE,GET_ERRORS } from "./type";
//mundeson thirrjen prej backend
import axios from "axios";

export const getEmployeeList = (id) => async(dispatch) =>{
    
try {
    const response = await axios.get(`http://localhost:8095/api/employees/getAll/${id}`);
    dispatch({
        type: GET_EMPLOYEES,
        payload:response.data,
    });
} catch (error) {
    dispatch({
        type: GET_ERRORS,
        payload:error.response.data,
    });
}
    
};

export const createEmployee = (department_id, employee) => async(dispatch) =>{
    try {
        const response = await axios.post(`http://localhost:8095/api/employees/${department_id}`,employee);
        window.location.href=`/employeeList/${department_id}`;
        dispatch({
            type: CREATE_EMPLOYEE,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data,
        });
    }
};

export const getEmployee = (department_id,employee_id) => async(dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:8095/api/employees/get/${department_id}/${employee_id}`);
        dispatch({
            type:GET_EMPLOYEE,
            payload:response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data,
        });
    }
};

export const deleteEmployee = (department_id,employee_id) => async(dispatch)=>{
    if(window.confirm("Are you sure u want to delete this!")){
       const response = await axios.delete(`http://localhost:8095/api/employees/delete/${department_id}/${employee_id}`);
       window.location.href=`/employeeList/${department_id}`;
       dispatch({
            type:DELETE_EMPLOYEE,
            payload: response.data,
       });
    }
};
