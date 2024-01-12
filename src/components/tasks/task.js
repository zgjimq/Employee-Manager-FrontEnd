import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/taskAction";
function Task (props){
    const {task} = props;
    const departmentId=props.departmentId;
    const employeeId=props.employeeId;
    let priorityAsString;
    let headerClassName;
    const dispatch=useDispatch();
    const onDeleteTask = (departmentId,employeeId,taskId)=>{
        dispatch(deleteTask(departmentId,employeeId,taskId));
    }

    if(task.priority === 1){
        headerClassName="bg-danger text-light";
        priorityAsString="HIGH"
    }
    if(task.priority === 2){
        headerClassName="bg-warning text-light";
        priorityAsString="MEDIUM"
    }
    if(task.priority === 3){
        headerClassName="bg-info text-light";
        priorityAsString="LOW"
    }
    

    return (
        <div className="card mb-4 bg-light">
            <div className={`card-header text-primary ${headerClassName}`}>
                <h3>ID: {task.id} -- Priority: {priorityAsString}</h3>
            </div>
            <div className="card-body">
                <p>
                   Description: {task.description}
                    

                </p><p>
                  
                   Acceptance Criteria: {task.acceptanceCriteria}

                </p>
                <Link to={`/updateTask/${departmentId}/${employeeId}/${task.id}`} className="btn btn-primary">
                    Update
                </Link>
                <Link to="#" className="btn btn-danger" onClick={()=> onDeleteTask(departmentId,employeeId,task.id)}>
                    Delete
                </Link>
            </div>
        </div>
    );
}
export default Task;