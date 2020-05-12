import React from "react";
import ReactDOM from "react-dom";

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
                        <div class="form-group py-4">
                            <label for="username">Username:</label>
                            <input id="username" type="username" class="form-control" placeholder="Enter username"></input>
                        </div>
                        <div class="form-group pb-5">
                            <label for="userpassword">Password:</label>
                            <small id="userpassword" class="form-text text-muted">Password has to be 6-12 characters long.</small>
                            <input type="password" class="form-control" placeholder="Password"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;