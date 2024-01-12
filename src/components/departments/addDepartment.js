import React from "react";  
import { useState } from "react";
import { createDepartment } from "../../actions/departmentActions";
import { useDispatch, useSelector } from "react-redux";

function AddDepartment(){
    const dispatch=useDispatch();
    const [name,setName]=useState();
    const errors = useSelector((state) => state.errorReducerContent)

    const onChange = (e) =>{
        setName(e.target.value)
    }
    const onSubmit= (e)=>{
        e.preventDefault();
        const newDepartment={name}
        dispatch(createDepartment(newDepartment))
    }
    return(
        <>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="text-center">Creat Department Form</h5>
                    <hr/>
                    <form onSubmit={onSubmit}> 
                        <div className="form-group">
                            <input type="text" 
                            className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""}`} 
                            placeholder="Department Name"
                             name="name"
                             onChange={onChange}
                             required
                             >
                            </input>
                            {

                                errors.name && (
                                    <p className="invalid-feedback">
                                        {errors.name}
                                    </p>
                                )
                            }
                        </div>
                        <input type="submit"
                         className="btn btn-primary btn-block mt-4">
                            
                        </input>
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddDepartment;