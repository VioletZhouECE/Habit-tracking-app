import React from "react";
import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom'

class sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mouseOver: false
        }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseOver(){
        this.setState({mouseOver : true})
    }

    handleMouseLeave(){
        this.setState({mouseOver : false})
    }

    render(){
        return (
        <nav id="sidebar" className = {this.props.collapse? "pl-3 width-collapse pt-2":"pl-3 width-expand pt-2"}>
            <div className="sidebar-header">
                <h3>{this.props.collapse? "VZ" : "Violet Zhou"}</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Time</p>
                <li className="active">
                    <Link to='/create_plan'><i className= {this.state.mouseOver? "fas fa-plus-circle fa-3x" : "fas fa-plus-circle fa-2x"} style = {{color : this.state.mouseOver? "tomato" : "orange"}} onMouseOver = {this.handleMouseOver} onMouseLeave = {this.handleMouseLeave}></i></Link>
                </li>
                <li id = "nav_plans" className = "mt-2">
                    <Link to="/plans"><a href = "#"><i className="fas fa-tasks"></i></a><a href = "#" className = "pl-3 pl-0 ml-0" style = {{display: this.props.collapse? "none" : "inline"}}>Plans</a></Link>
                </li>
                <li id = "nav_today" className = "mt-2">
                    <a href = "#" onClick={()=>{history.replace('/')}}><i class="fas fa-calendar-minus"></i></a><a href = "#" onClick={()=>{this.props.history.replace('/')}} className = "pl-3" style = {{display: this.props.collapse? "none" : "inline"}}>Today</a>
                </li>
                <li id = "nav_community" className = "mt-2">
                    <a href = "#"><i className ="fas fa-comment"></i></a><a href = "#" className= "pl-3" style = {{display: this.props.collapse? "none" : "inline"}}>Community</a>
                </li>
                <li id = "nav_logout" className = "mt-2">
                    <a href = "#" onClick={this.props.handleLogout}><i class="fas fa-sign-out-alt"></i></a><a href = "#" onClick={this.props.handleLogout} className= "pl-3" style = {{display: this.props.collapse? "none" : "inline"}}>Logout</a>
                </li>
            </ul>
        </nav>
        )
    }
}
export default withRouter(sidebar);