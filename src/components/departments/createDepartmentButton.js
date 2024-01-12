import React from "react";
import { Link } from "react-router-dom";
function CreateButtonDepartment(){
    return(
        <>
        <div className="container">
            <Link to="/createDepartmentForm" className="btn btn-primary">
                Creat Department
            </Link>
            <br></br>
            <br></br>
        </div>
        </>
    );
}
export default CreateButtonDepartment;