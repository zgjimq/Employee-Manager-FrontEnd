
import React, {useEffect} from "react";
import Department from "./departments/department";
import CreateButtonDepartment from "./departments/createDepartmentButton";
import {getDepartments } from "../actions/departmentActions";
import {useSelector,useDispatch} from "react-redux";

function Departments(){
    const dispatch = useDispatch();
    const departmentList=useSelector(
        (state) =>state.departmentReducerContent.departments
    );
        useEffect(
            () =>{
                    dispatch(getDepartments());  
            },[dispatch]
        );

        return (
            <div className="container">
                <CreateButtonDepartment/>  
                {   departmentList.map((department)=>(
                    <Department key={department.id} department={department}/>
                ))
                }
            </div>
        );
}   

export default Departments;