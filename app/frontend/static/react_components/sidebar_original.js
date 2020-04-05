import React from "react";
import ReactDOM from "react-dom";

function sidebarOriginal() {
    return (
        <nav id="sidebar" className = "pl-3 sidebar-width pt-2">
            <div className="sidebar-header">
                <h3>Violet Zhou</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Time</p>
                <li className="active">
                    <a href = "#"><i className="fas fa-plus-circle fa-2x"></i></a>
                </li>
                <li id = "nav_work_flow" className = "mt-2">
                    <a href = "#"><i className="fas fa-tasks"></i></a><a href = "#" className = "pl-3">Plans</a>
                </li>
                <li id = "nav_statistics" className = "mt-2">
                    <a href = "#"><i class="fas fa-calendar-minus"></i></a><a href = "#" className = "pl-3">Today</a>
                </li>
                <li id = "nav_create_plans" className= "mt-2">
                    <a href = "#"><i className="fas fa-user-circle"></i></a><a href = "#" className = "pl-3">Me</a>
                </li>
                <li id = "nav_achievements" className = "mt-2">
                    <a href = "#"><i className ="fas fa-comment"></i></a><a href = "#" className= "pl-3">Community</a>
                </li>
            </ul>
        </nav>
    )
}

export default sidebarOriginal;