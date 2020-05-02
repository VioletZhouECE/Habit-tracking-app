import React from "react";
import ReactDOM from "react-dom";

const category_icon_map = {
    "productive": "briefcase",
    "healthy" : "universal-access",
    "knowledgeable" : "book",
    "beautiful" : "female",
    "relaxable" : "coffee",
    "social" : "users"
}

class SinglePlan extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            //need to extract part of the url 
            <div>Plan detail of plan {this.props.planId}</div>
        )
    }
}

export default SinglePlan;