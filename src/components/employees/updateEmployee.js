import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getEmployee, createEmployee } from "../../actions/employeeActions";

function UpdateDepartment(){
 const {departmentId}=useParams();
 const {employeeId}=useParams();
 const dispatch=useDispatch();
 const errors= useSelector((state) => state.errorReducerContent);
 const employee = useSelector((state) =>state.employeeReducerContent.employee);

 const [employeeData, setEmployeeData] = useState({
    id: "",
    name: "",
    address:"",
    email:"",
    phoneNumber:"",
 });

 useEffect(() =>{
    dispatch(getEmployee(departmentId, employeeId));
 },[]);

 useEffect(() => {
    setEmployeeData((prevEmployeeData) =>({
        ...prevEmployeeData,
         id:employee.id,
         name:employee.name,
         address:employee.address,
         email:employee.email,
         phoneNumber:employee.phoneNumber,
    }));
 },[employee]);

 const onChange = (event)=>{
    const{name, value}= event.target;
    setEmployeeData((prevEmployeeData) => ({
        ...prevEmployeeData,
        [name] : value,
    }))
 }

 const onSubmit = (event)=>{
    event.preventDefault();
    const updateEmployeeObject = {
        id: employeeData.id,
        name: employeeData.name,
        address:employeeData.address,
        email:employeeData.email,
        phoneNumber:employeeData.phoneNumber,
    }
    dispatch(createEmployee(departmentId,updateEmployeeObject))
 }

 return(
    <div className="row">
        <div className="col-md-8 m-auto">
            <h1 className="text-center">Create Employee Form</h1>
        <hr></hr>
        <form onSubmit={onSubmit}>
        <input type="text"
                className={`form-control form-control-lg mt-4 ${ errors.id ? "is-invalid" : ""}`}
                placeholder="Employee Id"
                name="id"
                value={employeeData.id}
                onChange={onChange}
                //required
                disabled
            >
            
            </input>
            <input type="text"
                className={`form-control form-control-lg mt-4 ${ errors.name ? "is-invalid" : ""}`}
                placeholder="Employee Name"
                name="name"
                value={employeeData.name}
                onChange={onChange}
                //required
            >
            
            </input>
            
            {
                errors.name && (<p className="invalid-feedback">
                {errors.name}
            </p>)
            }   
            
            <input type="text"
                className={`form-control form-control-lg mt-4 ${ errors.address ? "is-invalid" : ""}`}
                placeholder="Employee Adress"
                name="address"
                value={employeeData.address}
                onChange={onChange}
                //required
            >
            </input>
            
             {
                errors.address &&( <p className="invalid-feedback">
                {errors.address}
            </p>)
            } 
            
            <input type="email"
                className={`form-control form-control-lg mt-4 ${errors.email ? "is-invalid" : ""}`}
                placeholder="Employee Email"
                name="email"
                value={employeeData.email}
                onChange={onChange}
                //required
            >
            </input>
            {
                errors.email && (<p className="invalid-feedback">
                {errors.email}
            </p>)
            }
    
            <input type="text"
                className={`form-control form-control-lg mt-4 ${errors.phoneNumber ? "is-invalid" : ""}`}
                placeholder="Employee Phone Number"
                name="phoneNumber"
                value={employeeData.phoneNumber}
                onChange={onChange}
                //required 
            >
            </input>
            {
                 errors.phoneNumber && (
                    <p className="invalid-feedback">
                        {errors.phoneNumber}
                    </p>
                )
            }
            
            <input type="submit" className="btn btn-primary btn-lg">
            </input>
        </form>
        </div>
    </div>
);
}
export default UpdateDepartment;