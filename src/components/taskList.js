import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../actions/taskAction";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Task from "./tasks/task";
import { useParams } from "react-router-dom";
function TaskList (){
    const dispatch=useDispatch();
    const {departmentId, employeeId}=useParams();
    useEffect(()=>{
        dispatch(getTasks(departmentId,employeeId));
    },[]);   
    const taskList= useSelector((state) => state.taskReducerContent.tasks);

    let inputQueue= [];
    let inProgress=[];
    let done=[];

    for(const task of taskList){
        if(task.status === "Input Queue"){
        inputQueue.push(task);}
        else if(task.status ==="In Progress"){
            inProgress.push(task);
        }
        else if(task.status === "Done"){
            done.push(task);
        }
    }
    return(

        <div className="container">
            <Link to={`/addTask/${departmentId}/${employeeId}`}
            className="btn btn-primary">Create Task</Link>
            <hr></hr>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-header bg-secondary text-white">
                            <h3>INPUT QUEUE</h3>
                        </div>
                        <div className="card-body">
                            {inputQueue.map((task)=>(<Task key={task.id} departmentId={departmentId}
                                employeeId={employeeId} task={task}/>))}
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-header bg-primary text-white">
                            <h3>IN PROGRESS</h3>
                        </div>
                        <div className="card-body">
                            {inProgress.map((task)=>(<Task key={task.id} departmentId={departmentId}
                                employeeId={employeeId} task={task}/>))}
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-header bg-success text-white">
                            <h3>DONE</h3>
                        </div>
                        <div className="card-body">
                            {done.map((task)=>(<Task key={task.id} departmentId={departmentId}
                                employeeId={employeeId} task={task}/>))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TaskList;