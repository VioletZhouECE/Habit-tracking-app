import React from "react";
import CategorySection from "./today/category_section";
import {Route, Switch} from "react-router-dom";
import Sidebar from "./today/sidebar";
import Plans from "./plans/plans"
import SinglePlan from "./plans/plan_detail"

class MainPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collapse : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState( prevState => ({collapse : prevState.collapse? false: true}))
    }

    render(){
        return (
        <div class="wrapper d-flex">
            <div id = "success_message" className = "alert alert-success">
                The entry has been successfully created !
            </div>
            <Sidebar collapse={this.state.collapse}></Sidebar>
            <div className = "container-fluid">
                <a href = "#" onClick={this.handleClick}><i id = "hamburger-menu" class="fas fa-bars fa-1x pt-2"></i></a>
                <h5 className = "float-right pr-4 pt-2">Item1</h5>
                <h5 className = "float-right pr-4 pt-2">Item2</h5>
                <h5 className = "float-right pr-4 pt-2">Item3</h5>
                <div id="main_container" class="mt-4">
                <Switch>
                    <Route path = '/plan/:planid' component = {SinglePlan}></Route>
                    <Route path= '/plans' component = {()=> <Plans isEditing= {false} selectedPost={null}/>}></Route>
                    <Route path= '/create_a_plan' render = {(props)=> <Plans isEditing= {true} selectedPost={null}/>}></Route>
                    <Route path= '/' component={CategorySection}></Route>
                </Switch>
                </div>
            </div>
        </div>
        )
    }
}

export default MainPage;