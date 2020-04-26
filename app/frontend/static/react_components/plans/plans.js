import React from "react";
import ReactDOM from "react-dom";
import PlanEdit from "./plan_edit";
import Plan from "./plan";

//hard-coded plans for now
const plans = [
    {"planId" : "12345",
    "title" : "learn python",
    "category" : "be productive",
    "icon" : null,
    "description" : "write pythonic code and be a pythonic person",
    "completed" : "10",
    "status" : "outstanding"},

    {"planId" : "12346",
    "title" : "reading",
    "category" : "be knowledgeable",
    "icon" : null,
    "description" : "read more, be smarter",
    "completed" : "3",
    "status" : "unstatisfactory"}
]

class Plans extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            selectedPost: null,
            plans: plans,
            totalPlans: 0
        }

        this.editHandler = this.editHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.finishEditHandler = this.finishEditHandler.bind(this);
        this.cancelEditHandler = this.cancelEditHandler.bind(this);
    }

    editHandler(planId){
        this.setState ({isEditing : true, selectedPost : planId});
    }

    deleteHandler(planId){
        //to be implemented
    }

    finishEditHandler(){
        //do nothing now
    }

    cancelEditHandler(){
        //do nothing now 
    }

    render(){
        const rows = []

        this.state.plans.forEach( plan=> {
            rows.push(<Plan 
            key={plan.planId}
            plan={plan} 
            onEdit={this.editHandler} 
            onDelete={this.deleteHandler}></Plan>)})

        return (
        <div id= "plans-container">
            <PlanEdit isEditing = {this.state.isEditing} 
                    selectedPost = {this.state.selectedPost}
                    finishEditHandler = {this.finishEditHandler}
                    cancelEditHandler = {this.cancelEditHandler}
                    ></PlanEdit>
            <div>{rows}</div>
        </div>
        )
    }
}

export default Plans;