import React from "react";
import ReactDOM from "react-dom";

class PlanEdit extends React.Component{
    constructor(props){
        super(props);
        //hold validation states
    }

    render(){
        return this.props.isEditing?(
            <div>Plan Edit</div>
        ) : null
    }
}

export default PlanEdit;