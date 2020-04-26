import React from "react";
import ReactDOM from "react-dom";

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