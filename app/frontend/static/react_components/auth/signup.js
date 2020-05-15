import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

class Signup extends React.Component{
    constructor(props){
        super(props);
        //hold validation states

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //client side validation
    handleSubmit(e){
        
        // Fetch form to apply custom Bootstrap validation
        var form = $('#form-validation');

        if (form[0].checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }

        //if validation fails, show error messages 
        form.addClass('was-validated');
    }

    render(){
        return (
        <div className='login-background'>
            <div className='login-container container-border pt-4'>
                <div className='container-center'>
                    <div className='text-center'>
                        <h2>Signup</h2>
                    </div>
                    <form id="form-validation" onSubmit={e=>this.handleSubmit(e)} noValidate>
                        <div className="form-group py-4">
                            <label for="username">Username:</label>
                            <input id="username" className="form-control" placeholder="Enter username" required minLength="2" maxLength="10"></input>
                            <div class="invalid-feedback">
                                A valid username (2-10 characters long) is required
                            </div>
                        </div>
                        <div class="form-group pb-4">
                            <label for="userpassword">Password:</label>
                            <input type="password" className="form-control" placeholder="Password" required minLength="6" maxLength="12"></input>
                            <div class="invalid-feedback">
                                A valid password (6-12 characters long) is required
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Sign me up!</button>
                        </div>
                    </form>
                        <div className="d-flex justify-content-center pt-4">
                            <p className="pr-2">Do not have an account?</p>
                            <Link to="/">Login</Link>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Signup;