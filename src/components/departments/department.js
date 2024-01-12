import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDepartment } from "../../actions/departmentActions";
function Department(props){
    const dispatch=useDispatch();
    const {department}=props;
    const onDelete = (id) =>{
        dispatch(deleteDepartment(id));
    }

    return(
        <>
            <div className="container">
                
                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-9">
                        {" "}
                       <h1>{department.id}</h1>
                       <h1>{department.name}</h1>
                        </div>
                    <div className="col-md-3">
                        <ul className="list-group list-group-flush">
                            <Link to={`/employeeList/${department.id}`} className="list-group-item">
                                {" "}
                                Department board
                                </Link>
                            <Link to={`/updateDepartment/${department.id}`} className="list-group-item">
                            {" "}
                                Update Department
                                </Link>
                            <Link to="" onClick={() => onDelete(department.id)} className="list-group-item">
                            {" "}
                                Delete Department
                                </Link>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            </div>
        </>
    );
}
export default Department;
