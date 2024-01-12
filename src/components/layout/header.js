import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-primary mb-4">
                <div className="container">
                <Link className="navbar-brand" to="/">
                    Employee Management Appp
                </Link>
                </div>
            </nav>
        </div>
    );
}
export default Header;