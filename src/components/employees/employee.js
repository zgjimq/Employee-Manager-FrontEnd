import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../actions/employeeActions";
function Employee(props){
    //object : {id, name, address, email, phoneNumber}
    const {employee} = props;
    //departmentId : 2
    const departmentId=props.department_id;
    const dispatch=useDispatch();
    const onClickDeleteEmployee = (departmentId, employeeId) =>{
        dispatch(deleteEmployee(departmentId,employeeId));
    }
    return (
        <div className="container"> 
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-8">
                        <h5>{employee.name}</h5>
                        <h5>{employee.address}</h5>
                        <h5>{employee.email}</h5>
                        <h5>{employee.phoneNumber}</h5>
                    </div>
                    
                    <div className="col-md-4">
                        <ul className="list-group">
                            <Link to={`/taskList/${departmentId}/${employee.id}`}>
                                <li className="list-group-item update">
                                <i className="fa fa-edit pr-1"> Employee Board</i>
                                </li>
                            </Link>

                            <Link to={`/updateEmployeeForm/${departmentId}/${employee.id}`}>
                                <li className="list-group-item update">
                                <i className="fa fa-edit pr-1"> Update employee</i>
                                </li> 
                            </Link>

                            <Link to="" onClick={()=>onClickDeleteEmployee(departmentId,employee.id)}>
                                <li className="list-group-item delete">
                                 Delete employee
                                </li>
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Employee;