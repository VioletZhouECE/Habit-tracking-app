import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

class PlanEdit extends React.Component{
    constructor(props){
        super(props);
        //hold validation states
    }

    render(){
        return this.props.isEditing?(
            <div>
                <div>Plan Edit</div>
                {this.props.selectedPost? null : <Link to='/plans'><button type = "button" className = "btn-primary view-button">Close</button></Link>}
            </div>
        ) : null
    }
}

export default PlanEdit;