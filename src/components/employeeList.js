import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEmployeeList } from '../actions/employeeActions';
import Employee from './employees/employee';
function  EmployeeList () {
    const {department_id}=useParams();
    const dispatch=useDispatch();
    const employeeList = useSelector((state) => state.employeeReducerContent.employees);
    //const employeeList = useSelector((state) => state.employeeReducerContent?.employees || []);
    useEffect(
        () => {
            dispatch(getEmployeeList(department_id)); 
        },
        [dispatch]
    );
  return (
    <div className="container">
        <Link to={`/createEmployeeForm/${department_id}`} className="btn btn-primary">Create Employee</Link>
        <hr></hr>
        {employeeList.map((employee) => 
        <Employee department_id={department_id} key={employee.id} employee = {employee}/>
        )}
    </div>
  );
}

export default EmployeeList;