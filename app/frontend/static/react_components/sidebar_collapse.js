import React from "react";
import ReactDOM from "react-dom";

function sidebarCollapse() {
    return (
        <nav id="sidebar" className = "pl-3 pt-2" style = {{maxWidth:"60px", minWidth:"60px", height:"100%"}}>
            <div className="sidebar-header">
                <h3>VZ</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Time</p>
                <li className="active">
                    <a href = "#"><i className="fas fa-plus-circle fa-2x"></i></a>
                </li>
                <li id = "nav_work_flow" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-tasks"></i></a>
                </li>
                <li id = "nav_statistics" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-chart-line"></i></a>
                </li>
                <li id = "nav_create_plans" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-edit"></i></a>
                </li>
                <li id = "nav_achievements" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-trophy"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default sidebarCollapse;