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
            token: null,
            collapse : false,
            error: null
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleClick(){
        this.setState( prevState => ({collapse : prevState.collapse? false: true}))
    }

    handleSignup(data){
      fetch('/auth/signup', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password
        })
      })
      .then(res => {
        if (res.status === 400) {
            throw new Error('Please enter a valid username (2-10 characters long) and a valid password (6-12 characters long)');
        }
        if (res.status === 422) {
          throw new Error("An user with this username already exists, please choose another username!");
        }
        if (res.status !== 200 && res.status !== 201) {
            throw new Error ("Create user failed due to an issue on the server, please try again later");
        }
        return res.json();
      })
      .then(resData => {
        //direct user to the home page
        this.setState({ isAuth: true,
                        userId: resData.userId,
                        token : resData.token});
        this.props.history.replace('/');
      })
      .catch(err => {
        //display error message
        console.log(err);
        this.setState({
          isAuth: false,
          error: err
        });
      });
  };

  handleLogin(data){
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    })
    .then(res => {
      if (res.status === 401) {
          throw new Error('Wrong username or password');
      }
      if (res.status !== 200 && res.status !== 201) {
          throw new Error ("Create user failed due to an issue on the server, please try again later");
      }
      return res.json();
    })
    .then(resData => {
      console.log(resData);
      //direct user to the home page
      this.setState({isAuth: true,
                     userId: resData.userId,
                     token : resData.token});
    })
    .catch(err => {
      //display error message
      console.log(err);
      this.setState({
        isAuth: false,
        error: err
      });
    });   
  }

    render(){
        var handleLogin = this.handleLogin;
        var handleSignup = this.handleSignup;
        return !this.state.isAuth ? (
            <Switch>
                <Route path = "/signup" render = {(props) => <Signup handleSumbitForm = {handleSignup}></Signup>}></Route>
                <Route path = "/" render = {(props) => <Login handleSumbitForm = {handleLogin}></Login>}></Route>
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