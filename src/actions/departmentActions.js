import { GET_DEPARTMENTS , CREATE_DEPARTMENT, GET_ERRORS,GET_DEPARTMENT, DELETE_DEPARTMENT} from "./type";

import axios from "axios";

export const createDepartment = (department) =>async(dispatch)=>{
    try{
        await axios.post("http://localhost:8095/api/departaments",department);
        window.location.href= "/";
        dispatch({
            type:CREATE_DEPARTMENT,     
            payload: department,
        });
    }catch(error){
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data,
        });
    }
};

export const getDepartments = () =>async(dispatch)=>{
    try {
        const response =await axios.get("http://localhost:8095/api/departaments/getAll");
        dispatch({
            type:GET_DEPARTMENTS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data,
        });
    }
};

export const getDepartment = (id) => async(dispatch)=>{
    try {
        
        const response = await axios.get(`http://localhost:8095/api/departaments/getDepartment/${id}`);
        dispatch({
            type : GET_DEPARTMENT,
            payload: response.data,
        });
        
    } catch (error) {
        dispatch({
            type : GET_ERRORS,
            payload: error.response.data,
        });
    }
}

export const deleteDepartment = (id) => async(dispatch)=>{
       
            if(window.confirm("Do you want to delete")){
            await axios.delete(`http://localhost:8095/api/departaments/delete/${id}`)
            window.location.href= `/`;
            dispatch({
                type : DELETE_DEPARTMENT,
                payload: id,
            })};
        
};