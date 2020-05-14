import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);
        //hold validation states
    }

    render(){
        return (
        <div className='login-background'>
            <div className='login-container container-border pt-4'>
                <div className='container-center'>
                    <div className='text-center'>
                        <h2>Login</h2>
                    </div>
                    <form>
                        <div className="form-group py-4">
                            <label for="username">Username:</label>
                            <input id="username" className="form-control" placeholder="Enter username"></input>
                        </div>
                        <div class="form-group pb-4">
                            <label for="userpassword">Password:</label>
                            <input type="password" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Log Me In!</button>
                        </div>
                    </form>
                        <div className="d-flex justify-content-center pt-4">
                            <p className="pr-2">Do not have an account?</p>
                            <Link to="/signup">Sign up</Link>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;