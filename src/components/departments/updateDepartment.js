import React, { useState, useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import { getDepartment,createDepartment } from "../../actions/departmentActions";    
import { useParams } from "react-router-dom";

function UpdateDepartment(){
    const dispatch=useDispatch();
    const {dep_id}= useParams();
    const department= useSelector((state) =>state.departmentReducerContent.department);
    const errors = useSelector((state) => state.errorReducerContent)
   // const[dep_id,setId]=useState();
   //const[name,setName]=useState();

   const[data, setData] = useState(
    {
    id: dep_id,
    name: department.name 
    }
   );   
   // dependecy => []  empty = componentDidMount
   useEffect(()=>{
    dispatch(getDepartment(dep_id));
    setData((initialState)=>({
        ...initialState,
        id: dep_id,
        name: department.name || "",
    }));
   },[dispatch, dep_id,department.name,department.id]);

const onChange = (event)=>{  
    event.preventDefault();
    const{name,value}=event.target
    setData((prevState)=>({
        ...prevState,
        [name]:value
    }))
}

const onSubmit=(event)=>{
    event.preventDefault();
    const updateDepartment={
        id: data.id,
        name:data.name
    }
    dispatch(createDepartment(updateDepartment));
}

    return(
        <>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="text-center">Update Department Form</h5>
                    <hr/>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                        <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Department ID"
                             name="id"
                             value={dep_id}
                             onChange={onChange}
                             disabled
                             
                             >
                            </input>
                            <br></br>
                            <input type="text" 
                            className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""}`} 
                            placeholder="Department Name"
                             name="name"
                             value={data.name}
                             onChange={onChange}
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
                         className="btn btn-primary mt-4">
                        </input>
                    </form>
                </div>
            </div>
        </>
    );
}
export default UpdateDepartment;