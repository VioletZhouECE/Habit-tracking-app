import React from "react";
import ReactDOM from "react-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Time extends React.Component{
    constructor(props){
        super(props)

        //the child element should not keep its own state
        this.state = {
            display: "InitialFormControl"
        }
        this.onSelectUnit = this.onSelectUnit.bind(this);
    }

    onSelectUnit(e){
        //call parent function passed in props
        this.props.onSelectUnit()
        //attempt to reset value for form control...
        console.log(`updated value is ${this.props.value}`)
        //this.formControlRef.current.value = this.props.value 
        //the above line is invalid because we cannot access the value attribute of form control component. It is protected
        //display UpdatedFormControl
        //a problem: this will always display UpdatedFormControl as long as the element is not destroyed, not even when you refresh the page
        //solution: force render the component when refreshing the page
        this.setState({display : "UpdatedFormControl"})
    }

    render(){
        return(
            <InputGroup id = "time-inputgroup" className = "align-items-center">
                <p className = "float-left pr-2 pt-3">Today, I</p>
                <p className = "float-left pr-2 pt-3" style = {{color: this.props.icon_selected["color"]}}>
                {this.props.icon_selected["description"]}</p> 
                <p className = "float-left pr-2 pt-3">for</p>
                <FormControl 
                value = {this.props.value} 
                onClick = {(e) => this.props.onSelectTime(e.target.value)}
                onChange = {(e) => this.props.onSelectTime(e.target.value)}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                ></FormControl>
                <InputGroup.Append>
                    <InputGroup.Text id="basicm-addon2" onClick = {this.onSelectUnit} >{this.props.unit}</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

export default Time