import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createTask } from "../../actions/taskAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function AddTask(){
   // const departmentId=useParams.departmentId; 
    // nese department id eshte i njejt si tek route tek apps athere nuk ka nevoj per useparams.departmentid
    // por vetem :

    //{} --> transforme from text - to JS object 
    const {departmentId}=useParams();
    const {employeeId}=useParams();
    const dispatch=useDispatch();
    const errors = useSelector((state) => state.errorReducerContent)

    const[taskData, setTaskData]= useState({
        description: "",
        acceptanceCriteria: "",
        status:"Input Queue", 
        priority: 0
    })

    const onChange= (event)=>{
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value
        });
    }
    const onSubmit= (event)=>{
        event.preventDefault();
        const newTask={
            description:taskData.description,
            acceptanceCriteria:taskData.acceptanceCriteria,
            status:taskData.status,
            priority:taskData.priority,
        };
        dispatch(createTask(departmentId,employeeId,newTask));
    }
    return (
        <div className="container">
            <div className="col-md-10 m-auto">
                <h2 className="text-center"> Create New Task</h2>
                <form className="form-group" onSubmit={onSubmit}>
                    <input type="text" 
                    className={`form-control form-control-lg mb-3 ${errors.description ? "is-invalid" :""}`}
                    placeholder="Task description"
                    name="description"
                    value={taskData.description}
                    onChange={onChange}
                    >
                    </input>
                    {
                    errors.description && (<p className="invalid-feedback">
                    {errors.description}
                </p>)
                }
                    
                    <input type="text" 
                    className={`form-control form-control-lg mb-3 ${errors.acceptanceCriteria ? "is-invalid" :""}`}
                    placeholder="Task acceptance criteria"
                    name="acceptanceCriteria"
                    value={taskData.acceptanceCriteria}
                    onChange={onChange}
                    >
                    </input>
                    {
                    errors.acceptanceCriteria && (<p className="invalid-feedback">
                    {errors.acceptanceCriteria}
                </p>)
                }
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

            
                     <input type="submit" 
                    className="btn btn-primary">
                    
                    </input>
                </form>
            </div>
        </div>
    );
}

export default AddTask; 