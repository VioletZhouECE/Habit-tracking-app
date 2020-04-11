import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

function sidebarCollapse() {
    return (
        <nav id="sidebar_collapse" className = "pl-3 pt-2" style = {{maxWidth:"60px", minWidth:"60px"}}>
            <div className="sidebar-header">
                <h3>VZ</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Time</p>
                <li className="active">
                    <Link to='/create_a_plan'><i className="fas fa-plus-circle fa-2x"></i></Link>
                </li>
                <li id = "nav_work_flow" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-tasks"></i></a>
                </li>
                <li id = "nav_statistics" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-calendar-minus"></i></a>
                </li>
                <li id = "nav_create_plans" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-user-circle"></i></a>
                </li>
                <li id = "nav_achievements" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-comment"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default sidebarCollapse;