import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

//map icon description to font awesome icons 
const category_icon_map = {
    "productive": ["briefcase", "black"],
    "healthy" : ["universal-access", "green"],
    "knowledgeable" : ["book", "blue"],
    "beautiful" : ["female", "pink"],
    "relaxable" : ["coffee", "brown"],
    "social" : ["users", "orange"],
}

class Plan extends React.Component{
    constructor(props){
        super(props);
        //hold validation states
    }

    render(){
        return(
        <div className= "d-flex">
            <div className = "plan-icon col-sm-3 col-md-2 col-lg-2">
                <span><i className = {"fas fa-" + category_icon_map["productive"][0] + " fa-5x"} style = {{color: "green"}}></i></span>
            </div>
            <div className = "plan-description">
            <div className = "d-flex flex-row">
                <h4>{this.props.plan.title}</h4>
                <span><i className = {"fa fa-" + category_icon_map[this.props.plan.category][0] + " fa-lg"} style = {{color: category_icon_map[this.props.plan.category][1]}}></i></span>
            </div>
            <h5 style = {{color: "#484848"}}>{"\"" + this.props.plan.description + "\""}</h5>
            <div className = 'd-flex flex-row'>
                <h5>{"completed: " + this.props.plan.completed}</h5>
                <h5 className = "pl-5">{this.props.plan.status}</h5>
            </div>
            <Link to={`/plan/${this.props.plan.planId}`}><button type = "button" className = "btn-primary view-button">View</button></Link>
            <button type = "button" className = "btn-primary edit-button" onClick = {()=>this.props.onEdit(this.props.plan.planId)}>Edit</button>
            <button type = "button" className = "btn-primary delete-button" onClick = {()=>this.props.onDelete(this.props.plan.planId)}>Delete</button>
            </div>
        </div>)
    }
}

export default Plan;