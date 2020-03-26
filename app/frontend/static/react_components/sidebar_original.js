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
                <li id = "nav_work_flow" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-tasks"></i></a><a href = "#" className = "pl-3">Work Flow</a>
                </li>
                <li id = "nav_statistics" className = "mt-2 pl5">
                    <a href = "#"><i className="fas fa-chart-line"></i></a><a href="#stat_submenu" data-toggle="collapse" className="dropdown-toggle pl-3">Statistics</a>
                    <ul className="collapse list-unstyled" id="stat_submenu">
                        <li>
                            <a href="#">By tasks</a>
                        </li>
                        <li>
                            <a href="#">Weekly Summary</a>
                        </li>
                        <li>
                            <a href="#">Monthly Summary</a>
                        </li>
                    </ul>
                </li>
                <li id = "nav_create_plans" className= "mt-2 pl5">
                    <a href = "#"><i className="fas fa-edit"></i></a><a href="#plan_submenu" data-toggle="collapse" className="dropdown-toggle pl-3">Create Plans</a>
                    <ul className = "collapse list-unstyled" id = "plan_submenu">
                        <li>
                            <a href = "#">Saving plan</a>
                        </li>
                        <li>
                            <a href = "#">Expense plan</a>
                        </li>
                    </ul>
                </li>
                <li id = "nav_achievements" className = "mt-2 pl5">
                    <a href = "#"><i className ="fas fa-trophy"></i></a><a href = "#" className= "pl-3 mt-2">Achievements</a>
                </li>
            </ul>
        </nav>
    )
}

export default sidebarOriginal;