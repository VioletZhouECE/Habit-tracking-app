import React from "react";
import ReactDOM from "react-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Duration extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <InputGroup style = {{width:'50%'}} id = "time-inputgroup" className = "align-items-center">
                <FormControl 
                value = {this.props.value} 
                onClick = {(e) => this.props.onChangeDuration(e.target.value)}
                onChange = {(e) => this.props.onChangeDuration(e.target.value)}
                aria-label="habit's duration"
                aria-describedby="basic-addon2"
                ></FormControl>
                <InputGroup.Append>
                    <InputGroup.Text id="basicm-addon2" onClick = {this.props.onSelectUnit} >{this.props.unit}</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

export default Duration;