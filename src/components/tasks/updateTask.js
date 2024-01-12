import React, { useEffect } from "react";
import { getTask, createTask } from "../../actions/taskAction";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom"; 
import { useState } from "react";
function UpdateTask(){
    const dispatch=useDispatch();
    const {departmentId,employeeId,taskId}=useParams();
    const task=useSelector((state)=> state.taskReducerContent.task);
    const errors= useSelector((state)=> state.errorReducerContent); 
    const[taskData, setTaskData]= useState({
        description: "",
        acceptanceCriteria: "",
        status: "",
        priority: 0
    });
    useEffect(()=> {dispatch(getTask(departmentId,employeeId,taskId))},[]);

    useEffect(() => {
        setTaskData((prevState)=>({
            
            ...prevState,
            id:taskId,
            description:task.description,
            acceptanceCriteria:task.acceptanceCriteria,
            status:task.status,
            priority:task.priority
        }))
    },[task, taskId]);

    const onSubmit = (event) =>{
        event.preventDefault();
        const newTask={
            id:taskId,
            description:taskData.description,
            acceptanceCriteria:taskData.acceptanceCriteria,
            status:taskData.status,
            priority:taskData.priority,
        };
        dispatch(createTask(departmentId,employeeId,newTask));
    }
  /*  const onChange = (event) =>{
        setTaskData((prevState) =({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }*/
    const onChange = (event) =>{
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value
        })
    }
    return(
        <div className="container">
            <div className="col-md-8 m-auto">
                <h2 className="display-4 text-center">Update Task</h2>
            <form className="form-group text-center" onSubmit={onSubmit}>
                <input
                type="text"
                className={`form-control mb-3 ${errors.description ? "is-invalid" :""}`}
                name="description"
                placeholder="Task Description"
                onChange={onChange}
                value={taskData.description}
                >
                </input>

                <input
                type="text"
                className={`form-control mb-3 ${errors.acceptanceCriteria ? "is-invalid" :""}`}
                name="acceptanceCriteria"
                placeholder="Task acceptanceCriteria"
                onChange={onChange}
                value={taskData.acceptanceCriteria}
                >
                </input>
                <select className={`form-control form-control-lg mb-3 ${errors.priority ? "is-invalid":""}`}
                    name="priority"
                    value={taskData.priority}
                    onChange={onChange}
                    >
                        <option value={0}>Select a priority</option>
                        <option value={1}>High</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Low</option>
                    </select>
                    {
                    errors.priority && (<p className="invalid-feedback">
                    {errors.priority}
                </p>)
                }

                <select className={`form-control form-control-lg mb-3 ${errors.status ? "is-invalid":""}`}
                name="status"
                value={taskData.status}
                onChange={onChange}
                >
                    <option value="Input Queue">Input Queue</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>

                </select>

                <input className="btn btn-primary mt-4" type="submit"></input>

            </form>
            </div>
        </div>
    );
}

export default UpdateTask;