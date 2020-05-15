import React from "react";
import CategorySection from "./today/category_section";
import {Route, Switch} from "react-router-dom";
import Sidebar from "./today/sidebar";
import Plans from "./plans/plans";
import SinglePlan from "./plans/plan_detail";
import CreatePlan from "./plans/create_plan";
import Login from "./auth/login";
import Signup from "./auth/signup";

class MainPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isAuth: false,
            userId: null,
            jwtoken: null,
            collapse : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState( prevState => ({collapse : prevState.collapse? false: true}))
    }

    handleLogin(data){
        
    }

    render(){
        return !this.state.isAuth ? (
            <Switch>
                <Route path = "/signup" component={Signup}></Route>
                <Route path = "/" component={Login}></Route>
            </Switch>
        ) : (
        <div class="wrapper d-flex">
            <div id = "success_message" className = "alert alert-success">
                The entry has been successfully created !
            </div>
            <Sidebar collapse={this.state.collapse}></Sidebar>
            <div className = "container-fluid">
                <a href = "#" onClick={this.handleClick}><i id = "hamburger-menu" class="fas fa-bars fa-1x pt-2"></i></a>
                <div id="main_container" class="mt-4">
                <Switch>
                    <Route path = '/plan/:planid' component = {SinglePlan}></Route>
                    <Route path= '/plans' component = {Plans}></Route>
                    <Route path= '/create_plan' component = {CreatePlan}></Route>
                    <Route path= '/' component={CategorySection}></Route>
                </Switch>
                </div>
            </div>
        </div>
        )
    }
}

export default MainPage;