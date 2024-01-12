import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../actions/employeeActions";
function AddEmployee(){
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.errorReducerContent)
    const {departmentId} = useParams(); 
    const [employee, setEmployee] = useState({
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        
    });

    const onChange = (event) =>{
        const{name, value}= event.target;
        setEmployee((prevEmployeeData) => ({
            ...prevEmployeeData,
            [name] : value,
        }))
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(validateForm()){

        
       const newEmployee = {
        name : employee.name,
        address:employee.address,
        email:employee.email,
        phoneNumber:employee.phoneNumber,
       };
       dispatch(createEmployee(departmentId,newEmployee))
      //department_id, employee
    }
    }

    const [validationErrors, setValidationErrors]= useState({});

    const validateForm = ()=>{
        let errors = {};
        let isValid=true;
        if(!employee.name){
            errors.name = "Name is required. via frontEnd"
            isValid=false;
        }
        if(!employee.address){
            errors.address = "Address is required. via frontEnd"
            isValid=false;
        }
        
        setValidationErrors(errors);
        return isValid;
    }
    
    return(
        <div className="row">
            <div className="col-md-8 m-auto">
                <h1 className="text-center">Create Employee Form</h1>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <input type="text"
                    className={`form-control form-control-lg mt-4 ${validationErrors.name || errors.name ? "is-invalid" : ""}`}
                    placeholder="Employee Name"
                    name="name"
                    value={employee.name}
                    onChange={onChange}
                    //required
                >
                
                </input>
                {
                    validationErrors.name &&( <p className="invalid-feedback">
                    {validationErrors.name}
                </p>)
                }
                {
                    errors.name && (<p className="invalid-feedback">
                    {errors.name}
                </p>)
                }   
                
                <input type="text"
                    className={`form-control form-control-lg mt-4 ${validationErrors.address || errors.address ? "is-invalid" : ""}`}
                    placeholder="Employee Adress"
                    name="address"
                    value={employee.address}
                    onChange={onChange}
                    //required
                >
                </input>
                {
                    validationErrors.address && (<p className="invalid-feedback">
                    {validationErrors.address}
                   
                </p>)
                }
                 {
                    errors.address &&( <p className="invalid-feedback">
                    {errors.address}
                </p>)
                } 
                
                <input type="email"
                    className={`form-control form-control-lg mt-4 ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Employee Email"
                    name="email"
                    value={employee.email}
                    onChange={onChange}
                    required
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
                    value={employee.phoneNumber}
                    onChange={onChange}
                    required
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

export default AddEmployee;