import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

class Plan extends React.Component{
    constructor(props){
        super(props);
        //hold validation states
    }

    render(){
        return(
        <div>
            <h3>{this.props.plan.title}</h3>
            <h3>{this.props.plan.category}</h3>
            <h3>{this.props.plan.description}</h3>
            <h3>{this.props.plan.completed}</h3>
            <h3>{this.props.plan.status}</h3>
            <Link to={`/plan/${this.props.plan.planId}`}><button type = "button" className = "btn-primary view-button">View</button></Link>
            <button type = "button" className = "btn-primary edit-button" onClick = {()=>this.props.onEdit(this.props.plan.planId)}>Edit</button>
            <button type = "button" className = "btn-primary delete-button" onClick = {()=>this.props.onDelete(this.props.plan.planId)}>Delete</button>
        </div>)
    }
}

export default Plan;